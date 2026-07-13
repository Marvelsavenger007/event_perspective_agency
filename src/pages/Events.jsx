import { featuredEvent, pastEvents } from "../data/events";

export default function Events() {
  return (
    <>
      {/* Events Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden
                          bg-gradient-to-b from-surface to-surface-secondary dark:from-navy-900 dark:to-navy-800">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E87461] via-gold to-[#E87461]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="eyebrow">Events & Milestones</div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-navy-900 dark:text-white leading-tight">
            Our <em className="text-gold not-italic">Story</em> in Moments
          </h1>
          <p className="mt-5 text-base md:text-lg text-navy-500 dark:text-dark-muted max-w-xl leading-relaxed">
            From our founding celebrations to landmark productions for clients, every event shapes who we are. A living record of experiences that define Event Perspective Agency.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">Flagship Event</div>
          <h2 className="section-title mb-10">Vantage at 10 — A Decade of Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-surface-border dark:border-dark-border">
            {/* Visual */}
            <div className="relative bg-gradient-to-br from-navy-800 to-[#2d1a35] flex items-center justify-center min-h-[280px] md:min-h-[420px]">
              <span className="absolute top-5 left-5 bg-gold text-navy-900 text-[0.62rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5">
                {featuredEvent.badge}
              </span>
              <span className="font-display text-[7rem] md:text-[9rem] font-black text-gold/10 leading-none select-none">
                {featuredEvent.year}
              </span>
            </div>

            {/* Info */}
            <div className="p-10 md:p-14 bg-surface dark:bg-dark-card flex flex-col justify-center">
              <div className="flex flex-wrap gap-5 mb-6">
                {[featuredEvent.date, featuredEvent.location, featuredEvent.guests].map((m, i) => (
                  <span key={i} className="text-[0.7rem] tracking-[0.12em] uppercase text-gold font-semibold">
                    {["📅","📍","👥"][i]} {m}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-5 leading-snug">
                {featuredEvent.title}
              </h2>
              <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed mb-8">
                {featuredEvent.description}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {featuredEvent.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-gold leading-none">{s.num}</div>
                    <div className="text-[0.65rem] text-navy-400 dark:text-dark-muted tracking-[0.1em] uppercase mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary self-start">View Full Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-20 px-6 md:px-12 bg-surface-secondary dark:bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow">Past Events</div>
          <h2 className="section-title mb-12">More Moments We're Proud Of</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((ev) => (
              <div key={ev.id}
                className="card group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-navy-950/60 transition-all duration-300">
                {/* Card image */}
                <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-800 relative flex items-center justify-center overflow-hidden">
                  {ev.badge && (
                    <span className="absolute top-4 left-4 bg-gold text-navy-900 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1">
                      {ev.badge}
                    </span>
                  )}
                  <span className="font-display text-5xl font-black text-white/10 select-none">{ev.emoji}</span>
                </div>
                {/* Body */}
                <div className="p-7">
                  <p className="text-[0.68rem] tracking-[0.12em] uppercase text-gold font-semibold mb-3">{ev.meta}</p>
                  <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-3 leading-snug">{ev.title}</h3>
                  <p className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed mb-5">{ev.description}</p>
                  <span className={`inline-block text-[0.62rem] tracking-[0.15em] uppercase font-semibold border px-2.5 py-1 ${ev.tagColor}`}>
                    {ev.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
