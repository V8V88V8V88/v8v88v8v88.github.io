export interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  readTime?: string;
}

const posts: Post[] = [
  {
    title: 'Fixing Broken Location on Linux',
    description: 'Complete step by step solution to fix Geoclue + BeaconDB location on Linux',
    date: '2026-03-13',
    slug: 'linux-location-geoclue',
    image: '/images/beacondb.webp',
    tags: ['Linux', 'GeoClue', 'BeaconDB'],
    readTime: '7 min read',
  },
  {
    title: 'Minimalism',
    description: 'How ultimate simplicity changed the design of my life.',
    date: '2025-10-06',
    slug: 'minimalism',
    image: '/images/minimal.jpg',
    tags: ['Minimalism', 'Philosophy'],
    readTime: '6 min read',
  },
  {
    title: 'Username',
    description: 'The only description of my username "V8" on internet you can find.',
    date: '2025-03-04',
    slug: 'username',
    image: '/images/username.png',
    tags: ['Identity', 'Personal'],
    readTime: '5 min read',
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
