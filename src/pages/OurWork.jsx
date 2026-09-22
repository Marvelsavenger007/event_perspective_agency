import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import ImageSlideshow from "../data/ImageSlideshow";
import { activations } from "../data/activations";
import { fabrications } from "../data/fabrications";
import { Camera } from "lucide-react";

const tabs = [
  { key: "activations", label: "Experientials & Activations", data: activations },
  { key: "fabrications", label: "Branding & Fabrications", data: fabrications },
];

function WorkCard({ item, onOpen }) {
  const hasImages = item.images && item.images.length > 0;

  return (
    <div className="card group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-navy-950/60 transition-all duration-300">
      {/* Thumbnail / placeholder */}
      <div
        className={`h-48 bg-gradient-to-br from-navy-700 to-navy-800 relative flex items-center justify-center overflow-hidden ${
          hasImages ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={() => hasImages && onOpen(item)}
      >
        {hasImages ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-white/30">
            <Camera size={30} strokeWidth={1.25} />
            <span className="text-[0.62rem] tracking-[0.15em] uppercase font-semibold">
              Gallery Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-7">
        <p className="text-[0.68rem] tracking-[0.12em] uppercase text-[#4a74b3] font-semibold mb-3">
          {item.brand} {item.meta ? `· ${item.meta}` : ""}
        </p>
        <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed mb-5">
          {item.description}
        </p>
        <span
          className={`inline-block text-[0.62rem] tracking-[0.15em] uppercase font-semibold border px-2.5 py-1 ${item.tagColor}`}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
}

export default function OurWork() {
  const [active, setActive] = useState("activations");
  const [activeSlideshow, setActiveSlideshow] = useState(null);

  const current = tabs.find((t) => t.key === active);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Real Campaigns,"
        titleEm="Real Results"
        description="From nationwide in-store activations and roadshows to signage, POS, and structural fabrication — a look at the work behind the brands we've built and sustained since 2006."
      />

      <section className="pt-4 pb-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          {/* ── Tab Switcher ── */}
          <div className="flex flex-wrap gap-3 mb-14 border-b border-surface-border dark:border-white/5 pb-8">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`text-xs font-bold tracking-[0.12em] uppercase px-6 py-3.5 transition-all duration-200 ${
                  active === t.key
                    ? "bg-[#4a74b3] text-white"
                    : "border border-navy-200 dark:border-white/20 text-navy-700 dark:text-slate-200 hover:border-[#4a74b3] hover:text-[#4a74b3]"
                }`}
              >
                {t.label}
                <span className="ml-2 opacity-60">({t.data.length})</span>
              </button>
            ))}
          </div>

          <div className="eyebrow">{current.label}</div>
          <h2 className="section-title mb-12">
            {active === "activations"
              ? "In-Store, On-Ground, On-Brand"
              : "Every Surface Tells the Story"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.data.map((item) => (
              <WorkCard key={item.id} item={item} onOpen={setActiveSlideshow} />
            ))}
          </div>

          {activeSlideshow && (
            <ImageSlideshow
              images={activeSlideshow.images}
              title={`${activeSlideshow.brand} — ${activeSlideshow.title}`}
              onClose={() => setActiveSlideshow(null)}
            />
          )}
        </div>
      </section>
    </>
  );
}
