import Container from "@/(components)/common/Container";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const page = () => {
  return (
    <div className="bg-white pt-30 text-black dark:bg-black dark:text-gray-300">
      <Container>
        <p className="text-center pt-8 text-sm sm:text-base">JH PHOTOGRAPHY</p>

        <h3
          className={`text-3xl sm:text-4xl md:text-5xl py-3 text-center ${inter.className}`}
        >
          About Us
        </h3>

        <p
          className={`text-base sm:text-lg md:text-xl py-3 text-center md:text-left ${inter.className}`}
        >
          JH Photography was founded by me, Zahid Hasan — a passionate
          photographer with a deep love for capturing genuine emotions and
          timeless memories.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-10">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h5
              className={`text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left ${inter.className}`}
            >
              I'm Zahid Hasan, the founder and photographer behind JH
              Photography. My work is driven by a passion for capturing
              authentic emotions and turning life's most precious moments into
              lasting visual stories. Whether it's an intimate ceremony or a
              grand celebration, I bring creativity, attention to detail, and a
              personal touch to every event I cover. I work closely with you to
              understand your vision and bring it to life in a way that reflects
              your unique personality and style. Every moment of your special
              day matters to me, and I take pride in capturing those moments
              with beauty, authenticity, and heart. From weddings and
              engagements to any other milestone event, I'm committed to
              delivering exceptional quality and service — going above and
              beyond to make sure your memories are preserved exactly as you
              imagined. As your day unfolds, I capture it using a variety of
              styles, creating intimate works of art — timeless and striking
              images that tell the story of who you are. Let's create something
              unforgettable together. Reach out today to schedule a consultation
              and learn more about how I can help you cherish your story
              forever.
            </h5>
            <div className={`py-5 font-bold text-2xl ${inter.className}`}>
              <h4 className="pb-1">
                Business Email : <span>jhphotographybd@gmail.com</span>
              </h4>
              <p>
                Phone: <span>+8801318424303</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <Image
              className="rounded-2xl border-4 border-amber-600 w-full max-w-[400px] h-auto"
              src="/jahid.jpg"
              alt="jahid profile"
              width={400}
              height={300}
            />
          </div>
        </div>

        <h5
          className={`text-3xl sm:text-4xl md:text-5xl text-[#fbb01a] border-b-2 md:border-b-3 inline-block pt-5 ${inter.className}`}
        >
          Our Location
        </h5>

        <div className="py-5">
          <div
            className={`border-2 border-amber-700 rounded-2xl py-5 px-5 sm:px-7 w-full md:w-fit ${inter.className}`}
          >
            <h6 className="text-base sm:text-lg">Shop Name: Jh Photography</h6>

            <div className="py-1">
              <h5 className="text-base sm:text-lg">Rahima Plaza 2nd Floor,</h5>
              <p className="pt-1 text-sm sm:text-base">
                Tomaltola, Jamalpur Sadar,
              </p>
              <p className="pt-1 text-sm sm:text-base">
                Mymensingh,Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
