export default function PageHero({ eyebrow, title, titleEm, description }) {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 bg-gradient-to-b from-surface to-surface-secondary dark:from-navy-900 dark:to-navy-800 relative overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-navy-900 dark:text-white">
          {title}{" "}
          {titleEm && <em className="text-gold not-italic">{titleEm}</em>}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-navy-500 dark:text-dark-muted leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
