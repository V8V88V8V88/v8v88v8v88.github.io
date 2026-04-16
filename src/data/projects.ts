const GITHUB_USERNAME = 'V8V88V8V88';

export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  image: string | null;
  stars: number;
  category: string;
  featured: boolean;
  langFilter: string;
}

const featuredPinnedRepos = new Set([
  'indx',
  'Vajra',
]);

const featuredBlockedRepos = new Set([
  'Website',
]);

const MAX_FEATURED_PROJECTS = 12;

const hiddenRepos = new Set([
  'Website',
  'V8V88V8V88',
  '.github',
]);

const additionalRepos = [
  'thefossclub/thefossclub.github.io',
];

const categoryOverrides: Record<string, string> = {
  'thefossclub.github.io': 'Web Applications',
  'Telegram-GTK4-Libadwaita-Theme': 'Themes & Desktop',
  'dotfiles': 'Themes & Desktop',
  'face-recognition': 'AI & Machine Learning',
  'Vajra': 'AI & Machine Learning',
  'AI-Document-Analyzer': 'AI & Machine Learning',
  'AI-Child-Protection': 'AI & Machine Learning',
  'H1RE': 'AI & Machine Learning',
  'cnn-image-classification': 'AI & Machine Learning',
  'T2S': 'AI & Machine Learning',
  'GNOME-bluetooth-battery-monitor': 'GNOME & GTK',
  'gtk-emoji-picker': 'GNOME & GTK',
  'vfetch': 'CLI & System Tools',
  'Fedorable': 'CLI & System Tools',
  'nanoHTTP': 'CLI & System Tools',
  'todo-list': 'CLI & System Tools',
  'dirSim': 'CLI & System Tools',
  'simple-round-robin-scheduler': 'CLI & System Tools',
  'canva-linux': 'CLI & System Tools',
  'linux-keylogger': 'CLI & System Tools',
  'DeskImage': 'CLI & System Tools',
};

const descriptionOverrides: Record<string, string> = {
  'thefossclub.github.io': 'Official website for The FOSS Club',
  'piracyindex': 'The greatest piracy index of all time',
  'face-recognition': 'Face detection on live cameras using OpenCV and Dlib',
  'Telegram-GTK4-Libadwaita-Theme': 'A GTK4 - Libadwaita Inspired Theme for Telegram Desktop',
  'vfetch': 'A minimal system information fetcher',
  'Fedorable': 'Simple script for maintaining Fedora Linux',
  'nanoHTTP': 'Nano lightweight HTTP server in C',
};

const projectImageMap: Record<string, string> = {
  'xe': '/images/xe.png',
  'indx': '/images/indx.webp',
  'markview': '/images/markview.png',
  'markvue': '/images/markview.png',
  'gnome-bluetooth-battery-monitor': '/images/gnome-bluetooth.png',
  'piracyindex': '/images/piracyindex.webp',
  'telegram-gtk4-libadwaita-theme': '/images/telegram.webp',
  'face-recognition': '/images/facerecognition.webp',
  'vfetch': '/images/vfetch.webp',
};

function getProjectImage(name: string): string | null {
  return projectImageMap[name.toLowerCase()] || null;
}

const fallbackRepos: GitHubRepo[] = [
  { name: 'indx', description: 'Indexing everything that can be on maps', html_url: 'https://github.com/v8v88v8v88/indx', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'thefossclub.github.io', description: 'Official website for The FOSS Club', html_url: 'https://github.com/thefossclub/thefossclub.github.io', language: 'HTML', stargazers_count: 0, fork: false, archived: false },
  { name: 'piracyindex', description: 'The greatest piracy index of all time', html_url: 'https://github.com/V8V88V8V88/piracyindex', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'Synthio', description: 'A minimalist music visualizer built with Svelte', html_url: 'https://github.com/V8V88V8V88/Synthio', language: 'Svelte', stargazers_count: 0, fork: false, archived: false },
  { name: 'Telegram-GTK4-Libadwaita-Theme', description: 'A GTK4 - Libadwaita Inspired Theme for Telegram Desktop', html_url: 'https://github.com/V8V88V8V88/Telegram-GTK4-Libadwaita-Theme', language: null, stargazers_count: 0, fork: false, archived: false },
  { name: 'face-recognition', description: 'Face detection on live cameras using OpenCV and Dlib', html_url: 'https://github.com/V8V88V8V88/face-recognition', language: 'C++', stargazers_count: 0, fork: false, archived: false },
  { name: 'Vajra', description: 'AI-Powered Cyber Threat Forecaster', html_url: 'https://github.com/V8V88V8V88/Vajra', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'H1RE', description: 'AI-powered resume analyzer for starters', html_url: 'https://github.com/V8V88V8V88/H1RE', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'H3IST', description: 'A next-generation elevator control system', html_url: 'https://github.com/V8V88V8V88/H3IST', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'yama', description: 'Lightweight package manager using C and Rust', html_url: 'https://github.com/V8V88V8V88/yama', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'BudgetWiser', description: 'A Rust program to track your expenses', html_url: 'https://github.com/V8V88V8V88/BudgetWiser', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'Rust-RISCV-Compiler', description: 'RISC-V compiler in Rust', html_url: 'https://github.com/V8V88V8V88/Rust-RISCV-Compiler', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'mini-vm', description: 'Minimal virtual machine', html_url: 'https://github.com/V8V88V8V88/mini-vm', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'vfetch', description: 'A minimal system information fetcher', html_url: 'https://github.com/V8V88V8V88/vfetch', language: 'Shell', stargazers_count: 0, fork: false, archived: false },
  { name: 'Fedorable', description: 'Simple script for maintaining Fedora Linux', html_url: 'https://github.com/V8V88V8V88/Fedorable', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'nanoHTTP', description: 'Nano lightweight HTTP server in C', html_url: 'https://github.com/V8V88V8V88/nanoHTTP', language: 'C', stargazers_count: 0, fork: false, archived: false },
  { name: 'MarkVue', description: 'GTK-based Markdown viewer with real-time preview', html_url: 'https://github.com/V8V88V8V88/MarkVue', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'DeskImage', description: 'CLI tool that generates .Desktop entries for AppImages', html_url: 'https://github.com/V8V88V8V88/DeskImage', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'dotfiles', description: 'All the dotfiles of my linux system', html_url: 'https://github.com/V8V88V8V88/dotfiles', language: null, stargazers_count: 0, fork: false, archived: false },
  { name: 'musical-playground', description: 'Try music instruments online using svelte, vue, and tone.js', html_url: 'https://github.com/V8V88V8V88/musical-playground', language: 'Svelte', stargazers_count: 0, fork: false, archived: false },
  { name: 'FOSS-Hack-Delhi', description: 'Website to promote FOSS Hack in Delhi area', html_url: 'https://github.com/V8V88V8V88/FOSS-Hack-Delhi', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'AI-Document-Analyzer', description: 'AI Powered Document Analyzer', html_url: 'https://github.com/V8V88V8V88/AI-Document-Analyzer', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'AI-Child-Protection', description: 'AI-driven parental control with face detection', html_url: 'https://github.com/V8V88V8V88/AI-Child-Protection', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'cnn-image-classification', description: 'CNN to classify images in CIFAR-10 dataset', html_url: 'https://github.com/V8V88V8V88/cnn-image-classification', language: 'Jupyter Notebook', stargazers_count: 0, fork: false, archived: false },
  { name: 'T2S', description: 'Text to speech using AI', html_url: 'https://github.com/V8V88V8V88/T2S', language: 'CSS', stargazers_count: 0, fork: false, archived: false },
  { name: 'rusty-snake', description: 'A simple snake game built with Rust and Piston', html_url: 'https://github.com/V8V88V8V88/rusty-snake', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'iced-calculator', description: 'Simple calculator made using iced kit', html_url: 'https://github.com/V8V88V8V88/iced-calculator', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'todo-list', description: 'Simple CLI todo list in C', html_url: 'https://github.com/V8V88V8V88/todo-list', language: 'C', stargazers_count: 0, fork: false, archived: false },
  { name: 'dirSim', description: 'Lightweight directory and file system simulator', html_url: 'https://github.com/V8V88V8V88/dirSim', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'simple-round-robin-scheduler', description: 'Round robin scheduler made during OS lectures', html_url: 'https://github.com/V8V88V8V88/simple-round-robin-scheduler', language: 'C', stargazers_count: 0, fork: false, archived: false },
  { name: 'canva-linux', description: 'Canva for Linux', html_url: 'https://github.com/V8V88V8V88/canva-linux', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'linux-keylogger', description: 'Basically what you read', html_url: 'https://github.com/V8V88V8V88/linux-keylogger', language: 'C++', stargazers_count: 0, fork: false, archived: false },
  { name: 'GNOME-bluetooth-battery-monitor', description: 'Displays battery level in the GNOME shell', html_url: 'https://github.com/V8V88V8V88/GNOME-bluetooth-battery-monitor', language: 'JavaScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'gtk-emoji-picker', description: 'GTK4-based emoji picker with global shortcut', html_url: 'https://github.com/V8V88V8V88/gtk-emoji-picker', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'SkibidiSpeak', description: 'Ohio language translator for understanding gen alpha', html_url: 'https://github.com/V8V88V8V88/SkibidiSpeak', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'Sauce_Run', description: 'Endless runner game made in Redot engine', html_url: 'https://github.com/V8V88V8V88/Sauce_Run', language: 'GDScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'golang', description: 'Go experiments', html_url: 'https://github.com/V8V88V8V88/golang', language: 'Go', stargazers_count: 0, fork: false, archived: false },
];

const langFilterMap: Record<string, string> = {
  'TypeScript': 'TypeScript',
  'Rust': 'Rust',
  'Python': 'Python',
  'Svelte': 'Svelte',
  'Go': 'Go',
  'Shell': 'Shell',
  'C++': 'C/C++',
  'C': 'C/C++',
};

const categoryOrder = [
  'Web Applications',
  'Themes & Desktop',
  'AI & Machine Learning',
  'Rust Projects',
  'CLI & System Tools',
  'GNOME & GTK',
  'Other',
];

function getDefaultCategory(language: string | null): string {
  if (!language) return 'Other';
  switch (language) {
    case 'Rust': return 'Rust Projects';
    case 'TypeScript':
    case 'Svelte':
    case 'HTML':
    case 'CSS':
      return 'Web Applications';
    case 'Shell': return 'CLI & System Tools';
    case 'Python': return 'Other';
    case 'C':
    case 'C++': return 'CLI & System Tools';
    default: return 'Other';
  }
}

function getLangFilter(language: string | null): string {
  if (!language) return 'Others';
  return langFilterMap[language] || 'Others';
}

function getRecencyScore(pushedAt?: string | null): number {
  if (!pushedAt) return 0;
  const lastPush = new Date(pushedAt).getTime();
  if (!Number.isFinite(lastPush)) return 0;
  const ageDays = (Date.now() - lastPush) / (1000 * 60 * 60 * 24);
  if (ageDays <= 30) return 5;
  if (ageDays <= 90) return 3;
  if (ageDays <= 180) return 2;
  if (ageDays <= 365) return 1;
  return 0;
}

function getFeatureScore(repo: GitHubRepo): number {
  const starsScore = repo.stargazers_count * 4;
  const descriptionScore = (descriptionOverrides[repo.name] || repo.description || '').trim().length > 0 ? 2 : 0;
  const recencyScore = getRecencyScore(repo.pushed_at);
  return starsScore + descriptionScore + recencyScore;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at?: string | null;
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const repos: GitHubRepo[] = [];
    let page = 1;

    while (true) {
      const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`;
      const response = await fetch(url, { headers });

      if (!response.ok) {
        console.warn(`GitHub API error: ${response.status} ${response.statusText}`);
        break;
      }

      const data: GitHubRepo[] = await response.json();
      if (data.length === 0) break;
      repos.push(...data);
      if (data.length < 100) break;
      page++;
    }

    for (const fullName of additionalRepos) {
      const url = `https://api.github.com/repos/${fullName}`;
      const response = await fetch(url, { headers });
      if (response.ok) {
        repos.push(await response.json());
      }
    }

    return repos;
  } catch (err) {
    console.warn('Failed to fetch GitHub repos, using fallback:', err);
    return fallbackRepos;
  }
}

export async function getProjects(): Promise<Project[]> {
  const repos = await fetchGitHubRepos();
  const eligibleRepos = repos
    .filter(repo => !repo.fork && !repo.archived && !hiddenRepos.has(repo.name));

  const rankedFeatureCandidates = eligibleRepos
    .filter(repo => !featuredBlockedRepos.has(repo.name))
    .sort((a, b) => {
      const scoreDiff = getFeatureScore(b) - getFeatureScore(a);
      if (scoreDiff !== 0) return scoreDiff;
      return b.stargazers_count - a.stargazers_count;
    });

  const featuredNames = new Set<string>();
  for (const name of featuredPinnedRepos) {
    if (eligibleRepos.some(repo => repo.name === name)) {
      featuredNames.add(name);
    }
  }
  for (const repo of rankedFeatureCandidates) {
    if (featuredNames.size >= MAX_FEATURED_PROJECTS) break;
    featuredNames.add(repo.name);
  }

  return eligibleRepos
    .map(repo => ({
      name: repo.name,
      description: descriptionOverrides[repo.name] || repo.description || '',
      url: repo.html_url,
      language: repo.language || 'Unknown',
      image: getProjectImage(repo.name),
      stars: repo.stargazers_count,
      category: categoryOverrides[repo.name] || getDefaultCategory(repo.language),
      featured: featuredNames.has(repo.name),
      langFilter: getLangFilter(repo.language),
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.stars - a.stars;
    });
}

export function groupByCategory(projects: Project[]): { category: string; projects: Project[] }[] {
  const groups: Record<string, Project[]> = {};

  for (const project of projects) {
    if (!groups[project.category]) {
      groups[project.category] = [];
    }
    groups[project.category].push(project);
  }

  return categoryOrder
    .filter(cat => groups[cat]?.length > 0)
    .map(cat => ({ category: cat, projects: groups[cat] }));
}
