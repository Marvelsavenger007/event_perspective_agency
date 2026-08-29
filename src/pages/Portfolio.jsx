import { Link } from "react-router-dom";
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
        description="Crafting Excellence, One Project at a Time."
      />
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioData.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="portfolio-item group rounded-xl block"
              >
                {/* Image */}
                <div className="portfolio-logo-layer">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="portfolio-image aspect-auto"
                  />
                </div>
                <div
                  className={`portfolio-overlay bg-gradient-to-br ${item.gradient}`}
                >
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.company}
                  </h3>

                  <p className="text-sm text-slate-200 leading-relaxed mb-4">
                    {item.brief}
                  </p>
                  <span
                    className="text-[0.7rem] tracking-[0.15em] uppercase text-[#4a74b3] font-semibold
                    flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    View Project <ExternalLink size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
