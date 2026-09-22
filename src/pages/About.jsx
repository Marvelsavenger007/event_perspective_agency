import { NavLink } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import epa from "../images/epabackground.jpeg";
import {
  FaGlobe,
  FaBullseye,
  FaHeart,
  FaLocationDot,
  FaBuilding,
  FaBullhorn,
  FaPrint,
  FaCalendarCheck,
  FaHashtag,
  FaVideo,
  FaChartBar,
  FaCircleCheck,
} from "react-icons/fa6";

/* ── Snapshot stats ── */
const snapshot = [
  { label: "Founded", value: "2006", note: "Headquartered in Ikeja, Lagos Mainland" },
  { label: "Permanent Staff", value: "20", note: "Core in-house team" },
  { label: "Contract Staff", value: "200+", note: "Deployed pan-Nigeria per campaign" },
  { label: "Casual Staff", value: "40", note: "On-ground activation support" },
];

const bankingPartners = ["First Bank", "GT Bank", "FCMB", "Stanbic IBTC"];

/* ── Vision / Mission / Values ── */
const pillars = [
  {
    icon: <FaGlobe />,
    title: "Our Vision",
    desc: "To form more strategic partnerships within the brands and products industry, offering a wider experiential marketing and strategic branding element into the overall mix.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    desc: "In today's highly competitive market, brands need to reach out strongly and connect with their target markets. We integrate fun, excitement, competitive spirit, and good sportsmanship into every campaign to keep our clients globally relevant.",
  },
  {
    icon: <FaHeart />,
    title: "Our Values",
    desc: "Integrity, Honesty, Respect, and Humility guide every relationship we build and every activation we deliver — for our clients, our partners, and our people.",
  },
];

/* ── What We Offer (at a glance) ── */
const offerings = [
  { icon: <FaBullhorn />, title: "Brand Activation / Experiential Marketing" },
  { icon: <FaPrint />, title: "Printing / Branding & POSM" },
  { icon: <FaCalendarCheck />, title: "Event Management, End-to-End" },
  { icon: <FaHashtag />, title: "PR / Social Media & Social Engagement" },
  { icon: <FaVideo />, title: "TV / Content Productions" },
  { icon: <FaChartBar />, title: "Trade Audit & Channel Development" },
];

/* ── Organisational structure ── */
const departments = [
  { name: "Strategy & Creative", roles: ["Head, Strategy & Creative", "Business Development Manager", "Management Training"] },
  { name: "Business Account Management", roles: ["Head, Client Service", "Client Service Executive"] },
  { name: "Operations", roles: ["Head, Operations", "Operations Manager", "Ops. Executive"] },
  { name: "Information Technology", roles: ["IT Manager"] },
  { name: "Finance & Admin", roles: ["Head, Finance & Admin", "Executive Assistant"] },
  { name: "Procurement", roles: ["Procurement Manager"] },
];

/* ── National footprint ── */
const footprint = [
  { region: "Head Office", place: "Lagos" },
  { region: "South West", place: "Coverage Zone" },
  { region: "South South", place: "Coverage Zone" },
  { region: "South East", place: "Coverage Zone" },
  { region: "North Central", place: "Coverage Zone" },
  { region: "North West", place: "Coverage Zone" },
];

/* ── Our Promises ── */
const promises = [
  "Accurate pre-project planning",
  "Comprehensive project design",
  "Efficient project personnel",
  "Accurate project execution",
  "Accurate project data",
  "Comprehensive Microsoft Office, audio-visual & still photograph reporting",
  "Pocket-friendly budgeting",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Event Perspective Agency"
        title="Two Decades of"
        titleEm="Building Brand Vision"
        description="Founded in 2006 and headquartered in the heart of Ikeja, Lagos, we are an innovative agency specialising in experiential and POSM production — combining local expertise with a global perspective to help brands create meaningful connections with their audiences."
      />

      {/* ── SNAPSHOT ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <img
              src={epa}
              alt="Event Perspective Agency office"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-gold/20 -z-10" />
          </div>
          <div>
            <div className="eyebrow">About Us in a Glance</div>
            <h2 className="section-title mb-6">
              Local Roots, National Reach
            </h2>
            <p className="text-navy-500 dark:text-dark-muted leading-relaxed text-base mb-10">
              By leveraging cutting-edge technology and creative strategies,
              we ensure our clients stand out in a competitive market and
              continually seek new ways to engage and inspire consumers.
              Since 2006, we've delivered high-quality POSM assets and
              immersive brand es from our base on Lagos Mainland to
              audiences across the country.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {snapshot.map((s) => (
                <div key={s.label} className="border-l-2 border-gold pl-4">
                  <div className="font-display text-3xl font-black text-[#4a74b3]">
                    {s.value}
                  </div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-navy-800 dark:text-dark-muted mt-1">
                    {s.label}
                  </div>
                  <div className="text-xs text-navy-400 dark:text-dark-muted mt-1">
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-[#4a74b3] font-bold mb-4">
                Banking Partners
              </h4>
              <div className="flex flex-wrap gap-3">
                {bankingPartners.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-semibold text-navy-700 dark:text-slate-200 border border-surface-border dark:border-white/10 px-4 py-2"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">What Drives Us</div>
          <h2 className="section-title mb-14">
            Vision, Mission &amp; Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-surface-border dark:bg-dark-border">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="service-card bg-surface dark:bg-dark-card group"
              >
                <div className="text-4xl text-[#4a74b3] mb-5 dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER (AT A GLANCE) ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">Our Key Competences</div>
          <h2 className="section-title mb-4">What We Offer</h2>
          <p className="text-navy-500 dark:text-dark-muted max-w-xl mb-14">
            A snapshot of the disciplines under our roof — see the{" "}
            <NavLink to="/services" className="text-[#4a74b3] font-semibold">
              Services page
            </NavLink>{" "}
            for the full breakdown, or{" "}
            <NavLink to="/portfolio" className="text-[#4a74b3] font-semibold">
              Our Portfolio
            </NavLink>{" "}
            to see them in action.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border dark:bg-dark-border">
            {offerings.map((o, i) => (
              <div
                key={o.title}
                className="bg-surface dark:bg-dark-card p-8 flex items-center gap-5"
              >
                <span className="font-display text-2xl font-black text-[#4a74b3]/20 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xl text-[#4a74b3] flex-shrink-0">
                  {o.icon}
                </span>
                <h3 className="font-display text-sm font-bold text-navy-900 dark:text-white">
                  {o.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STRUCTURE ── */}
      <section className="py-24 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">How We're Organised</div>
          <h2 className="section-title mb-14">Our Structure</h2>

          {/* MD/CEO node */}
          <div className="flex justify-center mb-10">
            <div className="bg-navy-900 dark:bg-navy-950 text-white font-display font-bold text-sm tracking-[0.15em] uppercase px-10 py-5 border-b-2 border-gold">
              MD / CEO
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d) => (
              <div
                key={d.name}
                className="bg-surface dark:bg-dark-card border-t-2 border-gold p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaBuilding className="text-[#4a74b3] text-lg" />
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-white">
                    {d.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {d.roles.map((r) => (
                    <li
                      key={r}
                      className="text-sm text-navy-500 dark:text-dark-muted"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR FOOTPRINT ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">Nationwide Reach</div>
          <h2 className="section-title mb-14">Our Footprint</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border dark:bg-dark-border">
            {footprint.map((f) => (
              <div
                key={f.region}
                className="bg-surface dark:bg-dark-card p-8 flex items-start gap-4"
              >
                <FaLocationDot className="text-[#4a74b3] text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-white mb-1">
                    {f.region}
                  </h3>
                  <p className="text-xs tracking-[0.1em] uppercase text-navy-400 dark:text-dark-muted">
                    {f.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROMISES ── */}
      <section className="py-24 px-6 md:px-12 bg-navy-900 dark:bg-navy-950">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow justify-center text-center">Our Commitment</div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white text-center mb-14">
            Our Promises
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <FaCircleCheck className="text-[#4a74b3] text-lg flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-100 leading-relaxed">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative">
          <div className="eyebrow justify-center">Let's Work Together</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy-900 dark:text-white leading-tight mb-6">
            Ready to Build Your Brand's Vision?
          </h2>
          <p className="text-navy-500 dark:text-dark-muted leading-relaxed mb-10">
            Meet the people behind the work, or get in touch to start planning
            your next activation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/team" className="btn-outline">
              Meet the Team
            </NavLink>
            <NavLink to="/contact" className="btn-primary">
              Start a Project
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
