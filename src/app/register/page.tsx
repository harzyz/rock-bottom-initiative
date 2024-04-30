import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import BrownButton from "../components/BrownButton";
import registerImg from "../assets/images/registerImg.png";

const page = () => {
  return (
    <div className="set bg-[#FAFAFA] flex flex-col min-h-[100vh]  w-full h-full">
      <Navbar />
      <div className="flex flex-col lg:flex-row h-full ">
        <div className="lg:w-[45%] lg:p-0 p-[10px] h-[200px] lg:h-[700px]">
          <Image
            className="w-full h-full object-cover"
            src={registerImg}
            alt="Group of people smiling"
          />
        </div>
        <div className="lg:w-[55%] py-[20px] flex justify-center">
          <form className="lg:w-[60%] w-[90%] gap-[20px] flex flex-col">
            <h1 className="font-bold text-[20px] lg:text-[36px] ">Join Us</h1>
            <p className="text-[#525560] text-xs">
              Register and Be Part of the Rock Bottom Family.
            </p>
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Username"
              type="text"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Email Address"
              type="text"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Date of Birth"
              type="text"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Password"
              type="password"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Confirm Password"
              type="password"
            />
            <div className="w-full flex justify-center lg:justify-start">
              <BrownButton
                className="w-[80%] bg-[#8B0000] lg:h-[50px] text-sm px-[15px]"
                label="Register"
              />
              {/* <button className="py-[10px] rounded-[5px] px-[15px] bg-[#8B0000] text-[#8B0000] text-sm ">
              Register
                  </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
