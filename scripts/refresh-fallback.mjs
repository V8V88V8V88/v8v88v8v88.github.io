import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const USER = 'V8V88V8V88';
const root = path.resolve(import.meta.dirname, '..');
const file = path.join(root, 'src/data/projects.ts');
let source = readFileSync(file, 'utf8');

const gh = (...args) => JSON.parse(execFileSync('gh', ['api', ...args], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));

const block = (start, end) => {
  const from = source.indexOf(start);
  if (from === -1) throw new Error(`Missing ${start.trim()} in projects.ts`);
  const to = source.indexOf(end, from + start.length);
  return { from, to, body: source.slice(from + start.length, to) };
};

const listedNames = start => [...block(start, '\n]').body.matchAll(/'([^']+)'/g)].map(m => m[1]);
const hidden = new Set(listedNames('const hiddenRepos = new Set([').map(name => name.toLowerCase()));
const additional = listedNames('const additionalRepos = [');

const FIELDS = 'name description url homepageUrl primaryLanguage { name } stargazerCount isFork isArchived updatedAt';
const owned = gh('graphql', '-f', `query={ user(login: "${USER}") { repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) { nodes { ${FIELDS} } } } }`)
  .data.user.repositories.nodes;

const extra = additional.map(fullName => {
  const [owner, name] = fullName.split('/');
  const repo = gh('graphql', '-f', `query={ repository(owner: "${owner}", name: "${name}") { ${FIELDS} } }`).data.repository;
  const [latest] = gh(`repos/${fullName}/commits?author=${USER}&per_page=1`);
  return { ...repo, updatedAt: latest?.commit.author.date || repo.updatedAt };
});

const repos = [...owned, ...extra]
  .filter(repo => !hidden.has(repo.name.toLowerCase()))
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

const quote = value => value == null ? 'null' : `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const repoLines = repos.map(repo => {
  const fields = [
    `name: ${quote(repo.name)}`,
    `description: ${quote(repo.description?.trim() || null)}`,
    `html_url: ${quote(repo.url)}`,
    ...(repo.homepageUrl ? [`homepage: ${quote(repo.homepageUrl)}`] : []),
    `language: ${quote(repo.primaryLanguage?.name ?? null)}`,
    `stargazers_count: ${repo.stargazerCount}`,
    `fork: ${repo.isFork}`,
    `archived: ${repo.isArchived}`,
  ];
  return `  { ${fields.join(', ')} },`;
});

const dates = block('const fallbackUpdatedAt: Record<string, string> = {\n', '};');
const notes = {};
let pending = [];
for (const line of dates.body.split('\n')) {
  if (line.trim().startsWith('//')) pending.push(line);
  else if (pending.length) {
    const key = line.match(/'([^']+)'/)?.[1];
    if (key) notes[key] = pending;
    pending = [];
  }
}
const dateLines = repos.flatMap(repo => {
  const key = repo.name.toLowerCase();
  return [...(notes[key] || []), `  '${key}': '${repo.updatedAt}',`];
});
source = source.slice(0, dates.from) + 'const fallbackUpdatedAt: Record<string, string> = {\n' + dateLines.join('\n') + '\n' + source.slice(dates.to);

const list = block('const fallbackRepos: GitHubRepo[] = [\n', '].map(repo => ({');
source = source.slice(0, list.from) + 'const fallbackRepos: GitHubRepo[] = [\n' + repoLines.join('\n') + '\n' + source.slice(list.to);

writeFileSync(file, source);
console.log(`Fallback data refreshed: ${repos.length} repos, ${repos.filter(repo => repo.homepageUrl).length} with a homepage.`);
