import { Inter } from "next/font/google";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ImgCard = ({
  src,
  ttltxt,
  desTxt,
  srcTwo,
  desTxtTwo,
  ttltxtTwo,
  className,
  btntxt,
  linkOne,
  linkTwo,
}) => {
  return (
    <div
      className={`flex flex-col text-center md:flex-row gap-6 lg:gap-10 ${inter.className}`}
    >
      {/* Card 1 */}
      <div className="w-full md:w-1/2 shadow-2xl border hover:scale-105 duration-500 border-black rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={ttltxt}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />

        <div className="p-4 md:p-6">
          <h5
            className={`text-xl md:text-2xl font-medium mb-3 ${playfair.className}`}
          >
            {ttltxt}
          </h5>

          <p className="text-sm md:text-lg px-10 leading-relaxed">{desTxt}</p>
        </div>
        <Link href={`${linkOne}`}>
          <button
            className={`py-4 mb-5 px-12 border cursor-pointer inline-block bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black
  dark:hover:bg-black dark:hover:text-white font-medium ${inter.className} duration-300 rounded-lg ${className}`}
          >
            {btntxt}
          </button>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/2 shadow-2xl border hover:scale-105 duration-500 border-black rounded-xl overflow-hidden">
        <Image
          src={srcTwo}
          alt={ttltxtTwo}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />

        <div className="p-4 md:p-6">
          <h5
            className={`text-xl md:text-2xl font-medium mb-3 ${playfair.className}`}
          >
            {ttltxtTwo}
          </h5>

          <p className="text-sm md:text-lg px-10 leading-relaxed">
            {desTxtTwo}
          </p>
        </div>
        <Link href={`${linkTwo}`}>
  <button
    className={`py-4 mb-5 px-12 border cursor-pointer inline-block bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black
    dark:hover:bg-black dark:hover:text-white font-medium ${inter.className} duration-300 rounded-lg ${className}`}
  >
    {btntxt}
  </button>
</Link>
      </div>
    </div>
  );
};

export default ImgCard;
