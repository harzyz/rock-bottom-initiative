import React from "react";
import Image from "next/image";
import DonationsImage from "../assets/images/donationsImg.png";

const Donations = () => {
  return (
    <section className="w-full h-[450px] px-[10px] lg:px-[100px] py-[60px]">
      <div className="w-full h-full relative">
        <div className="w-full flex flex-col justify-center items-center absolute top-0 rounded-[20px] left-0 h-full bg-[#00000066]">
          <h1 className="font-[700] text-center text-[#fff] text-[20px] lg:text-[40px] ">
            You can contribute to provide a place <br className="hidden lg:block"/> for children with special
            needs!
          </h1>
          <div className='flex gap-[38px]'>
            <button className="lg:py-[16px] py-[8px] rounded-[4px] px-[16px] lg:px-[32px] bg-[#8B0000] text-[#fff] text-sm ">
              Learn More
            </button>
            <button className="lg:py-[16px] py-[8px] rounded-[4px] px-[16px] lg:px-[32px] bg-[#fff] text-[black] text-sm ">
              Learn More
            </button>
          </div>
        </div>
        <Image
          className="w-full h-full lg:object-fill object-cover"
          src={DonationsImage}
          alt="happy children"
        />
      </div>
    </section>
  );
};

export default Donations;
