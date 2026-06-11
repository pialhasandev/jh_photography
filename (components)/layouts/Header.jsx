"use client";

import React, { useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import Button from "../common/Button";
import { MdCameraAlt } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { Inter } from "next/font/google";
import { BsMenuButtonWideFill } from "react-icons/bs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/pages/about" },
    { name: "Our Services", path: "/pages/service" },
    { name: "Album", path: "/pages/album" },
    { name: "Packages", path: "/pages/package" },
    { name: "Videos", path: "/pages/vedio" },
    { name: "Blog", path: "/pages/blog" },
  ];

  return (
    <header className="bg-white text-black dark:bg-black dark:text-gray-300 border-b sticky top-0 z-50 w-full overflow-x-hidden">
      <Container>
        <div className="flex items-center justify-between py-3 min-w-0">
          {/* Logo */}
          <Link href="/" className="min-w-0">
            <div className="flex items-center min-w-0 cursor-pointer">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                <span className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-current" />
                <span className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-current" />
                <span className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-current" />
                <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-current" />

                <span className="font-serif italic text-xl sm:text-2xl font-light">
                  JH
                </span>
              </div>

              <div className="ml-2 border-l border-current/30 pl-2 min-w-0">
                <span className="block text-[8px] sm:text-xs md:text-base font-light uppercase tracking-[0.15em] sm:tracking-[0.25em] whitespace-nowrap">
                  Photography
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 mt-1 font-serif italic text-xs tracking-[0.2em] opacity-80">
              <span>Your Story Through My Lens</span>
              <MdCameraAlt />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden lg:flex items-center gap-6 font-medium ${inter.className}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-amber-600 dark:hover:text-amber-400 duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/pages/contact">
              <Button btntxt="Contact Us" />
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-6 flex-shrink-0">
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="text-2xl"
              aria-label="Toggle Menu"
            >
              {open ? <HiX /> : <BsMenuButtonWideFill />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[600px] pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-5 pt-5 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className="font-medium hover:text-amber-600 dark:hover:text-amber-400 duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/pages/contact" onClick={() => setOpen(false)}>
              <Button btntxt="Contact Us" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
