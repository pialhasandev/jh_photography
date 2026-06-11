import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const Button = ({ className, btntxt }) => {
  return (
    <div
      className={`py-3 px-4 border cursor-pointer inline-block bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black
  dark:hover:bg-black dark:hover:text-white font-medium ${inter.className} duration-300 rounded-lg ${className}`}
    >
      {btntxt}
    </div>
  );
};

export default Button;
