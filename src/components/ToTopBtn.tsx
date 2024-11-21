import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`w-12 h-12 font-semibold bg-mainYellow text-mainBlack rounded-full fixed bottom-5 right-5 z-50 transition-opacity duration-1000 ${
        isVisible
          ? "opacity-100 visibility-visible pointer-events-auto"
          : "opacity-0 visibility-hidden pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
