import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { brandData } from "../data/brandportfolio";
import { activations } from "../data/activations";
import { fabrications } from "../data/fabrications";
import { ExternalLink, Camera, ArrowRight } from "lucide-react";

const tabs = [
  { key: "projects",      label: "Projects",                   data: brandData    },
  { key: "activations",   label: "Experientials & Activations", data: activations  },
  { key: "fabrications",  label: "Branding & Fabrications",     data: fabrications },
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

/* ── Activations / Fabrications card — navigates to WorkDetail page ── */
function WorkCard({ item, type }) {
  const hasImages = item.images && item.images.length > 0;
  const detailPath = `/work/${type}/${item.id}`;

  return (
    <Link
      to={detailPath}
      className="card group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-navy-950/60 transition-all duration-300 block"
    >
      {/* Thumbnail */}
      <div className="h-52 bg-gradient-to-br from-navy-700 to-navy-800 relative overflow-hidden">
        {hasImages ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/30">
            <Camera size={30} strokeWidth={1.25} />
            <span className="text-[0.62rem] tracking-[0.15em] uppercase font-semibold">
              Gallery Coming Soon
            </span>
          </div>
        )}

        {/* Hover scrim with arrow */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[0.68rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full">
              View Project <ArrowRight size={13} />
            </div>
          </div>
        </div>

        {/* Tag badge top-left */}
        <div className="absolute top-3 left-3">
          <span className={`text-[0.6rem] font-bold tracking-[0.14em] uppercase border px-2 py-1 backdrop-blur-sm bg-black/40 ${item.tagColor}`}>
            {item.tag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[0.66rem] tracking-[0.12em] uppercase text-[#4a74b3] font-semibold mb-2">
          {item.brand}
          {item.meta ? <span className="text-navy-400 dark:text-slate-500 font-normal"> · {item.meta}</span> : null}
        </p>
        <h3 className="font-display text-base font-bold text-navy-900 dark:text-white mb-2 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

/* ── Main Portfolio page ── */
export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "projects";
  const [active, setActive] = useState(
    tabs.some((t) => t.key === initialTab) ? initialTab : "projects"
  );

  // Keep URL in sync when tab changes
  const handleTabChange = (key) => {
    setActive(key);
    setSearchParams(key === "projects" ? {} : { tab: key }, { replace: true });
  };

  // If navigated back from WorkDetail with ?tab=... — honour it
  useEffect(() => {
    const t = searchParams.get("tab");
    if (t && tabs.some((tab) => tab.key === t)) setActive(t);
  }, [searchParams]);

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
                onClick={() => handleTabChange(t.key)}
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

          {/* ── Activations tab ── */}
          {active === "activations" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activations.map((item) => (
                <WorkCard key={item.id} item={item} type="activations" />
              ))}
            </div>
          )}

          {/* ── Fabrications tab ── */}
          {active === "fabrications" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabrications.map((item) => (
                <WorkCard key={item.id} item={item} type="fabrications" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
