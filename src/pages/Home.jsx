import { NavLink } from "react-router-dom";
import castlelite from "../images/castlelite.jpg";
import dano from "../images/dano.jpg";
import ekulogroup from "../images/ekulogroup.jpg";
import flyingfish from "../images/flyingfish.jpg";
import gbfoods from "../images/gbfoods.jpg";
import smirnoff from "../images/smirnoff.png";
import trophy from "../images/trophy.jpg";
import samsung from "../images/samsung.png";
import mrchef from "../images/mrchef.jpg";
import lushhair from "../images/lushhair.png";
import honeywell from "../images/honeywell.png";
import hero from "../images/hero.jpg";
import epa from "../images/epa.jpg";

const stats = [
  { num: "150+", label: "Events Executed" },
  { num: "60+", label: "Brand Partners" },
  { num: "12", label: "Industry Awards" },
];

const services = [
  {
    title: "Brand Activations",
    desc: "We design immersive environments that put your brand at the centre of conversation, creating real emotional connections with your audience.",
  },
  {
    title: "Conferences & Summits",
    desc: "From intimate C-suite gatherings to 10,000-seat industry events, we handle every detail with precision and flair.",
  },
  {
    title: "Corporate Celebrations",
    desc: "Milestones deserve more than a venue. We create tailored celebrations that reflect your organisation's culture and ambitions.",
  },
  // { title: "Hybrid & Live Streaming", desc: "Seamless broadcast production that extends your event's reach far beyond the room, with studio-quality delivery." },
];

const processSteps = [
  {
    title: "Discovery",
    desc: "Deep-dive into your brand, audience, and objectives to define the experience strategy.",
  },
  {
    title: "Creative Design",
    desc: "Concept development, mood boarding, spatial design, and storytelling architecture.",
  },
  {
    title: "Production",
    desc: "Meticulous build, logistics coordination, vendor management, and rehearsal direction.",
  },
  {
    title: "Execution",
    desc: "Flawless on-site management with dedicated teams and real-time contingency protocols.",
  },
  {
    title: "Measurement",
    desc: "Post-event analytics, sentiment reports, and ROI documentation for every activation.",
  },
];

// const marqueeClients = [
//   "Golden Penny",
//   "Flying Fish",
//   "Samsung",
//   "Dano",
//   "GB Foods",
//   "Trophy",
//   "Castle lite",
//   "Mr Chef",
//   "Honeywell",
//   "Hero",
// ];

const marqueeClients = [  castlelite, flyingfish, samsung, dano, gbfoods, trophy, mrchef, honeywell, hero];

const features = [
  "Pan-Nigerian execution capability across the country",
  "In-house creative, production, and logistics teams",
  "Data-driven measurement on every activation",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 relative overflow-hidden
                          bg-gradient-to-br from-surface via-surface-secondary to-surface-tertiary
                          dark:from-navy-900 dark:via-[#0f1a35] dark:to-[#1a0f20]"
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,rgba(201,168,76,0.04) 0,transparent 1px,transparent 120px),repeating-linear-gradient(0deg,rgba(201,168,76,0.04) 0,transparent 1px,transparent 120px)",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="eyebrow">Award-Winning Experiential Agency</div>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.02] text-navy-900 dark:text-white max-w-3xl mb-7">
            We Don't Run Events. We Create{" "}
            <em className="text-[#4a74b3] not-italic">Moments.</em>
          </h1>
          <p className="text-base md:text-lg text-navy-500 dark:text-white/55 leading-relaxed max-w-xl mb-12">
            Event Perspective Agency is where bold strategy meets flawless
            execution. From intimate brand activations to large-scale
            spectacles, we craft experiences that move people and shift markets.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            {/* <NavLink to="/portfolio" className="btn-primary"> */}
            <NavLink to="/" className="btn-primary">
              View Our Work
            </NavLink>
            <NavLink to="/contact" className="btn-outline">
              Start a Project
            </NavLink>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl font-bold text-[#4a74b3] dark:text-slate-200 leading-none">
                  {s.num}
                </div>
                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-navy-800 dark:text-dark-muted mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="py-10 overflow-hidden bg-surface-tertiary dark:bg-navy-800/40
                      border-y border-surface-border dark:border-gold/8"
      >
        <p className="text-center text-[1rem] tracking-[0.35em] uppercase text-navy-900 dark:text-dark-muted font-semibold mb-6">
          Trusted by leading brands
        </p>
        {/* <div className="flex gap-20 whitespace-nowrap animate-marquee">
          {[...marqueeClients, ...marqueeClients].map((c, i) => (
            <span key={i} className="font-display text-lg font-bold text-navy-900 dark:text-white tracking-wide flex-shrink-0">{c}</span>
          ))}
        </div> */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max gap-20 animate-marquee">
            {[...marqueeClients, ...marqueeClients].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`client-${i}`}
                className="h-44 w-46 flex-shrink-0 object-contain rounded-[20px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={epa}
              alt="Event Perspective Agency"
              className="h-74"
              w-auto
              object-contain
            />
            <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-gold/20 -z-10" />
          </div>
          {/* Text */}
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2 className="section-title mb-6">
              Crafting Experiences That People Remember for Life
            </h2>
            <p className="text-navy-500 dark:text-dark-muted leading-relaxed text-base mb-8">
              We are a full-service experiential marketing agency born in Lagos,
              built for Nigeria, and recognised globally. For over a decade, we
              have been the engine behind brand stories that don't just reach
              audiences — they move them.
            </p>
            <ul className="space-y-0">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 py-3 border-b border-surface-border dark:border-white/5 text-sm text-navy-500 dark:text-dark-muted"
                >
                  <span className="text-[#4a74b3] text-[0.6rem]">✦</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title mb-14">Every Touchpoint, Perfected</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-surface-border dark:bg-dark-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="service-card bg-surface dark:bg-dark-card group"
              >
                <div className="font-display text-5xl font-black text-[#4a74b3]/10 leading-none mb-5">
                  {s.n}
                </div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <NavLink to="/services" className="btn-outline">
              Explore All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">Our Process</div>
          <h2 className="section-title mb-14">From Brief to Brilliant</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-surface-border dark:divide-white/5">
            {processSteps.map((step) => (
              <div key={step.n} className="px-0 sm:px-7 py-8 sm:py-0">
                <div className="font-display text-5xl font-black text-[#4a74b3]/10 leading-none mb-5">
                  {step.n}
                </div>
                <h3 className="font-display text-base font-bold text-navy-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 px-6 md:px-12 bg-navy-900 dark:bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.07),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative">
          <div className="eyebrow justify-center">Ready to Begin?</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-navy-100 leading-relaxed mb-10">
            Tell us about your vision and we'll show you how Event Perspective
            Agency can bring it to life.
          </p>
          <NavLink to="/maintenance" className="btn-primary">
            Start the Conversation
          </NavLink>
        </div>
      </section>
    </>
  );
}
