"use client";

import Container from "../common/Container";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`bg-white text-black dark:bg-black dark:text-gray-300 border-t py-6 ${inter.className}`}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-4 text-center lg:text-left">
          {/* Copyright */}
          <h5 className="text-xs sm:text-sm md:text-base uppercase leading-relaxed">
            © Copyright 2026 JH Photography - All Rights Reserved.
          </h5>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <span className="text-sm md:text-base uppercase font-medium">
              Find Me On:
            </span>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/jhphotographybd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IoLogoFacebook
                  size={24}
                  className="hover:text-amber-600 dark:hover:text-amber-400 duration-300"
                />
              </a>

              <a
                href="https://www.instagram.com/jhphotographybd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={22}
                  className="hover:text-amber-600 dark:hover:text-amber-400 duration-300"
                />
              </a>

              <a
                href="https://www.youtube.com/@jhphotographybd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={26}
                  className="hover:text-amber-600 dark:hover:text-amber-400 duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;