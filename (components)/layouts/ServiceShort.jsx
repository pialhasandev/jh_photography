"use client";

import Container from "../common/Container";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";

const inter = Inter({
  subsets: ["latin"],
});

const ServiceShort = () => {
  const services = [
    {
      image: "/service1.jpg",
      title: "Wedding Photography",
    },
    {
      image: "/service2.jpg",
      title: "Birthday Photography",
    },
    {
      image: "/service3.jpg",
      title: "Studio Photography",
    },
  ];

  return (
    <section className="bg-white text-black dark:bg-black dark:text-gray-300 py-10 md:py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14 px-4">
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            JH PHOTOGRAPHY
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold py-3">
            Professional Photography Services
          </h2>

          <p
            className={`text-sm sm:text-base md:text-xl font-light leading-relaxed ${inter.className}`}
          >
            JH Photography is a professional photography and cinematography
            service focused on capturing genuine emotions and unforgettable
            moments. With a creative eye and dedication to excellence, every
            event is documented with care, authenticity, and attention to
            detail.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="w-full h-[250px] sm:h-[280px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center px-4">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link href="/pages/service">
            <Button btntxt="See All Services" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceShort;