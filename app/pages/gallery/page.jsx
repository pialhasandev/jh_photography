"use client";
import Button from "@/(components)/common/Button";
import ClientImg from "@/(components)/common/ClientImg";
import Container from "@/(components)/common/Container";
import Link from "next/link";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const page = () => {
  return (
    <div className="bg-white text-black dark:bg-black pb-10 dark:text-gray-300 pt-32">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl pb-1 text-[#fbb01a] border-b-2 inline-block  ">
            This Is Our Gallery
          </h2>
        </div>
        <div className="py-5">
          <ClientImg
            images={[
              "/cl6.jpg",
              "/cl3.jpg",
              "/cl4.jpg",
              "/cl5.jpg",
              "/cl7.jpg",
              "/cl1.jpg",
              "/cl8.jpg",
              "/yt1.jpg",
              "/ban2.jpg",
            ]} 
          />
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
