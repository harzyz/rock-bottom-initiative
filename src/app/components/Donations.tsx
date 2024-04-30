import React from "react";
import Image from "next/image";
import DonationsImage from "../assets/images/donationsImg.png";

const Donations = () => {
  return (
    <section className="w-full h-[400px] px-[10px] lg:px-[100px] py-[60px]">
      <div className="w-full h-full relative">
        <div className="w-full absolute top-0 rounded-[20px] left-0 h-full bg-[#00000066]">
          <h1>
            You can contribute to provide a place for children with special
            needs!
          </h1>
          <div className='flex'>
            <button className="py-[10px] rounded-[5px] px-[15px] bg-[#fff] text-[black] text-sm ">
              Learn More
            </button>
            <button className="py-[10px] rounded-[5px] px-[15px] bg-[#fff] text-[black] text-sm ">
              Learn More
            </button>
          </div>
        </div>
        <Image
          className="w-full h-full"
          src={DonationsImage}
          alt="happy children"
        />
      </div>
    </section>
  );
};

export default Donations;
