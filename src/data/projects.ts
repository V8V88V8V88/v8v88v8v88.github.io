const GITHUB_USERNAME = 'V8V88V8V88';

export interface Project {
  name: string;
  repoName: string;
  description: string;
  url: string;
  language: string;
  image: string | null;
  hasCustomImage?: boolean;
  homepage: string | null;
  stars: number;
  category: string;
  featured: boolean;
  langFilter: string;
  updatedAt: string | null;
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
  'v8v88v8v88',
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
  'interweb': 'Interweb',
  'vaibring': 'Interweb',
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

export const languageOverrides: Record<string, string> = {
  'interweb': 'JavaScript',
  'vaibring': 'JavaScript',
};

const descriptionOverrides: Record<string, string> = {
  'thefossclub.github.io': 'Official website for The FOSS Club, bringing together people who learn, build, and share open-source software.',
  'indx': 'An interactive map for indexing places, projects, and anything worth discovering through a focused TypeScript interface.',
  'Synthio': 'A minimalist music visualizer built with Svelte, turning live audio into an expressive and responsive visual experience.',
  'piracyindex': 'A curated piracy index that brings useful sources together in one fast, searchable, and easy-to-navigate place.',
  'interweb': 'A carefully curated webring for discovering thoughtful personal websites, independent creators, and interesting corners of the web.',
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

function getProjectImage(name: string, _htmlUrl: string): string | null {
  const curatedImage = projectImageMap[name.toLowerCase()];
  if (curatedImage) return curatedImage;
  return null;
}

function getProjectDescription(repo: GitHubRepo): string {
  const description = descriptionOverrides[repo.name] || repo.description;
  return description?.trim() || `${formatProjectName(repo.name)} — an open-source project by ${GITHUB_USERNAME}.`;
}

// Snapshot of GitHub's updated_at values, refreshed 2026-09-22. This keeps
// the same newest-first order when the API is unavailable during a build.
const fallbackUpdatedAt: Record<string, string> = {
  'ai-child-protection': '2026-04-01T00:42:13Z',
  'budgetwiser': '2024-10-17T17:40:09Z',
  'canva-linux': '2026-01-11T16:41:29Z',
  'chemical-equipment-visualizer': '2026-02-05T12:33:53Z',
  'cnn-image-classification': '2024-11-06T15:35:10Z',
  'deskimage': '2025-05-05T04:32:11Z',
  'dotfiles': '2026-03-08T13:36:22Z',
  'face-recognition': '2026-08-08T14:20:18Z',
  'fedorable': '2026-09-19T17:07:29Z',
  'foss-hack-delhi': '2026-02-03T07:01:35Z',
  'gnome-bluetooth-battery-monitor': '2026-08-02T23:42:43Z',
  'gtk-emoji-picker': '2026-09-18T05:50:09Z',
  'gtk-markdown-viewer': '2024-11-25T17:37:56Z',
  'h1re': '2026-05-02T05:13:19Z',
  'h3ist': '2024-11-26T18:04:39Z',
  'helium-copr': '2026-09-18T20:36:18Z',
  'iced-calculator': '2026-02-20T05:24:54Z',
  'indx': '2026-07-11T07:17:17Z',
  'interweb': '2026-09-13T05:41:15Z',
  'jina-ids': '2026-02-20T16:34:08Z',
  'linux': '2026-07-08T03:58:51Z',
  'linux-keylogger': '2024-12-28T17:48:46Z',
  'logichain': '2026-08-16T06:17:21Z',
  'markview': '2026-05-24T17:11:13Z',
  'mini-vm': '2026-02-01T01:18:17Z',
  'musical-playground': '2026-03-18T04:24:55Z',
  'mousam': '2025-12-14T13:29:11Z',
  'nanohttp': '2025-04-06T09:59:57Z',
  'neolekh': '2026-02-20T05:00:06Z',
  'passvyn': '2026-08-28T06:00:23Z',
  'pdfpaglu': '2026-02-14T14:56:35Z',
  'piracyindex': '2026-04-24T17:20:12Z',
  'rqg': '2026-02-20T04:51:18Z',
  'redesigned-dtc-website': '2026-02-20T04:58:27Z',
  'remove.sh': '2026-02-20T04:59:13Z',
  'rust-riscv-compiler': '2026-02-20T04:42:45Z',
  'rusty-snake': '2026-02-20T04:57:54Z',
  'sauce_run': '2026-02-20T07:06:50Z',
  'simple-round-robin-scheduler': '2026-02-20T04:56:09Z',
  'synthio': '2026-05-20T02:43:27Z',
  't2s': '2026-02-20T06:03:20Z',
  'telegram-gtk4-libadwaita-theme': '2025-09-04T09:32:46Z',
  // Organization repo: use Vaibhav's latest authored commit, not the repo's
  // overall activity, so other contributors do not change its position.
  'thefossclub.github.io': '2026-08-22T17:05:42Z',
  'thefossclub': '2026-02-20T05:14:49Z',
  'teaching-git-in-community-call': '2026-02-20T04:50:26Z',
  'v8v88v8v88.github.io': '2026-09-22T07:52:00Z',
  'vajra': '2026-02-03T07:00:58Z',
  'vfetch': '2026-02-14T07:33:16Z',
  'xe': '2026-08-16T04:32:13Z',
  'yama': '2026-06-03T05:02:19Z',
  'website': '2026-05-02T04:50:01Z',
  'walls': '2026-02-20T05:00:59Z',
  'zapzap': '2026-02-20T05:19:21Z',
  'community-call': '2026-02-20T04:49:46Z',
  'h4ck3r_ctf': '2024-10-22T17:47:27Z',
};

const fallbackRepos: GitHubRepo[] = [
  { name: 'v8v88v8v88.github.io', description: 'My personal portfolio website hosted on GitHub Pages.', html_url: 'https://github.com/V8V88V8V88/v8v88v8v88.github.io', homepage: 'https://v8v88v8v88.com/', language: 'Astro', stargazers_count: 6, fork: false, archived: false },
  { name: 'indx', description: 'Indexing everything that can be on maps', html_url: 'https://github.com/v8v88v8v88/indx', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'thefossclub.github.io', description: 'Official website for The FOSS Club', html_url: 'https://github.com/thefossclub/thefossclub.github.io', homepage: 'https://thefossclub.org', language: 'TypeScript', stargazers_count: 13, fork: false, archived: false },
  { name: 'helium-copr', description: 'GitHub Action for Helium COPR packages', html_url: 'https://github.com/V8V88V8V88/helium-copr', homepage: 'https://copr.fedorainfracloud.org/coprs/v8v88v8v88/helium/', language: null, stargazers_count: 0, fork: false, archived: false },
  { name: 'interweb', description: 'Curated webring for the best of the web', html_url: 'https://github.com/V8V88V8V88/interweb', homepage: 'https://v8v88v8v88.com/interweb/', language: 'JavaScript', stargazers_count: 6, fork: false, archived: false },
  { name: 'Passvyn', description: 'A secure Python password manager using SHA-256', html_url: 'https://github.com/V8V88V8V88/Passvyn', language: 'Python', stargazers_count: 4, fork: false, archived: false },
  { name: 'LogiChain', description: 'A supply-chain management system made in Java', html_url: 'https://github.com/V8V88V8V88/LogiChain', language: 'Java', stargazers_count: 4, fork: false, archived: false },
  { name: 'XE', description: 'A transpiled programming language', html_url: 'https://github.com/V8V88V8V88/XE', homepage: 'https://xe-lang.vercel.app', language: 'Rust', stargazers_count: 11, fork: false, archived: false },
  { name: 'linux', description: 'Linux kernel fork', html_url: 'https://github.com/V8V88V8V88/linux', language: 'C', stargazers_count: 2, fork: true, archived: false },
  { name: 'website', description: 'Code for an earlier version of my personal website', html_url: 'https://github.com/V8V88V8V88/website', language: 'HTML', stargazers_count: 2, fork: false, archived: true },
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
  { name: 'MarkView', description: 'GTK-based Markdown viewer with real-time preview', html_url: 'https://github.com/V8V88V8V88/MarkView', language: 'Rust', stargazers_count: 7, fork: false, archived: false },
  { name: 'DeskImage', description: 'CLI tool that generates .Desktop entries for AppImages', html_url: 'https://github.com/V8V88V8V88/DeskImage', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'dotfiles', description: 'All the dotfiles of my linux system', html_url: 'https://github.com/V8V88V8V88/dotfiles', language: null, stargazers_count: 0, fork: false, archived: false },
  { name: 'musical-playground', description: 'Try music instruments online using svelte, vue, and tone.js', html_url: 'https://github.com/V8V88V8V88/musical-playground', language: 'Svelte', stargazers_count: 0, fork: false, archived: false },
  { name: 'FOSS-Hack-Delhi', description: 'Website to promote FOSS Hack in Delhi area', html_url: 'https://github.com/V8V88V8V88/FOSS-Hack-Delhi', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'Jina-IDS', description: 'An intrusion-detection system made in Python', html_url: 'https://github.com/V8V88V8V88/Jina-IDS', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'neolekh', description: 'A minimal Hugo portfolio theme with dark mode and GoatCounter analytics', html_url: 'https://github.com/V8V88V8V88/neolekh', homepage: 'https://v8v88v8v88.com', language: 'HTML', stargazers_count: 1, fork: false, archived: false },
  { name: 'RQG', description: 'Random quote generator demo for FCC', html_url: 'https://github.com/V8V88V8V88/RQG', homepage: 'https://randomqoutev8.netlify.app/', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'PDFpaglu', description: 'AI Powered Document Analyzer', html_url: 'https://github.com/V8V88V8V88/PDFpaglu', homepage: 'https://pdfpaglu.streamlit.app/', language: 'Python', stargazers_count: 1, fork: false, archived: false },
  { name: 'chemical-equipment-visualizer', description: 'Hybrid web and desktop tool for visualizing chemical equipment data', html_url: 'https://github.com/V8V88V8V88/chemical-equipment-visualizer', homepage: 'https://chemical-equipment-visualizer-steel.vercel.app/', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'AI-Child-Protection', description: 'AI-driven parental control with face detection', html_url: 'https://github.com/V8V88V8V88/AI-Child-Protection', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'cnn-image-classification', description: 'CNN to classify images in CIFAR-10 dataset', html_url: 'https://github.com/V8V88V8V88/cnn-image-classification', language: 'Jupyter Notebook', stargazers_count: 0, fork: false, archived: false },
  { name: 'T2S', description: 'Text to speech using AI', html_url: 'https://github.com/V8V88V8V88/T2S', language: 'CSS', stargazers_count: 0, fork: false, archived: false },
  { name: 'zapzap', description: 'WhatsApp desktop application written in PyQt6', html_url: 'https://github.com/V8V88V8V88/zapzap', homepage: 'https://rtosta.com/zapzap-web/', language: 'Python', stargazers_count: 0, fork: true, archived: true },
  { name: 'thefossclub', description: 'An earlier Svelte website for The FOSS Club', html_url: 'https://github.com/V8V88V8V88/thefossclub', homepage: 'https://thefossclub.vercel.app', language: 'Svelte', stargazers_count: 0, fork: false, archived: true },
  { name: 'walls', description: 'A collection of wallpapers found around the internet', html_url: 'https://github.com/V8V88V8V88/walls', language: null, stargazers_count: 3, fork: false, archived: true },
  { name: 'remove.sh', description: 'Shell script for removing installed or unwanted packages', html_url: 'https://github.com/V8V88V8V88/remove.sh', language: 'Shell', stargazers_count: 0, fork: false, archived: true },
  { name: 'redesigned-dtc-website', description: 'College website reimagined for a web technology project', html_url: 'https://github.com/V8V88V8V88/redesigned-dtc-website', homepage: 'https://dtc-neon.vercel.app/', language: 'CSS', stargazers_count: 0, fork: false, archived: true },
  { name: 'teaching-git-in-community-call', description: 'A website used for teaching Git in a community call', html_url: 'https://github.com/V8V88V8V88/teaching-git-in-community-call', language: 'HTML', stargazers_count: 0, fork: false, archived: true },
  { name: 'community-call', description: 'Community call website', html_url: 'https://github.com/V8V88V8V88/community-call', language: 'HTML', stargazers_count: 0, fork: false, archived: true },
  { name: 'mousam', description: 'Weather at a glance', html_url: 'https://github.com/V8V88V8V88/mousam', homepage: 'https://amit9838.github.io/mousam/', language: 'Python', stargazers_count: 0, fork: true, archived: false },
  { name: 'H4CK3R_CTF', description: 'CTF website frontend', html_url: 'https://github.com/V8V88V8V88/H4CK3R_CTF', homepage: 'https://h4ck3r-ctf.vercel.app', language: 'TypeScript', stargazers_count: 1, fork: true, archived: false },
  { name: 'rusty-snake', description: 'A simple snake game built with Rust and Piston', html_url: 'https://github.com/V8V88V8V88/rusty-snake', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'iced-calculator', description: 'Simple calculator made using iced kit', html_url: 'https://github.com/V8V88V8V88/iced-calculator', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
  { name: 'simple-round-robin-scheduler', description: 'Round robin scheduler made during OS lectures', html_url: 'https://github.com/V8V88V8V88/simple-round-robin-scheduler', language: 'C', stargazers_count: 0, fork: false, archived: false },
  { name: 'canva-linux', description: 'Canva for Linux', html_url: 'https://github.com/V8V88V8V88/canva-linux', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'linux-keylogger', description: 'Basically what you read', html_url: 'https://github.com/V8V88V8V88/linux-keylogger', language: 'C++', stargazers_count: 0, fork: false, archived: false },
  { name: 'GNOME-bluetooth-battery-monitor', description: 'Displays battery level in the GNOME shell', html_url: 'https://github.com/V8V88V8V88/GNOME-bluetooth-battery-monitor', language: 'JavaScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'gtk-emoji-picker', description: 'GTK4-based emoji picker with global shortcut', html_url: 'https://github.com/V8V88V8V88/gtk-emoji-picker', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'Sauce_Run', description: 'Endless runner game made in Redot engine', html_url: 'https://github.com/V8V88V8V88/Sauce_Run', language: 'GDScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'gtk-markdown-viewer', description: 'A lightweight native GTK Markdown viewer', html_url: 'https://github.com/V8V88V8V88/gtk-markdown-viewer', language: 'Rust', stargazers_count: 0, fork: false, archived: false },
].map(repo => ({
  ...repo,
  updated_at: fallbackUpdatedAt[repo.name.toLowerCase()] || null,
}));

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
    case 'JavaScript':
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
  updated_at?: string | null;
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
        const repo: GitHubRepo = await response.json();
        const commitsUrl = `https://api.github.com/repos/${fullName}/commits?author=${GITHUB_USERNAME}&per_page=1`;

        try {
          const commitsResponse = await fetch(commitsUrl, { headers });
          if (commitsResponse.ok) {
            const commits: Array<{ commit?: { author?: { date?: string | null } } }> = await commitsResponse.json();
            repo.updated_at = commits[0]?.commit?.author?.date
              || fallbackUpdatedAt[repo.name.toLowerCase()]
              || repo.updated_at;
          } else {
            repo.updated_at = fallbackUpdatedAt[repo.name.toLowerCase()] || repo.updated_at;
          }
        } catch {
          repo.updated_at = fallbackUpdatedAt[repo.name.toLowerCase()] || repo.updated_at;
        }

        repos.push(repo);
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
  const uniqueRepos = new Map<string, GitHubRepo>();
  for (const repo of repos) {
    const repoKey = repo.name.toLowerCase();
    if (hiddenRepos.has(repoKey)) continue;

    const existing = uniqueRepos.get(repoKey);
    // Prefer the canonical non-fork repository when an added organization repo
    // has the same name as one of the user's forks.
    if (!existing || (existing.fork && !repo.fork)) {
      uniqueRepos.set(repoKey, repo);
    }
  }
  const eligibleRepos = [...uniqueRepos.values()];

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
    .map(repo => {
      const language = languageOverrides[repo.name] || languageOverrides[repo.name.toLowerCase()] || repo.language || 'Unknown';
      return {
        name: formatProjectName(repo.name),
        repoName: repo.name,
        description: getProjectDescription(repo),
        url: repo.html_url,
        language,
        image: getProjectImage(repo.name, repo.html_url),
        hasCustomImage: Boolean(projectImageMap[repo.name.toLowerCase()]),
        homepage: repo.homepage?.trim() || null,
        stars: repo.stargazers_count,
        category: categoryOverrides[repo.name] || getDefaultCategory(language),
        featured: featuredNames.has(repo.name),
        langFilter: getLangFilter(language),
        updatedAt: repo.updated_at || repo.pushed_at || null,
      };
    })
    .sort((a, b) => {
      const aUpdated = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const bUpdated = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      if (aUpdated !== bUpdated) return bUpdated - aUpdated;
      if (!aUpdated && !bUpdated) return 0;
      return a.repoName.localeCompare(b.repoName);
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
