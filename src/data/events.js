import { loadEventImages } from "./loadeventimages.js";
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
    id: 1,
    image: undefined,
    images: loadEventImages("trophystout"),
    badge: null,
    meta: "December 2022 · Victoria Island, Lagos",
    title: "Trophy Stout Father and Son Concert",
    description:
      "A memorable branded concert e featuring live music, entertainment, and audience engagement. The event celebrated family connections while enhancing Trophy Stout's brand presence through an immersive consumer e.",
    tag: "Concert",
    tagColor: "text-amber-400 border-amber-400",
  },
  {
    id: 2,
    images: loadEventImages("heroconnect"),
    badge: null,
    meta: "November 2021 · Port Harcourt",
    title: "HERO Connect Concert",
    description:
      "A live music concert featuring top performances, audience engagement, and immersive brand activations that created a memorable entertainment e while promoting the Hero Beer brand.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: "3",
    folder: "herobeer",
    images: loadEventImages("herobeer"),
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
    id: "4",
    images: loadEventImages("heroompa"),
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
    id: 5,
    images: loadEventImages("trophylager"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Trophy Lager Beer Tungba Concert",
    description:
      "A cultural music e featuring live performances, entertainment, and brand engagement that celebrated Nigerian rhythms while creating a memorable connection between Trophy Lager and its audience.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: 6,
    images: loadEventImages("flypool"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Flying Fish Fly Pool",
    description:
      "As the agency responsible for activating the Fly Pool Party in Enugu, our objective was to seamlessly connect the brand with its audience by integrating fun and excitement into the event. We recognized the brand’s need to engage with Gen Z and successfully created an enjoyable and engaging atmosphere that aligned with their interests",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: 7,
    images: loadEventImages("flypool"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "SUN UP SUN DOWN OWERRI FF EVENT",
    description:
      "The Sun Up Sun Down event, which took place in Owerri, was a key opportunity for the Flying Fish beer brand. The agency ensured optimal brand visibility and used the event to introduce the product to the eastern market. With over 1,000 attendees, the event resulted in a complete sell-out and significantly boosted the brand’s popularity in the region.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
];

// Fill in card thumbnails from each event's first image
pastEvents.forEach((ev) => {
  if (!ev.image) ev.image = ev.images[0];
});
