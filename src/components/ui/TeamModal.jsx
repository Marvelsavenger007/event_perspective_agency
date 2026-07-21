import { useEffect } from "react";
import { X } from "lucide-react";

export default function TeamModal({ member, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8
                 bg-navy-950/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="animate-[modalIn_0.25s_ease_forwards] bg-white dark:bg-navy-800 max-w-xl w-full
                      border border-surface-border dark:border-gold/15 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center
                     text-navy-500 dark:text-dark-muted hover:text-navy-900 dark:hover:text-white
                     transition-colors duration-200"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] min-h-[200px]">
          {/* Photo */}
          <div className="bg-gradient-to-b from-navy-700 to-navy-800 flex items-center justify-center">
            <img className="text-5xl opacity-40" src={member.image} />
          </div>
          {/* Info */}
          <div className="p-6 md:p-8 bg-surface-secondary dark:bg-navy-700/40 flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-1">
              {member.name}
            </h2>
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#4a74b3] font-semibold mb-4">
              {member.role}
            </p>
            <p className="text-sm text-navy-500 dark:text-dark-muted italic leading-relaxed">
              "{member.tagline}"
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-5">
          {[
            { heading: "What Drives Them", key: "drive" },
            { heading: "Their Zeal", key: "zeal" },
            { heading: "Their Determination", key: "determination" },
          ].map(({ heading, key }) => (
            <div key={key}>
              <h4 className="font-display text-base font-bold text-[#4a74b3] mb-2">{heading}</h4>
              <p className="text-sm text-navy-600 dark:text-dark-muted leading-relaxed">
                {member[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
