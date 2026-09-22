import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import ImageSlideshow from "../data/ImageSlideshow";
import { brandData } from "../data/brandportfolio";
import { activations } from "../data/activations";
import { fabrications } from "../data/fabrications";
import { ExternalLink, Camera } from "lucide-react";

const tabs = [
  { key: "projects", label: "Projects", data: brandData },
  { key: "activations", label: "Experientials & Activations", data: activations },
  { key: "fabrications", label: "Branding & Fabrications", data: fabrications },
];

/* ── Projects tab card — original Portfolio grid, unchanged ── */
function ProjectCard({ item }) {
  return (
    <Link to={`/portfolio/${item.id}`} className="portfolio-item group rounded-xl block">
      <div className="portfolio-logo-layer">
        <img src={item.image} alt={item.company} className="portfolio-image aspect-auto" />
      </div>
      <div className={`portfolio-overlay bg-gradient-to-br ${item.gradient}`}>
        <h3 className="font-display text-xl font-bold text-white mb-2">{item.company}</h3>
        <p className="text-sm text-slate-200 leading-relaxed mb-4">{item.brief}</p>
        <span
          className="text-[0.7rem] tracking-[0.15em] uppercase text-[#4a74b3] font-semibold
          flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
        >
          View Project <ExternalLink size={12} />
        </span>
      </div>
    </Link>
  );
}

/* ── Activations / Fabrications tab card — click image to open carousel ── */
function WorkCard({ item, onOpen }) {
  const hasImages = item.images && item.images.length > 0;

  return (
    <div className="card group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-navy-950/60 transition-all duration-300">
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

export default function Portfolio() {
  const [active, setActive] = useState("projects");
  const [activeSlideshow, setActiveSlideshow] = useState(null);

  const current = tabs.find((t) => t.key === active);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Work That"
        titleEm="Speaks"
        description="From flagship brand projects to nationwide activations and hands-on fabrication — a look at the work behind the brands we've built and sustained since 2006."
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

          {/* ── Projects tab ── */}
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {brandData.map((item, i) => (
                <ProjectCard key={`${item.id}-${i}`} item={item} />
              ))}
            </div>
          )}

          {/* ── Activations / Fabrications tabs ── */}
          {active !== "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.data.map((item) => (
                <WorkCard key={item.id} item={item} onOpen={setActiveSlideshow} />
              ))}
            </div>
          )}

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
