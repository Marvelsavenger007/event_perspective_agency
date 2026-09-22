// src/data/loadActivationImages.js

// Eagerly import every image under src/images/activations/**, as URLs.
// Vite resolves this at build time — drop photos/videos into
// src/images/activations/<folder>/ and they'll surface automatically.
const allActivationImages = import.meta.glob(
  "../images/activations/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

/**
 * Returns a sorted array of image URLs for a given activation folder name.
 * @param {string} folder - e.g. "golden-penny-noodles-reloaded"
 */
export function loadActivationImages(folder) {
  return Object.entries(allActivationImages)
    .filter(([path]) => path.includes(`/activations/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);
}
