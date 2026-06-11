"use client";

import { useState } from "react";
import Container from "@/(components)/common/Container";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Button from "@/(components)/common/Button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const categories = [
  "Birthday",
  "Studio Portrait",
  "Family Shoot",
  "Newborn",
  "Wedding Shoot",
  "Outdoor Photoshoot",
];

const packagesData = {
  Birthday: [
    {
      title: "Birthday Package - 1",
      price: "BDT 5,000",
      details: [
        "15 Edited Photos",
        "1 Hour Shoot",
        "Basic Editing",
      ],
    },
    {
      title: "Birthday Package - 2",
      price: "BDT 8,000",
      details: [
        "25 Edited Photos",
        "2 Hours Shoot",
        "Premium Editing",
      ],
    },
  ],

  "Studio Portrait": [
    {
      title: "Studio Portrait - 1",
      price: "BDT 4,000",
      details: [
        "10 Edited Photos",
        "1 Dress",
        "Studio Lighting",
      ],
    },
  ],

  "Family Shoot": [
    {
      title: "Family Shoot - 1",
      price: "BDT 5,000",
      details: [
        "15 Edited Photos",
        "1 Dress Option",
        "1 Hour Shoot",
      ],
    },
    {
      title: "Family Shoot - 2",
      price: "BDT 10,000",
      details: [
        "25 Edited Photos",
        "2 Dress Options",
        "2 Hours Shoot",
      ],
    },
  ],

  Newborn: [
    {
      title: "Newborn Package",
      price: "BDT 7,000",
      details: [
        "20 Edited Photos",
        "Props Included",
        "1.5 Hour Shoot",
      ],
    },
  ],

  "Wedding Shoot": [
    {
      title: "Wedding Package",
      price: "BDT 25,000",
      details: [
        "Full Day Coverage",
        "100+ Edited Photos",
        "Highlight Video",
      ],
    },
  ],

  "Outdoor Photoshoot": [
    {
      title: "Outdoor Package",
      price: "BDT 6,000",
      details: [
        "15 Edited Photos",
        "1 Location",
        "2 Hours Shoot",
      ],
    },
  ],
};

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Birthday");

  return (
    <div className={`bg-white text-black dark:bg-black dark:text-gray-300 py-10 ${inter.className}`}>
      <Container>
        <div className="text-center pb-10">
          <h2 className={`text-[#fbb01a] text-2xl sm:text-3xl md:text-5xl font-semibold inline-block border-b-2 pb-2 ${playfair.className}`}>Our Packages</h2>
        </div>
        {/* Category Menu */}
        <div className="flex justify-center ">
          <div className="shadow-2xl inline-block ">
          <div className="border rounded-2xl p-4">
            <div
              className={`flex flex-wrap justify-center gap-4 `}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg duration-300 cursor-pointer ${
                    activeCategory === category
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {packagesData[activeCategory].map((pkg, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-2xl font-semibold">
                  {pkg.title}
                </h3>

                <h4 className="text-xl font-bold">
                  {pkg.price}
                </h4>
              </div>

              <div className="space-y-2">
                {pkg.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" text-center">
          <h5 className={`text-center pt-9 pb-5 font-semibold text-3xl ${playfair.className}`}>Do You Want Your  <span className="text-[#fbb01a]">BEST MOMEMTS</span> To Be <span className="text-[#fbb01a]">REMEMBERED?</span></h5>
          <Link href="/pages/contact" onClick={() => setOpen(false)}>
              <Button className={"px-15 text-2xl"} btntxt="Contact Us" />
            </Link>
        </div>
      </Container>
    </div>
  );
}