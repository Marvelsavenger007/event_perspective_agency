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
import image2 from "../images/portfolio/fmnportfolio/image2.jpg";
import image5 from "../images/portfolio/fmnportfolio/image5.jpg";
import image1 from "../images/portfolio/fmnportfolio/image1.jpg";
import image4 from "../images/portfolio/fmnportfolio/image4.jpg";
import image11 from "../images/portfolio/fmnportfolio/image11.jpg";
import image7 from "../images/portfolio/fmnportfolio/image7.jpg";
import image9 from "../images/portfolio/fmnportfolio/image9.jpg";
import image8 from "../images/portfolio/fmnportfolio/image8.jpg";
import image10 from "../images/portfolio/fmnportfolio/image10.jpg";
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

import tbs1 from "../images/portfolio/tbsevent/tbs1.webp";
import tbs2 from "../images/portfolio/tbsevent/tbs2.webp";
import tbs3 from "../images/portfolio/tbsevent/tbs3.webp";
import tbs4 from "../images/portfolio/tbsevent/tbs4.webp";
import tbs5 from "../images/portfolio/tbsevent/tbs5.webp";
import tbs6 from "../images/portfolio/tbsevent/tbs6.webp";
import tbs7 from "../images/portfolio/tbsevent/tbs7.webp";
import tbs8 from "../images/portfolio/tbsevent/tbs8.webp";
import tbs9 from "../images/portfolio/tbsevent/tbs9.webp";
import tbs10 from "../images/portfolio/tbsevent/tbs10.webp";
import tbs11 from "../images/portfolio/tbsevent/tbs11.webp";
import tbs12 from "../images/portfolio/tbsevent/tbs12.webp";
import tbs13 from "../images/portfolio/tbsevent/tbs13.webp";
import tbs14 from "../images/portfolio/tbsevent/tbs14.webp";
import tbs15 from "../images/portfolio/tbsevent/tbs15.webp";
import tbs16 from "../images/portfolio/tbsevent/tbs16.webp";
import tbs17 from "../images/portfolio/tbsevent/tbs17.webp";
import tbs18 from "../images/portfolio/tbsevent/tbs18.webp";
import tbs19 from "../images/portfolio/tbsevent/tbs19.webp";
import tbs20 from "../images/portfolio/tbsevent/tbs20.webp";
import tbsvid1 from "../images/portfolio/tbsevent/tbsvid1.mp4";

import mtlogo from "../images/portfolio/mt/mtlogo.jpg";
import mt1 from "../images/portfolio/mt/mt1.png";
import mt2 from "../images/portfolio/mt/mt2.png";
import mt3 from "../images/portfolio/mt/mt3.png";
import mt4 from "../images/portfolio/mt/mt4.png";
import mt5 from "../images/portfolio/mt/mt5.png";
import mt6 from "../images/portfolio/mt/mt6.jpg";
import mt7 from "../images/portfolio/mt/mt7.png";
import mt8 from "../images/portfolio/mt/mt8.jpg";
import mt9 from "../images/portfolio/mt/mt9.jpg";
import mt10 from "../images/portfolio/mt/mt10.jpg";
import mt11 from "../images/portfolio/mt/mt11.png";
import mt12 from "../images/portfolio/mt/mt12.png";
import mt13 from "../images/portfolio/mt/mt13.png";
import mt14 from "../images/portfolio/mt/mt14.jpg";
import mt15 from "../images/portfolio/mt/mt15.jpg";
import mt16 from "../images/portfolio/mt/mt16.jpg";
import mt17 from "../images/portfolio/mt/mt17.jpg";
import mt18 from "../images/portfolio/mt/mt18.jpg";
import mt19 from "../images/portfolio/mt/mt19.jpg";

const rawBrandData = [
  { id: "nyscgpn", company: "Golden Penny Noodles", image: goldenpenny, gradient: "from-green-950 to-emerald-900", brief: "16-day TOMA brand activation at the NYSC Ekiti Orientation Camp — direct sampling, Mami Market trade merchandising and on-ground sales to build lasting brand trust.", link: "", },
  { id: "adc", company: "Amazing Day Cereal", image: adc, gradient: "from-[#2F5416] via-[#486F1B] to-[#1F350E]", brief:  "Amazing Day Cereal in-store activation has successfully established a strong retail presence across strategic modern trade and key retail outlets nationwide.", link: "", },
  { id: "tbs", company: "Flour Mills of Nigeria", image: goldenpenny, gradient: "from-[#E8C547] to-[#4A410F]", brief: "Golden Penny Noodles was at the historic event as a sponsor of the event, which officially concluded with spectacular success and successfully broke the Guinness World Record for the largest audience gathering ever for a movie screening.", link: "", },
  { id: "mt", company: "Golden Penny", image: mtlogo, gradient: "from-green-950 to-emerald-900", brief: "Golden Penny in-store modern trade activation pushing past their hardcore pasta line to the audience", link: "", },
  
];

export const brandData = rawBrandData.map((b) => ({ ...b, link: `/portfolio/${b.id}` }));

export const brandDetails = {
  nyscgpn: {
    company: "Golden Penny Noodles",
    image: goldenpenny,
    gradient: "from-[#064E3B] via-[#0F6B4A] to-[#064E3B]",
    accentBg: "bg-emerald-950",
    tag: "Brand Activation · Captive-Audience Sampling Campaign",
    tagline: "Winning the hearts of Nigeria's youth corps members, one sample at a time.",
    date: "August 2026",
    location: "Ekiti · NYSC Camp",
    client: "Flour Mills of Nigeria",
    scope: "Product sampling, direct sales & consumer / corpers engagement",
    stats: [
      { num: "1", label: "City" },
      { num: "16", label: "Days Activation" },
      { num: "525", label: "Cases Sold" },
      { num: "9,600", label: "Corpers Sampled" },
    ],
    overview: "Golden Penny Foods delivered a TOMA (Top-of-Mind Awareness) brand activation during the NYSC orientation period, running from August 10th to August 25th, 2026. Through sales and direct sampling, the activation built lasting impressions on Nigerian youth corps members — aligning every Golden Penny brand with excitement and product quality to build lasting consumer trust.",
    challenge: "During the activation, Golden Penny Noodles faced significant visibility and supply-chain hurdles that limited full sales conversion. In the Mami Market, Indomie’s established sales and display dominance created a high competitive bar, emphasizing the need for Golden Penny to strengthen its retail engagement and physical presence. This challenge was compounded by key availability gaps: despite strong consumer interest generated by sampling, Choco could not fully capitalize on demand due to limited retail stock, while high vendor demand for the Golden Penny Chicken variant went unfulfilled, leading to directly missed sales opportunities.",
    approach: "To counter Indomie’s established dominance in the Mami Market and bridge availability gaps, we executed a trade-focused strategy centered on high-impact retail merchandising and streamlined stock replenishment. We partnered directly with Mami Market vendors by equipping them with branded POS displays and trade incentives to secure prime shelf positioning over the competition. To resolve stockouts, we optimized daily supply routes to ensure high-demand SKUs—specifically Golden Penny Chicken Noodles—and newly sampled products like Choco were continuously stocked and immediately accessible at vendor points of sale, seamlessly turning consumer interest from sampling into direct purchases.",
    execution: "Golden Penny Foods executed a 16-day TOMA brand activation at the NYSC Ekiti Orientation Camp from August 10–25, 2026, combining direct product sampling with on-ground sales to build brand trust among Nigerian corps members. The activation delivered strong product trial, sustained consumer engagement and measurable sales conversion — while surfacing clear, actionable opportunities for future camp partnerships.",
    result: "The strategy successfully established Golden Penny as a dominant brand within the NYSC Ekiti camp, effectively transforming competitive friction into measurable retail traction. By securing high-visibility display space across key Mami Market vendors, we successfully challenged Indomie’s market presence and drove continuous brand engagement throughout the 16-day period. Furthermore, resolving the supply chain bottlenecks eliminated missed sales opportunities, driving a high conversion rate from direct product sampling to immediate retail purchase, generating thousands of product trials, and building lasting Top-of-Mind Awareness (TOMA) among the young consumer demographic.",
    media: [
      { type: "image", src: image1, },
      { type: "image", src: image5, },
      { type: "video", src: video2, },
      { type: "image", src: image6, },
      { type: "image", src: image11, },
      { type: "image", src: image4, },
      { type: "video", src: video3, },
      { type: "image", src: image7, },
      { type: "image", src: image9, },
      { type: "image", src: image8, },
      { type: "image", src: image10, },
      { type: "video", src: video4, },
    ],
    // testimonial: { quote: "EPA didn't just execute an event — they built an e that made 5G real for millions of Nigerians overnight. The energy, the precision, the storytelling — it was exactly what we needed.", author: "Kunle Elebute", title: "Chief Marketing Officer, gbfoods Nigeria" },
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
      { num: "24", label: "Franchise" },
      { num: "53", label: "Outlets" },
      { num: "220+", label: "Food & Drink Stalls" },
    ],
    overview: " Amazing Day Cereal in-store activation has successfully established a strong retail presence across strategic modern trade and key retail outlets nationwide. The current activation covers 99 active outlets across 12 states/FCT, delivering sustained brand visibility, consumer engagement, product trial, and sales support. To build on the momentum achieved, we propose expanding to 100 additional outlets, bringing the activation footprint to 199 nationwide. This expansion will deepen market penetration, strengthen shelf dominance, and unlock incremental sales opportunities in high-potential retail locations.",
    challenge: "During the current activation, four outlets were discontinued due to operational reasons Despite these challenges, the activation has maintained strong market coverage and continued to deliver visibility across strategic retail locations.",
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
      // { type: "video", src: null,  },
      { type: "image", src: adc7,  },
      { type: "image", src: adc8,  },
      { type: "image", src: adc9,  },
      // { type: "video", src: null,  },
    ],
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
      { type: "image", src: tbs1, },
      { type: "image", src: tbs2, },
      { type: "video", src: tbsvid1, },
      { type: "image", src: tbs3, },
      { type: "image", src: tbs4, },
      { type: "image", src: tbs5, },
      { type: "image", src: tbs6, },
      { type: "image", src: tbs7, },
      { type: "image", src: tbs8, },
      { type: "image", src: tbs9, },
      { type: "image", src: tbs10, },
      { type: "image", src: tbs11, },
      { type: "image", src: tbs12, },
      { type: "image", src: tbs13, },
      { type: "image", src: tbs14, },
      { type: "image", src: tbs15, },
      { type: "image", src: tbs16, },
      { type: "image", src: tbs17, },
      { type: "image", src: tbs18, },
      { type: "image", src: tbs19, },
      { type: "image", src: tbs20, },
    ],
    // testimonial: { quote: "EPA delivered a night that 60 years of dano history deserved. The production quality, the storytelling, the precision — it was world-class in every dimension.", author: "Aliko dano", title: "President & CEO, dano Industries Limited" },
  },

  mt: {
    company: "Golden Penny",
    image: mtlogo,
    gradient: "from-[#064E3B] via-[#0F6B4A] to-[#064E3B]",
    accentBg: "bg-violet-950",
    tag: "Modern Trade",
    tagline: "West Africa's first major virtual summit — 14,000 attendees, 35 countries, zero lag.",
    date: "2025-2026",
    location: "Pan-Nigerian",
    client: "Flour Mills of Nigeria",
    scope: "Modern Trade Activation · Brand Activation · Pan Nigerian",
    stats: [
      { num: "24", label: "Franchise" },
      { num: "53", label: "Outlets" },
      { num: "4", label: "Regions" },
      { num: "73", label: "Assets" },
    ],
    overview: "The recce was conducted to assess modern trade readiness on full shelf availability, Primary shelves, Gondola, FSU Spacings, and execution requirements in line with the outlet target for the modern trade activation. Overall feedback was positive, with key outlets indicating openness to Joint Business Planning (JBP), contingent on consistent replenishment, stable merchandising, and in-store support.",
    challenge: "Constrained stores space, restricting strategic placement and visibility of our assets. Intense competition from rival brands aggressively securing shelf space and visibility is eroding opportunities for our products, threatening to diminish our market presence and impact.",
    approach: "Conducting store-specific planograms to optimize asset placement, ensuring maximum visibility within existing space constraints Developed exclusive trade agreements to secure prime shelf space for visibility. Introduced innovative, high-impact POS displays that differentiate our products.",
    execution: "The retail execution deployed a Multi-Category In-Store Visibility Strategy to expand shopper awareness beyond Golden Penny's core pasta line. High-impact point-of-sale assets improved visual brand presence, while cross-category merchandising effectively introduced secondary lines like mayonnaise, Chocoh, and couscous to high-traffic aisle areas. This operational drive accelerated inventory turnover, eliminating near-expiry stock and generating high product demand, while successfully prompting rival brands to attempt replicating the campaign’s point-of-sale impact",
    result: "The initiative has enhanced awareness of Golden Penny's diverse product portfolio, including mayonnaise, Chocoh, and couscous, among shoppers who previously only recognized popular brands, particularly within the pasta category. The strategically designed point-of-sale assets have effectively boosted visibility, driving sales growth, as reflected in reduced expiration rates and increased out-of-stock instances across outlets. This success is further underscored by emerging competition from rival brands seeking to replicate the campaign's impact.",
    media: [
      { type: "image", src: mt1,  },
      { type: "image", src: mt2,  },
      { type: "image", src: mt3,  },
      { type: "image", src: mt4,  },
      { type: "image", src: mt5,  },
      { type: "image", src: mt6,  },
      { type: "image", src: mt7,  },
      { type: "image", src: mt8,  },
      { type: "image", src: mt9,  },
      { type: "image", src: mt10,  },
      { type: "image", src: mt11,  },
      { type: "image", src: mt12,  },
      { type: "image", src: mt13,  },
      { type: "image", src: mt14,  },
      { type: "image", src: mt15,  },
      { type: "image", src: mt16,  },
      { type: "image", src: mt17,  },
      { type: "image", src: mt18,  },
      { type: "image", src: mt19,  },
    ],
    // testimonial: { quote: "EPA built us a broadcast studio in 18 days and produced a world-class summit from Lagos that competed with anything coming out of Silicon Valley. I didn't think it was possible.", author: "Olugbenga Agboola", title: "CEO & Co-founder, samsungwave" },
  },
};
