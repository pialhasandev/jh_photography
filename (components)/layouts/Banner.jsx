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

import { Inter, Playfair_Display } from "next/font/google";

import ClientImg from "../common/ClientImg";
import Link from "next/link";
import Button from "../common/Button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    speed: 700,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const banners = [
    "/ban2.jpg",
    "/ban1.jpg",
    "/ban3.jpg",
    "/ban4.jpg",
    "/ban5.jpg",
  ];

  return (
    <>
      {/* Banner */}
      <div className="relative pt-25 w-full overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <div className="relative w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[760px]">
                <Image
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-[50%_30%]"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Social Box */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 md:bottom-8 z-10 w-[90%] max-w-md">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 px-3 py-2 sm:px-4 sm:py-3">
            <div className="text-center">
              <h4 className="text-xs sm:text-sm md:text-lg text-white mb-2 font-medium whitespace-nowrap">
                STAY WITH US
              </h4>

              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white">
                <a
                  href="https://www.facebook.com/jhphotographybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="text-lg sm:text-2xl md:text-4xl hover:text-amber-400 duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/jhphotographybd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-lg sm:text-2xl md:text-4xl hover:text-amber-400 duration-300" />
                </a>

                <a
                  href="https://www.youtube.com/@jhphotographybd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-lg sm:text-2xl md:text-4xl hover:text-amber-400 duration-300" />
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
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current opacity-80" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current opacity-80" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current opacity-80" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current opacity-80" />

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
            JH Photography was founded by Zahid Hasan, a passionate photographer
            dedicated to capturing genuine emotions and timeless memories.
          </p>

          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-center mt-6">
            Founder & Chief Photographer: Zahid Hasan
          </h3>

          {/* CLIENT MEMORIES */}
          <div className="text-center">
            <h2
              className={`text-[#fbb01a] text-2xl sm:text-3xl md:text-5xl font-semibold pb-2 inline-block border-b-2 pt-8 md:pt-10 ${inter.className}`}
            >
              CLIENT'S MEMORIES
            </h2>
          </div>

          {/* FIXED: correct prop usage */}
          <div className="py-7">
            <ClientImg images={["/cl6.jpg","/cl5.jpg", "/cl7.jpg", "/cl1.jpg","/cl3.jpg", "/cl4.jpg",]} />
          </div>

          {/* CTA */}
          <div className="text-center">
            <h5
              className={`pt-9 pb-5 font-semibold text-3xl ${playfair.className}`}
            >
              Do You Want Your{" "}
              <span className="text-[#fbb01a]">BEST MOMENTS</span> To Be{" "}
              <span className="text-[#fbb01a]">REMEMBERED?</span>
            </h5>

            <Link href="/pages/contact">
              <Button className="px-15 text-2xl" btntxt="Contact Us" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
