"use client";
import { FaArrowCircleLeft } from 'react-icons/fa';
import { MdOutlineArrowBackIos } from 'react-icons/md';
const PrevArrow = (props) => {
     const {  onClick } = props;
  return (
    <div className={"text-red-400 absolute cursor-pointer left-5 z-10 top-1/2"}
         onClick={onClick}>
            <MdOutlineArrowBackIos className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
         </div>
  );
}

export default PrevArrow;