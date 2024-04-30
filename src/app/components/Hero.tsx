import Image from "next/image";
import React from "react";
import bgImage from "../assets/images/BG Image.png";
import BrownButton from "./BrownButton";
import { IoMdPlayCircle } from "react-icons/io";

export default function Hero() {
  return (
    <section className="w-full relative h-[400px] lg:h-[600px]">
      <div className="absolute w-full ps-[15px] lg:ps-[100px] h-full flex items-center">
        <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
          <h1 className="text-[20px] font-[700] lg:text-[40px] text-[#fff]">
            Sickle Cell <br /> Awareness one <br /> story at a Time
          </h1>
          <div className="flex">
            <BrownButton
              className="bg-[#fff] py-[5px] lg:py-[10px] lg:text-sm text-xs lg:px-[15px] text-[black]"
              label="Donate Now"
            />
            <button className="flex gap-[10px] items-center text-[#fff] px-[15px] py-[10px]">
              <IoMdPlayCircle className="bg-[black]" color="#fff" />
              Play Video
            </button>
          </div>
        </div>
      </div>
      <Image className="w-full h-full lg:object-fill object-cover" src={bgImage} alt="happy kids" />
    </section>
  );
}
