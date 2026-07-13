import { NavLink } from "react-router-dom";
import PageHero from "../components/ui/PageHero";

const services = [
  { title: "Brand Activations", desc: "We design immersive environments that put your brand at the centre of conversation. Retail activations, pop-ups, roadshows — if it touches a consumer, we make it unforgettable." },
  { title: "Creative Production", desc: "Set design, fabrication, theming, content creation, and ambient media. Our in-house creative team transforms any space into a branded world." },
  { title: "Pan-Nigerian Activations", desc: "Execution capability across 18 Nigerian markets. We handle cross-border logistics, local partnerships, regulatory compliance, and cultural nuance so your brand activates with impact everywhere." },
  { title: "Event Analytics & Reporting", desc: "Data-driven measurement for every activation. Sentiment tracking, footfall analytics, social monitoring, and comprehensive ROI documentation delivered after every event." },
  { title: "Corporate Celebrations", desc: "Anniversaries, award nights, product launches, and end-of-year galas. We create tailored celebrations that embody your culture and mark your milestones with dignity." },
  { title: "Experiential Film & Content", desc: "Documentary-style event films, social content packs, highlight reels, and behind-the-scenes production that extends your event's life long after it ends." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="What We"
        titleEm="Offer"
        description="A comprehensive suite of experiential marketing services, designed to position your brand at the heart of every meaningful moment."
      />
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px">
            {services.map((s) => (
              <div key={s.n} className="service-card bg-surface dark:bg-dark-card group m-2 border-2">
                <div className="font-display text-5xl font-black text-gold/10 leading-none mb-5">{s.n}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 bg-navy-900 dark:bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.07),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative">
          <div className="eyebrow justify-center">Ready to Begin?</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-navy-400 leading-relaxed mb-10">
            Tell us about your vision and we'll show you how Event Perspective Agency can bring it to life.
          </p>
          <NavLink to="/contact" className="btn-primary">Start the Conversation</NavLink>
        </div>
      </section>
    </>
  );
}
