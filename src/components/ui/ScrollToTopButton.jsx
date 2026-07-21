import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-7 left-6 z-50 w-12 h-12 rounded-full dark:bg-white dark:text-[#4a74b3]
                   bg-[#4a74b3] text-white shadow-lg
                   flex items-center justify-center
                   hover:scale-110 transition-transform duration-300"
                   aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
}
