import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const HCAPTCHA_SITE_KEY =
  "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const RATE_LIMIT_MS = 60_000;
const RATE_LIMIT_STORAGE_KEY = "ep_contact_last_submit";

const socialIcons = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/event-perspective-experiential-agency/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/eventperspectiveagency/",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@event_perspective_agency",
    label: "TikTok",
  },
];

const contactDetails = [
  {
    icon: MapPin, label: "Our Office", value: "1 Asenuga Street, Ikeja, Lagos, Nigeria",
  },
  {
    icon: Phone, label: "Phone", value: "+234 915 264 2452",
  },
  {
    icon: Mail, label: "Mail", value: "info@eventsperspectve.com",
  },
  {
    icon: Clock, label: "Business Hours", value: "Mon - Fri: 9:00 AM - 5:00 PM WAT",
  },
];

const serviceTypes = [
  "Brand Activation",
  "Pan-Nigerian Activation",
  "Event",
  "Other",
];
export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const captchaRef = useRef(null);

  function getSecondsRemaining() {
    try {
      const last = Number(
        localStorage.getItem(RATE_LIMIT_STORAGE_KEY) || 0
      );
      const elapsed = Date.now() - last;
      return elapsed >= RATE_LIMIT_MS
        ? 0
        : Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
    } catch {
      return 0;
    }
  }

  function saveSubmissionTime() {
    try {
      localStorage.setItem(
        RATE_LIMIT_STORAGE_KEY,
        String(Date.now())
      );
    } catch {
    }
  }

  function resetCaptcha() {
    setCaptchaToken("");
    captchaRef.current?.resetCaptcha();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (status === "sending") return;
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "The contact form is not configured yet. Please contact us directly by email."
      );
      return;
    }
    const honeypot = form.elements.namedItem("website_url");
    if (honeypot?.value) {
      form.reset();
      return;
    }
    const secondsRemaining = getSecondsRemaining();
    if (secondsRemaining > 0) {
      setStatus("rate-limited");
      setErrorMessage(
        `Please wait ${secondsRemaining} seconds before sending another message.`
      );
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage(
        "Please complete the security verification before sending your message."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set(
      "subject",
      "New enquiry from Event Perspective website"
    );
    formData.set(
      "from_name",
      "Event Perspective Website"
    );
    formData.set("h-captcha-response", captchaToken);
    formData.delete("website_url");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      saveSubmissionTime();
      setStatus("submitted");
      form.reset();
      resetCaptcha();

    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again or email us directly."
      );
      resetCaptcha();
    }
  }

  return (
    <section className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
        <div>
          <div className="eyebrow">
            Get in Touch
          </div>
          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-black text-navy-900 dark:text-white leading-tight mb-7">
            Let's Create Something{" "}
            <em className="text-[#4a74b3] not-italic">
              Extraordinary
            </em>
          </h1>
          <p className="text-base text-navy-500 dark:text-dark-muted leading-relaxed mb-12">
            Whether you have a fully formed brief or just a bold ambition, we'd love to hear from you. One of our strategists will be in touch within 24 hours.
          </p>
          <div className="space-y-7 mb-12">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-5 items-start"
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-gold/10 border border-gold/20 text-[#4a74b3]">
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
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-surface-border dark:border-white/10 flex items-center justify-center text-navy-400 dark:text-dark-muted
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
            <input
              type="text" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="first_name" className="form-label" >
                  First Name
                </label>
                <input id="first_name" type="text" name="first_name" className="form-input" placeholder="First Name" autoComplete="given-name" maxLength={80} required />
              </div>
              <div>
                <label htmlFor="last_name" className="form-label" >
                  Last Name
                </label>
                <input id="last_name" type="text" name="last_name" className="form-input" placeholder="Last Name" autoComplete="family-name" maxLength={80} required />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="form-label" >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="email@yourcompany.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="form-label"
              >
                Company / Organisation
              </label>
              <input
                id="company"
                type="text"
                name="company"
                className="form-input"
                placeholder="Your company name"
                autoComplete="organization"
                maxLength={150}
              />
            </div>
            <div>
              <label
                htmlFor="service_type"
                className="form-label"
              >
                Type of Project
              </label>

              <select
                id="service_type"
                name="service_type"
                className="form-input"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>

                {serviceTypes.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="form-label"
              >
                Tell Us About Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input min-h-[120px] resize-y"
                placeholder="Describe your brand, timeline, and any details you'd like us to know..."
                maxLength={5000}
                required
              />
            </div>
            <div className="flex justify-center">
              <HCaptcha
                ref={captchaRef}
                sitekey={HCAPTCHA_SITE_KEY}
                reCaptchaCompat={false}
                onVerify={(token) => {
                  setCaptchaToken(token);
                  setErrorMessage("");
                  if (status === "error") setStatus("idle");
                }}
                onExpire={() => {
                  setCaptchaToken("");
                }}
                onError={() => {
                  setCaptchaToken("");
                  setErrorMessage(
                    "Security verification failed. Please try again."
                  );
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending..."
                : status === "submitted"
                  ? "Message Sent!"
                  : "Send Message"}
            </button>
            {status === "submitted" && (
              <div
                role="status"
                aria-live="polite"
                className="bg-gold/10 border border-gold px-4 py-3 text-center text-[#4a74b3] text-sm animate-[fadeUp_0.4s_ease_forwards]"
              >
                ✦ Thank you! Your enquiry has been received.
                We'll be in touch within 24 hours.
              </div>
            )}
            {(status === "error" || status === "rate-limited") && (
              <div
                role="alert"
                className="bg-red-500/10 border border-red-500/40 px-4 py-3 text-center text-red-600 dark:text-red-400 text-sm"
              >
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
