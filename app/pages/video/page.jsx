"use client";
import Button from "@/(components)/common/Button";
import Container from "@/(components)/common/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { MdPlayCircleOutline } from "react-icons/md";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const page = () => {
  return (
    <div className="bg-white pt-30 text-black dark:bg-black dark:text-gray-300 py-10">
      <Container>
        <div className="text-center">
          <h3 className="text-[#fbb01a] text-2xl sm:text-3xl md:text-5xl font-semibold inline-block border-b-2 pb-2 mb-10">
            Featured Client Videos
          </h3>
        </div>

        <div className="grid grid-cols-1 pt-5 lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          <div className="relative">
            <Link
              href={"https://www.facebook.com/share/v/1GabDBZywz/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/yt1.jpg"}
                alt="Wedding Album"
                width={600}
                height={400}
                className="rounded-xl  border-2 border-black hover:scale-105 duration-500 dark:border-white"
              />
              <IoLogoYoutube
                size={70}
                className="absolute top-1/2 left-1/2 text-red-600 -translate-x-1/2 -translate-y-1/2  z-50"
              />
            </Link>
          </div>
          <div className="relative">
            <Link
              href={"https://www.facebook.com/share/v/1BdyUftnJW/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/yt2.jpg"}
                alt="Wedding Album"
                width={600}
                height={400}
                className="rounded-xl  border-2 border-black hover:scale-105 duration-500 dark:border-white"
              />
              <IoLogoYoutube
                size={70}
                className="absolute top-1/2 left-1/2 text-red-600 -translate-x-1/2 -translate-y-1/2  z-50"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 py-10 gap-8 md:gap-10 justify-items-center">
          <div className="relative">
            <Link
              href={"https://www.facebook.com/share/r/14irhevD8y3/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/ytt3.jpg"}
                alt="Wedding Album"
                width={600}
                height={400}
                className="rounded-xl  border-2 border-black hover:scale-105 duration-500 dark:border-white"
              />
              <IoLogoYoutube
                size={70}
                className="absolute top-1/2 left-1/2 text-red-600 -translate-x-1/2 -translate-y-1/2  z-50"
              />
            </Link>
          </div>
          <div className=" relative">
            <Link
              href={"https://www.facebook.com/share/v/195wHeCegr/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/yt4.jpg"}
                alt="Wedding Album"
                width={550}
                height={100}
                className="rounded-xl  border-2 border-black hover:scale-105 duration-500 dark:border-white"
              />
              <IoLogoYoutube
                size={70}
                className="absolute top-1/2 left-1/2 text-red-600 -translate-x-1/2 -translate-y-1/2  z-50"
              />
            </Link>
          </div>
        </div>




        <div className=" text-center">
          <h5
            className={`text-center pt-9 pb-5  font-semibold text-3xl ${playfair.className}`}
          >
            For More Vedios, Go-To
          </h5>
          <div className="text-white border-2 border-amber-600 rounded-xl bg-black py-5 px-12 dark:bg-white inline-block dark:text-black">
            <div className=" flex gap-x-10 items-center ">
            <a className="hover:text-[#fbb01a] duration-500 "
            href="https://www.facebook.com/jhphotographybd/reels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2  size={40}/>
          </a>
            <a className="hover:text-[#fbb01a] duration-500 "
            href="https://www.youtube.com/@jhphotographybd/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube size={50} />
          </a>
          </div>
          </div>
        </div>
        <div className=" text-center">
          <h5
            className={`text-center pt-9 pb-5 font-semibold text-3xl ${playfair.className}`}
          >
            Do You Want Your{" "}
            <span className="text-[#fbb01a]">BEST MOMEMTS</span> To Be{" "}
            <span className="text-[#fbb01a]">REMEMBERED?</span>
          </h5>
          <Link href="/pages/contact" onClick={() => setOpen(false)}>
            <Button className={"px-15 text-2xl"} btntxt="Contact Us" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default page;
