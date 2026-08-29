import epa from "../images/epa.jpg"
import trophy from "../images/trophy.webp";
import samsung from "../images/samsung.png";
import mrchef from "../images/mrchef.jpg";
import lushhair from "../images/lushhair.png";
import honeywell from "../images/honeywell.png";
import hero from "../images/hero.jpg";
import { loadEventImages } from "./loadeventimages.js";

export const featuredEvent = {
  badge: "10th Anniversary",
  year: "2026",
  date: "October 18, 2026",
  location: "Eko Hotels, Lagos",
  guests: "800 Guests",
  title: "Snap To Stardom",
  description:
    "Snap To Stardom is an annual photogenic contest that redefines and explores the concept of ‘Phototainment’ —a unique blend of photography and entertainment.",
  stats: [
    { num: "800+", label: "Guests" },
    { num: "12", label: "Performances" },
    { num: "4.2M", label: "Social Impressions" },
  ],
};

export const pastEvents = [
  // {
  //   id: 1,
  //   image: epa,
  //   images: loadEventImages("epa"),
  //   badge: "5th Anniversary",
  //   meta: "2019 · Landmark Centre, Lagos",
  //   title: "EPA at 5 — Halfway to a Legacy",
  //   description:
  //     "Our 5th anniversary brought together 400 guests for an evening of reflection and ambition — featuring a live brand showcase, keynote by our CEO, and a first-ever client awards night.",
  //   tag: "Milestone",
  //   tagColor: "text-[#4a74b3] border-gold",
  // },
  {
    id: 1,
    image: undefined, // filled below
    images: loadEventImages("abagpnl"),
    badge: null,
    meta: "August 2023 · Aba, ABIA",
    title: "Aba GPNL",
    description:

      "A professionally managed product launch event for Golden Penny Noodles, unveiling its new Chicken Flavor to key stakeholders and invited guests. With attendees receiving complimentary cartons of the new product.",
    tag: "Event",
    tagColor: "text-blue-400 border-blue-400",
  },
  {
    id: 2,
    images: loadEventImages("herobeer"),
    badge: null,
    meta: "June 2023 · Lagos",
    title: "HERO Beer Event",
    description:
      "An open-air brand event that brought consumers together through live entertainment, interactive experiences, and product engagement, creating a vibrant atmosphere while increasing brand visibility and audience participation.",
    tag: "Open-Air Event",
    tagColor: "text-cyan-400 border-cyan-400",
  },
  {
    id: 3,
    images: loadEventImages("heroompa"),
    badge: null,
    meta: "June 2023 · Lagos",
    title: "HERO Beer OMPA Carnival",
    description:
      "A lively carnival experience celebrating the Hero Beer brand with colorful performances, music, cultural entertainment, and engaging consumer activities that fostered memorable community interactions.",
    tag: "Carnival",
    tagColor: "text-emerald-400 border-emerald-400",
  },
  {
    id: 4,
    images: loadEventImages("trophystout"),
    badge: null,
    meta: "December 2022 · Victoria Island, Lagos",
    title: "Trophy Stout Father and Son Concert",
    description:
      "A memorable branded concert experience featuring live music, entertainment, and audience engagement. The event celebrated family connections while enhancing Trophy Stout's brand presence through an immersive consumer experience.",
    tag: "Concert",
    tagColor: "text-amber-400 border-amber-400",
  },
  {
    id: 5,
    images: loadEventImages("heroconnect"),
    badge: null,
    meta: "November 2021 · Port Harcourt",
    title: "HERO Connect Concert",
    description:
      "A live music concert featuring top performances, audience engagement, and immersive brand activations that created a memorable entertainment experience while promoting the Hero Beer brand.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: 6,
    images: loadEventImages("trophycan"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Trophy Stout CAN Launch",
    description:
      "A strategic product launch introducing Trophy Stout's CAN format to consumers through a dynamic brand experience. The event showcased the new packaging, encouraged product trial, and created excitement around the brand's evolution through engaging presentations and consumer interaction.",
    tag: "Product Launch",
    tagColor: "text-cyan-400 border-cyan-400",
  },
  {
    id: 7,
    images: loadEventImages("trophylager"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Trophy Lager Beer Tungba Concert",
    description:
      "A cultural music experience featuring live performances, entertainment, and brand engagement that celebrated Nigerian rhythms while creating a memorable connection between Trophy Lager and its audience.",
    tag: "Concert",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: 8,
    images: loadEventImages("trophyvibes"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Trophy Stout Vibes Party",
    description:
      "The event delivered an energetic atmosphere where guests connected with the Trophy Stout brand through performances, social interaction, and immersive experiences.",
    tag: "Brand Experience",
    tagColor: "text-fuchsia-400 border-fuchsia-400",
  },
  {
    id: 9,
    images: loadEventImages("cornflakes"),
    badge: null,
    meta: "September 2020 · Virtual",
    title: "Good Morning CornFlakes Road Show",
    description:
      "A vibrant consumer roadshow bringing Good Morning CornFlakes directly to communities through product sampling, interactive activities, and engaging brand experiences that increased awareness and consumer connection.",
    tag: "Virtual Event",
    tagColor: "text-green-400 border-green-400",
  },
  {
    id: 10,
    images: loadEventImages("flyingfishbeer"),
    badge: null,
    meta: "September 2020 · Lagos",
    title: "Flying Fish Beer Event",
    description:
      "A consumer-focused event featuring entertainment, interactive experiences, and product engagement designed to create memorable moments and strengthen Flying Fish Beer’s connection with its audience.",
    tag: "Event",
    tagColor: "text-yellow-400 border-yellow-400",
  },
  {
    id: 11,
    images: loadEventImages("danomilk"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Dano Milk",
    description:
      "A consumer-focused market activation that brought the Dano Milk brand closer to everyday shoppers through live entertainment, interactive engagement, and complimentary product sampling.",
    tag: "Market Activation",
    tagColor: "text-purple-400 border-purple-400",
  },
  {
    id: 12,
    images: loadEventImages("goldenchinlaunch"),
    badge: null,
    meta: "September 2020 · Nigeria",
    title: "Golden Bite Chin Chin Launch",
    description:
      "A product launch event introducing Golden Bite Chin Chin to consumers through brand presentation, product showcase, and engaging customer experiences.",
    tag: "Product Launch",
    tagColor: "text-sky-400 border-sky-400",
  },
  {
    id: 13,
    images: loadEventImages("honeywelledu"),
    badge: null,
    meta: "September 2020 · Lagos",
    title: "Honeywell Nutrition Education",
    description:
      "A nutrition-focused educational initiative designed to create awareness around healthy eating habits through expert discussions, interactive sessions, and community engagement. The program connected the Honeywell brand with families and consumers while promoting knowledge, wellness, and informed food choices.",
    tag: "Education Program",
    tagColor: "text-green-400 border-green-400",
  },
  {
    id: 14,
    images: loadEventImages("enugugpnl"),
    badge: null,
    meta: "September 2020 · Enugu",
    title: "Enugu GPNL",
    description:
      "A Golden Penny brand activation in Enugu designed to connect with consumers through engaging activities, product experiences, and interactive brand touchpoints. The event created meaningful audience engagement while strengthening brand visibility within the community.",
    tag: "Brand Activation",
    tagColor: "text-pink-400 border-pink-400",
  },
  {
    id: 15,
    images: loadEventImages("gpnlkitchen"),
    badge: null,
    meta: "September 2020 · Lagos",
    title: "GPNL Children's Kitchen",
    description:
      "A community-focused food experience designed to engage children through cooking activities, learning, and interactive brand experiences. The initiative created a fun and educational environment while promoting food creativity, family engagement, and the Golden Penny brand.",
    tag: "Community Experience",
    tagColor: "text-teal-400 border-teal-400",
  },
];

// Fill in card thumbnails from each event's first image, so you don't
// need a separate manual import per card
pastEvents.forEach((ev) => {
  if (!ev.image) ev.image = ev.images[0];
});