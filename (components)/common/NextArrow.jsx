"use client";

import { MdArrowForwardIos } from "react-icons/md";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 sm:right-3 md:right-5 top-1/2  z-10 text-red-400 cursor-pointer"
      aria-label="Next Slide"
    >
     <MdArrowForwardIos className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
    </button>
  );
};

export default NextArrow;