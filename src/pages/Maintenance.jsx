import { NavLink } from "react-router-dom";
import WhatsAppFab from "../components/ui/WhatsAppFab";

export default function Maintenance() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-28 relative overflow-hidden
                        bg-gradient-to-br from-surface via-surface-secondary to-surface-tertiary
                        dark:from-navy-900 dark:via-[#0f1a35] dark:to-[#1a0f20]">

      {/* Ambient grid + glow, consistent with Home hero */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,rgba(201,168,76,0.04) 0,transparent 1px,transparent 120px),repeating-linear-gradient(0deg,rgba(201,168,76,0.04) 0,transparent 1px,transparent 120px)" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-2xl mx-auto relative text-center">

        {/* ── Animated build scene ── */}
        <div className="relative w-56 h-56 mx-auto mb-12 flex items-center justify-center">

          {/* Rotating dashed ring — the "stage being built" */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
            <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor"
              className="text-gold/25" strokeWidth="1.5" strokeDasharray="6 10" />
          </svg>

          {/* Counter-rotating inner ring */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite_reverse]">
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor"
              className="text-gold/15" strokeWidth="1" strokeDasharray="2 8" />
          </svg>

          {/* Pulsing glow disc behind the icon */}
          <div className="absolute w-28 h-28 rounded-full bg-gold/10 animate-ping [animation-duration:2.5s]" />

          {/* Center icon: crane / build tool, gently bobbing */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-surface dark:bg-navy-800
                          border border-gold/30 flex items-center justify-center shadow-lg
                          animate-[bob_2.4s_ease-in-out_infinite]">
            <span className="text-4xl select-none">🏗️</span>
          </div>

          {/* Floating gold particles — "construction dust / sparks" */}
          <span className="absolute top-4 left-10 w-1.5 h-1.5 rounded-full bg-gold/70 animate-[floatUp_3s_ease-in-out_infinite]" />
          <span className="absolute top-10 right-6 w-1 h-1 rounded-full bg-gold/50 animate-[floatUp_3.6s_ease-in-out_infinite_0.5s]" />
          <span className="absolute bottom-8 left-6 w-1.5 h-1.5 rounded-full bg-gold/60 animate-[floatUp_4s_ease-in-out_infinite_1s]" />
          <span className="absolute bottom-4 right-10 w-1 h-1 rounded-full bg-gold/50 animate-[floatUp_3.2s_ease-in-out_infinite_1.5s]" />
        </div>

        {/* ── Copy ── */}
        <div className="eyebrow justify-center">Behind the Scenes</div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-navy-900 dark:text-white leading-tight mb-5">
          We're Building Something <em className="text-gold not-italic">New</em>
        </h1>
        <p className="text-base text-navy-500 dark:text-dark-muted leading-relaxed max-w-md mx-auto mb-10">
          This page is currently under construction while our team puts the finishing touches on the experience. Check back shortly — it'll be worth the wait.
        </p>

        {/* ── Animated progress bar ── */}
        <div className="max-w-xs mx-auto mb-3">
          <div className="h-1.5 w-full bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gold rounded-full animate-[progressSlide_1.8s_ease-in-out_infinite]" />
          </div>
        </div>
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-navy-400 dark:text-dark-muted mb-12">
          Crafting the details
        </p>

        {/* ── CTAs ── */}
        <div className="flex flex-wrap justify-center gap-4">
          <NavLink to="/" className="btn-primary">Back to Home</NavLink>
          <NavLink to="/contact" className="btn-outline">Contact Us</NavLink>
        </div>
      </div>

      <WhatsAppFab />
    </section>
  );
}
