"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/pages/about" },
    { name: "Our Services", path: "/pages/service" },
    { name: "Gallery", path: "/pages/gallery" },
    { name: "Album", path: "/pages/album" },
    { name: "Packages", path: "/pages/package" },
    { name: "Videos", path: "/pages/video" },
  ];

  return (
    <header className="fixed left-0 top-0 z-999 w-full border-b bg-white text-black dark:bg-black dark:text-gray-300">
      <Container>
        <div className="flex items-center justify-between py-3 md:py-4">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex items-center">
              <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center">
                <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-current sm:h-3 sm:w-3" />
                <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-current sm:h-3 sm:w-3" />
                <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-current sm:h-3 sm:w-3" />
                <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-current sm:h-3 sm:w-3" />
                <span className="font-serif text-xl italic font-light sm:text-2xl">
                  JH
                </span>
              </div>
              <div className="ml-2 border-l border-current/30 pl-2">
                <span className="block text-[10px] font-light uppercase tracking-wider sm:text-xs md:text-sm lg:text-base">
                  Photography
                </span>
              </div>
            </div>
            <div className="mt-1 hidden items-center gap-2 font-serif text-xs italic tracking-[0.2em] opacity-80 md:flex">
              <span>Your Story Through My Lens</span>
              <MdCameraAlt />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden xl:flex items-center gap-6 font-medium ${inter.className}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    relative pb-1 text-sm
                    transition-all duration-500 ease-in-out
                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                    after:h-[2px] after:rounded-full
                    after:transition-all after:duration-500 after:ease-in-out
                    ${isActive
                      ? "text-amber-500 dark:text-amber-400 after:w-1/2 after:bg-amber-500 dark:after:bg-amber-400"
                      : "text-black dark:text-gray-300 after:w-0 after:bg-amber-500 dark:after:bg-amber-400 hover:text-amber-600 dark:hover:text-amber-400 hover:after:w-1/2"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right */}
          <div className="hidden xl:flex items-center gap-4">
            <Link href="/pages/contact">
              <Button btntxt="Contact Us" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile / Tablet Right */}
          <div className="flex items-center gap-3 sm:gap-4 xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="text-2xl"
            >
              {open ? <HiX size={28} /> : <BsMenuButtonWideFill size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[600px] pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 border-t py-5 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`
                    relative pb-1 font-medium
                    transition-all duration-500 ease-in-out
                    after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                    after:h-[2px] after:rounded-full
                    after:transition-all after:duration-500 after:ease-in-out
                    ${isActive
                      ? "text-amber-500 dark:text-amber-400 after:w-1/2 after:bg-amber-500 dark:after:bg-amber-400"
                      : "text-black dark:text-gray-300 after:w-0 after:bg-amber-500 dark:after:bg-amber-400 hover:text-amber-600 dark:hover:text-amber-400 hover:after:w-1/2"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
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