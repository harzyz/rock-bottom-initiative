import React from "react";
import BrownButton from "./BrownButton";
import Image from "next/image";
// import tola from '../assets/images/tola.jpg'
// import Tola from "../assets/images/tola.jpeg";

const OurGoal = () => {
  
  return (
    <section className="w-full items-center lg:justify-between flex flex-col lg:flex-row bg-[#004832] p-[15px] lg:px-[100px] gap-[30px] lg:py-[60px] ">
      <div className="lg:w-[50%] flex flex-col gap-[20px] items-start">
        <p className="text-[#fff] text-sm">
          Tola, originally from Benin City, Nigeria, now resides in the UK where
          she works as a property lawyer. Growing up with sickle cell and three
          siblings, two of whom are sickle cell warriors, Tola has witnessed
          firsthand the challenges of living with the disease. After a
          near-death experience that left her believing she might never walk
          again, Tola had to relearn how to walk, a journey that profoundly
          impacted her perspective on life. 
        </p>
        <p className="text-[#fff] text-sm">
        Motivated by her own struggles, Tola
          felt compelled to share her story and offer encouragement to others
          facing similar hardships. Recognizing the lack of sickle cell
          foundations in her hometown of Benin City, she saw an opportunity to
          raise awareness and provide support to those in need. Tolas mission is
          not only to educate others about sickle cell disease but also to build
          a community where warriors feel understood and empowered.
        </p>
        <BrownButton
          className="text-sm font-[500] px-[15px] text-[black] bg-[#fff]"
          label="See More"
        />
      </div>
      <div className="lg:w-[40%] flex flex-col gap-[10px] rounded-[10px] p-[20px] bg-[#fff] h-full">
        <div className="flex items-center gap-[10px]">
          {/* <Image className="w-full h-full" src={Tola} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
