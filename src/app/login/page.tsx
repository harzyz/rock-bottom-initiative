import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import BrownButton from "../components/BrownButton";
import loginImg from "../assets/images/loginImg.png";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="set bg-[#FAFAFA] min-h-[100vh] flex flex-col  w-full h-full">
      <Navbar />
      <div className="flex flex-col lg:flex-row h-full ">
        <div className="lg:w-[45%] lg:p-0 p-[10px] h-[200px] lg:h-[700px]">
          <Image
            className="w-full rounded-[5px] lg:rounded-0 h-full object-cover"
            src={loginImg}
            alt="Group of people smiling"
          />
        </div>
        <div className="lg:w-[55%] py-[30px] lg:pt-[50px] flex items-center justify-center">
          <form className="lg:w-[60%] w-[90%] gap-[20px] flex flex-col">
            <h1 className="font-bold text-[25px] lg:text-[36px] ">Log In</h1>
            <p className="text-[#525560] text-xs">
              Don&apos;t have an account?{" "}
              <span className="text-[#8B0000] ">Sign Up</span>
            </p>
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Email Address"
              type="text"
            />
            <input
              className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]"
              placeholder="Password"
              type="password"
            />
               <button className="lg:py-[16px] w-full py-[8px] rounded-[5px] px-[16px] lg:px-[32px] bg-[#8B0000] text-[#fff]">
               Log In
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default page;
