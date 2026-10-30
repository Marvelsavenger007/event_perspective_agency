import { useEffect, useRef } from "react";

export default function ScrollVideo({
  src,
  poster,
  eyebrow,
  title,
  description,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() returns a promise that can reject if the browser blocks it
          video.play().catch(() => {});
        } else {
          // pause() keeps currentTime, so it resumes where it stopped
          video.pause();
        }
      },
      { threshold: 0.5 } // play when at least 50% of the video is visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-surface dark:bg-navy-900 flex flex-col items-center">
      {(eyebrow || title || description) && (
        <div className="max-w-3xl text-center mb-12">
          {eyebrow && <div className="eyebrow justify-center">{eyebrow}</div>}
          {title && <h2 className="section-title mb-5">{title}</h2>}
          {description && (
            <p className="text-navy-500 dark:text-dark-muted leading-relaxed text-base">
              {description}
            </p>
          )}
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls
        className="w-full max-w-5xl h-auto block"
      />
    </section>
  );
}