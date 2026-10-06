// src/data/eventPages.js  (separate from data/events.js, which keeps featuredEvent + pastEvents)
// ─────────────────────────────────────────────────────────────────────────────
// One object per event. EventDetail.jsx renders any of these by `slug`.
// To add a new event: copy an object, change the slug + content, done.
//
// Media: replace `src: null` with an imported file, e.g.
//   import award1 from "../assets/events/africa-brand-awards-2026/1.jpg";
//   { id: 1, src: award1, alt: "...", color: "from-amber-900 to-yellow-950" }
// `color` = Tailwind gradient used for the placeholder tile.
// IDs only need to be unique within an event.
//
// Optional sections (hidden automatically if missing/empty):
//   highlight, stats, videos, reactions, quote
// Use **double asterisks** inside story paragraphs for bold text.
// `icon` options: "trophy" | "award" | "star"
// ─────────────────────────────────────────────────────────────────────────────

export const eventPages = [
  {
    slug: "africa-brand-awards-2026",
    icon: "trophy",
    emoji: "🏆",

    // Hero
    badge: "Africa Brand Awards 2026",
    headline: "We Won.",
    headlineAccent: "Africa Took Notice.",
    highlight: {
      label: "Award Category",
      title: "Most Responsive Brand Activation & Marketing CEO of the Year",
    },
    intro:
      "A landmark recognition of Event Perspective Agency uncompromising commitment to speed, creativity, and results — honouring the leadership and vision that has defined our agency since day one.",

    // Stats bar
    stats: [
      { num: "2026", label: "Year of Award" },
      { num: "1st", label: "Time Winning" },
      { num: "Pan-African", label: "Recognition" },
      { num: "CEO", label: "Honoured" },
    ],

    // Story section
    story: {
      eyebrow: "The Story",
      title: "A Night That Defined a Legacy",
      paragraphs: [
        "On a landmark evening at the Africa Brand Awards 2026, Event Perspective Agency stepped to the podium to receive the continent's most coveted recognition in experiential marketing — the **Most Responsive Brand Activation & Marketing CEO of the Year** award. The ceremony, attended by hundreds of Africa's most influential brand leaders, agency executives, and media professionals, was a celebration of the agencies and individuals pushing the boundaries of what African marketing can achieve.",
        "The award specifically recognised Event Perspective Agency defining trait as an agency: our ability to respond — rapidly, decisively, and creatively — to whatever a brief demands, wherever it demands it. From 48-hour activation builds to multi-city roadshows assembled within days, our track record of turning urgent briefs into award-winning campaigns was placed front and centre by the judging panel.",
        "For our CEO, accepting the award was not a personal moment — it was a tribute to every member of the Event Perspective Agency team who has ever worked through the night, crossed state lines, and refused to accept \"it can't be done\" as an answer. This award belongs to all of us, and to every client who trusted us with their most critical moments.",
      ],
    },

    // Sticky certificate card beside the story
    featureCard: {
      presentedLabel: "Presented to",
      recipient: "Event Perspective Agency",
      titleLines: ["Most Responsive Brand Activation", "& Marketing CEO of the Year"],
      issuer: "Africa Brand Awards",
      year: "2026",
      tagline: "…We Build and Sustain Brands Vision",
    },

    // Photography
    gallery: {
      eyebrow: "Photography",
      title: "The Night in Pictures",
      description:
        "From the red carpet to the podium — every defining moment of our biggest night, captured frame by frame. Click any image to view the full gallery.",
    },
    images: [
      { id: 1, src: null, alt: "CEO receiving the Africa Brand Awards 2026 trophy on stage", color: "from-amber-900 to-yellow-950" },
      { id: 2, src: null, alt: "Award citation being read by the MC at the ceremony", color: "from-yellow-900 to-amber-950" },
      { id: 3, src: null, alt: "CEO with the award plaque — close-up portrait", color: "from-amber-950 to-orange-900" },
      { id: 4, src: null, alt: "Event Perspective Agency team celebrating at the gala table", color: "from-orange-900 to-amber-950" },
      { id: 5, src: null, alt: "CEO shaking hands with the Africa Brand Awards chairman", color: "from-amber-900 to-yellow-900" },
      { id: 6, src: null, alt: "Group photo — Event Perspective Agency team at the awards night", color: "from-yellow-950 to-amber-900" },
      { id: 7, src: null, alt: "The award trophy displayed on stage under the event spotlight", color: "from-amber-950 to-yellow-900" },
      { id: 8, src: null, alt: "CEO's acceptance speech at the podium", color: "from-orange-950 to-amber-900" },
    ],

    // Video
    videoSection: {
      eyebrow: "Video",
      title: "Watch the Night Unfold",
      description: "The announcement, the speech, the celebration — all on film. Click any clip to watch in full.",
    },
    videos: [
      { id: 9, src: null, alt: "Award ceremony highlight reel — the winning announcement", color: "from-amber-900 to-orange-950" },
      { id: 10, src: null, alt: "CEO acceptance speech — full recording", color: "from-yellow-900 to-amber-950" },
      { id: 11, src: null, alt: "Backstage celebrations — Event Perspective Agency team reactions", color: "from-orange-900 to-yellow-950" },
    ],

    // Reactions  (type: "press" | "industry" | "social")
    // reactionsSection: { eyebrow: "The Response", title: "What Africa Is Saying" },
    // reactions: [
    //   {
    //     type: "press",
    //     quote: "Event Perspective Agency has consistently set the benchmark for speed and creativity in brand activation. This recognition is long overdue.",
    //     source: "Marketing Edge Africa",
    //   },
    //   {
    //     type: "industry",
    //     quote: "In an industry where response time determines everything, Vantage have built a reputation for being first — and being flawless. This award captures exactly that.",
    //     source: "Nigeria Brand Convention",
    //   },
    //   {
    //     type: "social",
    //     quote: "Congratulations to the entire @VantageXperience team. You have shown that Nigerian agencies can and do compete with the best on the continent. Proud.",
    //     source: "Industry Leader, Twitter/X",
    //   },
    // ],

    // Big pull quote
    quote: {
      text: "This award is a testament to every team member who has delivered under pressure, every client who trusted us with their brand, and every Nigerian who believed that world-class experiential marketing could be built right here at home. We are just getting started.",
      author: "Event Perspective Agency CEO",
      context: "Africa Brand Awards 2026 — Acceptance Speech",
    },

    // Closing CTA
    cta: {
      eyebrow: "What's Next",
      title: "An Award Motivates. Results Define.",
      text: "This recognition fuels us to deliver even harder for our clients. If you want an agency that Africa recognises as the most responsive in the business, let's start a conversation about your next brief.",
      primaryLabel: "Start a Project",
      secondaryLabel: "View Our Work",
    },
    ctaBadge: {
      label: "Africa Brand Awards 2026",
      lines: ["Most Responsive Brand Activation", "& Marketing CEO of the Year"],
    },
  },

  // ── Add the next event here ────────────────────────────────────────────────
  // {
  //   slug: "next-event-slug",
  //   icon: "star",
  //   ...
  // },
];

export const getEventBySlug = (slug) => eventPages.find((e) => e.slug === slug);
