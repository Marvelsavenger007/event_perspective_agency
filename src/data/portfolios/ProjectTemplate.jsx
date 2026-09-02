import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { brandData, brandDetails } from "../brandportfolio";


function Lightbox({ media, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const item = media[current];
  function prev() { setCurrent((c) => (c - 1 + media.length) % media.length); }
  function next() { setCurrent((c) => (c + 1) % media.length); }

  return (
    <div
      className="fixed inset-0 z-[3000] bg-navy-950/97 backdrop-blur-md flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={26} />
      </button>
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-semibold">
        {current + 1} / {media.length}
      </p>
      <div
        className="w-full max-w-4xl mx-auto animate-[modalIn_0.2s_ease_forwards] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`w-full aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden rounded-sm`}>
          {item.type === "video" ? (
            <>
              <div className="text-8xl opacity-20 select-none">{item.icon}</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/25 flex items-center justify-center backdrop-blur-sm">
                  <Play size={30} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/50 text-xs">Video player would appear here with your actual media files</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-9xl opacity-15 select-none">{item.icon}</div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/40 text-xs">Image would render here with your actual media files</p>
              </div>
            </>
          )}
          <div className="absolute top-3 right-3">
            <span className={`text-[0.6rem] tracking-[0.2em] uppercase font-bold px-2.5 py-1
              ${item.type === "video"
                ? "bg-gold text-navy-900"
                : "bg-white/10 text-white border border-white/20"}`}>
              {item.type === "video" ? "▶ Video" : "📷 Photo"}
            </span>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-white/60 leading-relaxed px-4">{item.caption}</p>
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10
                     border border-white/15 flex items-center justify-center text-white/50
                     hover:border-gold hover:text-gold transition-all duration-200 hidden md:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10
                     border border-white/15 flex items-center justify-center text-white/50
                     hover:border-gold hover:text-gold transition-all duration-200 hidden md:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="flex gap-2 mt-6 overflow-x-auto pb-1 max-w-2xl px-2" onClick={(e) => e.stopPropagation()}>
        {media.map((m, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-16 h-11 rounded-sm overflow-hidden border-2 transition-all duration-200
              bg-gradient-to-br ${m.color} flex items-center justify-center
              ${i === current ? "border-gold scale-105" : "border-transparent opacity-50 hover:opacity-80"}`}
          >
            <span className="text-xl opacity-60 select-none">{m.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MediaCard({ item, index, onClick }) {
  return (
    <div
      className="group cursor-pointer overflow-hidden relative"
      onClick={() => onClick(index)}
    >
      <div className={`aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
        <span className="text-6xl opacity-20 transition-transform duration-500 group-hover:scale-110 select-none">
          {item.icon}
        </span>
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/40 border border-white/30 flex items-center justify-center
                            group-hover:bg-gold group-hover:border-gold transition-all duration-300">
              <Play size={20} className="text-white ml-0.5" fill="white" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-all duration-300 flex items-end">
          <div className="p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
            <span className={`text-[0.6rem] tracking-[0.2em] uppercase font-bold px-2 py-0.5 mr-2
              ${item.type === "video" ? "bg-gold text-navy-900" : "bg-white/20 text-white"}`}>
              {item.type === "video" ? "▶ Video" : "📷 Photo"}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-1">
        <p className="text-xs text-navy-500 dark:text-dark-muted leading-relaxed">{item.caption}</p>
      </div>
    </div>
  );
}

function StoryBlock({ label, heading, body }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-surface-border dark:border-dark-border last:border-0">
      <div>
        <span className="text-[0.62rem] tracking-[0.3em] uppercase text-gold font-bold">{label}</span>
      </div>
      <div>
        {heading && (
          <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-4">{heading}</h3>
        )}
        <p className="text-base text-navy-500 dark:text-dark-muted leading-[1.9]">{body}</p>
      </div>
    </div>
  );
}

export default function ProjectTemplate() {
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const card = brandData.find((p) => p.id === id);
  const project = brandDetails[id];

  const images = project.media.filter((m) => m.type === "image");
  const videos = project.media.filter((m) => m.type === "video");

  return (
    <>
      <section className={`relative pt-36 pb-0 overflow-hidden bg-gradient-to-br ${project.gradient} min-h-[70vh] flex flex-col justify-end`}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(90deg,rgba(255,255,255,0.025) 0,transparent 1px,transparent 100px),repeating-linear-gradient(0deg,rgba(255,255,255,0.025) 0,transparent 1px,transparent 100px)" }} />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pb-16">
          <NavLink
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200 text-xs tracking-[0.15em] uppercase font-semibold mb-10"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </NavLink>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[0.62rem] tracking-[0.3em] uppercase text-gold font-bold">{project.tag}</span>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <img
                  src={project.image}
                  width="50px"
                  height="50px"
                  className="mt-5 -mb-2.5 rounded-[10px]"
                  alt="icon"
                />
                <h1 className="font-display text-4xl md:text-6xl xl:text-7xl font-black text-white leading-tight">
                  {project.company}
                </h1>
              </div>
              <p className="font-display text-xl md:text-2xl italic text-white/70 leading-relaxed max-w-2xl">
                "{project.tagline}"
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 space-y-4">
              {[
                { label: "Date", value: project.date },
                { label: "Location", value: project.location },
                { label: "Client", value: project.client },
                { label: "Scope", value: project.scope },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold font-bold block mb-0.5">{label}</span>
                  <span className="text-sm text-white/70 leading-relaxed">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-navy-950 dark:bg-navy-950 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-white/5">
          {project.stats.map((s) => (
            <div key={s.label} className="text-center md:first:pl-0 md:pl-6">
              <div className="font-display text-3xl md:text-4xl font-black text-gold leading-none mb-1">{s.num}</div>
              <div className="text-[0.62rem] tracking-[0.2em] uppercase text-white/40 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">The Story</div>
          <h2 className="section-title mb-12 max-w-3xl">How We Did It</h2>
          <div className="divide-y divide-surface-border dark:divide-dark-border">
            <StoryBlock label="Overview" body={project.overview} />
            <StoryBlock label="Challenge" heading="The Brief" body={project.challenge} />
            <StoryBlock label="Approach" heading="Our Solution" body={project.approach} />
            <StoryBlock label="Execution" heading="On the Ground" body={project.execution} />
            <StoryBlock label="Result" heading="The Outcome" body={project.result} />
          </div>
        </div>
      </section>
      {images.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <div className="eyebrow">Photography</div>
            <h2 className="section-title mb-3">The Moments</h2>
            <p className="text-navy-500 dark:text-dark-muted text-sm mb-10 max-w-lg">
              A visual record of the experience — from setup to the final curtain.
              Click any image to view in full.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((item) => {
                const globalIndex = project.media.indexOf(item);
                return (
                  <MediaCard
                    key={globalIndex}
                    item={item}
                    index={globalIndex}
                    onClick={setLightboxIndex}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
      {videos.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="eyebrow">Video</div>
            <h2 className="section-title mb-3">Watch the Story Unfold</h2>
            <p className="text-navy-500 dark:text-dark-muted text-sm mb-10 max-w-lg">
              Film documentation of the project — highlight reels, time-lapses, and behind-the-scenes footage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {videos.map((item) => {
                const globalIndex = project.media.indexOf(item);
                return (
                  <MediaCard
                    key={globalIndex}
                    item={item}
                    index={globalIndex}
                    onClick={setLightboxIndex}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
      {project.testimonial && (
        <section className={`py-24 px-6 md:px-12 relative overflow-hidden bg-navy-950 dark:bg-navy-950`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="text-5xl mb-8 opacity-30 font-display text-gold font-black select-none">"</div>
            <blockquote className="font-display text-xl md:text-2xl italic text-white leading-relaxed mb-8">
              {project.testimonial.quote}
            </blockquote>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-semibold text-sm text-white tracking-wide">{project.testimonial.author}</p>
            <p className="text-xs text-white/40 tracking-[0.1em] uppercase mt-1">{project.testimonial.title}</p>
          </div>
        </section>
      )}
      <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">More Work</div>
          <h2 className="section-title mb-10">Other Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandData
              .filter((p) => p.id !== id)
              .slice(0, 3)
              .map((p) => (
                <NavLink
                  key={p.id}
                  to={`/portfolio/${p.id}`}
                  className={`group relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient} flex items-end`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
                    {/* <span className="text-4xl mb-2 opacity-50">{p.emoji}</span> */}
                    <img
                      src={p.image}
                      width="auto"
                      height="auto"
                      alt="icon"
                    />
                    <span className="font-display text-lg font-bold text-white text-center px-4">{p.company}</span>
                  </div>
                  <div className="absolute inset-0 bg-navy-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                    <h3 className="font-display text-lg font-bold text-gold mb-2">{p.company}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">{p.brief}</p>
                    <span className="text-[0.68rem] tracking-[0.15em] uppercase text-gold font-semibold flex items-center gap-1.5">
                      View Project →
                    </span>
                  </div>
                </NavLink>
              ))}
          </div>
          <div className="mt-10 text-center">
            <NavLink to="/portfolio" className="btn-outline">View All Projects</NavLink>
          </div>
        </div>
      </section>
      {lightboxIndex !== null && (
        <Lightbox
          media={project.media}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
