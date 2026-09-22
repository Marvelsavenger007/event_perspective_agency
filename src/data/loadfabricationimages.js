// src/data/loadFabricationImages.js

// Eagerly import every image under src/images/fabrications/**, as URLs.
// Vite resolves this at build time — drop photos/videos into
// src/images/fabrications/<folder>/ and they'll surface automatically.
const allFabricationImages = import.meta.glob(
  "../images/fabrications/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

/**
 * Returns a sorted array of image URLs for a given fabrication folder name.
 * @param {string} folder - e.g. "samsung-charging-port-fabrications"
 */
export function loadFabricationImages(folder) {
  return Object.entries(allFabricationImages)
    .filter(([path]) => path.includes(`/fabrications/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);
}
