"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/(components)/common/Container";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Button from "@/(components)/common/Button";
import { FiCheck } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

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
      details: ["15 Edited Photos", "1 Hour Shoot", "Basic Editing"],
    },
    {
      title: "Birthday Package - 2",
      price: "BDT 8,000",
      details: ["25 Edited Photos", "2 Hours Shoot", "Premium Editing"],
    },
  ],
  "Studio Portrait": [
    {
      title: "Studio Portrait - 1",
      price: "BDT 4,000",
      details: ["10 Edited Photos", "1 Dress", "Studio Lighting"],
    },
  ],
  "Family Shoot": [
    {
      title: "Family Shoot - 1",
      price: "BDT 5,000",
      details: ["15 Edited Photos", "1 Dress Option", "1 Hour Shoot"],
    },
    {
      title: "Family Shoot - 2",
      price: "BDT 10,000",
      details: ["25 Edited Photos", "2 Dress Options", "2 Hours Shoot"],
    },
  ],
  Newborn: [
    {
      title: "Newborn Package",
      price: "BDT 7,000",
      details: ["20 Edited Photos", "Props Included", "1.5 Hour Shoot"],
    },
  ],
  "Wedding Shoot": [
    {
      title: "1 Day Only Photography",
      price: "BDT 5,999",
      details: ["Duration : 6 hour (Per shift)", "100+ Edited Photos", "Basic Class"],
    },
    {
      title: "1 Day Photography & Cinematography",
      price: "BDT 11,999",
      details: ["Duration : 6 hour (Per shift)", "100+ Edited Photos", "1 Trailer & Movie"],
    },
    {
      title: "2 Day Only Photography",
      price: "BDT 11,999",
      details: ["Duration : 6 hour (Per shift)", "200+ Edited Photos", "Silver Class"],
    },
    {
      title: "2 Day Photography & Cinematography",
      price: "BDT 23,999",
      details: ["Duration : 6 hour (Per shift)", "200+ Edited Photos", "2 Trailer & 2 Movies"],
    },
    {
      title: "3 Day Only Photography",
      price: "BDT 15,999",
      details: ["Duration : 6 hour (Per shift)", "400+ Edited Photos", "Gold Class"],
    },
    {
      title: "3 Day Photography & Cinematography",
      price: "BDT 35,999",
      details: ["Duration : 6 hour (Per shift)", "400+ Edited Photos", "3 Trailer & 3 Movies"],
    },
  ],
  "Outdoor Photoshoot": [
    {
      title: "Outdoor Package",
      price: "BDT 6,000",
      details: ["15 Edited Photos", "1 Location", "2 Hours Shoot"],
    },
  ],
};

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Birthday");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && packagesData[cat]) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  return (
    <div className={`bg-white text-black dark:bg-black pt-32 dark:text-gray-300 pb-10 ${inter.className}`}>
      <Container>

        {/* Heading */}
        <div className="text-center pb-10">
          <h2 className={`text-[#fbb01a] text-2xl sm:text-3xl md:text-5xl font-semibold inline-block border-b-2 pb-2 ${playfair.className}`}>
            Our Packages
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="border rounded-2xl p-4 shadow-md">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
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

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {packagesData[activeCategory].map((pkg, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <span className="text-lg font-bold text-[#fbb01a]">{pkg.price}</span>
              </div>
              <div className="border-t mb-4" />
              <ul className="space-y-2">
                {pkg.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <FiCheck className="text-green-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <h5 className={`pb-6 font-semibold text-2xl sm:text-3xl ${playfair.className}`}>
            Do You Want Your{" "}
            <span className="text-[#fbb01a]">BEST MOMENTS</span> To Be{" "}
            <span className="text-[#fbb01a]">REMEMBERED?</span>
          </h5>
          <Link href="/pages/contact">
            <Button className="px-15 text-2xl" btntxt="Contact Us" />
          </Link>
        </div>

      </Container>
    </div>
  );
}