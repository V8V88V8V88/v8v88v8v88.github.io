// Builds the square WebP previews the projects page shows for project images
// (public/images/previews/<name>.webp). Cards display these images with
// object-fit: cover in a square of at most ~180 CSS px, so a 560px centre
// crop covers 3x screens and looks identical while decoding far less than
// the full-size screenshots. The page falls back to the original when a
// preview is missing, so run this after adding or changing an image in
// projectImageMap (src/data/projects.ts):
//
//   bun scripts/project-previews.mjs
//
// It also builds the home page covers (public/images/covers/<name>.webp).
// Those cards are 310 CSS px wide and show the whole screenshot, so an 800px
// wide WebP covers 2.5x screens at a fraction of the 1920px originals.

import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SIZE = 560;
const COVER_WIDTH = 800;
const root = path.resolve(import.meta.dirname, '..');
const source = readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8');
const mapStart = source.indexOf('const projectImageMap');
const mapBody = source.slice(mapStart, source.indexOf('};', mapStart));
const images = [...mapBody.matchAll(/'(\/images\/[^']+)'/g)].map(match => match[1]);

const outDir = path.join(root, 'public/images/previews');
const coverDir = path.join(root, 'public/images/covers');
mkdirSync(outDir, { recursive: true });
mkdirSync(coverDir, { recursive: true });

// Some screenshots are a window floating on a white or transparent margin,
// which leaves them looking smaller and framed differently from the ones
// that fill the image. Trim that margin (plus a sliver for the window's
// rounded corners) and put any transparency on the card's own dark colour.
async function coverSource(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const [r, g, b, a] = data;
  const plainMargin = a < 16 || (r > 240 && g > 240 && b > 240);
  if (!plainMargin) return file;
  const trimmed = await sharp(file).trim({ threshold: 24 }).toBuffer({ resolveWithObject: true });
  const inset = Math.round(trimmed.info.width * 0.012);
  return sharp(trimmed.data)
    .extract({ left: inset, top: inset, width: trimmed.info.width - inset * 2, height: trimmed.info.height - inset * 2 })
    .flatten({ background: '#0d0d0d' })
    .toBuffer();
}

for (const image of images) {
  const name = path.basename(image).replace(/\.\w+$/, '.webp');
  await sharp(path.join(root, 'public', image))
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(path.join(outDir, name));
  await sharp(await coverSource(path.join(root, 'public', image)))
    .resize({ width: COVER_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(coverDir, name));
  console.log(`${image} -> /images/previews/${name}, /images/covers/${name}`);
}
