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
    <section className="w-full flex flex-col gap-[30px] px-[15px] lg:px-[50px] py-[60px] ">
      <div className="flex items-center">
        <h1 className="uppercase w-[150px] text-xs roboto font-bold lg:text-[16px]">
          our Supporters
        </h1>
        <div className="border border-[#E5E5E5] flex-grow"></div>
      </div>

      <div className="w-full flex justify-between">
        <div className="w-[100px] border border-[red] h-[100px]">
        <Image
          className="w-full h-full"
          src={support1}
          alt="happy children"
        />
        </div>
        <div className="w-[100px] flex items-center justify-center border border-[red] h-[100px]">
        <Image
          className="w-full h-full"
          src={support2}
          alt="happy children"
        />
        </div>
        {/* <Image
          className="w-[100px] border border-[red] h-[100px]"
          src={support2}
          alt="happy children"
        /> */}
        <Image
          className="w-[100px] border border-[red] h-[100px]"
          src={support3}
          alt="happy children"
        />
        <Image
          className="w-[100px] border border-[red] h-[100px]"
          src={support4}
          alt="happy children"
        />
        <Image
          className="w-[100px] border border-[red] h-[100px]"
          src={support5}
          alt="happy children"
        />
      </div>
    </section>
  );
};

export default Supporters;
