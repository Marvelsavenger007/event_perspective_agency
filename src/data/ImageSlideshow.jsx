import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DELAY = 3000;
const TRANSITION_MS = 300;

export default function ImageSlideshow({ images, startIndex = 0, title, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [visible, setVisible] = useState(false); // drives the enter/exit transition
  const [imageKey, setImageKey] = useState(0); // bumps to retrigger the crossfade
  const closeTimeout = useRef(null);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    setImageKey((k) => k + 1);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setImageKey((k) => k + 1);
  }, [images.length]);

  const goTo = useCallback((i) => {
    setCurrent(i);
    setImageKey((k) => k + 1);
  }, []);

  // Mount → trigger enter transition on the next frame
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Play the exit transition before actually unmounting
  const handleClose = useCallback(() => {
    setVisible(false);
    closeTimeout.current = setTimeout(onClose, TRANSITION_MS);
  }, [onClose]);

  useEffect(() => () => clearTimeout(closeTimeout.current), []);

  // Scroll-lock — mount/unmount only
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, handleClose]);

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setTimeout(goNext, AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [current, goNext, images.length]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        aria-label="Close slideshow"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/80 hover:text-gold transition-colors z-10"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {title && (
        <p className="absolute top-6 left-6 sm:top-8 sm:left-8 text-[0.65rem] tracking-[0.15em] uppercase text-white/60 font-semibold">
          {title}
        </p>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 text-white/70 hover:text-gold hover:scale-110 transition-all duration-200 z-10 p-2"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
      )}

      {/* Image with scale+fade entrance, and crossfade between images */}
      <div
        className={`relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center transition-all duration-300 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={imageKey}
          src={images[current]}
          alt={`${title || "Event"} — image ${current + 1} of ${images.length}`}
          className="max-w-[75%] max-h-[80vh] object-contain shadow-2xl animate-crossfade"
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next image"
          className="absolute right-222 sm:right-6 text-white/70 hover:text-gold hover:scale-110 transition-all duration-200 z-10 p-2"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ease-out ${
                i === current ? "w-6 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}