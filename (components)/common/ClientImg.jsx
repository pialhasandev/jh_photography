"use client";

import Container from "./Container";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { MdDownload } from "react-icons/md";
import "react-photo-view/dist/react-photo-view.css";
import { FaShareFromSquare } from "react-icons/fa6";

const ClientImg = ({ images }) => {
  // const handleDownload = async (url) => {
  //   const response = await fetch(url);
  //   const blob = await response.blob();

  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "photo.jpg";
  //   link.click();

  //   URL.revokeObjectURL(link.href);
  // };

  const handleShare = async (url) => {
    if (navigator.share) {
      await navigator.share({
        title: "Gallery Image",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Image link copied!");
    }
  };

  return (
    <Container>
      <PhotoProvider
        toolbarRender={({ images, index }) => {
          const currentImage = images[index].src;

          return (
            <div className="flex items-center gap-3 mr-4">
              {/* <button
                onClick={() => handleDownload(currentImage)}
                className="text-white"
              >
                <MdDownload className="cursor-pointer" size={24} />
              </button> */}

              <button
                onClick={() => handleShare(currentImage)}
                className="text-white"
              >
                <FaShareFromSquare className="cursor-pointer" size={24} />
              </button>
            </div>
          );
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <PhotoView key={index} src={img}>
              <div className="overflow-hidden rounded-xl border-4 border-amber-700 cursor-pointer">
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </Container>
  );
};

export default ClientImg;