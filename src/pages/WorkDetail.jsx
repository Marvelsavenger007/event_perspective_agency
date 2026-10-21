import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { activations } from "../data/activations";
import { fabrications } from "../data/fabrications";
import { ArrowLeft, Play, Pause, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */

function isVideo(src = "") {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

/** Combine images + any video files into one unified media array */
function buildMedia(item) {
  const imgs = item.images || [];
  const vids = item.videos || [];
  return [
    ...imgs.map((src) => ({ src, type: "image" })),
    ...vids.map((src) => ({ src, type: "video" })),
  ];
}

/* ─────────────────────────────────────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────────────────────────────────────── */
function Lightbox({ media, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const current = media[index];
  const videoRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(media.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [media.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(media.length - 1, i + 1));

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0">
        <span className="text-white/40 text-sm font-mono">
          {index + 1} / {media.length}
        </span>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <X size={22} />
        </button>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0">
        {current.type === "video" ? (
          <video
            ref={videoRef}
            src={current.src}
            controls
            autoPlay
            className="max-h-full max-w-full rounded-sm object-contain"
          />
        ) : (
          <img
            src={current.src}
            alt=""
            className="max-h-full max-w-full object-contain rounded-sm select-none"
            draggable={false}
          />
        )}
      </div>

      {/* Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={index === media.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-white"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Filmstrip */}
      {media.length > 1 && (
        <div className="shrink-0 px-4 pb-4 pt-2 flex gap-2 overflow-x-auto scrollbar-none justify-center">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-14 h-14 rounded overflow-hidden border-2 transition-all ${
                i === index ? "border-[#4a74b3] opacity-100" : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              {m.type === "video" ? (
                <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                  <Play size={14} className="text-white" />
                </div>
              ) : (
                <img src={m.src} alt="" className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Masonry / Feature gallery
───────────────────────────────────────────────────────────────────────────── */
function MediaGallery({ media, onOpenLightbox }) {
  if (!media.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-navy-800 dark:bg-navy-700 flex items-center justify-center mb-4">
          <ZoomIn size={24} className="text-navy-400" />
        </div>
        <p className="text-navy-400 text-sm">Media gallery coming soon</p>
      </div>
    );
  }

  /* Layout strategy:
     1 item  → full width hero
     2 items → side by side
     3 items → 1 hero left + 2 stacked right
     4 items → hero top-left + 3 grid
     5+      → first item hero-sized, rest in responsive masonry rows
  */
  const count = media.length;

  if (count === 1) {
    return (
      <SingleHero item={media[0]} index={0} onOpen={onOpenLightbox} />
    );
  }

  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {media.map((m, i) => (
          <MediaTile key={i} item={m} index={i} onOpen={onOpenLightbox} aspectClass="aspect-[4/3]" />
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-2" style={{ gridTemplateRows: "auto auto" }}>
        <div className="row-span-2">
          <MediaTile item={media[0]} index={0} onOpen={onOpenLightbox} aspectClass="h-full min-h-[300px]" />
        </div>
        <MediaTile item={media[1]} index={1} onOpen={onOpenLightbox} aspectClass="aspect-[4/3]" />
        <MediaTile item={media[2]} index={2} onOpen={onOpenLightbox} aspectClass="aspect-[4/3]" />
      </div>
    );
  }

  if (count === 4) {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <MediaTile item={media[0]} index={0} onOpen={onOpenLightbox} aspectClass="aspect-[16/9]" />
        </div>
        <div className="flex flex-col gap-2">
          {media.slice(1, 4).map((m, i) => (
            <MediaTile key={i + 1} item={m} index={i + 1} onOpen={onOpenLightbox} aspectClass="aspect-[4/3]" />
          ))}
        </div>
      </div>
    );
  }

  /* 5+ items: hero + 2-col masonry overflow */
  const hero = media[0];
  const rest = media.slice(1);

  return (
    <div className="space-y-2">
      {/* Hero */}
      <SingleHero item={hero} index={0} onOpen={onOpenLightbox} />

      {/* Masonry grid for remaining items */}
      <div
        className="columns-2 sm:columns-3 gap-2 space-y-2"
        style={{ columnGap: "0.5rem" }}
      >
        {rest.map((m, i) => (
          <div key={i + 1} className="break-inside-avoid mb-2">
            <MediaTile item={m} index={i + 1} onOpen={onOpenLightbox} aspectClass="" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SingleHero({ item, index, onOpen }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg cursor-zoom-in group"
      style={{ aspectRatio: "16/7" }}
      onClick={() => onOpen(index)}
    >
      {item.type === "video" ? (
        <VideoThumbnail src={item.src} />
      ) : (
        <img src={item.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <ZoomIn size={32} className="text-white drop-shadow-lg" />
      </div>
    </div>
  );
}

function MediaTile({ item, index, onOpen, aspectClass }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-zoom-in group bg-navy-900 ${aspectClass}`}
      onClick={() => onOpen(index)}
    >
      {item.type === "video" ? (
        <VideoThumbnail src={item.src} />
      ) : (
        <img
          src={item.src}
          alt=""
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${aspectClass ? "" : "aspect-[4/3]"}`}
        />
      )}
      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.type === "video"
            ? <Play size={28} className="text-white drop-shadow-lg" />
            : <ZoomIn size={22} className="text-white drop-shadow-lg" />
          }
        </div>
      </div>
    </div>
  );
}

function VideoThumbnail({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };

  return (
    <div className="relative w-full h-full">
      <video ref={ref} src={src} className="w-full h-full object-cover" playsInline muted loop />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-all"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stat pill
───────────────────────────────────────────────────────────────────────────── */
function StatPill({ label, value }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-white/5 min-w-[120px]">
      <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#4a74b3]">{label}</span>
      <span className="text-sm font-semibold text-navy-900 dark:text-white leading-snug">{value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main WorkDetail page
───────────────────────────────────────────────────────────────────────────── */
export default function WorkDetail() {
  const { type, id } = useParams();   // /work/activations/:id  or  /work/fabrications/:id
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Resolve item from the correct data source
  const allItems = type === "fabrications" ? fabrications : activations;
  const item = allItems.find(
    (a) => String(a.id) === String(id)
  );

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 bg-surface dark:bg-navy-900">
        <p className="text-navy-400 text-lg">Project not found.</p>
        <Link to="/portfolio" className="btn-primary">← Back to Portfolio</Link>
      </div>
    );
  }

  const media = buildMedia(item);
  const backLabel = type === "fabrications" ? "Branding & Fabrications" : "Experientials & Activations";
  const backTab   = type === "fabrications" ? "fabrications" : "activations";

  /* Derived stats — shown when available */
  const stats = [
    item.meta      && { label: "Location / Format", value: item.meta },
    item.client    && { label: "Client", value: item.client },
    item.year      && { label: "Year", value: item.year },
    item.reach     && { label: "Reach", value: item.reach },
    item.duration  && { label: "Duration", value: item.duration },
    item.outcome   && { label: "Outcome", value: item.outcome },
  ].filter(Boolean);

  return (
    <div className="bg-surface dark:bg-navy-900 min-h-screen">

      {/* ── Sticky back bar ── */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-navy-950/80 backdrop-blur border-b border-navy-100 dark:border-white/5 px-6 md:px-12 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate(`/portfolio?tab=${backTab}`)}
          className="flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-navy-500 dark:text-slate-400 hover:text-[#4a74b3] dark:hover:text-[#4a74b3] transition-colors"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </button>
        <span className="text-navy-200 dark:text-white/10 select-none">/</span>
        <span className="text-[0.72rem] font-semibold tracking-wide text-navy-700 dark:text-slate-200 truncate max-w-[260px]">
          {item.title}
        </span>
      </div>

      {/* ── Hero image banner ── */}
      {item.image && (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(220px, 38vw, 480px)" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/30 to-transparent" />
          {/* Tag pill */}
          <div className="absolute top-5 left-6 md:left-12">
            <span className={`text-[0.62rem] font-bold tracking-[0.18em] uppercase border px-3 py-1.5 backdrop-blur-sm bg-black/30 ${item.tagColor}`}>
              {item.tag}
            </span>
          </div>
        </div>
      )}

      {/* ── Content wrapper ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24">

        {/* ── Title block ── */}
        <div className="-mt-14 relative z-10 mb-10">
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#4a74b3] mb-2">
            {item.brand}
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            {item.title}
          </h1>

          {/* Stats row */}
          {stats.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {stats.map((s) => (
                <StatPill key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          )}
        </div>

        {/* ── Two-column layout: overview left, media count right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

          {/* Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4a74b3] mb-3">
                Project Overview
              </h2>
              <p className="text-base text-navy-600 dark:text-slate-300 leading-[1.85] max-w-prose">
                {item.description}
              </p>
            </div>

            {/* Extended description / objectives — optional field */}
            {item.overview && (
              <div>
                <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4a74b3] mb-3">
                  What We Did
                </h2>
                <p className="text-base text-navy-600 dark:text-slate-300 leading-[1.85] max-w-prose">
                  {item.overview}
                </p>
              </div>
            )}

            {/* Objectives list — optional */}
            {item.objectives && item.objectives.length > 0 && (
              <div>
                <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4a74b3] mb-3">
                  Objectives
                </h2>
                <ul className="space-y-2">
                  {item.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#4a74b3]" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results — optional */}
            {item.results && item.results.length > 0 && (
              <div>
                <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4a74b3] mb-3">
                  Results & Impact
                </h2>
                <ul className="space-y-2">
                  {item.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar quick-facts card */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white dark:bg-navy-800 border border-navy-100 dark:border-white/5 p-6 space-y-4 sticky top-20">
              <h3 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-navy-400 dark:text-slate-500">
                Quick Facts
              </h3>
              <dl className="space-y-3 divide-y divide-navy-50 dark:divide-white/5">
                <div className="flex flex-col gap-0.5 pt-3 first:pt-0">
                  <dt className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-navy-400 dark:text-slate-500">Brand</dt>
                  <dd className="text-sm font-semibold text-navy-900 dark:text-white">{item.brand}</dd>
                </div>
                {item.meta && (
                  <div className="flex flex-col gap-0.5 pt-3">
                    <dt className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-navy-400 dark:text-slate-500">Location / Format</dt>
                    <dd className="text-sm text-navy-700 dark:text-slate-300">{item.meta}</dd>
                  </div>
                )}
                <div className="flex flex-col gap-0.5 pt-3">
                  <dt className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-navy-400 dark:text-slate-500">Type</dt>
                  <dd className={`text-xs font-bold tracking-wide uppercase border self-start px-2 py-0.5 ${item.tagColor}`}>
                    {item.tag}
                  </dd>
                </div>
                {media.length > 0 && (
                  <div className="flex flex-col gap-0.5 pt-3">
                    <dt className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-navy-400 dark:text-slate-500">Gallery</dt>
                    <dd className="text-sm text-navy-700 dark:text-slate-300">
                      {media.filter(m => m.type === "image").length} photo{media.filter(m => m.type === "image").length !== 1 ? "s" : ""}
                      {media.filter(m => m.type === "video").length > 0 && ` · ${media.filter(m => m.type === "video").length} video${media.filter(m => m.type === "video").length !== 1 ? "s" : ""}`}
                    </dd>
                  </div>
                )}
              </dl>

              {/* Back to portfolio CTA */}
              <div className="pt-2">
                <button
                  onClick={() => navigate(`/portfolio?tab=${backTab}`)}
                  className="w-full text-center text-[0.68rem] font-bold tracking-[0.12em] uppercase py-3 border border-navy-200 dark:border-white/15 text-navy-600 dark:text-slate-300 hover:border-[#4a74b3] hover:text-[#4a74b3] transition-all duration-200"
                >
                  ← All {backLabel}
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            MEDIA GALLERY — the hero section of this page
        ───────────────────────────────────────────────────────────────── */}
        {media.length > 0 && (
          <section>
            {/* Section header */}
            <div className="flex items-end justify-between mb-6 pb-4 border-b border-navy-100 dark:border-white/5">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#4a74b3] mb-1">
                  Gallery
                </p>
                <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
                  Photos & Videos
                </h2>
              </div>
              <span className="text-[0.68rem] font-semibold tracking-wide text-navy-400 dark:text-slate-500">
                {media.length} {media.length === 1 ? "item" : "items"} · click to expand
              </span>
            </div>

            {/* Gallery */}
            <MediaGallery media={media} onOpenLightbox={setLightboxIndex} />
          </section>
        )}

        {/* ── Related / Next-up strip ── */}
        <RelatedStrip currentId={item.id} type={type} allItems={allItems} />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          media={media}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Related projects strip
───────────────────────────────────────────────────────────────────────────── */
function RelatedStrip({ currentId, type, allItems }) {
  const others = allItems
    .filter((a) => String(a.id) !== String(currentId) && a.image)
    .slice(0, 4);

  if (!others.length) return null;

  return (
    <section className="mt-20 pt-10 border-t border-navy-100 dark:border-white/5">
      <p className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#4a74b3] mb-1">More Work</p>
      <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-6">
        Other Projects
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {others.map((item) => (
          <Link
            key={item.id}
            to={`/work/${type}/${item.id}`}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] block bg-navy-800"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "brightness(0.65)" }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
              <p className="text-[0.6rem] font-bold tracking-wide uppercase text-[#7fa8e0] mb-0.5">{item.brand}</p>
              <p className="text-xs font-semibold text-white leading-snug line-clamp-2">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
