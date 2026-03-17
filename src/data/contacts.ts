export interface Contact {
  id: string;
  icon: string;
  label: string;
  url: string;
  rel?: string;
  buttonText?: string;
  showOnIndex?: boolean;
  showOnContact?: boolean;
}

export const contacts: Contact[] = [
  { id: 'email', icon: 'fas fa-envelope', label: 'Email', url: 'mailto:v8v88v8v88@protonmail.com', buttonText: 'Send Email', showOnIndex: false, showOnContact: true },
  { id: 'github', icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/v8v88v8v88', buttonText: 'View Profile', showOnIndex: true, showOnContact: true },
  { id: 'telegram', icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/V8V88V8V88', buttonText: 'Message Me', showOnIndex: true, showOnContact: true },
  { id: 'youtube', icon: 'fab fa-youtube', label: 'YouTube', url: 'https://www.youtube.com/c/MagicalV8', buttonText: 'Subscribe', showOnIndex: true, showOnContact: true },
  { id: 'instagram', icon: 'fab fa-instagram', label: 'Instagram', url: 'https://www.instagram.com/v8v88v8v88', showOnIndex: true, showOnContact: true },
  { id: 'twitter', icon: 'fab fa-twitter', label: 'Twitter', url: 'https://x.com/v8v88v8v88', buttonText: 'Follow', showOnIndex: true, showOnContact: true },
  { id: 'reddit', icon: 'fab fa-reddit', label: 'Reddit', url: 'https://www.reddit.com/user/v8v88v8v88', buttonText: 'Connect', showOnIndex: true, showOnContact: true },
  { id: 'myanimelist', icon: 'fas fa-film', label: 'MyAnimeList', url: 'https://myanimelist.net/profile/V8V88V8V88', showOnIndex: true, showOnContact: true },
  { id: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/v8v88v8v88/', buttonText: 'Connect', showOnIndex: true, showOnContact: true },
  { id: 'mastodon', icon: 'fab fa-mastodon', label: 'Mastodon', url: 'https://fosstodon.org/@v8v88v8v88', rel: 'me', buttonText: 'Follow', showOnIndex: true, showOnContact: true },
  { id: 'website', icon: 'fas fa-globe', label: 'Website', url: 'https://v8v88v8v88.com', showOnIndex: true, showOnContact: false },
];

export const indexContacts = contacts.filter((c) => c.showOnIndex !== false);
export const contactPageContacts = contacts.filter((c) => c.showOnContact !== false);

export function getSameAsUrls(): string[] {
  return contacts.filter((c) => c.url.startsWith('http')).map((c) => c.url);
}

export function getTerminalContactJson(): string {
  const email = contacts.find((c) => c.id === 'email');
  const github = contacts.find((c) => c.id === 'github');
  const telegram = contacts.find((c) => c.id === 'telegram');
  if (!email || !github || !telegram) return '{}';
  return `{
  "email": "<a href="${email.url}" class="terminal-link">v8v88v8v88@protonmail.com</a>",
  "github": "<a href="${github.url}" target="_blank" rel="noopener noreferrer" class="terminal-link">github.com/v8v88v8v88</a>",
  "telegram": "<a href="${telegram.url}" target="_blank" rel="noopener noreferrer" class="terminal-link">t.me/V8V88V8V88</a>",
  "status": "Open to collaborate"
}`;
}
