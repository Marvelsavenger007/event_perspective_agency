// src/data/loadmedia.js
//
// Collects everything under src/images/<section>/<folder>/ and splits it
// into images and videos (classified by the original file path, because Vite
// can inline small assets as data: URLs that hide the file extension).
//
// Drop photos AND videos into the same folder, e.g.
//   src/images/activations/honeywellcamp/
// and they surface automatically — no code changes needed.
//
// NOTE: import.meta.glob is case-sensitive, so both lower- and upper-case
// extensions are listed (phones/cameras often produce IMG_0001.MP4 / .MOV).
const files = import.meta.glob(
  [
    "../images/**/*.{jpg,jpeg,png,webp,gif,avif,mp4,webm,ogg,mov,m4v}",
    "../images/**/*.{JPG,JPEG,PNG,WEBP,GIF,AVIF,MP4,WEBM,OGG,MOV,M4V}",
  ],
  { eager: true, import: "default" }
);

const VIDEO_RE = /\.(mp4|webm|ogg|mov|m4v)$/i;
const collator = new Intl.Collator(undefined, { numeric: true });

/**
 * @param {"activations" | "fabrications" | "events"} section
 * @param {string} folder - e.g. "honeywellcamp"
 * @returns {{ images: string[], videos: string[] }}
 */
export function loadMedia(section, folder) {
  const marker = `/images/${section}/${folder}/`;
  const entries = Object.entries(files)
    .filter(([path]) => path.includes(marker))
    .sort(([a], [b]) => collator.compare(a, b));

  const videos = entries.filter(([p]) => VIDEO_RE.test(p)).map(([, url]) => url);
  const images = entries.filter(([p]) => !VIDEO_RE.test(p)).map(([, url]) => url);

  // Dev-only diagnostics: shows in the browser console which videos were found
  if (import.meta.env?.DEV && videos.length) {
    console.info(`[loadMedia] ${section}/${folder}: ${images.length} image(s), ${videos.length} video(s)`);
  }

  return { images, videos };
}

// Dev-only: total videos Vite found anywhere under src/images
if (import.meta.env?.DEV) {
  const total = Object.keys(files).filter((p) => VIDEO_RE.test(p));
  console.info(`[loadMedia] ${total.length} video file(s) found under src/images`, total);
}
