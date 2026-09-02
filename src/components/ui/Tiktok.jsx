export default function Tiktok() {
    return (
        <a
            href="https://www.tiktok.com/@event_perspective_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See us on TikTok"
            className="group fixed bottom-[8.5rem] right-8 z-50"
        >
            <span
                className="absolute right-[70px] top-1/2 -translate-y-1/2 whitespace-nowrap
                    bg-white dark:bg-navy-800
                    text-navy-800 dark:text-slate-200
                    border border-surface-border dark:border-gold/20
                    text-xs px-3 py-2
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none shadow-md"
            >
                See us on TikTok
            </span>
            <div
                className="w-12 h-12 rounded-full
                    flex items-center justify-center
                    bg-navy-900 dark:bg-white
                    shadow-lg
                    hover:scale-110
                    transition-all duration-200
                    active:scale-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-white dark:fill-navy-900"
                >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.31 0 .62.05.91.14V9.4a6.3 6.3 0 0 0-.91-.07A6.27 6.27 0 1 0 15.74 15V8.54a8.16 8.16 0 0 0 4.77 1.52V6.61a4.85 4.85 0 0 1-.92.08Z" />
                </svg>
            </div>
        </a>
    );
}
