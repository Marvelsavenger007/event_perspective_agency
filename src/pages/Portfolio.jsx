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
              <div key={item.id} className="portfolio-item group rounded-xl">
                {/* Background gradient */}
                <div className="portfolio-logo-layer absolute inset-0 z-10 transition-opacity duration-400 group-hover:opacity-0">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" />
                </div>
                {/* Overlay */}
                <div
                  className={`
                  portfolio-overlay absolute bottom-0 left-0 right-0 h-[60%]
                  flex flex-col justify-end p-7 z-20
                  bg-gradient-to-br ${item.gradient} to-transparent
                  translate-y-full group-hover:translate-y-0 text-white
                  transition-transform duration-500 ease-out`}
                >
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.company}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-4">
                    {item.brief}
                  </p>
                  <a
                    href={item.link}
                    className="text-[0.7rem] tracking-[0.15em] uppercase text-[#4a74b3] font-semibold
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
