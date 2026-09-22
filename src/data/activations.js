import { loadActivationImages } from "./loadactivationimages";
import { loadEventImages } from "./loadeventimages.js";

// ─────────────────────────────────────────────────────────────────────────────
// Entries that originated in the Events page but are experiential activations
// (not concerts/open-air music events) — moved here so they sit in the correct
// Experientials & Activations tab on the Portfolio page.
// Their images still load from src/images/events/<folder>/ via loadEventImages.
// ─────────────────────────────────────────────────────────────────────────────
const fromEvents = [
  {
    id: "ev-1",
    folder: "abagpnl",
    brand: "Golden Penny Noodles",
    title: "Aba GPNL — Product Launch Event",
    meta: "August 2023 · Aba, ABIA",
    description:
      "A professionally managed product launch event for Golden Penny Noodles, unveiling its new Chicken Flavor to key stakeholders and invited guests. Attendees received complimentary cartons of the new product.",
    tag: "Product Launch",
    tagColor: "text-blue-400 border-blue-400",
    _imageLoader: "event",
  },
  {
    id: "ev-4",
    folder: "trophycan",
    brand: "Trophy Stout",
    title: "Trophy Stout CAN Launch",
    meta: "September 2020 · Nigeria",
    description:
      "A strategic product launch introducing Trophy Stout's CAN format to consumers through a dynamic brand e. The event showcased the new packaging, encouraged product trial, and created excitement through engaging presentations and consumer interaction.",
    tag: "Product Launch",
    tagColor: "text-cyan-400 border-cyan-400",
    _imageLoader: "event",
  },
  {
    id: "ev-5",
    folder: "trophyvibes",
    brand: "Trophy Stout",
    title: "Trophy Stout Vibes Party",
    meta: "September 2020 · Nigeria",
    description:
      "The event delivered an energetic atmosphere where guests connected with the Trophy Stout brand through performances, social interaction, and immersive brand es.",
    tag: "Brand E",
    tagColor: "text-fuchsia-400 border-fuchsia-400",
    _imageLoader: "event",
  },
  {
    id: "ev-6",
    folder: "cornflakes",
    brand: "Good Morning CornFlakes",
    title: "Good Morning CornFlakes Road Show",
    meta: "Nigeria · Nationwide",
    description:
      "A vibrant consumer roadshow bringing Good Morning CornFlakes directly to communities through product sampling, interactive activities, and engaging brand es that increased awareness and consumer connection.",
    tag: "Roadshow",
    tagColor: "text-green-400 border-green-400",
    _imageLoader: "event",
  },
  {
    id: "ev-7",
    folder: "flyingfishbeer",
    brand: "Flying Fish Beer",
    title: "Flying Fish Beer Event",
    meta: "September 2020 · Lagos",
    description:
      "A consumer-focused event featuring entertainment, interactive es, and product engagement designed to create memorable moments and strengthen Flying Fish Beer's connection with its audience.",
    tag: "Consumer Event",
    tagColor: "text-yellow-400 border-yellow-400",
    _imageLoader: "event",
  },
  {
    id: "ev-8",
    folder: "danomilk",
    brand: "Dano Milk",
    title: "Dano Milk Market Activation",
    meta: "September 2020 · Nigeria",
    description:
      "A consumer-focused market activation that brought the Dano Milk brand closer to everyday shoppers through live entertainment, interactive engagement, and complimentary product sampling.",
    tag: "Market Activation",
    tagColor: "text-purple-400 border-purple-400",
    _imageLoader: "event",
  },
  {
    id: "ev-9",
    folder: "goldenchinlaunch",
    brand: "Golden Bite Chin Chin",
    title: "Golden Bite Chin Chin Launch",
    meta: "September 2020 · Nigeria",
    description:
      "A product launch event introducing Golden Bite Chin Chin to consumers through brand presentation, product showcase, and engaging customer es.",
    tag: "Product Launch",
    tagColor: "text-sky-400 border-sky-400",
    _imageLoader: "event",
  },
  {
    id: "ev-10",
    folder: "honeywelledu",
    brand: "Honeywell",
    title: "Honeywell Nutrition Education",
    meta: "September 2020 · Lagos",
    description:
      "A nutrition-focused educational initiative creating awareness around healthy eating habits through expert discussions, interactive sessions, and community engagement — connecting the Honeywell brand with families and consumers.",
    tag: "Brand Activation",
    tagColor: "text-green-400 border-green-400",
    _imageLoader: "event",
  },
  {
    id: "ev-11",
    folder: "enugugpnl",
    brand: "Golden Penny Noodles",
    title: "Enugu GPNL — Brand Activation",
    meta: "September 2020 · Enugu",
    description:
      "A Golden Penny brand activation in Enugu designed to connect with consumers through engaging activities, product es, and interactive brand touchpoints — strengthening brand visibility within the community.",
    tag: "Brand Activation",
    tagColor: "text-pink-400 border-pink-400",
    _imageLoader: "event",
  },
  {
    id: "ev-12",
    folder: "gpnlkitchen",
    brand: "Golden Penny Noodles",
    title: "GPNL Children's Kitchen",
    meta: "September 2020 · Lagos",
    description:
      "A community-focused food e designed to engage children through cooking activities, learning, and interactive brand es — promoting food creativity, family engagement, and the Golden Penny brand.",
    tag: "Community Activation",
    tagColor: "text-teal-400 border-teal-400",
    _imageLoader: "event",
  },
  {
    id: "ev-13",
    folder: "goodmorningflakes",
    brand: "Good Morning Corn flakes",
    title: "GPNL Children's Kitchen",
    meta: "Lagos",
    description:
      "A community-focused food e designed to engage children through cooking activities, learning, and interactive brand es — promoting food creativity, family engagement, and the Golden Penny brand.",
    tag: "Community Activation",
    tagColor: "text-teal-400 border-teal-400",
    _imageLoader: "event",
  },
];

// Attach images from the events folder for migrated entries
fromEvents.forEach((a) => {
  a.images = loadEventImages(a.folder);
  a.image = a.images[0];
});

// ─────────────────────────────────────────────────────────────────────────────
// Original activations — images load from src/images/activations/<folder>/
// ─────────────────────────────────────────────────────────────────────────────
const originalActivations = [
  {
    id: 1,
    folder: "golden-penny-noodles-reloaded",
    brand: "Golden Penny / Honeywell",
    title: "Noodles Reloaded",
    meta: "Pan-Nigeria · In-Store Activation",
    description:
      "An in-store sales activation designed to create awareness and drive volume sales for the Golden Penny and Honeywell noodles brands across Nigeria.",
    tag: "In-Store Activation",
    tagColor: "text-blue-400 border-blue-400",
  },
  {
    id: 2,
    folder: "honeywellcamp",
    brand: "Golden Penny / Honeywell",
    title: "Noodles Fest — NYSC Camp Activation",
    meta: "Lagos · Abuja · Port Harcourt",
    description:
      "An awareness activation with sales and sampling at NYSC orientation camps in Lagos, Abuja, and Port Harcourt, engaging corps members with games, cook-offs, and giveaways.",
    tag: "Camp Activation",
    tagColor: "text-cyan-400 border-cyan-400",
  },
  {
    id: 3,
    folder: "amaizing-day-in-store",
    brand: "Amazing Day Cereal",
    title: "Amaizing Day In-Store Activation",
    meta: "Nationwide · Back-to-School Season",
    description:
      "Amazing Day Cereal integrated the back-to-school season with an in-store activity aimed at driving product trials and increasing sales — achieving a successful sell-out across all participating stores.",
    tag: "In-Store Activation",
    tagColor: "text-blue-400 border-blue-400",
  },
  {
    id: 4,
    folder: "spectranet-sales",
    brand: "Spectranet",
    title: "Sales & Reward Awareness Campaign",
    meta: "Targeted Neighbourhoods",
    description:
      "A proposed-and-launched campaign that strategically positioned sales representatives within targeted neighbourhoods while rewarding customers who made purchases — driving strong sales and engagement.",
    tag: "Sales Campaign",
    tagColor: "text-amber-400 border-amber-400",
  },
  {
    id: 5,
    folder: "flying-fish-scan-and-win",
    brand: "Flying Fish",
    title: "Scan and Win — Beer Promo",
    meta: "In-Store Activity",
    description:
      "A 'buy, scan, and win' in-store promotion that expanded Flying Fish's availability across target areas, resulting in a sold-out campaign that significantly boosted sales and consumer engagement.",
    tag: "Beer Promo",
    tagColor: "text-yellow-400 border-yellow-400",
  },
  {
    id: 6,
    folder: "golden-bite-chinchin",
    brand: "Golden Bite Chin-Chin",
    title: "Re-Distribution Drive",
    meta: "Nationwide Retail Outlets",
    description:
      "A 'Display and Win' initiative launched across retail outlets, with sales representatives deployed throughout the targeted region — resulting in a remarkable 100% surge in sales.",
    tag: "Redistribution Drive",
    tagColor: "text-sky-400 border-sky-400",
  },
  {
    id: 7,
    folder: "castle-lite-interactive-play",
    brand: "Castle Lite",
    title: "Interactive Play Event",
    meta: "Brand Experience Venue",
    description:
      "An interactive event designed to enhance brand awareness and recognition, extend brand longevity, and create a distinct venue atmosphere for a unique, engaging guest e.",
    tag: "Interactive Event",
    tagColor: "text-fuchsia-400 border-fuchsia-400",
  },
  {
    id: 8,
    folder: "mtv-base-flying-fish",
    brand: "Flying Fish × MTV Base",
    title: "MTV Base Day Sampling Event",
    meta: "Brand Partnership",
    description:
      "Flying Fish partnered with the MTV Base team to bring an iconic sampling event to life, creating a memorable, impactful e that led to increased demand and further brand opportunities.",
    tag: "Sampling Event",
    tagColor: "text-rose-400 border-rose-400",
  },
  {
    id: 9,
    folder: "golden-penny-noodles-relaunch",
    brand: "Golden Penny Noodles",
    title: "Dealers' Re-Launch Event",
    meta: "Dealer Engagement",
    description:
      "A fully managed and executed dealers' relaunch event for Golden Penny Noodles, delivering a seamless and memorable e for every participant from start to finish.",
    tag: "Product Re-Launch",
    tagColor: "text-sky-400 border-sky-400",
  },
  {
    id: 10,
    folder: "flying-fish-afro-rave",
    brand: "Flying Fish",
    title: "Afro Rave Event Arena Branding",
    meta: "GenZ Annual Gathering",
    description:
      "Flying Fish strategically partnered with the Afro Rave — an annual GenZ gathering centred on fun and music — for optimal brand visibility, consumer interaction, and engagement within its target demographic.",
    tag: "Festival Branding",
    tagColor: "text-fuchsia-400 border-fuchsia-400",
  },
  // {
  //   id: 11,
  //   folder: "golden-penny-semovita-horeca",
  //   brand: "Golden Penny Semovita",
  //   title: "HORECA Campaign",
  //   meta: "Hotels · Restaurants · Canteens",
  //   description:
  //     "Outlets were required to purchase a specified volume of Golden Penny products, with sales representatives stationed on-site to drive both purchase and sell-through — delivering a remarkable sales push.",
  //   tag: "HORECA Activation",
  //   tagColor: "text-green-400 border-green-400",
  // },
  // {
  //   id: 13,
  //   folder: "golden-penny-semovita-merchandising",
  //   brand: "Golden Penny Semovita",
  //   title: "Sales & Merchandising",
  //   meta: "Retail Point-of-Sale",
  //   description:
  //     "A sales and merchandising concept designed to encourage purchases, backed by a team of dedicated sales representatives driving consistent, excellent results for the brand.",
  //   tag: "Merchandising",
  //   tagColor: "text-green-400 border-green-400",
  // },
  // {
  //   id: 14,
  //   folder: "golden-penny-semovita-rewarding",
  //   brand: "Golden Penny Semovita",
  //   title: "Consumer Rewarding Scheme",
  //   meta: "Loyalty & Redemption",
  //   description:
  //     "An on-ground rewarding initiative that recognised and incentivised Golden Penny Semovita shoppers, strengthening brand loyalty at the point of purchase.",
  //   tag: "Rewarding Scheme",
  //   tagColor: "text-green-400 border-green-400",
  // },
  {
    id: 15,
    folder: "trophy-stout-in-bar",
    brand: "Trophy Stout",
    title: "In-Bar Activation",
    meta: "On-Trade Engagement",
    description:
      "An on-trade activation bringing the Trophy Stout brand directly into bars and social spots — engaging patrons with sampling, games, and giveaways.",
    tag: "In-Bar Activation",
    tagColor: "text-amber-400 border-amber-400",
  },
  {
    id: 19,
    folder: "honeywell-wheatmeal-nutrition-education",
    brand: "Honeywell Wheat Meal",
    title: "Nutrition Education Activation",
    meta: "Wet Sampling & Sales Awareness",
    description:
      "A nutrition education initiative combining wet sampling and sales awareness, using cook-along demonstrations to connect the brand with families and health-conscious consumers.",
    tag: "Nutrition Education",
    tagColor: "text-green-400 border-green-400",
  },
  // {
  //   id: 20,
  //   folder: "honeywell-wheatmeal-horeca-loyalty",
  //   brand: "Honeywell Wheat Meal",
  //   title: "HORECA Loyalty Scheme",
  //   meta: "Hotels · Restaurants · Canteens",
  //   description:
  //     "A loyalty scheme built for Honeywell Wheat Meal's HORECA partners — rewarding hotels, restaurants, and canteens for consistent purchase and brand advocacy.",
  //   tag: "HORECA Loyalty",
  //   tagColor: "text-green-400 border-green-400",
  // },
  {
    id: 21,
    folder: "honeywell-noodles-childrens-day",
    brand: "Honeywell Noodles",
    title: "Children's Day Activation — \"Spoil Your Kids\"",
    meta: "Nationwide Street Activation",
    description:
      "A colourful Children's Day street activation and TV tie-in that put smiles on thousands of children's faces while reinforcing Honeywell Noodles' family-friendly brand promise.",
    tag: "Children's Day",
    tagColor: "text-teal-400 border-teal-400",
  },
  // {
  //   id: 22,
  //   folder: "mr-chef",
  //   brand: "Mr. Chef",
  //   title: "Market Display and Win Activation",
  //   meta: "Open-Market Merchandising",
  //   description:
  //     "A market-wide display-and-win activation that transformed open-market stalls into eye-catching Mr. Chef branded showcases, rewarding vendors for standout displays.",
  //   tag: "Market Display",
  //   tagColor: "text-purple-400 border-purple-400",
  // },
  // {
  //   id: 23,
  //   folder: "cowbell-chocolate-drink-rural",
  //   brand: "Cowbell Chocolate Drink",
  //   title: "Reward for Excellence — Rural Market Road Show",
  //   meta: "2008",
  //   description:
  //     "A rural market roadshow and reward-for-excellence programme that took Cowbell Chocolate Drink into schools and communities with mascots, performances, and prizes.",
  //   tag: "Rural Roadshow",
  //   tagColor: "text-rose-400 border-rose-400",
  // },
  // {
  //   id: 24,
  //   folder: "onga-roadshow-cooking-contest",
  //   brand: "Onga",
  //   title: "Road Show / Cooking Contest",
  //   meta: "Community Engagement",
  //   description:
  //     "A roadshow and live cooking contest that brought the Onga seasoning brand into communities, blending entertainment with hands-on culinary engagement.",
  //   tag: "Cooking Contest",
  //   tagColor: "text-yellow-400 border-yellow-400",
  // },
  // {
  //   id: 25,
  //   folder: "ekulo-lagos-trade-fair",
  //   brand: "Ekulo Group of Companies",
  //   title: "Lagos International Trade Fair",
  //   meta: "Trade Fair Stand",
  //   description:
  //     "A fully branded stand and on-ground team representing the Ekulo Group of Companies portfolio at the Lagos International Trade Fair, driving product visibility and trade engagement.",
  //   tag: "Trade Fair",
  //   tagColor: "text-pink-400 border-pink-400",
  // },
  // {
  //   id: 26,
  //   folder: "sosaco-mobile-redemption",
  //   brand: "Sosaco Nig. Ltd",
  //   title: "Mobile Redemption Centre Campaign",
  //   meta: "Roving Redemption Unit",
  //   description:
  //     "A branded mobile redemption centre and stage unit that travelled to communities, giving consumers an on-the-spot way to redeem rewards and engage with the Sosaco brand.",
  //   tag: "Mobile Campaign",
  //   tagColor: "text-cyan-400 border-cyan-400",
  // },
  // {
  //   id: 27,
  //   folder: "sosaco-trade-fair",
  //   brand: "Sosaco",
  //   title: "Trade Fair",
  //   meta: "Trade Fair Stand",
  //   description:
  //     "A fully branded Sosaco trade fair stand featuring live performances and product showcases, drawing strong footfall and trade engagement.",
  //   tag: "Trade Fair",
  //   tagColor: "text-pink-400 border-pink-400",
  // },
];

// Attach gallery + thumbnail for original activations
originalActivations.forEach((a) => {
  a.images = loadActivationImages(a.folder);
  a.image = a.images[0];
});

// ─────────────────────────────────────────────────────────────────────────────
// Export: migrated events first (newest at top), then original activations
// ─────────────────────────────────────────────────────────────────────────────
export const activations = [...fromEvents, ...originalActivations];
