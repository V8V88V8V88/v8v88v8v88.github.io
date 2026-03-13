import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: 'V8V88V8V88 Blog',
    description: 'Blog posts by V8V88V8V88 on Linux, Minimalism, Identity, and more.',
    site: context.site,
    items: [
      {
        title: 'Fixing Broken Location on Linux',
        description: 'How I fixed completely broken location on Fedora using GeoClue, BeaconDB, and a bit of WiFi mapping.',
        link: '/linux-location-geoclue/',
        pubDate: new Date('2026-03-13'),
      },
      {
        title: 'Minimalism',
        description: 'How ultimate simplicity changed the design of my life.',
        link: '/minimalism/',
        pubDate: new Date('2025-10-06'),
      },
      {
        title: 'Username',
        description: 'The only description behind my mysterious username V8V88V8V88.',
        link: '/username/',
        pubDate: new Date('2025-03-04'),
      },
    ],
  });
}
