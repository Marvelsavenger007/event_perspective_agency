import { useState, useEffect, useRef } from "react";
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

const serviceTypes = ["Brand Activation", "Pan-Nigerian Activation", "Event", "Other"];

// ── Spam / abuse controls ──────────────────────────────────────────
// 1) WEB3FORMS_ACCESS_KEY: get a free key at https://web3forms.com
//    (just enter your inbox email, no account/password needed).
//    Submissions are emailed straight to that inbox — no backend required.
// 2) RATE_LIMIT_MS: minimum time a visitor must wait between submissions
//    from the same browser, tracked via localStorage.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
const RATE_LIMIT_MS = 60_000; // 60 seconds
const RATE_LIMIT_STORAGE_KEY = "ep_contact_last_submit";

// 3) hCaptcha: blocks automated bot submissions with a challenge widget.
//    - Get a free site key + secret key at https://www.hcaptcha.com
//    - Paste the SITE key below
//    - Paste the SECRET key into your Web3Forms dashboard (Settings → Captcha)
//      so Web3Forms actually verifies the token server-side before emailing you.
const HCAPTCHA_SITE_KEY = "YOUR_HCAPTCHA_SITE_KEY_HERE";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | submitted | error | rate-limited
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Load the hCaptcha script once, then render the widget into captchaRef.
  useEffect(() => {
    function renderWidget() {
      if (window.hcaptcha && captchaRef.current && widgetIdRef.current === null) {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: HCAPTCHA_SITE_KEY,
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
          "error-callback": () => setCaptchaToken(""),
        });
      }
    }

    if (window.hcaptcha) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    }
  }, []);

  function getSecondsRemaining() {
    const last = Number(localStorage.getItem(RATE_LIMIT_STORAGE_KEY) || 0);
    const elapsed = Date.now() - last;
    return elapsed >= RATE_LIMIT_MS ? 0 : Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Honeypot check: real visitors never see or fill this field.
    // Bots that auto-fill every input will trip it, and we quietly drop the request.
    if (form.botcheck.value !== "") {
      form.reset();
      return;
    }

    // Client-side rate limit: stops rapid repeat submissions from one browser.
    const secondsRemaining = getSecondsRemaining();
    if (secondsRemaining > 0) {
      setStatus("rate-limited");
      setErrorMessage(
        `Please wait ${secondsRemaining}s before sending another message.`
      );
      return;
    }

    // Require a completed hCaptcha challenge before sending.
    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the captcha before sending your message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from website contact form");
    formData.append("h-captcha-response", captchaToken);
    formData.delete("botcheck");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        localStorage.setItem(RATE_LIMIT_STORAGE_KEY, String(Date.now()));
        setStatus("submitted");
        form.reset();
        setCaptchaToken("");
        if (window.hcaptcha && widgetIdRef.current !== null) {
          window.hcaptcha.reset(widgetIdRef.current);
        }
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or email us directly."
      );
      if (window.hcaptcha && widgetIdRef.current !== null) {
        window.hcaptcha.reset(widgetIdRef.current);
        setCaptchaToken("");
      }
    }
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
            {/* Honeypot field — hidden from real visitors via CSS, bots fill it in */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-input"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="last_name"
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
                name="email"
                className="form-input"
                placeholder="email@yourcompany.com"
                required
              />
            </div>
            <div>
              <label className="form-label">Company / Organisation</label>
              <input
                type="text"
                name="company"
                className="form-input"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="form-label">Type of Project</label>
              <select name="service_type" className="form-input" required defaultValue="">
                <option value="" disabled>
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
                name="message"
                className="form-input min-h-[120px] resize-y"
                placeholder="Describe your brand, timeline, and any details you'd like us to know..."
                required
              />
            </div>
            <div ref={captchaRef} />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "submitted" && (
              <div className="bg-gold/10 border border-gold px-4 py-3 text-center text-[#4a74b3] text-sm animate-[fadeUp_0.4s_ease_forwards]">
                ✦ Thank you! We'll be in touch within 24 hours.
              </div>
            )}
            {(status === "error" || status === "rate-limited") && (
              <div className="bg-red-500/10 border border-red-500/40 px-4 py-3 text-center text-red-600 dark:text-red-400 text-sm">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
