"use client";
import Button from "@/(components)/common/Button";
import Container from "@/(components)/common/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
          Featured Client Albums
        </h3>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          <Link
            href={"https://www.facebook.com/share/p/1ERmgpRWaf/"}
            target="_blank"
          >
            <Image
              src={"/fb1.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-2 border-black hover:scale-105 duration-500 dark:border-white"
            />
          </Link>
          <Link
            href={"https://www.facebook.com/share/p/17tBqUw53C/"}
            target="_blank"
          >
            <Image
              src={"/fb2.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-2 hover:scale-105 duration-500 border-black dark:border-white"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-9 md:gap-10 justify-items-center">
          <Link
            href={"https://www.facebook.com/share/p/14fvvbWEeVB/"}
            target="_blank"
          >
            <Image
              src={"/fb3.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-2 hover:scale-105 duration-500 border-black dark:border-white"
            />
          </Link>
          <Link
            href={"https://www.facebook.com/share/p/18fWfk4AEg/"}
            target="_blank"
          >
            <Image
              src={"/fb4.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-2 hover:scale-105 duration-500 border-black dark:border-white"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          <Link
            href={"https://www.facebook.com/share/p/1EQcpSmiAq/"}
            target="_blank"
          >
            <Image
              src={"/fb5.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-2 hover:scale-105 duration-500 border-black dark:border-white"
            />
          </Link>
          <Link
            href={"https://www.facebook.com/share/p/18gwBQtjPY/"}
            target="_blank"
          >
            <Image
              src={"/fb6.png"}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl hover:scale-105 duration-500 border-2 border-black dark:border-white"
            />
          </Link>
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
