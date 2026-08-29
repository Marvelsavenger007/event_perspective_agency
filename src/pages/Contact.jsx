import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/event-perspective-experiential-agency/" },
  { icon: FaInstagram, href: "https://www.instagram.com/eventperspectiveagency/" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@event_perspective_agency" },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "1 Asenuga Street, Ikeja, Lagos, Nigeria",
  },
  { icon: Phone, label: "Phone", value: "+234 915 264 2452" },
  { icon: Mail, label: "Mail", value: "info@eventsperspectve.com" },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 5:00 PM WAT",
  },
];

const serviceTypes = ["Brand Activation", "Pan-Nigerian Activation", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  }

  return (
    <section className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
        {/* ── Left: Info ── */}
        <div>
          <div className="eyebrow">Get in Touch</div>
          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-black text-navy-900 dark:text-white leading-tight mb-7">
            Let's Create Something{" "}
            <em className="text-[#4a74b3] not-italic">Extraordinary</em>
          </h1>
          <p className="text-base text-navy-500 dark:text-dark-muted leading-relaxed mb-12">
            Whether you have a fully formed brief or just a bold ambition, we'd
            love to hear from you. One of our strategists will be in touch
            within 24 hours.
          </p>

          <div className="space-y-7 mb-12">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-5 items-start">
                <div
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center
                                bg-gold/10 border border-gold/20 text-[#4a74b3]"
                >
                  <Icon size={18} />
                </div>
                <div>
                  <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#4a74b3] font-semibold mb-1">
                    {label}
                  </span>
                  <span className="text-sm text-navy-700 dark:text-slate-300">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.25em] uppercase text-[#4a74b3] font-bold mb-4">
              Follow Us
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-surface-border dark:border-white/10
                 flex items-center justify-center
                 text-navy-400 dark:text-dark-muted
                 hover:border-gold hover:text-[#4a74b3]
                 transition-all duration-200"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-surface-secondary dark:bg-navy-800 border border-surface-border dark:border-dark-border p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-8">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="email@yourcompany.com"
                required
              />
            </div>
            <div>
              <label className="form-label">Company / Organisation</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="form-label">Type of Project</label>
              <select className="form-input" required>
                <option value="" disabled defaultValue>
                  Select a service
                </option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Tell Us About Your Vision</label>
              <textarea
                className="form-input min-h-[120px] resize-y"
                placeholder="Describe your brand, timeline, and any details you'd like us to know..."
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full py-4 text-sm">
              Send Message
            </button>
            {submitted && (
              <div className="bg-gold/10 border border-gold px-4 py-3 text-center text-[#4a74b3] text-sm animate-[fadeUp_0.4s_ease_forwards]">
                ✦ Thank you! We'll be in touch within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
