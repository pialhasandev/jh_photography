"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../common/Container";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";

import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdCameraAlt } from "react-icons/md";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const banners = [
    "/imageOne.png",
    "/imageTwo.png",
    "/imageThree.png",
    "/imageFour.png",
  ];

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                width={1900}
                height={700}
                priority={index === 0}
                className="w-full h-[220px] sm:h-[320px] md:h-[500px] lg:h-[700px] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Social Box */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4  md:bottom-8 z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-lg md:rounded-2xl border border-white/20 px-3 py-2 sm:px-5 sm:py-3 md:px-30 md:py-4">
            <div className="text-center">
              <h4 className="text-[10px] sm:text-sm md:text-2xl lg:text-3xl text-white mb-1 md:mb-3 font-medium whitespace-nowrap">
                STAY WITH US
              </h4>

              <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 text-white">
                <a
                  href="https://www.facebook.com/jhphotographybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 hover:text-amber-400 duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/jhphotographybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-9 md:h-9 hover:text-amber-400 duration-300" />
                </a>

                <a
                  href="https://www.youtube.com/@jhphotographybd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="w-4 h-4 sm:w-6 sm:h-6 md:w-11 md:h-11 hover:text-amber-400 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-8 md:py-16 bg-white text-black dark:bg-black dark:text-gray-300 overflow-hidden">
        <Container className="px-4 sm:px-6">
          {/* Logo */}
          <div className="flex flex-col items-center select-none">
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current rounded-tl-sm opacity-80" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current rounded-tr-sm opacity-80" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current rounded-bl-sm opacity-80" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current rounded-br-sm opacity-80" />

                <span className="font-serif italic text-3xl sm:text-4xl md:text-6xl font-light">
                  JH
                </span>
              </div>

              <div className="ml-2 sm:ml-4 border-l border-current/30 pl-2 sm:pl-4">
                <span className="text-[10px] sm:text-sm md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]">
                  Photography
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 font-serif italic text-[10px] sm:text-sm md:text-xl text-center opacity-80">
              <span>Your Story Through My Lens</span>
              <MdCameraAlt />
            </div>
          </div>

          {/* Story */}
          <h1 className="text-[#FFBD3B] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center pt-8 md:pt-10">
            THE STORY OF JH PHOTOGRAPHY
          </h1>

          <p
            className={`text-sm sm:text-base md:text-xl leading-relaxed max-w-5xl mx-auto text-center pt-5 md:pt-6 ${inter.className}`}
          >
            JH Photography was founded by Zahid Hasan, a passionate
            photographer dedicated to capturing genuine emotions and timeless
            memories. Through creativity, attention to detail, and a love for
            storytelling, JH Photography transforms life's special moments into
            lasting visual stories.
          </p>

          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-center mt-6">
            Founder & Chief Photographer: Zahid Hasan
          </h3>

          <div className="text-center">
            <h2
            className={`text-[#fbb01a] text-2xl sm:text-3xl md:text-5xl font-semibold pb-2 inline-block border-b-2 pt-8 md:pt-10 ${inter.className}`}
          >
            CLIENT'S MEMORIES
          </h2>
          </div>
        </Container>
      </section>
    </>
  );
}