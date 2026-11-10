// Font Awesome Free 6.7.2 glyphs (CC BY 4.0, https://fontawesome.com/license/free),
// inlined as SVG at build time so no icon script or font is fetched in the
// browser. Keyed by the same class strings the markup already uses.
import {
  faArrowUp,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faGlobe,
  faPen,
  faXmark,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const icons: Record<string, IconDefinition> = {
  'fas fa-arrow-up': faArrowUp,
  'fas fa-chevron-left': faChevronLeft,
  'fas fa-chevron-right': faChevronRight,
  'fas fa-envelope': faEnvelope,
  'fas fa-globe': faGlobe,
  'fas fa-pen': faPen,
  'fas fa-xmark': faXmark,
  'fab fa-github': faGithub,
  'fab fa-instagram': faInstagram,
  'fab fa-linkedin': faLinkedin,
  'fab fa-telegram': faTelegram,
  'fab fa-x-twitter': faXTwitter,
  'fab fa-youtube': faYoutube,
};

/** The <svg> for an icon, to go inside its <i class="fas fa-…"> wrapper via set:html. */
export function iconSvg(name: string): string {
  const def = icons[name];
  if (!def) throw new Error(`Unknown icon "${name}": add it to src/data/icons.ts`);
  const [width, height, , , path] = def.icon;
  const d = Array.isArray(path) ? path.join(' ') : path;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
}
