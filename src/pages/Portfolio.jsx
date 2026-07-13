import PageHero from "../components/ui/PageHero";
import { portfolioData } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Work That"
        titleEm="Speaks"
        description="A selection of the transformative experiences we have created for some of Nigeria's most influential brands."
      />

      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioData.map((item) => (
              <div key={item.id} className="portfolio-item group">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />

                {/* Logo layer — hidden on mobile, hidden on hover desktop */}
                <div className="portfolio-logo-layer absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-400 group-hover:opacity-0">
                  <span className="text-5xl mb-3">{item.emoji}</span>
                  <span className="font-display text-lg font-bold text-white text-center px-4">
                    {item.company}
                  </span>
                </div>

                {/* Overlay */}
                <div
                  className="portfolio-overlay absolute inset-0 bg-navy-950/92 flex flex-col justify-end p-7 z-20
                                opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  <h3 className="font-display text-xl font-bold text-gold mb-2">
                    {item.company}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-4">
                    {item.brief}
                  </p>
                  <a
                    href={item.link}
                    className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-semibold
                               flex items-center gap-2 hover:gap-3.5 transition-all duration-200"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
