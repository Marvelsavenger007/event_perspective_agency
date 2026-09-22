import { loadFabricationImages } from "./loadfabricationimages";

// Each entry maps to a folder under src/images/fabrications/<folder>/ —
// drop photos (and a video if you have one) in there and they'll surface
// automatically via loadFabricationImages(). No code changes needed later.
export const fabrications = [
  {
    id: 1,
    folder: "cosmetics-pos",
    brand: "Custom Cosmetics (SOS Skin Treatment)",
    title: "POS FSUs with Illuminations",
    meta: "Brand's POS Fabrication",
    description:
      "Illuminated floor-standing units (FSUs) fabricated and deployed in-store to give the SOS Natural Skin Treatment range standout retail presence and 24/7 shelf visibility.",
    tag: "POS Fabrication",
    tagColor: "text-emerald-400 border-emerald-400",
  },
  {
    id: 2,
    folder: "spectranet-brand",
    brand: "Spectranet",
    title: "Signage Production & Outlet Branding",
    meta: "Nationwide Retail Outlets",
    description:
      "End-to-end signage production and outlet branding for Spectranet stores — illuminated fascia signage, window branding, and in-store counter fabrication rolled out across multiple locations.",
    tag: "Signage & Outlet Branding",
    tagColor: "text-sky-400 border-sky-400",
  },
  {
    id: 3,
    folder: "lushhair-brand",
    brand: "Lush Hair",
    title: "Signage Production & Outlet Branding",
    meta: "Salon & Retail Partner Network",
    description:
      "Signage production and outlet branding rolled out across Lush Hair's network of salon and retail partners nationwide, strengthening brand consistency at every point of sale.",
    tag: "Signage & Outlet Branding",
    tagColor: "text-pink-400 border-pink-400",
  },
  {
    id: 4,
    folder: "golden-penny-brand",
    brand: "Golden Penny",
    title: "Brand's POS Fabrications",
    meta: "In-Store Shelving & Displays",
    description:
      "Custom-fabricated in-store shelving, gondola ends, and floor displays for the Golden Penny portfolio — engineered for high-traffic retail and supermarket environments nationwide.",
    tag: "POS Fabrication",
    tagColor: "text-emerald-400 border-emerald-400",
  },
  {
    id: 5,
    folder: "samsung-brand",
    brand: "Samsung",
    title: "Campus Hub & Charging Port Fabrications",
    meta: "Campus Activation Kiosks",
    description:
      "Fully fabricated campus hub kiosks and standalone charging port units for the Samsung Galaxy A Series — purpose-built structures for device charging, demos, and brand engagement on university campuses.",
    tag: "Structural Fabrication",
    tagColor: "text-indigo-400 border-indigo-400",
  },
];

// Attach a gallery + card thumbnail to every entry. Until real photos are
// dropped into src/images/fabrications/<folder>/, images will simply be an
// empty array and the card will render a "coming soon" placeholder.
fabrications.forEach((f) => {
  f.images = loadFabricationImages(f.folder);
  f.image = f.images[0]; // undefined until images exist — handled in the UI
});
