import Container from "@/(components)/common/Container";
import ImgCard from "@/(components)/common/ImgCard";

import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-gray-300 py-10">
      <Container>
       <div className="text-center py-5">
         <h3 className="text-5xl  border-b-2 inline-block pb-2 text-[#fbb01a] font-semibold">
          Our Services
        </h3>
       </div>
        <div className="py-5">
          <ImgCard
            src={"/wedding.jpg"}
            srcTwo={"/birth.jpg"}
            ttltxt={"Wedding Photogarphy"}
            ttltxtTwo={"Birthday Photogarphy"}
            desTxt={"From intimate ceremonies to grand celebrations, our team has the expertise to capture the spirit"}
            desTxtTwo={"When you go back to your childhood birthdays, it's generally the parties, the experiences"}
            btntxt={"Details"}
          />
        </div>
        <div className="py-5">
          <ImgCard
            src={"/baby.jpg"}
            srcTwo={"/famil.jpg"}
            ttltxt={"Newborn Photogarphy"}
            ttltxtTwo={"Family Photogarphy"}
             desTxt={"Newborn sessions capture those precious first moments of your baby’s beautiful existence"}
            desTxtTwo={"Family is everything. Your loved ones are the ones who have been there for you through thick and thin"}
            btntxt={"Details"}
          />
          
        </div>
        <div className="py-5">
          <ImgCard
            src={"/studio.jpg"}
            srcTwo={"/outdoor.jpg"}
            ttltxt={"Studio Photogarphy"}
            ttltxtTwo={"Outdoor Photogarphy"}
            desTxt={"When was the last time you were professionally photographed and got pictures that you loved"}
            desTxtTwo={"Outdoor couple photoshoots are a beautiful and romantic way to capture your love for each other"}
            btntxt={"Details"}
          />
        </div>
      </Container>
    </div>
  );
};

export default page;
