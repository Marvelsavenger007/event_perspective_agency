import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { S2S_META, S2S_STAGES, S2S_FAQS, S2S_IMAGE, S2S_GALLERY } from "../data/snapToStardom.js";
import background from "../images/s2s/s2slogo.jpeg"


function Lightbox({ images, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);
  const item = images[current];

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

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
  }, [current]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery — ${item.alt}`}
      className="fixed inset-0 z-[3000] flex flex-col items-center justify-center p-4 md:p-10 bg-navy-950/97 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 z-10 p-2 text-white/40 hover:text-white transition-colors duration-200"
      >
        <X size={22} />
      </button>
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-semibold select-none">
        {current + 1} / {images.length}
      </p>
      <div
        className="w-full max-w-3xl mx-auto relative animate-[modalIn_0.2s_ease_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full aspect-[3/4] md:aspect-video bg-navy-900 flex items-center justify-center relative overflow-hidden">
          {item.src
            ? <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            : (
              <>
                <span className="text-6xl opacity-10 select-none">📸</span>
                <p className="absolute bottom-4 inset-x-4 text-center text-xs text-white/30">
                  Replace <code className="text-gold/60 font-mono">S2S_GALLERY[{current}].src</code> with your image path
                </p>
              </>
            )
          }
        </div>
        <p className="mt-4 text-center text-sm text-white/50 leading-relaxed px-4">{item.alt}</p>
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous photo"
          className="absolute left-0 top-[45%] -translate-x-14 hidden md:flex w-10 h-10 items-center justify-center border border-white/12 text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next photo"
          className="absolute right-0 top-[45%] translate-x-14 hidden md:flex w-10 h-10 items-center justify-center border border-white/12 text-white/40 hover:border-gold hover:text-gold transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
        <div className="flex justify-center gap-6 mt-4 md:hidden">
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="flex items-center gap-1 text-xs tracking-widest uppercasetext-white/40 hover:text-gold transition-colors duration-200">
            <ChevronLeft size={13} /> Prev
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="flex items-center gap-1 text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors duration-200">
            Next <ChevronRight size={13} />
          </button>
        </div>
      </div>
      <div
        className="flex gap-2 mt-5 overflow-x-auto pb-2 max-w-2xl w-full px-2"
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setCurrent(i)}
            aria-label={`View photo ${i + 1}`}
            className={`flex-shrink-0 w-14 h-10 overflow-hidden border-2 bg-navy-900 flex items-center justify-center  transition-all duration-200
                        ${i === current
                ? "border-gold scale-105 shadow-[0_0_12px_rgba(201,168,76,0.3)]"
                : "border-transparent opacity-40 hover:opacity-70"}`}
          >
            {img.src
              ? <img src={img.src} alt="" className="w-full h-full object-cover" />
              : <span className="text-xs opacity-50 select-none">📸</span>
            }
          </button>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-surface-border dark:border-dark-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-5 text-left hover:bg-surface-secondary dark:hover:bg-navy-800/50 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 text-sm font-medium text-navy-800 dark:text-slate-200 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-200">
          <span className="text-gold font-bold">→</span>
          {question}
        </span>
        {isOpen
          ? <ChevronUp size={16} className="text-gold flex-shrink-0" />
          : <ChevronDown size={16} className="text-navy-400 dark:text-dark-muted flex-shrink-0" />
        }
      </button>
      {isOpen && (
        <div className="px-5 pb-5 animate-[fadeUp_0.2s_ease_forwards]">
          <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed pl-6">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function GalleryThumb({ item, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${item.alt}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="group relative overflow-hidden cursor-pointer bg-navy-900"
    >
      {item.src
        ? (
          <img
            src={item.src}
            alt={item.alt}
            className="block w-full h-auto transition-transform duration-500
                       group-hover:scale-[1.07]"
          />
        )
        : (
          <div className="w-full min-h-[160px] flex items-center justify-center">
            <span className="text-4xl opacity-20 select-none group-hover:scale-110 transition-transform duration-500">📸</span>
          </div>
        )
      }
      <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
          <span className="text-navy-900 text-lg select-none">⊕</span>
        </div>
      </div>
    </div>
  );
}

function SubmitEntryBtn({ className = "" }) {
  return (
    <button
      className={`btn-primary flex items-center gap-2 self-start ${className}`}
      onClick={() => window.open("#entry-form", "_self")}
    >
      Submit Entry <ArrowRight size={14} />
    </button>
  );
}

function Divider() {
  return <div className="w-12 h-0.5 bg-gold my-5" />;
}

// ─────────────────────────────────────────────────────────────────────────
export default function SnapToStardom() {
  const [openFaq, setOpenFaq] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const heroSrc = null;

  return (
    <>
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-gradient-to-br from-navy-900 via-[#1a0f20] to-navy-950 pt-24">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:`
            repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, transparent 1px, transparent 100px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0, transparent 1px, transparent 100px),
            url(${background})`,
            backgroundSize: "auto, auto, cover",
            backgroundPosition: "center, center, center",
            backgroundRepeat: "repeat, repeat, no-repeat",
          }}
        />
        <div aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-rose-950/30 via-transparent to-transparent pointer-events-none" />
        <div aria-hidden="true"
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-900/10 blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
        {heroSrc && (
          <img src={heroSrc} alt="Snap To Stardom"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-40" />
        )}
        {!heroSrc && (
          <div className="absolute right-12 md:right-24 bottom-0 flex items-end pointer-events-none select-none">
            <span className="text-[12rem] md:text-[16rem] opacity-5 leading-none">👩🏾</span>
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <div className="mb-6">
            <div className="inline-block bg-navy-800/60 border border-gold/20 backdrop-blur-sm px-6 py-3 mb-4">
              <span className="font-display text-3xl md:text-4xl font-black text-gold tracking-widest">
                S<span className="text-rose-400">2</span>S
              </span>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-4 max-w-2xl">
            Snap To <em className="text-gold not-italic">Stardom</em>
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
            {S2S_META.tagline}
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase font-bold text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-200"
          >
            Read More <ArrowRight size={12} />
          </a>
        </div>
      </section>
      <section id="about" className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-0 items-start">
            <div className="pr-0 md:pr-16 pb-12 md:pb-0">
              <h2 className="font-display text-3xl md:text-4xl font-black text-navy-900 dark:text-white leading-tight mb-6">
                Snap To<br />Stardom
              </h2>
              <p className="text-base text-navy-500 dark:text-dark-muted leading-relaxed">
                {S2S_META.intro}
              </p>
            </div>
            <div className="hidden md:block bg-surface-border dark:bg-dark-border w-px self-stretch mx-0" />
            <div className="pl-0 mt-[-10%] md:pl-16 pt-12 md:pt-0 flex flex-col gap-5">
              <img
                src={background}
                width="272px"
                height="135px"
                alt="icon"
              />
              <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed">
                {S2S_META.brandPurpose}
              </p>
              {/* <SubmitEntryBtn className="mt-2" /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-navy-950 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-10 text-center lg:text-left">
                Snap To Stardom<br />In <em className="text-gold not-italic">Stages</em>
              </h2>
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative z-0 overflow-hidden">
                  {S2S_IMAGE[0]?.src ? (
                    <img
                      src={S2S_IMAGE[0].src}
                      alt={S2S_IMAGE[0].alt}
                      width={209}
                      height={313}
                      className="block object-cover"
                    />
                  ) : (
                    <div className="w-[209px] h-[313px] flex items-center justify-center bg-gradient-to-br from-rose-900 to-pink-950">
                      <span className="text-4xl opacity-20 select-none">📷</span>
                    </div>
                  )}
                </div>
                <div className="absolute left-[160px] top-[120px] z-10 overflow-hidden">
                  {S2S_IMAGE[1]?.src ? (
                    <img
                      src={S2S_IMAGE[1].src}
                      alt={S2S_IMAGE[1].alt}
                      width={256}
                      height={331}
                      className="block object-cover"
                    />
                  ) : (
                    <div className="w-[256px] h-[331px] flex items-center justify-center bg-gradient-to-br from-pink-900 to-purple-950">
                      <span className="text-4xl opacity-20 select-none">📷</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
            <div className="flex flex-col gap-0">
              {S2S_STAGES.map((stage, i) => (
                <div key={i} className="py-5 border-b border-white/8 last:border-0">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    {/* Number in gold, title in white */}
                    <span className="text-gold">{stage.num}</span>{" "}
                    {stage.italic
                      ? (
                        <>
                          {stage.title.split(stage.italic)[0]}
                          <em className="text-gold not-italic">{stage.italic}</em>
                          {stage.title.split(stage.italic)[1]}
                        </>
                      )
                      : stage.title
                    }
                  </h3>
                  <Divider />
                  <p className="text-sm text-white/55 leading-relaxed">{stage.desc}</p>
                </div>
              ))}
              <SubmitEntryBtn className="mt-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-surface-tertiary dark:bg-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-900 dark:text-white mb-8 leading-tight">
            {S2S_META.missionTitle}
          </h2>
          <Divider />
          <div className="flex flex-col gap-5 mt-6">
            {S2S_META.mission.map((para, i) => (
              <p key={i} className="text-base text-navy-500 dark:text-dark-muted leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <button
              className="btn-outline"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              Contact Us <ArrowRight size={13} className="inline ml-1" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-900 dark:text-white text-center mb-12">
            S2S In <em className="text-gold not-italic">Pictures</em>
          </h2>
          <div className="columns-2 md:columns-4 gap-1 [column-fill:_balance]">
            {S2S_GALLERY.map((item, i) => (
              <div key={item.id} className="mb-1 break-inside-avoid">
                <GalleryThumb
                  item={item}
                  onClick={() => setLightboxIdx(i)}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-navy-400 dark:text-dark-muted mt-6 tracking-wide">
            Click any photo to view the full gallery slideshow
          </p>
        </div>
      </section>
      {lightboxIdx !== null && (
        <Lightbox
          images={S2S_GALLERY}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  );
}
