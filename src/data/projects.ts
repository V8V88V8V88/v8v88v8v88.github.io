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

export const pinnedRepos = [
  'XE',
  'INDX',
  'GNOME-bluetooth-battery-monitor',
  'Fedorable',
  'interweb',
  'MarkView',
];

export const projectOrder = [
  'libfprint',
  'ft9366-rek',
  'asus-dts-linux',
  'Rust-RISCV-Compiler',
  'mini-vm',
  'vfetch',
  'yama',
  'nanoHTTP',
  'gtk-emoji-picker',
  'Telegram-GTK4-Libadwaita-Theme',
  'DeskImage',
  'H3IST',
  'dotfiles',
  'helium-copr',
  'evdev-reader',
  'Vajra',
  'Jina-IDS',
  'Passvyn',
  'H1RE',
  'face-recognition',
  'AI-Child-Protection',
  'eva',
  'Dosage',
  'tv-bluetooth',
  'canva-linux',
  'LogiChain',
  'rusty-snake',
  'thefossclub.github.io',
  'piracyindex',
  'Synthio',
  'v8v88v8v88.github.io',
  'FOSS-Hack-Delhi',
  'neolekh',
  'musical-playground',
];

const featuredPinnedRepos = new Set([
  'INDX',
  'Vajra',
]);

const MAX_FEATURED_PROJECTS = 12;

const hiddenRepos = new Set([
  'v8v88v8v88',
  '.github',
  'thefossclub',
  'redesigned-dtc-website',
  'teaching-git-in-community-call',
  'community-call',
  'remove.sh',
  'rqg',
  'iced-calculator',
  'budgetwiser',
  'sauce_run',
  'simple-round-robin-scheduler',
  'chemical-equipment-visualizer',
  'cnn-image-classification',
  'website',
  't2s',
  'route',
  'dux-shell',
]);

const additionalRepos = [
  'thefossclub/thefossclub.github.io',
];

export const projectNameOverrides: Record<string, string> = {
  'thefossclub.github.io': 'The FOSS Club',
  'INDX': 'INDX',
  'piracyindex': 'Piracy Index',
  'interweb': 'Interweb',
  'neolekh': 'Neolekh',
  'v8v88v8v88.github.io': 'V8V88V8V88 Portfolio',
  'Telegram-GTK4-Libadwaita-Theme': 'Telegram GTK4 Libadwaita Theme',
  'GNOME-bluetooth-battery-monitor': 'GNOME Bluetooth Battery Monitor',
  'Rust-RISCV-Compiler': 'Rust RISC-V Compiler',
  'mini-vm': 'Mini VM',
  'helium-copr': 'Helium COPR',
  'tv-bluetooth': 'TV Bluetooth',
  'asus-dts-linux': 'ASUS DTS Linux',
  'gtk-emoji-picker': 'GTK Emoji Picker',
  'Jina-IDS': 'Jina IDS',
  'ft9366-rek': 'FT9366-REK',
  'vfetch': 'VFetch',
  'nanoHTTP': 'NanoHTTP',
  'AI-Child-Protection': 'AI Child Protection',
  'FOSS-Hack-Delhi': 'FOSS Hack Delhi',
  'canva-linux': 'Canva Linux',
  'face-recognition': 'Face Recognition',
  'rusty-snake': 'Rusty Snake',
  'musical-playground': 'Musical Playground',
  'dotfiles': 'Dotfiles',
  'yama': 'Yama',
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
  'Fedorable': 'CLI & System Tools',
  'GNOME-bluetooth-battery-monitor': 'CLI & System Tools',
  'DeskImage': 'CLI & System Tools',
  'H3IST': 'CLI & System Tools',
  'evdev-reader': 'CLI & System Tools',
  'yama': 'CLI & System Tools',
  'nanoHTTP': 'CLI & System Tools',
  'ft9366-rek': 'CLI & System Tools',
  'libfprint': 'CLI & System Tools',
  'gtk-emoji-picker': 'CLI & System Tools',
  'vfetch': 'CLI & System Tools',
  'XE': 'CLI & System Tools',
  'Rust-RISCV-Compiler': 'CLI & System Tools',
  'mini-vm': 'CLI & System Tools',
  'asus-dts-linux': 'CLI & System Tools',
  'dotfiles': 'CLI & System Tools',
  'helium-copr': 'CLI & System Tools',
  'Telegram-GTK4-Libadwaita-Theme': 'CLI & System Tools',
  'Vajra': 'Security',
  'Jina-IDS': 'Security',
  'Passvyn': 'Security',
  'face-recognition': 'AI & Machine Learning',
  'H1RE': 'AI & Machine Learning',
  'AI-Child-Protection': 'AI & Machine Learning',
  'MarkView': 'Apps & Games',
  'eva': 'Apps & Games',
  'canva-linux': 'Apps & Games',
  'LogiChain': 'Apps & Games',
  'Dosage': 'Apps & Games',
  'tv-bluetooth': 'Apps & Games',
  'rusty-snake': 'Apps & Games',
  'thefossclub.github.io': 'Web',
  'INDX': 'Web',
  'Synthio': 'Web',
  'neolekh': 'Web',
  'piracyindex': 'Web',
  'interweb': 'Web',
  'musical-playground': 'Web',
  'FOSS-Hack-Delhi': 'Web',
  'v8v88v8v88.github.io': 'Web',
};

export const languageOverrides: Record<string, string> = {
  'interweb': 'JavaScript',
};

const descriptionOverrides: Record<string, string> = {
  'asus-dts-linux': 'Pulls the DTS speaker tuning out of the ASUS driver and runs it in PipeWire, so ASUS laptop speakers sound right on Linux.',
  'thefossclub.github.io': 'Official website for The FOSS Club, bringing together people who learn, build, and share open-source software.',
  'indx': 'An interactive map that indexes places, data, and anything worth discovering, all explorable through a fast and focused interface.',
  'Synthio': 'A minimalist music visualizer built with Svelte, turning live audio into an expressive and responsive visual experience.',
  'piracyindex': 'A curated piracy index that brings useful sources together in one fast, searchable, and easy-to-navigate place.',
  'interweb': 'A carefully curated webring for discovering thoughtful personal websites, independent creators, and interesting corners of the web.',
  'neolekh': 'A simple, text-focused Hugo portfolio theme with dark mode and lightweight GoatCounter analytics for a distraction-free presence.',
  'musical-playground': 'An interactive music playground for trying instruments online, combining Svelte, Vue, and Tone.js in one playful space.',
  'FOSS-Hack-Delhi': 'A community-focused website promoting FOSS Hack in Delhi, with event information and an invitation to build together.',
  'Telegram-GTK4-Libadwaita-Theme': 'A GTK4 and Libadwaita-inspired theme for Telegram Desktop, bringing a cleaner and more native Linux visual language.',
  'dotfiles': 'A personal collection of Linux configuration files that documents the tools, preferences, and everyday setup behind the system.',
  'face-recognition': 'A live-camera face detection project using OpenCV and Dlib to explore practical computer vision workflows and recognition basics.',
  'Vajra': 'An AI-powered cyber threat forecaster for critical infrastructure, focused on turning security signals into earlier and clearer warnings.',
  'H1RE': 'An AI-powered resume analyzer for starters that reviews CVs, estimates ATS readiness, and suggests practical improvements.',
  'AI-Child-Protection': 'An adaptive parental-control system using face detection and age estimation to make digital safety more responsive and difficult to bypass.',
  'XE': 'A transpiled programming language project exploring its own syntax, compiler pipeline, and the ideas involved in building a language from scratch.',
  'yama': 'A lightweight package manager using C and Rust, designed to keep software installation and dependency handling simple and efficient.',
  'rusty-snake': 'A compact Snake game built with Rust and Piston, combining a familiar arcade loop with a hands-on game-development exercise.',
  'Rust-RISCV-Compiler': 'A Rust implementation of a RISC-V compiler, exploring instruction translation and the foundations of a small compilation pipeline.',
  'mini-vm': 'A minimal stack-based virtual machine with assembler, disassembler, and debugger pieces for exploring how runtimes execute programs.',
  'H3IST': 'A next-generation elevator control system built in Rust, modelling coordinated movement, requests, and the constraints of real-time control.',
  'Fedorable': 'A small Fedora maintenance utility that gathers common system tasks into a practical script for a smoother Linux workflow.',
  'vfetch': 'A minimal system-information fetcher that presents useful hardware and software details in a fast, terminal-friendly format.',
  'canva-linux': 'A Linux-focused Canva concept exploring how familiar visual design workflows could feel at home in an open desktop environment.',
  'nanoHTTP': 'A tiny HTTP server written in C, keeping the request and response path understandable while exploring the building blocks of web servers.',
  'DeskImage': 'A Rust CLI tool that generates Desktop Entry files for AppImages, removing repetitive setup work from the Linux application workflow.',
  'GNOME-bluetooth-battery-monitor': 'A GNOME Shell utility that surfaces Bluetooth device battery levels so important peripherals are easier to keep track of.',
  'gtk-emoji-picker': 'A GTK4 emoji picker opened with a global shortcut, designed to make expressive input quick and natural across the desktop.',
  'v8v88v8v88.github.io': 'A personal portfolio site combining Linux, FOSS, code, and design into a small space for experiments, projects, and writing.',
  'Passvyn': 'A Python password manager focused on secure local storage, giving sensitive credentials a private and straightforward place to live.',
  'LogiChain': 'A supply-chain management system project in Java, modelling how products and information move through connected business processes.',
  'helium-copr': 'A GitHub Action for working with Helium COPR packages, automating part of the build and publishing workflow for Fedora software.',
  'Jina-IDS': 'An intrusion-detection system written in Python, exploring how suspicious activity can be observed, classified, and surfaced to users.',
};

const projectImageMap: Record<string, string> = {
  'xe': '/images/xe.png',
  'indx': '/images/indx.webp',
  'markview': '/images/markview.png',
  'gnome-bluetooth-battery-monitor': '/images/gnome-bluetooth.png',
  'piracyindex': '/images/piracyindex.webp',
  'telegram-gtk4-libadwaita-theme': '/images/telegram.webp',
  'face-recognition': '/images/facerecognition.webp',
  'vfetch': '/images/vfetch.webp',
  'fedorable': '/images/fedorable.webp',
  'synthio': '/images/synthio.webp',
  'tv-bluetooth': '/images/tv-bluetooth.webp',
  'neolekh': '/images/neolekh.webp',
  'dosage': '/images/dosage.webp',
  'interweb': '/images/interweb.webp',
  'v8v88v8v88.github.io': '/images/portfolio.webp',
  'thefossclub.github.io': '/images/thefossclub.webp',
  'h1re': '/images/h1re.webp',
  'musical-playground': '/images/musical-playground.webp',
  'foss-hack-delhi': '/images/foss-hack-delhi.webp',
};

function getProjectImage(name: string, _htmlUrl: string): string | null {
  const curatedImage = projectImageMap[name.toLowerCase()];
  if (curatedImage) return curatedImage;
  return null;
}

function getProjectDescription(repo: GitHubRepo): string {
  const overrideKey = Object.keys(descriptionOverrides).find(k => k.toLowerCase() === repo.name.toLowerCase());
  const description = (overrideKey && descriptionOverrides[overrideKey]) || repo.description;
  return description?.trim() || `${formatProjectName(repo.name)} — an open-source project by ${GITHUB_USERNAME}.`;
}

// Snapshot of GitHub's updated_at values, refreshed 2026-09-22. This keeps
// the same newest-first order when the API is unavailable during a build.
const fallbackUpdatedAt: Record<string, string> = {
  'ai-child-protection': '2026-04-01T00:42:13Z',
  'asus-dts-linux': '2026-11-09T09:19:23Z',
  'canva-linux': '2026-09-29T07:04:52Z',
  'deskimage': '2026-10-20T15:25:40Z',
  'dosage': '2026-11-16T07:00:46Z',
  'dotfiles': '2026-11-09T07:31:39Z',
  'eva': '2026-10-22T01:00:45Z',
  'evdev-reader': '2026-10-15T18:20:16Z',
  'face-recognition': '2026-10-15T19:12:21Z',
  'fedorable': '2026-11-09T06:06:10Z',
  'foss-hack-delhi': '2026-02-03T07:01:35Z',
  'ft9366-rek': '2026-09-27T18:46:27Z',
  'gnome-bluetooth-battery-monitor': '2026-11-06T17:13:36Z',
  'gtk-emoji-picker': '2026-09-18T05:50:09Z',
  'h1re': '2026-05-02T05:13:19Z',
  'h3ist': '2026-10-16T03:32:17Z',
  'helium-copr': '2026-11-02T15:07:50Z',
  'indx': '2026-10-30T08:55:16Z',
  'interweb': '2026-10-06T09:55:46Z',
  'jina-ids': '2026-10-15T19:06:58Z',
  'libfprint': '2026-09-27T18:46:26Z',
  'logichain': '2026-10-15T17:26:57Z',
  'markview': '2026-11-05T14:54:15Z',
  'mini-vm': '2026-02-01T01:18:17Z',
  'musical-playground': '2026-03-18T04:24:55Z',
  'nanohttp': '2026-10-15T18:19:50Z',
  'neolekh': '2026-10-15T17:26:54Z',
  'passvyn': '2026-10-15T18:58:07Z',
  'piracyindex': '2026-10-13T01:21:51Z',
  'rust-riscv-compiler': '2026-10-15T18:20:01Z',
  'rusty-snake': '2026-10-12T16:02:31Z',
  'synthio': '2026-10-15T19:07:01Z',
  'telegram-gtk4-libadwaita-theme': '2025-09-04T09:32:46Z',
  // Organization repo: use Vaibhav's latest authored commit, not the repo's
  // overall activity, so other contributors do not change its position.
  'thefossclub.github.io': '2026-11-24T13:18:00Z',
  'tv-bluetooth': '2026-11-15T15:17:08Z',
  'v8v88v8v88.github.io': '2026-11-25T11:25:09Z',
  'vajra': '2026-02-03T07:00:58Z',
  'vfetch': '2026-02-14T07:33:16Z',
  'xe': '2026-11-06T12:16:25Z',
  'yama': '2026-10-15T18:19:59Z',
};

const fallbackRepos: GitHubRepo[] = [
  { name: 'AI-Child-Protection', description: 'Traditional parental controls rely on manual settings, making them easy to bypass. This AI-driven system ensures real-time monitoring and adaptive content control using face detection and AI-based age estimation for smarter child protection.', html_url: 'https://github.com/V8V88V8V88/AI-Child-Protection', language: 'Python', stargazers_count: 1, fork: false, archived: false },
  { name: 'asus-dts-linux', description: 'pulls the DTS speaker tuning out of the asus driver and runs it in pipewire. makes asus laptop speakers sound right on linux.', html_url: 'https://github.com/V8V88V8V88/asus-dts-linux', language: 'Python', stargazers_count: 4, fork: false, archived: false },
  { name: 'canva-linux', description: null, html_url: 'https://github.com/V8V88V8V88/canva-linux', language: 'Python', stargazers_count: 3, fork: false, archived: false },
  { name: 'DeskImage', description: 'A lightweight Rust CLI tool that generates .Desktop entries for AppImages.', html_url: 'https://github.com/V8V88V8V88/DeskImage', language: 'Rust', stargazers_count: 2, fork: false, archived: true },
  { name: 'Dosage', description: 'Unofficial Vala rewrite of Dosage that also runs on Android (GTK4 + libadwaita, Pixiewood)', html_url: 'https://github.com/V8V88V8V88/Dosage', language: 'Vala', stargazers_count: 0, fork: true, archived: false },
  { name: 'dotfiles', description: 'this repository contains all the dotfiles of my linux system', html_url: 'https://github.com/V8V88V8V88/dotfiles', language: 'Lua', stargazers_count: 3, fork: false, archived: false },
  { name: 'eva', description: 'Eva is a gemini, gopher protocol browser in Rust using gtk4', html_url: 'https://github.com/V8V88V8V88/eva', language: 'Rust', stargazers_count: 5, fork: false, archived: false },
  { name: 'evdev-reader', description: 'Reads key events from /dev/input with evdev, in Python and C++', html_url: 'https://github.com/V8V88V8V88/evdev-reader', language: 'C++', stargazers_count: 0, fork: false, archived: true },
  { name: 'face-recognition', description: 'Face Recognition code to detect faces on live cameras implemented using OpenCV and Dlib.', html_url: 'https://github.com/V8V88V8V88/face-recognition', language: 'C++', stargazers_count: 8, fork: false, archived: false },
  { name: 'Fedorable', description: 'A simple bash script for maintaining Fedora Linux systems.', html_url: 'https://github.com/V8V88V8V88/Fedorable', language: 'Shell', stargazers_count: 15, fork: false, archived: false },
  { name: 'FOSS-Hack-Delhi', description: 'a website to promote the FOSS Hack in our Delhi area', html_url: 'https://github.com/V8V88V8V88/FOSS-Hack-Delhi', homepage: 'https://foss-hack-delhi.vercel.app', language: 'TypeScript', stargazers_count: 0, fork: false, archived: false },
  { name: 'ft9366-rek', description: 'Reverse engineering the FocalTech FT9366 / RTS5811 fingerprint sensor (2808:a658, ASUS VivoBook): protocol notes, tools, Fedora fixes', html_url: 'https://github.com/V8V88V8V88/ft9366-rek', language: 'C', stargazers_count: 1, fork: false, archived: false },
  { name: 'GNOME-bluetooth-battery-monitor', description: 'Displays Bluetooth Battery level on GNOME shell', html_url: 'https://github.com/V8V88V8V88/GNOME-bluetooth-battery-monitor', homepage: 'https://extensions.gnome.org/extension/9308/bluetooth-battery-monitor/', language: 'JavaScript', stargazers_count: 14, fork: false, archived: false },
  { name: 'gtk-emoji-picker', description: 'A GTK4-based emoji picker that can be triggered globally using Meta + . shortcut.', html_url: 'https://github.com/V8V88V8V88/gtk-emoji-picker', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'H1RE', description: 'AI-powered resume analyzer with ats score and suggestions', html_url: 'https://github.com/V8V88V8V88/H1RE', homepage: 'https://h1re.vercel.app', language: 'TypeScript', stargazers_count: 1, fork: false, archived: false },
  { name: 'H3IST', description: 'Elevator simulator in Rust with tokio. Unfinished.', html_url: 'https://github.com/V8V88V8V88/H3IST', language: 'Rust', stargazers_count: 2, fork: false, archived: true },
  { name: 'helium-copr', description: 'Github action for Helium COPR package', html_url: 'https://github.com/V8V88V8V88/helium-copr', homepage: 'https://copr.fedorainfracloud.org/coprs/v8v88v8v88/helium/', language: null, stargazers_count: 0, fork: false, archived: true },
  { name: 'INDX', description: 'Indexing everything on map', html_url: 'https://github.com/V8V88V8V88/INDX', homepage: 'https://ind-x.vercel.app/', language: 'TypeScript', stargazers_count: 9, fork: false, archived: false },
  { name: 'interweb', description: 'curated webring for best of the bests', html_url: 'https://github.com/V8V88V8V88/interweb', homepage: 'http://v8v88v8v88.com/interweb/', language: 'JavaScript', stargazers_count: 6, fork: false, archived: false },
  { name: 'Jina-IDS', description: 'An IDS system made in Python', html_url: 'https://github.com/V8V88V8V88/Jina-IDS', language: 'Python', stargazers_count: 0, fork: false, archived: false },
  { name: 'libfprint', description: 'libfprint with an open driver for the FocalTech FT9366 / RTS5811 sensor (2808:a658) - see branch ft9366. Upstream: gitlab.freedesktop.org/libfprint/libfprint', html_url: 'https://github.com/V8V88V8V88/libfprint', language: 'C', stargazers_count: 1, fork: false, archived: false },
  { name: 'LogiChain', description: 'A Project on Supply Chain Management System made in Java', html_url: 'https://github.com/V8V88V8V88/LogiChain', language: 'Java', stargazers_count: 4, fork: false, archived: false },
  { name: 'MarkView', description: 'MarkView is a sleek, GTK-based Markdown viewer that allows you to write Markdown and see the rendered output in real-time.', html_url: 'https://github.com/V8V88V8V88/MarkView', language: 'Rust', stargazers_count: 6, fork: false, archived: false },
  { name: 'mini-vm', description: 'a stack based vm witth assembler, disassembler and a debugger', html_url: 'https://github.com/V8V88V8V88/mini-vm', language: 'Rust', stargazers_count: 2, fork: false, archived: false },
  { name: 'musical-playground', description: 'Music Playground is a one stop solution to try music intruments online using svelte, vue, and tone.js', html_url: 'https://github.com/V8V88V8V88/musical-playground', homepage: 'https://musical-playground.vercel.app', language: 'Svelte', stargazers_count: 0, fork: false, archived: false },
  { name: 'nanoHTTP', description: 'A nano lightweight, HTTP server implementation in C.', html_url: 'https://github.com/V8V88V8V88/nanoHTTP', language: 'C', stargazers_count: 2, fork: false, archived: true },
  { name: 'neolekh', description: 'Simple, text-focussed and a minimal personal portfolio hugo theme with dark mode and GoatCounter analytics(a great alternative to Google analytics)', html_url: 'https://github.com/V8V88V8V88/neolekh', homepage: 'https://v8v88v8v88.com', language: 'HTML', stargazers_count: 1, fork: false, archived: false },
  { name: 'Passvyn', description: 'A python based secured password manager which is highly secured using SHA256', html_url: 'https://github.com/V8V88V8V88/Passvyn', language: 'Python', stargazers_count: 4, fork: false, archived: false },
  { name: 'piracyindex', description: 'the greatest piracy index of all time. :D', html_url: 'https://github.com/V8V88V8V88/piracyindex', homepage: 'https://piracyindex.vercel.app', language: 'TypeScript', stargazers_count: 9, fork: false, archived: false },
  { name: 'Rust-RISCV-Compiler', description: 'rust riscv compiler', html_url: 'https://github.com/V8V88V8V88/Rust-RISCV-Compiler', language: 'Rust', stargazers_count: 2, fork: false, archived: true },
  { name: 'rusty-snake', description: 'A simple snake game built with Rust and Piston', html_url: 'https://github.com/V8V88V8V88/rusty-snake', language: 'Rust', stargazers_count: 2, fork: false, archived: false },
  { name: 'Synthio', description: 'Synthio is a minimalist music visualizer I developed while exploring Svelte. It combines real-time audio visualization with a sleek, responsive design.', html_url: 'https://github.com/V8V88V8V88/Synthio', homepage: 'https://synthio.vercel.app/', language: 'Svelte', stargazers_count: 8, fork: false, archived: false },
  { name: 'Telegram-GTK4-Libadwaita-Theme', description: 'A GTK4 - Libadwaita Inspired Theme for Telegram Desktop', html_url: 'https://github.com/V8V88V8V88/Telegram-GTK4-Libadwaita-Theme', homepage: 'https://t.me/addtheme/libadwaita', language: null, stargazers_count: 13, fork: false, archived: false },
  { name: 'thefossclub.github.io', description: 'This repository contains the code of the current official website of The FOSS Club', html_url: 'https://github.com/thefossclub/thefossclub.github.io', homepage: 'https://thefossclub.org', language: 'TypeScript', stargazers_count: 13, fork: false, archived: false },
  { name: 'tv-bluetooth', description: 'A clean, minimal Bluetooth manager for Android TV and Google TV. Pair the speakers and devices the built-in screen never lists.', html_url: 'https://github.com/V8V88V8V88/tv-bluetooth', language: 'Java', stargazers_count: 4, fork: false, archived: false },
  { name: 'v8v88v8v88.github.io', description: 'My Personal Portfolio Site', html_url: 'https://github.com/V8V88V8V88/v8v88v8v88.github.io', homepage: 'https://v8v88v8v88.com/', language: 'Astro', stargazers_count: 5, fork: false, archived: false },
  { name: 'Vajra', description: 'AI-Powered Cyber Threat Forecaster for Critical Infrastructure Protection', html_url: 'https://github.com/V8V88V8V88/Vajra', language: 'TypeScript', stargazers_count: 3, fork: false, archived: false },
  { name: 'vfetch', description: 'a minimal system information fetcher', html_url: 'https://github.com/V8V88V8V88/vfetch', language: 'Shell', stargazers_count: 6, fork: false, archived: false },
  { name: 'XE', description: 'XE: A fast, indentation-based programming language that compiles to standalone native binaries via Rust.', html_url: 'https://github.com/V8V88V8V88/XE', homepage: 'https://xe-lang.vercel.app', language: 'Rust', stargazers_count: 12, fork: false, archived: false },
  { name: 'yama', description: 'Yama is a lightweight package manager that efficiently manages software installations and dependencies using C and Rust.', html_url: 'https://github.com/V8V88V8V88/yama', language: 'Rust', stargazers_count: 2, fork: false, archived: true },
].map(repo => ({
  ...repo,
  updated_at: fallbackUpdatedAt[repo.name.toLowerCase()] || null,
  pushed_at: fallbackUpdatedAt[repo.name.toLowerCase()] || null,
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

function getDefaultCategory(language: string | null): string {
  switch (language) {
    case 'Rust':
    case 'C':
    case 'C++':
    case 'Go':
    case 'Shell':
    case 'Lua':
      return 'CLI & System Tools';
    case 'TypeScript':
    case 'JavaScript':
    case 'Svelte':
    case 'Astro':
    case 'HTML':
    case 'CSS':
      return 'Web';
    case 'Jupyter Notebook':
      return 'AI & Machine Learning';
    default:
      return 'Apps & Games';
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

    // Skip entirely if we already know we're rate-limited (e.g. the main
    // list fetch above just hit 403) — no point burning more calls on it.
    if (nowMs() >= githubRateLimitedUntil) {
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
          break;
        }
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

  const rankedFeatureCandidates = [...eligibleRepos]
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
      const image = getProjectImage(repo.name, repo.html_url);
      return {
        name: formatProjectName(repo.name),
        repoName: repo.name,
        description: getProjectDescription(repo),
        url: repo.html_url,
        language,
        image,
        hasCustomImage: Boolean(image),
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
