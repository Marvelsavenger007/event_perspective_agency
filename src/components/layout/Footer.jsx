import { NavLink } from "react-router-dom";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const services = [
  "Brand Activations",
  "Creative Production",
  "Corporate Celebrations",
  "Experiential Marketing",
  "Pan-Nigerian Activations",
];

const company = [
  // { label: "Portfolio", to: "/portfolio" },
  { label: "Portfolio", to: "/maintenance" },
  { label: "Events", to: "/events" },
  // { label: "Our People", to: "/team" },
  { label: "Our People", to: "/maintenance" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-secondary dark:bg-navy-950 border-t border-surface-border dark:border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex flex-col leading-none mb-5 ">
              <span className="font-display font-black text-xl tracking-widest text-[#4a74b3]">
                EVENT 
              </span>
              <span className="font-sans text-[0.45rem] tracking-[0.35em] uppercase text-navy-500 dark:text-slate-500 mt-0.5">
                PERSPECTIVE Agency
              </span>
            </NavLink>
            <p className="text-sm text-navy-500 dark:text-white leading-relaxed mt-4 max-w-xs">
              Nigeria's premier experiential marketing agency. We create moments
              that move people and shift markets — one extraordinary event at a
              time.
            </p>
            <div className="flex gap-3 mt-7">
              <div className="flex gap-6 text-navy-900 dark:text-white">
                <a href="https://www.instagram.com/eventperspectiveagency/" className="hover:text-[#4a74b3] transition duration-300">
                  <FaInstagram size={22} />
                </a>

                <a href="https://www.tiktok.com/@event_perspective_agency" className="hover:text-[#4a74b3] transition duration-300">
                  <FaTiktok size={22} />
                </a>

                <a href="https://www.linkedin.com/company/event-perspective-experiential-agency/" className="hover:text-[#4a74b3] transition duration-300">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-[#4a74b3] font-bold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <NavLink
                    to="/services"
                    className="text-sm text-navy-500 dark:text-white hover:text-[#4a74b3] dark:hover:text-[#4a74b3] transition-colors duration-200"
                  >
                    {s}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-[#4a74b3] font-bold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.to}>
                  <NavLink
                    to={c.to}
                    className="text-sm text-navy-500 dark:text-white hover:text-[#4a74b3] dark:hover:text-[#4a74b3] transition-colors duration-200"
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-[#4a74b3] font-bold mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-navy-500 dark:text-white">
                1 Asenuga Street, Ikeja
              </li>
              <li className="text-sm text-navy-500 dark:text-white">
                +234 915 264 2452
              </li>
              <li className="text-sm text-navy-500 dark:text-white">
                info@eventsperspectve.com
              </li>
              <li>
                <a
                  href="https://wa.me/2349152642452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4a74b3] hover:text-[#4a74b3]-light transition-colors duration-200"
                >
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-border dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-navy-400 dark:text-white">
            © {new Date().getFullYear()} {" "}
            <span className="text-[#4a74b3]">Event Perspective Agency</span>.{" "}
            All rights reserved. Lagos, Nigeria.
          </p>
          <p className="text-xs text-navy-400 dark:text-white">
            Crafted with intention. Executed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
