import { loadMedia } from "./loadmedia";
import s2s from "../images/s2s/s2slogo.jpeg";

export const featuredEvent = {
  badge: "10th Anniversary",
  year: "2026",
  date: "October 18, 2026",
  location: "Eko Hotels, Lagos",
  guests: "800 Guests",
  title: "Snap To Stardom",
  description:
    "Snap To Stardom is an annual photogenic contest that redefines and explores the concept of 'Phototainment' —a unique blend of photography and entertainment.",
  stats: [
    { num: "800+", label: "Guests" },
    { num: "12", label: "Performances" },
    { num: "4.2M", label: "Social Impressions" },
  ],
};

export const pastEvents = [
  {
    id: "trophy-stout-father-son-concert",
    folder: "trophystout",
    badge: null,
    meta: "December 2022 · Victoria Island, Lagos",
    title: "Trophy Stout Father and Son Concert",
    description:
      "A memorable branded concert e featuring live music, entertainment, and audience engagement. The event celebrated family connections while enhancing Trophy Stout's brand presence through an immersive consumer e.",
    tag: "Concert",
    tagColor: "text-amber-400 border-amber-400",
  },
  {
    id: "hero-connect-concert",
    folder: "heroconnect",
    badge: null,
    meta: "November 2021 · Port Harcourt",
    title: "HERO Connect Concert",
    description:
      "A live music concert featuring top performances, audience engagement, and immersive brand activations that created a memorable entertainment e while promoting the Hero Beer brand.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: "hero-beer-brand-event",
    folder: "herobeer",
    brand: "Hero Beer",
    title: "HERO Beer Brand Event",
    meta: "June 2023 · Lagos",
    description:
      "An open-air brand event that brought consumers together through live entertainment, interactive es, and product engagement, creating a vibrant atmosphere while increasing brand visibility and audience participation.",
    tag: "Brand Event",
    tagColor: "text-cyan-400 border-cyan-400",
    _imageLoader: "event",
  },
  {
    id: "hero-beer-ompa-carniva",
    folder: "heroompa",
    brand: "Hero Beer",
    title: "HERO Beer OMPA Carnival",
    meta: "June 2023 · Lagos",
    description:
      "A lively carnival e celebrating the Hero Beer brand with colorful performances, music, cultural entertainment, and engaging consumer activities that fostered memorable community interactions.",
    tag: "Carnival Activation",
    tagColor: "text-emerald-400 border-emerald-400",
    _imageLoader: "event",
  },
  {
    id: "trophy-lager-beer-tungba-concert",
    folder: "trophylager",
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Trophy Lager Beer Tungba Concert",
    description:
      "A cultural music e featuring live performances, entertainment, and brand engagement that celebrated Nigerian rhythms while creating a memorable connection between Trophy Lager and its audience.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: "castlelite-interactive-comedy-event",
    folder: "castlelite-comedy",
    badge: null,
    title: "Interactive Comedy Event",
    meta: "Brand Experience Venue",
    description:
      "A branded comedy show designed to elevate brand awareness and recognition, extend brand longevity, and craft a distinct venue atmosphere for an unforgettable guest experience.",
    tag: "Interactive Event",
    tagColor: "text-fuchsia-400 border-fuchsia-400",
  },
  {
    id: "flying-fish-fly-pool",
    folder: "flypool",
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Flying Fish Fly Pool",
    description:
      "As the agency responsible for activating the Fly Pool Party in Enugu, our objective was to seamlessly connect the brand with its audience by integrating fun and excitement into the event. We recognized the brand’s need to engage with Gen Z and successfully created an enjoyable and engaging atmosphere that aligned with their interests",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  // {
  //   id: "sun-up-sun-down-oweri-flying-fish-event",
  //   folder: "flypool",
  //   badge: null,
  //   meta: "September 2020 · Nigeria",
  //   title: "SUN UP SUN DOWN OWERRI FF EVENT",
  //   description:
  //     "The Sun Up Sun Down event, which took place in Owerri, was a key opportunity for the Flying Fish beer brand. The agency ensured optimal brand visibility and used the event to introduce the product to the eastern market. With over 1,000 attendees, the event resulted in a complete sell-out and significantly boosted the brand’s popularity in the region.",
  //   tag: "Concert",
  //   tagColor: "text-rose-400 border-rose-400",
  // },
];

// Attach images + videos from src/images/events/<folder>/ and use the first
// image as the card thumbnail (videos are shown first in the detail gallery).
pastEvents.forEach((ev) => {
  const { images, videos } = loadMedia("events", ev.folder);
  ev.images = images;
  ev.videos = videos;
  ev.image = images[0];
});

