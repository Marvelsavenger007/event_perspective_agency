export default function Linkedin() {
    return (
        <a
            href="https://www.linkedin.com/company/event-perspective-experiential-agency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See us on LinkedIn"
            className="group fixed bottom-20 right-8 z-50"
        >
            <span
                className="absolute right-[70px] top-1/2 -translate-y-1/2 whitespace-nowrap
                    bg-white dark:bg-navy-800
                    text-navy-800 dark:text-slate-200
                    border border-surface-border dark:border-blue/20
                    text-xs px-3 py-2
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none shadow-md"
            >
                See us on LinkedIn
            </span>
            <div
                className="w-12 h-12 rounded-full
                    flex items-center justify-center
                    bg-blue-600 dark:bg-white
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
                    className="fill-white dark:fill-[#0077B5]"
                >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
            </div>
        </a>
    );
}

