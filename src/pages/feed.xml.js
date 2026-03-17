import rss from '@astrojs/rss';
import { getAllPosts } from '../data/posts';

export function GET(context) {
  const posts = getAllPosts();
  return rss({
    title: 'V8V88V8V88 Blog',
    description: 'Blog posts by V8V88V8V88 on Linux, Minimalism, Identity, and more.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: `/${post.slug}/`,
      pubDate: new Date(post.date),
    })),
  });
}
