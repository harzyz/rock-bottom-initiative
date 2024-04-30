import React from "react";
import Image from "next/image";
// import support from '../assets/images/EDO 2.png'
import support1 from "../assets/images/EDO WOMEN.png";
import support2 from "../assets/images/Salveo Logo.png";
import support3 from "../assets/images/Sickle care logo.png";
import support4 from "../assets/images/EDO 2.png";
import support5 from "../assets/images/Playwork Dreams Logo Blue and Grey.png";
// import support6 from "../assets/images/";

const Supporters = () => {
  return (
    <section className="w-full flex flex-col gap-[50px] px-[15px] lg:px-[50px] py-[60px] ">
      <div className="flex items-center">
        <h1 className="uppercase w-[110px] lg:w-[150px] text-xs roboto font-bold lg:text-[16px]">
          our Supporters
        </h1>
        <div className="border border-[#E5E5E5] flex-grow"></div>
      </div>

      <div className="w-full flex gap-[20px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        <div className='lg:w-[15%]'>
          <div className="lg:w-full lg:h-[100px] w-[60px] h-[60px]">
          <Image
            className="w-full h-full"
            src={support1}
            alt="happy children"
          />
          </div>
        </div>
        <div className='lg:w-[20%]'>
          <div className="lg:w-full lg:h-[100px] w-[80px] h-[60px]">
          <Image
            className="w-full h-full"
            src={support2}
            alt="happy children"
          />
          </div>
        </div>
        <div className='lg:w-[15%]'>
          <div className="lg:w-full lg:h-[100px] w-[60px] h-[60px]">
          <Image
            className="w-full h-full"
            src={support3}
            alt="happy children"
          />
          </div>
        </div>
        <div className='lg:w-[15%]'>
          <div className="lg:w-full lg:h-[100px] w-[60px] h-[60px]">
          <Image
            className="w-full h-full"
            src={support4}
            alt="happy children"
          />
          </div>
        </div>
        <div className='lg:w-[12%]'>
          <div className="lg:w-full lg:h-[100px] w-[60px] h-[60px]">
          <Image
            className="w-full h-full"
            src={support5}
            alt="happy children"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
