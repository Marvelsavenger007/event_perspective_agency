// src/utils/loadEventImages.js

// Eagerly import every image under src/images/events/**, as URLs.
// Vite resolves this at build time — this one glob call replaces
// hundreds of individual `import x from "./image.jpg"` lines.
const allEventImages = import.meta.glob(
  "../images/events/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

/**
 * Returns a sorted array of image URLs for a given event folder name.
 * @param {string} folder - e.g. "epa-at-5"
 */
export function loadEventImages(folder) {
  return Object.entries(allEventImages)
    .filter(([path]) => path.includes(`/events/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);
}