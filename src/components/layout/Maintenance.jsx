import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Clock, 
  Moon, 
  Sun, 
  CheckCircle, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function Maintenance () {
  // Theme & UI States
  const [isNight, setIsNight] = useState(false);
  
  // Countdown Timer State (Target: 3 days from now)
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 45, seconds: 12 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 flex flex-col justify-between ${isNight ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Dynamic Ambient Background Glows */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 ${isNight ? 'bg-amber-500' : 'bg-orange-400'}`} />
      <div className={`absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none transition-colors duration-1000 ${isNight ? 'bg-cyan-500' : 'bg-indigo-400'}`} />

      {/* Top Navigation Panel */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20">
            <Wrench className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
          </div>
          <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            NEXUS<span className={isNight ? 'text-slate-300' : 'text-slate-700'}>CORE</span>
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Day/Night Toggle */}
          <button 
            onClick={() => setIsNight(!isNight)}
            className={`p-2.5 rounded-xl border transition-all duration-300 ${isNight ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
            title="Toggle Day/Night Mode"
          >
            {isNight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {}
      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full my-auto">
        
        {/* Left Interactive / Informational Block */}
        <section className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Under Maintenance Badge */}
          <div className="inline-flex">
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase flex items-center gap-2 ${isNight ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-800'}`}>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              Maintenance In Progress
            </span>
          </div>

          {/* Dynamic Catchy Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
              We're polishing the{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                gears
              </span> for something amazing.
            </h1>
            <p className={`text-base md:text-lg max-w-xl ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>
              Our core database engine and server systems are currently undergoing structured optimization. We will be back up and fully operational shortly!
            </p>
          </div>

          {/* Maintenance Status & Details */}
          <div className="space-y-8 animate-fadeIn">
            
            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-4 max-w-md">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl flex flex-col items-center justify-center border transition-all ${isNight ? 'bg-slate-900/50 border-slate-800/80 hover:border-amber-500/30' : 'bg-white border-slate-200 hover:shadow-lg'}`}
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-500">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* Right Animated Works Site Illustration Block */}
        <section className="lg:col-span-5 relative w-full flex items-center justify-center h-[350px] md:h-[450px]">
          
          {/* Day/Night Backdrop Glow effect matching the theme toggles */}
          <div className={`absolute inset-0 rounded-3xl overflow-hidden transition-all duration-1000 ${isNight ? 'bg-gradient-to-b from-slate-950 to-indigo-950 border border-slate-900 shadow-2xl shadow-indigo-500/10' : 'bg-gradient-to-b from-sky-100 to-sky-300 border border-white shadow-xl'}`}>
            
            {/* Interactive Sky Accents */}
            {isNight ? (
              /* Night Stars and Moon */
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse" />
                <div className="absolute top-24 left-2/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping" style={{ animationDuration: '4s' }} />
                <div className="absolute top-16 right-16 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute top-8 right-24 w-12 h-12 rounded-full bg-yellow-100/10 blur-[1px] flex items-center justify-center shadow-[inset_4px_-4px_0_0_#fef08a]" />
              </div>
            ) : (
              /* Day Clouds & Sun */
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 right-16 w-14 h-14 bg-amber-400 rounded-full blur-[2px] animate-pulse shadow-2xl shadow-amber-400/50" />
                
                {/* Rolling cloud SVGs */}
                <div className="absolute top-12 left-[10%] opacity-80 animate-bounce" style={{ animationDuration: '12s' }}>
                  <svg width="60" height="25" viewBox="0 0 60 25" fill="#ffffff" className="opacity-90">
                    <path d="M10 20 L50 20 A 10 10 0 0 0 45 10 A 12 12 0 0 0 25 8 A 10 10 0 0 0 10 20" />
                  </svg>
                </div>
                <div className="absolute top-20 right-[15%] opacity-60 animate-bounce" style={{ animationDuration: '8s' }}>
                  <svg width="45" height="18" viewBox="0 0 45 18" fill="#ffffff" className="opacity-90">
                    <path d="M8 15 L35 15 A 8 8 0 0 0 31 8 A 10 10 0 0 0 18 6 A 8 8 0 0 0 8 15" />
                  </svg>
                </div>
              </div>
            )}

            {/* Dynamic Ground Horizon */}
            <div className={`absolute bottom-0 inset-x-0 h-28 transition-colors duration-1000 ${isNight ? 'bg-slate-900' : 'bg-slate-300'}`} />

            {/* Animated Industrial Construction Crane Vector Scene */}
            <div className="absolute bottom-12 inset-x-0 h-72 flex items-end justify-center">
              
              <svg width="340" height="280" viewBox="0 0 340 280" className="w-full max-w-[340px]">
                
                {/* Crane Base/Tower */}
                <g className={isNight ? 'stroke-slate-800' : 'stroke-slate-400'} strokeWidth="1.5" strokeDasharray="3,3" fill="none">
                  {/* Grid Lattice for Crane Core */}
                  <line x1="220" y1="250" x2="220" y2="80" />
                  <line x1="236" y1="250" x2="236" y2="80" />
                  {[80, 100, 120, 140, 160, 180, 200, 220, 240].map((h, i) => (
                    <line key={i} x1="220" y1={h} x2="236" y2={h + 10} />
                  ))}
                </g>

                {/* Heavy Concrete Block Base of Crane */}
                <rect x="210" y="240" width="36" height="16" rx="2" className={isNight ? 'fill-slate-700' : 'fill-slate-500'} />

                {/* Crane Cockpit Capsule */}
                <g transform="translate(214, 58)">
                  <rect width="28" height="24" rx="4" className="fill-amber-500" />
                  {/* Cockpit Window */}
                  <rect x="14" y="4" width="10" height="14" rx="2" className={isNight ? 'fill-indigo-950' : 'fill-sky-100'} />
                  {/* Warning blinking light */}
                  <circle cx="14" cy="2" r="2" className="fill-red-500 animate-ping" />
                  <circle cx="14" cy="2" r="1.5" className="fill-red-600" />
                </g>

                {/* ROTATING Crane Arm & Counterweight (SWINGING ANIMATION via CSS styling) */}
                <g className="origin-[228px_70px] animate-wiggle" style={{ animation: 'craneSwing 9s ease-in-out infinite' }}>
                  {/* Counterweight Arm */}
                  <rect x="150" y="66" width="78" height="8" className="fill-slate-600" />
                  {/* Counterweight Block */}
                  <rect x="160" y="74" width="22" height="18" rx="2" className={isNight ? 'fill-slate-800' : 'fill-slate-500'} />

                  {/* Main Crane Boom / Jib */}
                  <path d="M 228 66 L 330 66 L 228 55 Z" className="fill-amber-500 stroke-amber-600" strokeWidth="1" />
                  
                  {/* Cable Pulley Trolley */}
                  <rect x="290" y="66" width="10" height="6" className="fill-slate-800" />
                  
                  {/* Hanging Rope/Cable (Lifting Animation - Up and Down) */}
                  <g className="animate-bounce" style={{ animationDuration: '5s' }}>
                    <line x1="295" y1="72" x2="295" y2="130" stroke="#475569" strokeWidth="1.5" />
                    
                    {/* Hanging Payload: Neon Cog Gear */}
                    <g transform="translate(283, 130)">
                      {/* Interactive Cargo Cog Wheel */}
                      <circle cx="12" cy="12" r="8" className="fill-none stroke-cyan-400 stroke-2 animate-spin" style={{ transformOrigin: '12px 12px', animationDuration: '4s' }} />
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, j) => (
                        <rect 
                          key={j} 
                          x="10.5" 
                          y="1" 
                          width="3" 
                          height="4" 
                          rx="0.5"
                          className="fill-cyan-400 animate-spin" 
                          transform={`rotate(${angle} 12 12)`} 
                          style={{ transformOrigin: '12px 12px', animationDuration: '4s' }}
                        />
                      ))}
                      <circle cx="12" cy="12" r="3" className={isNight ? 'fill-slate-900' : 'fill-slate-200'} />
                    </g>
                  </g>
                </g>

                {/* Spinning Ground Gears (Interactive System Cogs) */}
                <g transform="translate(45, 215)">
                  {/* Golden Gear 1 */}
                  <circle cx="28" cy="28" r="18" className="fill-none stroke-amber-500 stroke-2 animate-spin" style={{ transformOrigin: '28px 28px', animationDuration: '10s' }} />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
                    <rect 
                      key={index} 
                      x="25.5" 
                      y="1" 
                      width="5" 
                      height="8" 
                      rx="1" 
                      className="fill-amber-500" 
                      transform={`rotate(${angle} 28 28)`}
                      style={{ transformOrigin: '28px 28px' }}
                    />
                  ))}
                  <circle cx="28" cy="28" r="6" className={isNight ? 'fill-slate-950' : 'fill-slate-50'} />
                </g>

                <g transform="translate(90, 228)">
                  {/* Orange Gear 2 (Interlocking) */}
                  <circle cx="18" cy="18" r="12" className="fill-none stroke-orange-500 stroke-2" style={{ animation: 'spin-reverse 7s linear infinite', transformOrigin: '18px 18px' }} />
                  {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, index) => (
                    <rect 
                      key={index} 
                      x="16" 
                      y="1" 
                      width="4" 
                      height="5" 
                      rx="1" 
                      className="fill-orange-500" 
                      transform={`rotate(${angle} 18 18)`}
                      style={{ transformOrigin: '18px 18px' }}
                    />
                  ))}
                  <circle cx="18" cy="18" r="4" className={isNight ? 'fill-slate-950' : 'fill-slate-50'} />
                </g>

                {/* Road / Construction Safety Cones */}
                <g transform="translate(130, 242)">
                  <polygon points="12,0 16,0 22,18 6,18" className="fill-orange-500" />
                  <polygon points="10,6 18,6 19,10 9,10" className="fill-white" />
                  <polygon points="7,15 21,15 22,18 6,18" className="fill-orange-500" />
                  <rect x="2" y="18" width="24" height="3" rx="1" className="fill-slate-700" />
                  {/* Blinking Hazard Cone Ring Glow */}
                  <circle cx="14" cy="-1" r="2.5" className="fill-amber-400 animate-ping" />
                  <circle cx="14" cy="-1" r="2" className="fill-amber-500" />
                </g>

                <g transform="translate(165, 246)">
                  <polygon points="9,0 12,0 16,14 5,14" className="fill-orange-500" />
                  <polygon points="8,5 13,5 14,8 7,8" className="fill-white" />
                  <rect x="2" y="14" width="18" height="2" rx="1" className="fill-slate-700" />
                </g>

                {/* Excavator vehicle chassis silhouette */}
                <g transform="translate(10, 235)">
                  {/* Wheels/Tracks */}
                  <rect x="0" y="15" width="45" height="10" rx="4" className="fill-slate-800" />
                  <circle cx="8" cy="20" r="4" className="fill-slate-600 animate-spin" />
                  <circle cx="22" cy="20" r="4" className="fill-slate-600 animate-spin" />
                  <circle cx="36" cy="20" r="4" className="fill-slate-600 animate-spin" />
                  {/* Cab */}
                  <rect x="6" y="2" width="22" height="14" rx="2" className="fill-amber-500" />
                  <rect x="18" y="4" width="8" height="6" rx="1" className={isNight ? 'fill-slate-900' : 'fill-sky-100'} />
                </g>

              </svg>

              {/* CSS Animation Injector embedded directly inside the SVG element flow */}
              <style>{`
                @keyframes craneSwing {
                  0%, 100% { transform: rotate(-5deg); }
                  50% { transform: rotate(10deg); }
                }
                @keyframes spin-reverse {
                  0% { transform: rotate(360deg); }
                  100% { transform: rotate(0deg); }
                }
              `}</style>

            </div>

            {}
            {/* Glowing Night Lights on Construction Equipment */}
            {isNight && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Spotlight from Crane Cockpit */}
                <div className="absolute top-[82px] left-[228px] w-[200px] h-[300px] bg-gradient-to-tr from-amber-400/20 via-transparent to-transparent origin-top-left -rotate-12 pointer-events-none blur-[4px]" />
                {/* Glowing status signal bulb */}
                <div className="absolute bottom-32 left-16 w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
              </div>
            )}

            {/* Absolute Watermark / Coordinates */}
            <div className={`absolute bottom-3 right-4 font-mono text-[9px] tracking-widest uppercase ${isNight ? 'text-slate-600' : 'text-slate-500'}`}>
              SEC // GRID-0091
            </div>

          </div>

          {/* Under Maintenance Badge Floating element */}
          <div className={`absolute -bottom-4 right-8 px-4 py-2.5 rounded-2xl flex items-center gap-2 border shadow-lg ${isNight ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'}`}>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold font-mono tracking-tight">SYSTEMS: OPERATIONAL</span>
          </div>
        </section>

      </main>

      {}
      {/* Footer Area with Copyright only */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 mt-6 border-t border-slate-500/10 flex items-center justify-center">
        <p className="text-xs font-semibold tracking-wide text-slate-500 text-center">
          &copy; {new Date().getFullYear()} NexusCore, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}