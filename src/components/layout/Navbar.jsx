import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X as CloseIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Offer" },
  // { to: "/portfolio", label: "Portfolio" },
  // { to: "/events", label: "Events" },
  // { to: "/team", label: "Our People" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60); 
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "py-3 md:px-12 px-5" : "py-5 md:px-12 px-5"}
          bg-white/90 dark:bg-navy-900/92 backdrop-blur-md
          border-b border-surface-border dark:border-gold/10`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none">
          <span className="font-display font-black text-xl tracking-widest text-gold">
            EVENT PERSPECTIVE
          </span>
          <span className="font-sans text-[0.45rem] tracking-[0.35em] uppercase text-navy-600 dark:text-slate-900 mt-0.5">
            Agency
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-navy-500 dark:text-slate-900
            hover:text-gold dark:hover:text-gold transition-colors duration-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA — desktop */}
          <NavLink
            to="/contact"
            className="hidden lg:block btn-primary text-xs px-5 py-2.5"
          >
            Let's Talk
          </NavLink>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-1.5 text-navy-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[61px] left-0 right-0 z-40 transition-all duration-300
          bg-white dark:bg-navy-800 border-b border-surface-border dark:border-gold/10
          ${mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-6 py-4 flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-3.5 border-b border-surface-border dark:border-white/5 text-sm font-medium
                 ${isActive ? "text-gold" : "text-dark-700 dark:text-slate-300"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-center mt-4 text-xs py-3"
          >
            Let's Talk
          </NavLink>
        </div>
      </div>
    </>
  );
}
