import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Route change par top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Button show/hide on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[999] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1C3F63] bg-[#0F2A44] text-white shadow-[0_10px_30px_rgba(15,42,68,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#123456] hover:shadow-[0_16px_36px_rgba(15,42,68,0.35)]"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}