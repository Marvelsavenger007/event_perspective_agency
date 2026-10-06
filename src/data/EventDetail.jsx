// src/pages/EventDetail.jsx
import { useState, useEffect, useMemo, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  ArrowLeft, ChevronLeft, ChevronRight, X, Play, Trophy, Star, Award,
} from "lucide-react";
import { getEventBySlug } from "../data/eventPages";

const ICONS = { trophy: Trophy, award: Award, star: Star };

// Turns "some **bold** text" into JSX
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="text-navy-800 dark:text-white">{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ media, Icon, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);
  const item = media[current];
  const prev = () => setCurrent((c) => (c - 1 + media.length) % media.length);
  const next = () => setCurrent((c) => (c + 1) % media.length);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

  const isVideo = item.type === "video";

  return (
    <div
      role="dialog" aria-modal="true"
      className="fixed inset-0 z-[3000] flex flex-col items-center justify-center p-4 md:p-10 bg-navy-950/97 backdrop-blur-md"
      onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close"
        className="absolute top-5 right-5 z-10 p-2 text-white/40 hover:text-white transition-colors">
        <X size={22} />
      </button>
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-semibold select-none pointer-events-none">
        {current + 1} / {media.length}
      </p>

      <div
        className="w-full max-w-4xl mx-auto relative animate-[modalIn_0.2s_ease_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`w-full aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
          {!isVideo && item.src && (
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
          )}
          {isVideo && item.src && (
            <video key={item.id} src={item.src} controls autoPlay className="w-full h-full object-cover" />
          )}
          {!item.src && (
            <>
              {isVideo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                    <Play size={30} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              ) : (
                <Icon size={64} className="text-gold/20" />
              )}
              <p className="absolute bottom-4 inset-x-4 text-center text-[0.68rem] text-white/30">
                Add your media path to{" "}
                <code className="text-gold/60 font-mono">
                  {isVideo ? "videos" : "images"} (id: {item.id}) → src
                </code>
              </p>
            </>
          )}
          <span className={`absolute top-3 right-3 text-[0.58rem] tracking-[0.2em] uppercase font-bold px-2.5 py-1
              ${isVideo ? "bg-gold text-navy-900" : "bg-white/10 text-white border border-white/20"}`}>
            {isVideo ? "▶ Video" : "📷 Photo"}
          </span>
        </div>

        <p className="mt-4 text-center text-sm text-white/50 leading-relaxed px-8">{item.alt}</p>

        {/* Desktop arrows */}
        <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
          className="absolute left-0 top-[calc(50%-3rem)] -translate-x-14 hidden md:flex
                     w-10 h-10 items-center justify-center border border-white/10
                     text-white/40 hover:border-gold hover:text-gold transition-all duration-200">
          <ChevronLeft size={18} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
          className="absolute right-0 top-[calc(50%-3rem)] translate-x-14 hidden md:flex
                     w-10 h-10 items-center justify-center border border-white/10
                     text-white/40 hover:border-gold hover:text-gold transition-all duration-200">
          <ChevronRight size={18} />
        </button>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-6 mt-3 md:hidden">
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="flex items-center gap-1 text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors">
            <ChevronLeft size={13} /> Prev
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="flex items-center gap-1 text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors">
            Next <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-5 overflow-x-auto pb-2 max-w-2xl w-full px-2"
           style={{ scrollbarWidth: "none" }}
           onClick={(e) => e.stopPropagation()}>
        {media.map((m, i) => (
          <button key={m.id} onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-14 h-10 overflow-hidden border-2 bg-gradient-to-br ${m.color}
                        flex items-center justify-center transition-all duration-200
                        ${i === current
                          ? "border-gold scale-105 shadow-[0_0_12px_rgba(201,168,76,0.3)]"
                          : "border-transparent opacity-40 hover:opacity-70"}`}>
            {m.src && m.type !== "video" && <img src={m.src} alt="" className="w-full h-full object-cover" />}
            {(!m.src || m.type === "video") && (
              <span className="opacity-50">
                {m.type === "video"
                  ? <Play size={10} fill="white" className="text-white" />
                  : <Icon size={10} className="text-gold/60" />}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Media card ───────────────────────────────────────────────────────────────
function MediaCard({ item, globalIndex, onOpen, Icon }) {
  const isVideo = item.type === "video";
  return (
    <div
      role="button" tabIndex={0}
      aria-label={`Open ${isVideo ? "video" : "photo"}: ${item.alt}`}
      onClick={() => onOpen(globalIndex)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(globalIndex)}
      className="group cursor-pointer overflow-hidden"
    >
      <div className={`aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
        {item.src && !isVideo && (
          <img src={item.src} alt={item.alt}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
        )}
        {item.src && isVideo && (
          <video src={item.src} muted preload="metadata" className="w-full h-full object-cover" />
        )}
        {!item.src && (
          <span className="opacity-20 transition-transform duration-500 group-hover:scale-110">
            {isVideo ? <Play size={36} className="text-white" /> : <Icon size={36} className="text-gold" />}
          </span>
        )}

        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/45 border border-white/25 flex items-center justify-center
                            group-hover:bg-gold group-hover:border-gold transition-all duration-300">
              <Play size={20} className="text-white ml-0.5" fill="white" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-colors duration-300 flex items-end">
          <div className="p-3.5 w-full opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-300">
            <span className={`text-[0.58rem] tracking-[0.18em] uppercase font-bold px-2 py-1
              ${isVideo ? "bg-gold text-navy-900" : "bg-white/20 text-white"}`}>
              {isVideo ? "▶ Video" : "📷 Photo"}
            </span>
          </div>
        </div>
      </div>
      <p className="pt-3 pb-0.5 text-xs text-navy-500 dark:text-dark-muted leading-relaxed">{item.alt}</p>
    </div>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatPill({ num, label }) {
  return (
    <div className="text-center px-6 py-4 border-r border-white/10 last:border-0">
      <div className="font-display font-black text-gold leading-none mb-1.5 text-2xl md:text-3xl">{num}</div>
      <div className="text-[0.58rem] tracking-[0.22em] uppercase text-white font-semibold">{label}</div>
    </div>
  );
}

// ─── Reaction card ────────────────────────────────────────────────────────────
function ReactionCard({ quote, source, type }) {
  const colorMap = { press: "border-l-gold", industry: "border-l-blue-400", social: "border-l-rose-400" };
  return (
    <div className={`bg-surface dark:bg-dark-card border border-surface-border dark:border-dark-border
                     border-l-4 ${colorMap[type] || "border-l-gold"} p-6`}>
      <p className="text-sm text-navy-600 dark:text-dark-muted leading-relaxed italic mb-4">"{quote}"</p>
      <p className="text-[0.68rem] tracking-[0.15em] uppercase font-semibold text-gold">{source}</p>
    </div>
  );
}

// ─── Section header (shared by gallery + video) ───────────────────────────────
function SectionHeader({ eyebrow, title, description, count, noun }) {
  return (
    <div className="flex items-start justify-between mb-10 gap-6 flex-wrap">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed max-w-md mt-3">{description}</p>
        )}
      </div>
      <span className="hidden sm:block text-[0.6rem] tracking-[0.2em] uppercase font-semibold text-navy-400 dark:text-dark-muted self-end pb-1">
        {count} {noun}{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EventDetail() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scroll to top + close lightbox when navigating between events
  useEffect(() => {
    window.scrollTo(0, 0);
    setLightboxIndex(null);
  }, [slug]);

  // Tag each item with its type, then combine for the lightbox
  const images = useMemo(() => (event?.images || []).map((m) => ({ ...m, type: "image" })), [event]);
  const videos = useMemo(() => (event?.videos || []).map((m) => ({ ...m, type: "video" })), [event]);
  const allMedia = useMemo(() => [...images, ...videos], [images, videos]);

  if (!event) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-navy-950 pt-24">
        <h1 className="font-display font-black text-white text-4xl mb-4">Event not found</h1>
        <p className="text-white/50 mb-8">We couldn't find the event you're looking for.</p>
        <NavLink to="/events" className="btn-primary">Back to Events</NavLink>
      </section>
    );
  }

  const Icon = ICONS[event.icon] || Trophy;
  const { highlight, stats, story, featureCard, gallery, videoSection, reactions, reactionsSection, quote, cta, ctaBadge } = event;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden
                          bg-gradient-to-br from-navy-950 via-[#1a1405] to-navy-950 pt-24">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:
            "repeating-linear-gradient(90deg,rgba(201,168,76,0.05) 0,transparent 1px,transparent 80px)," +
            "repeating-linear-gradient(0deg,rgba(201,168,76,0.05) 0,transparent 1px,transparent 80px)" }} />
        <div aria-hidden="true"
             className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div aria-hidden="true"
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        {event.emoji && (
          <div aria-hidden="true"
               className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2
                          text-[220px] md:text-[320px] opacity-[0.04] select-none leading-none pointer-events-none">
            {event.emoji}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-20">
          <NavLink to="/events"
            className="inline-flex items-center gap-2 mb-12 text-[0.7rem] tracking-[0.15em]
                       uppercase font-semibold text-white/40 hover:text-gold transition-colors duration-200">
            <ArrowLeft size={14} /> Back to Events
          </NavLink>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 backdrop-blur-sm">
              <Star size={12} className="text-gold fill-gold" />
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-gold font-bold">{event.badge}</span>
              <Star size={12} className="text-gold fill-gold" />
            </div>
          </div>

          <h1 className="font-display font-black text-white leading-[1.02] mb-6
                         text-4xl sm:text-5xl md:text-6xl xl:text-7xl max-w-4xl">
            {event.headline}{" "}
            {event.headlineAccent && (
              <em className="text-gold not-italic block">{event.headlineAccent}</em>
            )}
          </h1>

          {highlight && (
            <div className="bg-gold/10 border border-gold/25 backdrop-blur-sm px-6 py-4 inline-block mb-7 max-w-2xl">
              <p className="text-[0.62rem] tracking-[0.3em] uppercase text-gold/70 font-semibold mb-1.5">
                {highlight.label}
              </p>
              <p className="font-display text-lg md:text-xl font-bold text-white leading-snug">{highlight.title}</p>
            </div>
          )}

          <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-xl">{event.intro}</p>
        </div>
      </section>

      {/* ── Stats ── */}
      {stats?.length > 0 && (
        <div className="bg-navy-950 border-b border-gold/10">
          <div className={`max-w-7xl mx-auto px-6 md:px-12 py-6 grid grid-cols-2
                           ${stats.length >= 4 ? "md:grid-cols-4" : stats.length === 3 ? "md:grid-cols-3" : ""}
                           divide-y md:divide-y-0 md:divide-x divide-white/5`}>
            {stats.map((s) => <StatPill key={s.label} num={s.num} label={s.label} />)}
          </div>
        </div>
      )}

      {/* ── Story ── */}
      {story && (
        <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 gap-16 items-start ${featureCard ? "lg:grid-cols-[1fr_340px]" : ""}`}>
              <div>
                <div className="eyebrow">{story.eyebrow}</div>
                <h2 className="section-title mb-8">{story.title}</h2>
                <div className="space-y-5 text-base text-navy-500 dark:text-dark-muted leading-[1.9]">
                  {story.paragraphs.map((p, i) => <p key={i}><RichText text={p} /></p>)}
                </div>
              </div>

              {featureCard && (
                <div className="lg:sticky lg:top-28">
                  <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-gold/20 p-8 relative overflow-hidden">
                    <div aria-hidden="true" className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/30" />
                    <div aria-hidden="true" className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/30" />
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                        <Award size={36} className="text-gold" />
                      </div>
                    </div>
                    <div className="text-center space-y-3 relative">
                      <p className="text-[0.58rem] tracking-[0.35em] uppercase text-gold/60 font-semibold">
                        {featureCard.presentedLabel}
                      </p>
                      <h3 className="font-display text-2xl font-black text-white leading-tight">
                        {featureCard.recipient}
                      </h3>
                      <div className="w-10 h-px bg-gold/40 mx-auto" />
                      <p className="text-[0.62rem] tracking-[0.2em] uppercase text-gold font-bold leading-relaxed">
                        {featureCard.titleLines.map((line, i) => (
                          <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
                        ))}
                      </p>
                      <div className="w-10 h-px bg-gold/40 mx-auto" />
                      <p className="text-sm text-white/40 tracking-widest font-semibold">{featureCard.issuer}</p>
                      <p className="font-display text-5xl font-black text-gold/20 leading-none select-none">
                        {featureCard.year}
                      </p>
                      {featureCard.tagline && (
                        <p className="text-[0.58rem] tracking-[0.2em] text-white/25 uppercase">{featureCard.tagline}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Photos ── */}
      {images.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <SectionHeader {...gallery} count={images.length} noun="photo" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((item, i) => (
                <MediaCard key={item.id} item={item} globalIndex={i} onOpen={setLightboxIndex} Icon={Icon} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {videos.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <SectionHeader {...videoSection} count={videos.length} noun="video" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {videos.map((item, i) => (
                <MediaCard key={item.id} item={item} globalIndex={images.length + i} onOpen={setLightboxIndex} Icon={Icon} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Reactions ── */}
      {reactions?.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
          <div className="max-w-7xl mx-auto">
            <div className="eyebrow">{reactionsSection?.eyebrow}</div>
            <h2 className="section-title mb-10">{reactionsSection?.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reactions.map((r, i) => <ReactionCard key={i} {...r} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Pull quote ── */}
      {quote && (
        <section className="py-24 px-6 md:px-12 bg-navy-950 relative overflow-hidden">
          <div aria-hidden="true"
               className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.07),transparent_70%)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <div aria-hidden="true" className="font-display font-black text-gold/20 text-7xl leading-none mb-6 select-none">"</div>
            <blockquote className="font-display italic text-white leading-relaxed mb-8 text-xl md:text-2xl">
              {quote.text}
            </blockquote>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-sm font-semibold text-white tracking-wide">{quote.author}</p>
            <p className="text-xs text-white/35 tracking-[0.12em] uppercase mt-1">{quote.context}</p>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {cta && (
        <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow">{cta.eyebrow}</div>
              <h2 className="section-title mb-5">{cta.title}</h2>
              <p className="text-base text-navy-500 dark:text-dark-muted leading-relaxed mb-8">{cta.text}</p>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact" className="btn-primary">{cta.primaryLabel}</NavLink>
                <NavLink to="/portfolio" className="btn-outline">{cta.secondaryLabel}</NavLink>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              {ctaBadge && (
                <div className="inline-flex items-center gap-3 border border-gold/30 bg-gold/5 px-6 py-4 backdrop-blur-sm">
                  <Icon size={28} className="text-gold flex-shrink-0" />
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold/70 font-semibold mb-0.5">
                      {ctaBadge.label}
                    </p>
                    <p className="text-sm font-bold text-navy-900 dark:text-white leading-snug">
                      {ctaBadge.lines.map((line, i) => (
                        <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              )}
              <NavLink to="/events"
                className="text-[0.68rem] tracking-[0.15em] uppercase font-semibold text-navy-400
                           dark:text-dark-muted hover:text-gold dark:hover:text-gold transition-colors duration-200
                           flex items-center gap-2">
                <ArrowLeft size={12} /> Back to all events
              </NavLink>
            </div>
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox media={allMedia} Icon={Icon} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
