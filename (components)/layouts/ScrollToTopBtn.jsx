"use client";

import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed
        bottom-4 sm:bottom-6
        right-4 sm:right-8 md:right-18
        z-50
        cursor-pointer
        bg-white text-black
        dark:bg-black dark:text-gray-300
        border border-gray-300 dark:border-gray-700
        p-3 sm:p-4
        rounded-lg
        shadow-lg
        transition-all duration-300
        hover:scale-110
      "
    >
      <FaAngleDoubleUp className="text-lg sm:text-xl md:text-2xl" />
    </button>
  );
};

export default ScrollToTopBtn;