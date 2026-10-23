// Builds the square WebP previews the projects page shows for project images
// (public/images/previews/<name>.webp). Cards display these images with
// object-fit: cover in a square of at most ~180 CSS px, so a 560px centre
// crop covers 3x screens and looks identical while decoding far less than
// the full-size screenshots. The page falls back to the original when a
// preview is missing, so run this after adding or changing an image in
// projectImageMap (src/data/projects.ts):
//
//   bun scripts/project-previews.mjs

import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SIZE = 560;
const root = path.resolve(import.meta.dirname, '..');
const source = readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8');
const mapStart = source.indexOf('const projectImageMap');
const mapBody = source.slice(mapStart, source.indexOf('};', mapStart));
const images = [...mapBody.matchAll(/'(\/images\/[^']+)'/g)].map(match => match[1]);

const outDir = path.join(root, 'public/images/previews');
mkdirSync(outDir, { recursive: true });

for (const image of images) {
  const name = path.basename(image).replace(/\.\w+$/, '.webp');
  await sharp(path.join(root, 'public', image))
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(path.join(outDir, name));
  console.log(`${image} -> /images/previews/${name}`);
}
