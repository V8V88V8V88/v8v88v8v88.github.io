const GITHUB_USERNAME = 'V8V88V8V88';

export interface Project {
  name: string;
  repoName: string;
  description: string;
  url: string;
  language: string;
  image: string;
  hasCustomImage?: boolean;
  homepage: string | null;
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

export const projectNameOverrides: Record<string, string> = {
  'thefossclub.github.io': 'The FOSS Club',
  'thefossclub': 'The FOSS Club',
  'thefossclub-app': 'The FOSS Club App',
  'indx': 'INDX',
  'INDX': 'INDX',
  'piracyindex': 'Piracy Index',
  'vaibring': 'Vaibring',
  'neolekh': 'Neolekh',
  'v8v88v8v88.github.io': 'V8V88V8V88 Portfolio',
  'Telegram-GTK4-Libadwaita-Theme': 'Telegram GTK4 Libadwaita Theme',
  'GNOME-bluetooth-battery-monitor': 'GNOME Bluetooth Battery Monitor',
  'Rust-RISCV-Compiler': 'Rust RISC-V Compiler',
  'mini-vm': 'Mini VM',
  'cnn-image-classification': 'CNN Image Classification',
  'helium-copr': 'Helium COPR',
  'gtk-emoji-picker': 'GTK Emoji Picker',
  'gtk-markdown-viewer': 'GTK Markdown Viewer',
  'Jina-IDS': 'Jina IDS',
  'H4CK3R_CTF': 'H4CK3R CTF',
  'PDFpaglu': 'PDFPaglu',
  'dirSim': 'DirSim',
  'vfetch': 'VFetch',
  'nanoHTTP': 'NanoHTTP',
  'AI-Child-Protection': 'AI Child Protection',
  'AI-Document-Analyzer': 'AI Document Analyzer',
  'FOSS-Hack-Delhi': 'FOSS Hack Delhi',
  'canva-linux': 'Canva Linux',
  'linux-keylogger': 'Linux Keylogger',
  'face-recognition': 'Face Recognition',
  'rusty-snake': 'Rusty Snake',
  'iced-calculator': 'Iced Calculator',
  'simple-round-robin-scheduler': 'Simple Round Robin Scheduler',
  'chemical-equipment-visualizer': 'Chemical Equipment Visualizer',
  'musical-playground': 'Musical Playground',
  'todo-list': 'Todo List',
  'Sauce_Run': 'Sauce Run',
  'dotfiles': 'Dotfiles',
  'yama': 'Yama',
  'walls': 'Walls',
  'mousam': 'Mousam',
  'zapzap': 'ZapZap',
  'redesigned-dtc-website': 'Redesigned DTC Website',
  'remove.sh': 'Remove.sh',
  'teaching-git-in-community-call': 'Teaching Git in Community Call',
  'community-call': 'Community Call',
  'SkibidiSpeak': 'SkibidiSpeak',
};

export function formatProjectName(repoName: string): string {
  if (projectNameOverrides[repoName]) {
    return projectNameOverrides[repoName];
  }
  let clean = repoName.replace(/\.github\.io$/i, '');
  clean = clean.replace(/[-_]+/g, ' ');
  return clean
    .split(' ')
    .filter(Boolean)
    .map(word => {
      if (word === word.toUpperCase() && word.length > 1) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

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
  'thefossclub.github.io': 'Official website for The FOSS Club, bringing together people who learn, build, and share open-source software.',
  'indx': 'An interactive map for indexing places, projects, and anything worth discovering through a focused TypeScript interface.',
  'Synthio': 'A minimalist music visualizer built with Svelte, turning live audio into an expressive and responsive visual experience.',
  'piracyindex': 'A curated piracy index that brings useful sources together in one fast, searchable, and easy-to-navigate place.',
  'vaibring': 'A carefully curated webring for discovering thoughtful personal websites, independent creators, and interesting corners of the web.',
  'neolekh': 'A simple, text-focused Hugo portfolio theme with dark mode and lightweight GoatCounter analytics for a distraction-free presence.',
  'thefossclub-app': 'A Svelte companion for The FOSS Club, making community resources, events, and updates easier to discover and revisit.',
  'musical-playground': 'An interactive music playground for trying instruments online, combining Svelte, Vue, and Tone.js in one playful space.',
  'RQG': 'A small random code generator built as an FCC experiment, providing a quick way to create and test generated code snippets.',
  'FOSS-Hack-Delhi': 'A community-focused website promoting FOSS Hack in Delhi, with event information and an invitation to build together.',
  'Telegram-GTK4-Libadwaita-Theme': 'A GTK4 and Libadwaita-inspired theme for Telegram Desktop, bringing a cleaner and more native Linux visual language.',
  'dotfiles': 'A personal collection of Linux configuration files that documents the tools, preferences, and everyday setup behind the system.',
  'face-recognition': 'A live-camera face detection project using OpenCV and Dlib to explore practical computer vision workflows and recognition basics.',
  'Vajra': 'An AI-powered cyber threat forecaster for critical infrastructure, focused on turning security signals into earlier and clearer warnings.',
  'H1RE': 'An AI-powered resume analyzer for starters that reviews CVs, estimates ATS readiness, and suggests practical improvements.',
  'AI-Child-Protection': 'An adaptive parental-control system using face detection and age estimation to make digital safety more responsive and difficult to bypass.',
  'cnn-image-classification': 'A convolutional neural network experiment for classifying CIFAR-10 images, covering the core steps of training and evaluation.',
  'T2S': 'A text-to-speech experiment that explores how written content can be converted into natural audio through an accessible interface.',
  'XE': 'A transpiled programming language project exploring its own syntax, compiler pipeline, and the ideas involved in building a language from scratch.',
  'MarkVue': 'A sleek GTK-based Markdown viewer that lets you write content and see the rendered output update in real time.',
  'yama': 'A lightweight package manager using C and Rust, designed to keep software installation and dependency handling simple and efficient.',
  'rusty-snake': 'A compact Snake game built with Rust and Piston, combining a familiar arcade loop with a hands-on game-development exercise.',
  'Rust-RISCV-Compiler': 'A Rust implementation of a RISC-V compiler, exploring instruction translation and the foundations of a small compilation pipeline.',
  'mini-vm': 'A minimal stack-based virtual machine with assembler, disassembler, and debugger pieces for exploring how runtimes execute programs.',
  'H3IST': 'A next-generation elevator control system built in Rust, modelling coordinated movement, requests, and the constraints of real-time control.',
  'BudgetWiser': 'A Rust expense tracker for recording spending and understanding personal finances through a small, focused command-line workflow.',
  'iced-calculator': 'A simple calculator built with the Iced toolkit and Rust, created to explore native interfaces and clean event-driven interactions.',
  'gtk-markdown-viewer': 'A lightweight GTK Markdown viewer focused on reading and rendering formatted notes in a simple native desktop window.',
  'Fedorable': 'A small Fedora maintenance utility that gathers common system tasks into a practical script for a smoother Linux workflow.',
  'vfetch': 'A minimal system-information fetcher that presents useful hardware and software details in a fast, terminal-friendly format.',
  'canva-linux': 'A Linux-focused Canva concept exploring how familiar visual design workflows could feel at home in an open desktop environment.',
  'nanoHTTP': 'A tiny HTTP server written in C, keeping the request and response path understandable while exploring the building blocks of web servers.',
  'DeskImage': 'A Rust CLI tool that generates Desktop Entry files for AppImages, removing repetitive setup work from the Linux application workflow.',
  'simple-round-robin-scheduler': 'A small round-robin scheduler written in C during operating-systems coursework, demonstrating fair time-sliced task execution.',
  'linux-keylogger': 'A low-level Linux input experiment written in C++, intended to study keyboard-event handling and the responsibilities of system software.',
  'GNOME-bluetooth-battery-monitor': 'A GNOME Shell utility that surfaces Bluetooth device battery levels so important peripherals are easier to keep track of.',
  'gtk-emoji-picker': 'A GTK4 emoji picker opened with a global shortcut, designed to make expressive input quick and natural across the desktop.',
  'v8v88v8v88.github.io': 'A personal portfolio site combining Linux, FOSS, code, and design into a small space for experiments, projects, and writing.',
  'Passvyn': 'A Python password manager focused on secure local storage, giving sensitive credentials a private and straightforward place to live.',
  'LogiChain': 'A supply-chain management system project in Java, modelling how products and information move through connected business processes.',
  'PDFpaglu': 'An AI-powered document analyzer that helps turn uploaded documents into clearer, more useful summaries and extracted insights.',
  'helium-copr': 'A GitHub Action for working with Helium COPR packages, automating part of the build and publishing workflow for Fedora software.',
  'Jina-IDS': 'An intrusion-detection system written in Python, exploring how suspicious activity can be observed, classified, and surfaced to users.',
  'Sauce_Run': 'An endless runner made with the Godot engine, built around quick reactions, repeated runs, and a playful arcade-style challenge.',
  'chemical-equipment-visualizer': 'A hybrid web and desktop tool for visualizing and analysing chemical equipment data through Django REST, React, and PyQt5.',
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

function getProjectImage(name: string, htmlUrl: string): string {
  const curatedImage = projectImageMap[name.toLowerCase()];
  if (curatedImage) return curatedImage;

  const repoPath = htmlUrl.replace('https://github.com/', '').replace(/\/$/, '');
  return `https://opengraph.githubassets.com/1/${repoPath}`;
}

function getProjectDescription(repo: GitHubRepo): string {
  const description = descriptionOverrides[repo.name] || repo.description;
  return description?.trim() || `${formatProjectName(repo.name)} — an open-source project by ${GITHUB_USERNAME}.`;
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
  homepage?: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at?: string | null;
}

const REPOS_CACHE_TTL_MS = 10 * 60 * 1000;
let reposCache: { data: GitHubRepo[]; expiresAt: number } | null = null;
let reposInFlight: Promise<GitHubRepo[]> | null = null;
let githubRateLimitedUntil = 0;
let hasLoggedRateLimitWarning = false;

function nowMs(): number {
  return Date.now();
}

function getCachedRepos(): GitHubRepo[] | null {
  if (reposCache && reposCache.expiresAt > nowMs()) {
    return reposCache.data;
  }
  return null;
}

function setReposCache(data: GitHubRepo[]): GitHubRepo[] {
  reposCache = {
    data,
    expiresAt: nowMs() + REPOS_CACHE_TTL_MS,
  };
  return data;
}

function logGitHubWarningOnce(message: string): void {
  if (hasLoggedRateLimitWarning) return;
  hasLoggedRateLimitWarning = true;
  console.warn(message);
}

function parseRateLimitResetMs(response: Response): number {
  const resetHeader = response.headers.get('x-ratelimit-reset');
  const retryAfterHeader = response.headers.get('retry-after');

  if (retryAfterHeader) {
    const retryAfterSec = Number(retryAfterHeader);
    if (Number.isFinite(retryAfterSec) && retryAfterSec > 0) {
      return nowMs() + retryAfterSec * 1000;
    }
  }

  if (resetHeader) {
    const resetSec = Number(resetHeader);
    if (Number.isFinite(resetSec) && resetSec > 0) {
      // small buffer to avoid retrying exactly at boundary
      return resetSec * 1000 + 1000;
    }
  }

  // Conservative fallback cooldown
  return nowMs() + 5 * 60 * 1000;
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const cached = getCachedRepos();
  if (cached) return cached;

  if (nowMs() < githubRateLimitedUntil) {
    return fallbackRepos;
  }

  if (reposInFlight) return reposInFlight;

  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  reposInFlight = (async () => {
    try {
    const repos: GitHubRepo[] = [];
    let page = 1;

    while (true) {
      const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`;
      const response = await fetch(url, { headers });

      if (!response.ok) {
        if (response.status === 403) {
          githubRateLimitedUntil = parseRateLimitResetMs(response);
          logGitHubWarningOnce('GitHub API rate limit reached. Using fallback data temporarily.');
        } else {
          console.warn(`GitHub API error: ${response.status} ${response.statusText}`);
        }
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
      } else if (response.status === 403) {
        githubRateLimitedUntil = parseRateLimitResetMs(response);
        logGitHubWarningOnce('GitHub API rate limit reached while loading additional repos. Using available data.');
      }
    }

      if (repos.length > 0) {
        hasLoggedRateLimitWarning = false;
        githubRateLimitedUntil = 0;
        return setReposCache(repos);
      }
      return fallbackRepos;
    } catch (err) {
      console.warn('Failed to fetch GitHub repos, using fallback:', err);
      return fallbackRepos;
    } finally {
      reposInFlight = null;
    }
  })();

  return reposInFlight;
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
      name: formatProjectName(repo.name),
      repoName: repo.name,
      description: getProjectDescription(repo),
      url: repo.html_url,
      language: repo.language || 'Unknown',
      image: getProjectImage(repo.name, repo.html_url),
      hasCustomImage: Boolean(projectImageMap[repo.name.toLowerCase()]),
      homepage: repo.homepage?.trim() || null,
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
