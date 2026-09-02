
export default function InstagramFab() {
    return (
        <a
            href="https://www.instagram.com/eventperspectiveagency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See us on Instagram"
            className="group fixed bottom-[12rem] right-8 z-50"
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
                Follow us on Instagram
            </span>
            <div
                className="w-12 h-12 rounded-full
                    flex items-center justify-center
                    bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                    shadow-[0_4px_20px_rgba(221,42,123,0.35)]
                    hover:scale-110
                    hover:shadow-[0_8px_32px_rgba(221,42,123,0.5)]
                    transition-all duration-200
                    active:scale-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    className="fill-white"
                >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
            </div>
        </a>
    );
}
 