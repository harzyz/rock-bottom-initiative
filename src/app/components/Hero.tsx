import Image from "next/image";
import React from "react";
import bgImage from "../assets/images/BG Image.png";
import BrownButton from "./BrownButton";
import { IoMdPlayCircle } from "react-icons/io";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="absolute w-full ps-[15px] lg:ps-[100px] h-full flex items-center">
        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
          <h1 className="text-[20px] text-shadow-[20px] lg:text-shadow-2xl arsenal font-[700] lg:text-[64px] text-[#fff]">
            Sickle Cell <br /> Awareness one <br /> story at a Time
          </h1>
          <div className="flex">
            <Link href={"/register"}>
              <button className="lg:py-[16px] py-[8px] rounded-[5px] px-[16px] lg:px-[32px] bg-[#fff] text-[black] transform transition-transform hover:scale-110">
                Donate Now
              </button>
            </Link>
            <Link href="#govid">
              <button className="flex gap-[10px] items-center text-[#fff] lg:py-[16px] py-[8px] rounded-[5px] px-[16px] lg:px-[32px] transform transition-transform hover:scale-110">
                <IoMdPlayCircle className="bg-[black]" color="#fff" />
                Play Video
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="w-full h-full lg:object-fill object-cover"
        src={bgImage}
        alt="happy kids"
      />
    </section>
  );
}
