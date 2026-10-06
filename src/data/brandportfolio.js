import adc from "../images/portfolio/adc/adc.jpg";
import goldenpenny from "../images/portfolio/fmnportfolio/gpnlogo.jpg";
import dano from "../images/dano.png";
import ekulo from "../images/ekulogroup.jpg";
import flyingfish from "../images/flyingfish.jpg";
// import goldenpenny from "../images/goldenpenny.png";
import smirnoff from "../images/smirnoff.webp";
import samsung from "../images/samsung.png";
import honeywell from "../images/honeywell.png";
import hero from "../images/hero.jpg";
import image1 from "../images/portfolio/fmnportfolio/image1.jpg";
import image2 from "../images/portfolio/fmnportfolio/image2.jpg";
import image5 from "../images/portfolio/fmnportfolio/image5.jpg";
import image6 from "../images/portfolio/fmnportfolio/image6.jpeg";
import video4 from "../images/portfolio/fmnportfolio/video4.mp4";
import video2 from "../images/portfolio/fmnportfolio/video2.mp4";
import video3 from "../images/portfolio/fmnportfolio/video3.mp4";

import adc1 from "../images/portfolio/adc/adc1.jpg";
import adc2 from "../images/portfolio/adc/adc2.jpg";
import adc3 from "../images/portfolio/adc/adc3.jpg";
import adc4 from "../images/portfolio/adc/adc4.jpg";
import adc5 from "../images/portfolio/adc/adc5.jpg";
import adc6 from "../images/portfolio/adc/adc6.jpg";
import adc7 from "../images/portfolio/adc/adc7.jpg";
import adc8 from "../images/portfolio/adc/adc8.jpg";
import adc9 from "../images/portfolio/adc/adc9.jpg";

const rawBrandData = [
  { id: "nyscgpn", company: "Golden Penny Noodles", image: goldenpenny, gradient: "from-green-950 to-emerald-900", brief: "16-day TOMA brand activation at the NYSC Ekiti Orientation Camp — direct sampling, Mami Market trade merchandising and on-ground sales to build lasting brand trust.", link: "", },
  { id: "adc", company: "Amazing Day Cereal", image: adc, gradient: "from-[#2F5416] via-[#486F1B] to-[#1F350E]", brief: "Production management for the annual Food & Drink Festival — Nigeria's largest lifestyle event, drawing 80,000 visitors over 3 days.", link: "", },
  { id: "tbs", company: "Flour Mills of Nigeria", image: goldenpenny, gradient: "from-[#E8C547] to-[#4A410F]", brief: "Golden Penny Noodles was at the historic event as a sponsor of the event, which officially concluded with spectacular success and successfully broke the Guinness World Record for the largest audience gathering ever for a movie screening.", link: "", },
  { id: "samsung", company: "samsungwave", image: samsung, gradient: "from-indigo-950 to-violet-900", brief: "West Africa's first large-scale virtual summit — 14,000 attendees across 35 countries, pioneering hybrid event production.", link: "", },
  { id: "honeywell", company: "honeywell Energies", image: honeywell, gradient: "from-yellow-950 to-amber-950", brief: "Black-tie gala for 600 guests in Port Harcourt celebrating 60 years of operations, with live orchestra and HQ broadcast.", link: "", },
  { id: "hero", company: "Nestlé Nigeria", image: hero, gradient: "from-teal-950 to-green-950", brief: "Pan-Nigeria brand activation across 12 states — 240 pop-up installations driving direct consumer engagement for a product relaunch.", link: "", },
  { id: "flyingfish", company: "Flying Fish Africa", image: flyingfish, gradient: "from-red-950 to-rose-900", brief: "Annual Africa Leadership Conference for 500 senior executives from Flying Fish's 14 African markets — a 2-day strategy summit.", link: "", },
  { id: "smirnoff", company: "smirnoff Bank", image: smirnoff, gradient: "from-cyan-950 to-sky-900", brief: "30th anniversary rebrand launch event — 400-person celebration introducing smirnoff's new visual identity to media and investors.", link: "", },
  { id: "ekulogroup", company: "ekulogroup Bank", image: ekulo, gradient: "from-slate-900 to-navy-800", brief: "ekulogroup Tech Fair — a 3-day fintech showcase at the Lagos Continental Hotel hosting 50 startups and 3,000 industry visitors.", link: "", },
];

export const brandData = rawBrandData.map((b) => ({ ...b, link: `/portfolio/${b.id}` }));

export const brandDetails = {
  nyscgpn: {
    company: "Golden Penny Noodles",
    image: goldenpenny,
    gradient: "from-[#064E3B] via-[#0F6B4A] to-[#064E3B]",
    accentBg: "bg-emerald-950",
    tag: "Brand Activation · Roadshow",
    tagline: "Winning the hearts of Nigeria's youth corps members, one sample at a time.",
    date: "August 2026",
    location: "Ekiti · NYSC Camp",
    client: "Flour Mills of Nigeria",
    scope: "Product sampling, direct sales & consumer engagement",
    stats: [
      { num: "1", label: "City" },
      { num: "16", label: "Days" },
      { num: "2M+", label: "Consumers Reached" },
      { num: "98%", label: "Brand Recall Score" },
    ],
    overview: "Golden Penny Foods delivered a TOMA (Top-of-Mind Awareness) brand activation during the NYSC orientation period, running from August 10th to August 25th, 2026. Through sales and direct sampling, the activation built lasting impressions on Nigerian youth corps members — aligning every Golden Penny brand with excitement and product quality to build lasting consumer trust.",
    challenge: "During the activation, Golden Penny Noodles faced significant visibility and supply-chain hurdles that limited full sales conversion. In the Mami Market, Indomie’s established sales and display dominance created a high competitive bar, emphasizing the need for Golden Penny to strengthen its retail engagement and physical presence. This challenge was compounded by key availability gaps: despite strong consumer interest generated by sampling, Choco could not fully capitalize on demand due to limited retail stock, while high vendor demand for the Golden Penny Chicken variant went unfulfilled, leading to directly missed sales opportunities.",
    approach: "To counter Indomie’s established dominance in the Mami Market and bridge availability gaps, we executed a trade-focused strategy centered on high-impact retail merchandising and streamlined stock replenishment. We partnered directly with Mami Market vendors by equipping them with branded POS displays and trade incentives to secure prime shelf positioning over the competition. To resolve stockouts, we optimized daily supply routes to ensure high-demand SKUs—specifically Golden Penny Chicken Noodles—and newly sampled products like Choco were continuously stocked and immediately accessible at vendor points of sale, seamlessly turning consumer interest from sampling into direct purchases.",
    execution: "Golden Penny Foods executed a 16-day TOMA brand activation at the NYSC Ekiti Orientation Camp from August 10–25, 2026, combining direct product sampling with on-ground sales to build brand trust among Nigerian corps members. The activation delivered strong product trial, sustained consumer engagement and measurable sales conversion — while surfacing clear, actionable opportunities for future camp partnerships.",
    result: "The strategy successfully established Golden Penny as a dominant brand within the NYSC Ekiti camp, effectively transforming competitive friction into measurable retail traction. By securing high-visibility display space across key Mami Market vendors, we successfully challenged Indomie’s market presence and drove continuous brand engagement throughout the 16-day period. Furthermore, resolving the supply chain bottlenecks eliminated missed sales opportunities, driving a high conversion rate from direct product sampling to immediate retail purchase, generating thousands of product trials, and building lasting Top-of-Mind Awareness (TOMA) among the young consumer demographic.",
    media: [
      { type: "image", src: image1, caption: "Corps members with Golden Penny sachets at the NYSC Ekiti Orientation Camp", color: "from-emerald-900 to-green-950", icon: "🏕️" },
      { type: "image", src: image5, caption: "Photo-frame engagement — corps member with a Golden Penny sample", color: "from-green-900 to-teal-950", icon: "🍜" },
      { type: "video", src: video2, caption: "Golden Penny Noodles display — improved-taste range on the stand", color: "from-teal-900 to-emerald-950", icon: "▶" },
      { type: "image", src: image6, caption: "Corps member enjoying Golden Penny at the branded photo frame", color: "from-emerald-950 to-green-900", icon: "🤝" },
      { type: "image", src: image2, caption: "Sampling in action — corps member with a Golden Penny drink cup", color: "from-green-950 to-teal-900", icon: "🛒" },
      { type: "video", src: video3, caption: "Choco sampling on display at the Golden Penny stand", color: "from-teal-950 to-green-900", icon: "▶" },
      { type: "video", src: video4, caption: "Golden Penny Products display", color: "from-teal-950 to-green-900", icon: "▶" },
    ],
    testimonial: { quote: "EPA didn't just execute an event — they built an e that made 5G real for millions of Nigerians overnight. The energy, the precision, the storytelling — it was exactly what we needed.", author: "Kunle Elebute", title: "Chief Marketing Officer, gbfoods Nigeria" },
  },

  adc: {
    company: "Amazing Day cereal",
    image: adc,
    gradient: "from-[#2F5416] via-[#486F1B] to-[#1F350E]",
    accentBg: "bg-blue-950",
    tag: " Brand Activation · Product Management",
    tagline: "Three days. 80,000 guests. One unforgettable festival.",
    date: "December 2022",
    location: "Pan-Nigerian",
    client: "Flour Mills Nigeri Plc",
    scope: " Vendor Management · Brand Activations · Operations",
    stats: [
      { num: "7", label: "Months" },
      { num: "30", label: "Outlets" },
      // { num: "₦1.2B", label: "Vendor Transactions" },
      // { num: "220+", label: "Food & Drink Stalls" },
    ],
    overview: "The castlelite Food & Drink Festival is Nigeria's most beloved lifestyle event — a three-day celebration of food, culture, music, and community that draws tens of thousands of Lagos residents every December. As the sole production partner for the 2022 edition, EPA  was responsible for every aspect of the event's physical execution, from site construction to live entertainment and brand activation management.",
    challenge: "The sheer scale of the 2022 festival created layered logistical complexity: 220 vendor stalls across a 15,000 sqm outdoor site, four live performance stages running simultaneously, seven branded sponsor activation zones, and a peak attendance projection of over 27,000 visitors on the final day. All of this had to operate safely, seamlessly, and in line with castlelite's premium brand standards.",
    approach: "We structured the festival around a 'village' concept — grouping vendors into themed food districts (West African, Continental, Street Food, Artisan Beverages) to create intuitive wayfinding and reduce congestion. Each district had its own visual identity within the overarching castlelite brand framework. Our production team designed bespoke stall structures that could be personalized by vendors while maintaining a cohesive aesthetic across the entire site.",
    execution: "The build phase took 11 days, with a crew of 340 workers on site simultaneously at peak. We installed 4km of fencing, 18 temporary structures, 6 generators honeywellling 2.4MW of power, and a custom drainage system to manage the December rain risk. Our traffic and crowd management plan — developed in partnership with the Lagos State Traffic Management Authority — reduced queue times at entry gates by 62% compared to the 2021 edition.",
    result: "The 2022 edition set every record in the festival's history: 80,000 cumulative visitors, ₦1.2 billion in vendor transactions, and a net promoter score of 91 among attendees. castlelite's social media team recorded 14 million event-related impressions over the three days, and the festival trended nationally on Twitter for all three consecutive evenings.",
    media: [
      { type: "image", src: adc1,  },
      { type: "image", src: adc2,  },
      { type: "image", src: adc3,  },
      { type: "image", src: adc4,  },
      { type: "image", src: adc5,  },
      { type: "image", src: adc6,  },
      { type: "video", src: null,  },
      { type: "image", src: adc7,  },
      { type: "image", src: adc8,  },
      { type: "image", src: adc9,  },
      { type: "video", src: null,  },
    ],
    testimonial: { quote: "Year after year, the castlelite Food & Drink Festival raises the bar for what a Nigerian lifestyle event can be. This year, EPA  helped us set a benchmark we're still proud of.", author: "Segun Agbaje", title: "Group CEO, Guaranty Trust Holding Company" },
  },

  tbs: {
    company: "Golden Penny Noodles",
    image: goldenpenny,
    gradient: "from-[#5A4700] via-[#1A1600] to-[#5A4700]",
    accentBg: "bg-black-950",
    tag: "Movie Premier · Event",
    tagline: "Flavoring the Moments That Make History",
    date: "September 2026",
    location: "TBS ONIKAN, LAGOS",
    client: "Flour Mills of Nigeria",
    scope: "Brand Activation · Event · Entertainment",
    stats: [
      { num: "2999", label: "Dignitaries" },
      { num: "1", label: "Governer" },
      { num: "8", label: "Hours Runtime" },
      { num: "12", label: "Countries on Broadcast" },
    ],
    overview: "Golden Penny Noodles was at the historic event as a sponsor of the event, which officially concluded with spectacular success and successfully broke the Guinness World Record for the largest audience gathering ever for a movie screening.The event took place on Saturday night, September 26, 2026, at the iconic Tafawa Balewa Square (TBS) in Lagos. Over 51,000 certified audience members were in attendance, and Golden Penny Noodles marked its presence by providing the audience with “a taste of good food",
    challenge: "The main challenges during the activation centered on operational bottlenecks, venue vulnerabilities, and poor audience expectation management. The outdoor setup at TBS lacked a rainy-weather contingency plan, leaving the venue exposed to adverse weather. Delays occurred right at entry when brand ambassadors were stalled by barcode access requirements, cutting sampling manpower during peak hours. Furthermore, regular attendees were directed into the VIP area, compromising event exclusivity and making key stakeholders hard to identify. Negative sentiment quickly grew among the crowd, who mistakenly assumed sampling was included in their ticket fee, leading to severe congestion and pressure on the team even after wet sampling had concluded.",
    approach: "The activation deployed a **Multi-Pillar Experiential and High-Profile Brand Positioning Strategy** to transform Golden Penny into a premium cultural symbol. This approach integrated four execution pillars: **strategic cultural alignment** via the Guinness World Record attempt and film premiere; **flawless executive protocol management** during presentations to top dignitaries; **high-impact visual immersion** using illuminated lightboxes and custom backdrops; and **mass wet sampling** serving warm, premium-packaged noodles on schedule.",
    execution: "The activation successfully elevated Golden Penny's positioning by linking the brand to Nigerian pride, excellence, and a landmark cultural moment combining a Guinness World Record attempt with a major film premiere. Operational execution was seamless, with kitchen and sampling stations running strictly on schedule, serving warm noodles in premium packaging that reinforced the brand's high-quality image. High-impact branding assets—including the Experience Center, cube boxes, lightboxes, and backdrops—drove strong visual recall throughout the event. Crucially, VIP engagement was a major highlight: attendance among senior dignitaries, including the Deputy Governor, was robust, and the Tier 1 package presentation to the Governor was delivered with complete respect and zero protocol breaches.",
    result: "The activation achieved strong, measurable brand outcomes by establishing Golden Penny as a high-quality, premium product through seamless Tier 1 VIP engagement, flawless dignitary presentations with zero protocol breaches, and high-recall visual immersion across custom event assets. Operational success was further demonstrated through strict adherence to kitchen and sampling schedules, though field performance faced notable friction from unmitigated rainy weather exposure, severe crowd congestion due to ticket fee misperceptions, VIP perimeter leaks, and entry access delays.",
    media: [
      { type: "image", src: null, caption: "Stage reveal — the 'Foundation to Future' set at full light", color: "from-orange-900 to-amber-950", icon: "🎭" },
      { type: "image", src: null, caption: "Arrival gallery — guests entering the gala space", color: "from-amber-900 to-orange-950", icon: "🎩" },
      { type: "video", src: null, caption: "Full gala highlight film — 4 min cut", color: "from-orange-950 to-red-900", icon: "▶" },
      { type: "image", src: null, caption: "Live orchestra performance — anniversary tribute set", color: "from-red-950 to-orange-900", icon: "🎻" },
      { type: "image", src: null, caption: "Custom LED stage fabrication — final test before doors open", color: "from-amber-950 to-yellow-900", icon: "⚙️" },
      { type: "video", src: null, caption: "Broadcast director's suite — live production footage", color: "from-yellow-950 to-amber-900", icon: "▶" },
    ],
    testimonial: { quote: "EPA delivered a night that 60 years of dano history deserved. The production quality, the storytelling, the precision — it was world-class in every dimension.", author: "Aliko dano", title: "President & CEO, dano Industries Limited" },
  },

  // samsung: {
  //   company: "samsungwave",
  //   image: samsung,
  //   gradient: "from-indigo-950 via-violet-900 to-indigo-950",
  //   accentBg: "bg-violet-950",
  //   tag: "Virtual Summit · Hybrid Production",
  //   tagline: "West Africa's first major virtual summit — 14,000 attendees, 35 countries, zero lag.",
  //   date: "September 2020",
  //   location: "Virtual — broadcast from Lagos Production Studio",
  //   client: "samsungwave Technology Solutions",
  //   scope: "Virtual Event Production · Studio Build · Broadcast Direction · Platform Integration",
  //   stats: [
  //     { num: "14,000", label: "Attendees" },
  //     { num: "35", label: "Countries" },
  //     { num: "6", label: "Hours Broadcast" },
  //     { num: "99.9%", label: "Uptime" },
  //   ],
  //   overview: "In September 2020, with the world in the grip of the pandemic, samsungwave needed to host its annual payments summit — and the concept of a physical gathering was impossible. EPA  was challenged to produce West Africa's most ambitious virtual event ever attempted: a six-hour live broadcast summit connecting 14,000 fintech professionals across 35 countries.",
  //   challenge: "No comparable event had been attempted at this scale from Nigeria. The technical infrastructure, the broadcast quality, the speaker management across 8 time zones, the engagement tools for a virtual audience of thousands — none of this had an established playbook in the West African context. We were, in many respects, inventing the process as we built it.",
  //   approach: "We constructed a purpose-built broadcast studio inside a Lagos facility in just 18 days — a four-set environment with independent camera rigs, a graphics engine running real-time brand overlays, and a dedicated fibre connection backed by a satellite uplink failover. The virtual event platform was custom-integrated with samsungwave's existing CRM so that session registrations, Q&A submissions, and networking matchmaking all ran within a single seamless environment.",
  //   execution: "On summit day, our broadcast team of 22 managed a 6-hour continuous live production — cutting between studio presenters, remote speakers dialling in from San Francisco, London, and Nairobi, and pre-produced case study films. A dedicated technical producer monitored stream quality in real-time, and our contingency protocols (including the satellite uplink) meant the broadcast ran at 99.9% uptime across the entire six hours.",
  //   result: "14,000 registered attendees from 35 countries participated, with a peak concurrent viewership of 9,200. Post-event surveys recorded an average session satisfaction score of 4.7 / 5.0. The summit generated extensive press coverage, with TechCrunch, Forbes Africa, and Disrupt Africa all citing it as a landmark moment for the African tech events industry. samsungwave retained EPA as production partner for all subsequent summits.",
  //   media: [
  //     { type: "image", src: null, caption: "Purpose-built broadcast studio — 4-set configuration", color: "from-violet-900 to-indigo-950", icon: "🎙️" },
  //     { type: "video", src: null, caption: "Summit opening sequence — live broadcast cut", color: "from-indigo-900 to-purple-950", icon: "▶" },
  //     { type: "image", src: null, caption: "Broadcast director's gallery — 6-hour operations", color: "from-purple-950 to-violet-900", icon: "📺" },
  //     { type: "image", src: null, caption: "Studio set design — keynote stage", color: "from-violet-950 to-indigo-900", icon: "💡" },
  //     { type: "video", src: null, caption: "18-day studio build time-lapse", color: "from-indigo-950 to-violet-900", icon: "▶" },
  //     { type: "image", src: null, caption: "Remote speaker technical check — multi-timezone coordination", color: "from-purple-900 to-indigo-950", icon: "🌍" },
  //   ],
  //   testimonial: { quote: "EPA built us a broadcast studio in 18 days and produced a world-class summit from Lagos that competed with anything coming out of Silicon Valley. I didn't think it was possible.", author: "Olugbenga Agboola", title: "CEO & Co-founder, samsungwave" },
  // },

  // honeywell: {
  //   company: "honeywell Energies",
  //   image: honeywell,
  //   gradient: "from-yellow-950 via-amber-950 to-yellow-950",
  //   accentBg: "bg-amber-950",
  //   tag: "Black-Tie Gala · Broadcast",
  //   tagline: "A night of elegance honouring 60 years of powering Nigeria.",
  //   date: "November 2021",
  //   location: "Port Harcourt Civic Centre, Rivers State",
  //   client: "honeywellEnergies Marketing Nigeria Plc",
  //   scope: "Gala Production · Set Design · Live Orchestra · International Broadcast",
  //   stats: [
  //     { num: "600", label: "Guests" },
  //     { num: "60", label: "Years Celebrated" },
  //     { num: "24", label: "Orchestra Musicians" },
  //     { num: "8", label: "Broadcast Countries" },
  //   ],
  //   overview: "honeywellEnergies Marketing Nigeria engaged EPA  to produce a black-tie gala in Port Harcourt celebrating 60 years of operations in Nigeria — a landmark evening for 600 of the energy sector's most senior leaders, accompanied by a live broadcast for audiences at honeywellEnergies offices across 8 countries.",
  //   challenge: "Port Harcourt presents unique production challenges: limited specialist vendor infrastructure, extreme heat and humidity, and the logistical complexity of transporting high-end production equipment from Lagos while maintaining international quality standards. The international broadcast requirement added a further layer of technical and diplomatic complexity, as the stream needed to serve audiences from Paris to Johannesburg simultaneously.",
  //   approach: "We designed an opulent yet understated set aesthetic — drawing on the dual identity of the oil industry's precision and Nigeria's rich cultural heritage. Deep navy velvet draping, brass accents, and custom floral installations in honeywellEnergies' red and white palette created an environment that felt both globally premium and unmistakably Nigerian. A 24-piece live orchestra provided the musical foundation throughout the evening.",
  //   execution: "Our Lagos team transported 18 tonnes of equipment by road to Port Harcourt across 72 hours, including the full orchestra risers, a custom 14-metre stage, broadcast cameras, and a satellite uplink unit. The on-ground crew of 120 assembled the entire environment in 36 hours — the tightest build window of any comparable event we had produced.",
  //   result: "600 guests — including Nigeria's Minister of Petroleum, the French Ambassador, and honeywellEnergies' Global CEO Pierre-Yves de Montferrand — attended the gala, which ran to the minute of its planned programme. The broadcast was received without interruption across all 8 countries. Post-event client feedback rated overall production quality at 9.8/10, the highest score EPA had received to that date.",
  //   media: [
  //     { type: "image", src: null, caption: "Gala room reveal — full set dressed and lit", color: "from-amber-900 to-yellow-950", icon: "✨" },
  //     { type: "image", src: null, caption: "Live orchestra performance — anniversary tribute", color: "from-yellow-900 to-amber-950", icon: "🎻" },
  //     { type: "video", src: null, caption: "Gala evening highlights — official film", color: "from-amber-950 to-orange-900", icon: "▶" },
  //     { type: "image", src: null, caption: "Guest arrival e — red carpet sequence", color: "from-orange-950 to-amber-900", icon: "🎩" },
  //     { type: "image", src: null, caption: "Equipment convoy — Lagos to Port Harcourt", color: "from-yellow-950 to-orange-950", icon: "🚛" },
  //     { type: "video", src: null, caption: "36-hour build — condensed setup footage", color: "from-orange-900 to-yellow-950", icon: "▶" },
  //   ],
  //   testimonial: { quote: "Producing this event in Port Harcourt to an international broadcast standard would have been impossible without EPA. They made it look effortless.", author: "Mike Sangster", title: "Managing Director, honeywellEnergies Marketing Nigeria" },
  // },

  // hero: {
  //   company: "Nestlé Nigeria",
  //   image: hero,
  //   gradient: "from-teal-950 via-green-950 to-teal-950",
  //   accentBg: "bg-teal-950",
  //   tag: "National Brand Activation · Consumer Engagement",
  //   tagline: "240 pop-ups. 12 states. One powerful product story.",
  //   date: "March – May 2023",
  //   location: "12 States across Nigeria",
  //   client: "Nestlé Nigeria Plc",
  //   scope: "Experiential Activation · Pop-Up Design · Consumer Research Integration · Influencer Coordination",
  //   stats: [
  //     { num: "240", label: "Pop-Up Installations" },
  //     { num: "12", label: "States" },
  //     { num: "3", label: "Months Duration" },
  //     { num: "1.4M", label: "Consumers Engaged" },
  //   ],
  //   overview: "Nestlé Nigeria tasked EPA  with producing the national launch activation for a reformulated product line — a programme that needed to create genuine consumer trial and emotional connection at scale, reaching shoppers across both urban and semi-urban markets in 12 Nigerian states simultaneously over three months.",
  //   challenge: "The product relaunch targeted a broad demographic spanning age, income, and geography. Creating a single activation concept powerful enough to resonate in Lekki and Kano, in an Abuja mall and an Onitsha open market, required a flexible design language that maintained consistency of brand message while allowing for deep local adaptation. The sheer logistics of 240 simultaneous installations also demanded a coordination infrastructure unlike anything we had built before.",
  //   approach: "We developed a modular pop-up structure — the 'Nestlé Tasting Pavilion' — engineered in four panel sections that could be assembled by two people in under 45 minutes without tools. Each pavilion was finished in Nestlé's brand colours with digital screens displaying locally sourced cooking content, and staffed by trained brand ambassadors who guided consumers through a sampling and discovery journey in the dominant local language.",
  //   execution: "EPA deployed 6 regional field supervisors, each managing a fleet of 40 pavilions across assigned states. A real-time dashboard — built by our technology team — tracked daily footfall, sample distribution, and consumer feedback from every pavilion, allowing the Nestlé marketing team to see live performance data across the entire programme. Underperforming locations were identified and re-briefed within 48 hours.",
  //   result: "The three-month programme reached 1.4 million consumers directly through sampling and engagement. Consumer research conducted during the activation showed a 68% repurchase intention rate among those who participated in the full journey. Retail sell-through of the relaunched product exceeded Nestlé's 90-day target by 34%. The programme was shortlisted for the SABRE Africa Award for Best Consumer Activation 2023.",
  //   media: [
  //     { type: "image", src: null, caption: "Tasting Pavilion — Ikeja City Mall, Lagos", color: "from-green-900 to-teal-950", icon: "🌿" },
  //     { type: "image", src: null, caption: "Brand ambassador engagement — Kano market activation", color: "from-teal-900 to-green-950", icon: "🤝" },
  //     { type: "video", src: null, caption: "Programme overview film — all 12 states", color: "from-green-950 to-teal-900", icon: "▶" },
  //     { type: "image", src: null, caption: "Real-time dashboard — live programme performance monitor", color: "from-teal-950 to-emerald-900", icon: "📊" },
  //     { type: "image", src: null, caption: "Pavilion modular build — 45-minute assembly sequence", color: "from-emerald-950 to-teal-900", icon: "⚙️" },
  //     { type: "video", src: null, caption: "Consumer reactions — sampler feedback compilation", color: "from-teal-900 to-green-900", icon: "▶" },
  //   ],
  //   testimonial: { quote: "The scale of what EPA delivered — 240 locations, live data, consistent brand e — was extraordinary. They didn't just activate our product; they built us a real-time consumer intelligence system.", author: "Wassim Elhusseini", title: "Managing Director, Nestlé Nigeria Plc" },
  // },

  // flyingfish: {
  //   company: "Flying Fish Africa",
  //   image: flyingfish,
  //   gradient: "from-red-950 via-rose-900 to-red-950",
  //   accentBg: "bg-red-950",
  //   tag: "Executive Conference · Pan-African Summit",
  //   tagline: "500 executives. 14 markets. One defining strategic conversation.",
  //   date: "October 2023",
  //   location: "Eko Hotels & Suites, Lagos",
  //   client: "Flying Fish Africa Plc",
  //   scope: "Conference Production · Stage Design · Content Production · Delegate E",
  //   stats: [
  //     { num: "500", label: "Executives" },
  //     { num: "14", label: "African Markets" },
  //     { num: "2", label: "Days" },
  //     { num: "48", label: "Speakers & Panellists" },
  //   ],
  //   overview: "Flying Fish Africa brought together the senior leadership of all 14 of its African market operations for its annual Leadership Conference — a two-day strategic summit focused on the company's next growth phase across the continent. EPA  produced the full conference e, from stage design and technical direction to delegate journey and entertainment.",
  //   challenge: "A gathering of 500 senior executives representing markets as diverse as Nigeria, Uganda, Madagascar, and Tanzania required a conference environment that felt simultaneously relevant to all and dominated by none. The programme — which included a keynote from the Group CEO, 12 breakout sessions, four panel discussions, and a gala dinner — demanded flawless production across an extremely dense two-day schedule.",
  //   approach: "We designed the conference around the metaphor of a continent in motion: a curved stage set suggesting the arc of Africa's geography, with a 24-metre panoramic LED backdrop displaying data-driven content visualisations custom-built for each session. The breakout environment was structured as a 'marketplace of ideas' — open-plan pods with modular seating that could be reconfigured between sessions in under 8 minutes.",
  //   execution: "Our content team produced 34 bespoke session graphics packages in the six weeks before the event, working with Flying Fish's strategy, marketing, and regional teams across 5 countries. On the conference days, a dedicated producer was embedded with each of the four breakout streams, running real-time content and AV to ensure every session began and ended precisely on schedule across the entire programme.",
  //   result: "Post-conference surveys from Flying Fish delegates recorded an average e rating of 4.8 / 5.0. The gala dinner on Day 2 — themed around 'The African Table' — was singled out by 76% of respondents as a highlight of the conference e. Flying Fish Africa retained EPA for a 3-year conference production partnership following the event.",
  //   media: [
  //     { type: "image", src: null, caption: "Main stage — Group CEO keynote opening", color: "from-red-900 to-rose-950", icon: "🎤" },
  //     { type: "image", src: null, caption: "Panoramic LED backdrop — continental data visualisation", color: "from-rose-900 to-red-950", icon: "📺" },
  //     { type: "video", src: null, caption: "Conference highlights — Day 1 & Day 2", color: "from-red-950 to-rose-900", icon: "▶" },
  //     { type: "image", src: null, caption: "Breakout marketplace — idea pod configuration", color: "from-rose-950 to-red-900", icon: "💡" },
  //     { type: "image", src: null, caption: "African Table gala dinner — 500-guest setup", color: "from-red-900 to-rose-900", icon: "🍽️" },
  //     { type: "video", src: null, caption: "Behind the scenes — 34-package content production sprint", color: "from-rose-900 to-red-950", icon: "▶" },
  //   ],
  //   testimonial: { quote: "The quality of production, the delegate e, the storytelling on that stage — it set a new standard for what a pan-African executive conference should feel like. EPA have become a true strategic partner for us.", author: "Segun Oguike", title: "Group Chief People Officer, Flying Fish Africa" },
  // },

  // smirnoff: {
  //   company: "smirnoff Bank",
  //   image: smirnoff,
  //   gradient: "from-cyan-950 via-sky-900 to-cyan-950",
  //   accentBg: "bg-sky-950",
  //   tag: "Rebrand Launch · Anniversary Gala",
  //   tagline: "A 30-year institution steps boldly into a new identity.",
  //   date: "January 2023",
  //   location: "Federal Palace Hotel, Victoria Island, Lagos",
  //   client: "smirnoff Financial Holdings Company Plc",
  //   scope: "Launch Event Production · Identity Reveal · Media E · Broadcast",
  //   stats: [
  //     { num: "400", label: "Guests" },
  //     { num: "30", label: "Years Celebrated" },
  //     { num: "62", label: "Media Outlets in Attendance" },
  //     { num: "18M", label: "Launch Day Impressions" },
  //   ],
  //   overview: "smirnoff Bank marked its 30th anniversary with a complete rebrand — a new name, new visual identity, and a new strategic positioning as a financial holding company. EPA  was commissioned to produce the brand launch event: a 400-person evening for investors, media, regulators, and staff that would serve as the unveiling moment for smirnoff's next chapter.",
  //   challenge: "A rebrand launch is one of the most technically and emotionally demanding events in the corporate calendar. The identity reveal is a single, unrepeatable moment — and the entire event builds to it. Every element of the room, the programme, and the guest e needed to hold the secret while building anticipation, then deliver a reveal powerful enough to be remembered by 62 media organisations and shared across the country.",
  //   approach: "We built the entire event around the tension of transformation — the old identity present in the room's opening state, gradually yielding to the new as the evening progressed. The stage set featured a physical curtain structure 16 metres wide that served as the literal reveal mechanism. The room's colour palette shifted through theatrical lighting from smirnoff's old burgundy tones to the new identity's vibrancy over the first hour, before the full reveal landed.",
  //   execution: "The reveal sequence — a three-minute multimedia moment combining film, live narration, practical lighting transitions, and the physical curtain drop — was rehearsed 11 times across two days. Our technical director operated the sequence from a custom cue sheet with 43 individual timed cues. The moment the new identity appeared on the 20-metre reveal surface, the room responded with a standing ovation that lasted over two minutes.",
  //   result: "The launch generated 18 million social media impressions on launch day alone — a record for a Nigerian financial sector rebrand. 62 media outlets covered the event, including Channels TV, TechCabal, BusinessDay, and the Financial Times Africa. smirnoff Financial Holdings confirmed that investor enquiries increased by 43% in the four weeks following the launch event.",
  //   media: [
  //     { type: "image", src: null, caption: "Reveal moment — new identity on the 20-metre surface", color: "from-sky-900 to-cyan-950", icon: "✨" },
  //     { type: "image", src: null, caption: "Pre-reveal room state — anticipation build", color: "from-cyan-900 to-sky-950", icon: "🎭" },
  //     { type: "video", src: null, caption: "The reveal sequence — full 3-minute moment", color: "from-sky-950 to-cyan-900", icon: "▶" },
  //     { type: "image", src: null, caption: "Curtain structure — 16m reveal mechanism rigging", color: "from-cyan-950 to-sky-900", icon: "⚙️" },
  //     { type: "image", src: null, caption: "Media row — 62 outlets at the launch", color: "from-sky-900 to-cyan-900", icon: "📸" },
  //     { type: "video", src: null, caption: "Rebrand launch highlights — official film", color: "from-cyan-900 to-sky-950", icon: "▶" },
  //   ],
  //   testimonial: { quote: "The reveal moment EPA created was everything we hoped a 30-year milestone could be. It wasn't just a product launch — it was a declaration. The whole room felt it.", author: "Abubakar Suleiman", title: "Managing Director & CEO, smirnoff Financial Holdings" },
  // },

  // ekulogroup: {
  //   company: "ekulogroup Bank",
  //   image: ekulo,
  //   gradient: "from-slate-900 via-navy-800 to-slate-900",
  //   accentBg: "bg-slate-900",
  //   tag: "Tech Expo · Fintech Showcase",
  //   tagline: "Where Nigeria's next generation of fintech meets the capital that fuels it.",
  //   date: "July 2023",
  //   location: "Lagos Continental Hotel, Victoria Island",
  //   client: "ekulogroup Bank Plc",
  //   scope: "Expo Production · Startup Curation · Investment Forum · Digital E",
  //   stats: [
  //     { num: "50", label: "Startups Showcased" },
  //     { num: "3", label: "Days" },
  //     { num: "3,000", label: "Industry Visitors" },
  //     { num: "₦2.3B", label: "Investment Discussions Facilitated" },
  //   ],
  //   overview: "The ekulogroup Bank Tech Fair is Nigeria's premier fintech and technology showcase — a three-day event designed to connect Nigeria's most promising technology startups with the investors, regulators, and corporate partners who can accelerate them. EPA  was engaged to produce the 2023 edition in its entirety, from startup selection support to physical expo design and the investment forum programme.",
  //   challenge: "A technology fair presents different creative challenges from most events: the primary 'content' is the 50 companies on the floor, and the event design must showcase them rather than overshadow them. At the same time, ekulogroup Bank's brand needed to be meaningfully present without the fair feeling like a pure bank advertisement. Balancing the startup energy with the gravitas of a tier-one financial institution is a genuinely difficult creative problem.",
  //   approach: "We designed the fair around an open-plan 'startup street' concept — 50 custom-built booth units of equal scale and format, ensuring no startup felt disadEPAd by their location or budget. The booths were pure white, allowing each startup's own brand identity to dominate, while ekulogroup Bank's presence was felt through premium shared infrastructure: a gold-accented central bar, a floating main stage, and a curated investor lounge.",
  //   execution: "The investor lounge — a dedicated 200-seat private environment within the wider fair — hosted 14 structured matchmaking sessions over the three days, connecting 50 startups with 38 pre-qualified investors. Our events team coordinated the scheduling, documentation, and facilitation of every session. A live demo theatre running on the hour showcased selected startups to wider audiences, with professional filming for post-event distribution.",
  //   result: "3,000 industry visitors attended across the three days. 38 startups reported entering formal investment conversations during or immediately after the fair, with a combined deal pipeline estimated at ₦2.3 billion. The fair received the Best Corporate Fintech Initiative Award at the Nigeria Fintech Awards 2023, and ekulogroup Bank extended EPA's mandate to produce the 2024 and 2025 editions.",
  //   media: [
  //     { type: "image", src: null, caption: "Startup Street — 50 booth units, opening morning", color: "from-slate-800 to-navy-900", icon: "🏢" },
  //     { type: "image", src: null, caption: "Investor lounge — matchmaking session in progress", color: "from-navy-800 to-slate-900", icon: "🤝" },
  //     { type: "video", src: null, caption: "Tech Fair 2023 — official highlights film", color: "from-slate-900 to-navy-800", icon: "▶" },
  //     { type: "image", src: null, caption: "Main stage — keynote by ekulogroup Bank Group CEO", color: "from-navy-900 to-slate-800", icon: "🎤" },
  //     { type: "image", src: null, caption: "Live demo theatre — startup pitch showcase", color: "from-slate-800 to-navy-950", icon: "💻" },
  //     { type: "video", src: null, caption: "Startup stories — 6 founders share their Fair e", color: "from-navy-950 to-slate-900", icon: "▶" },
  //   ],
  //   testimonial: { quote: "The Tech Fair has become a genuine launchpad for Nigerian fintech. EPA have been instrumental in giving it the production quality that makes investors and startups take it seriously.", author: "Ebenezer Onyeagwu", title: "Group Managing Director & CEO, ekulogroup Bank Plc" },
  // },
};
