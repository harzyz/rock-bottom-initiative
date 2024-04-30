import React from "react";
import footerLogo from "../assets/images/footerLogo.png";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row lg:items-center py-[40px] text-[#fff] lg:justify-between gap-[30px] px-[20px] lg:px-[100px] bg-[#503431]">
      <Image src={footerLogo} alt="footer Logo" />
      <div className="flex lg:w-[65%] lg:flex-row lg:items-center gap-[30px] lg:justify-between flex-col-reverse">
        <p className="lg:text-sm text-[#D9DBE1] text-xs text-center">
          © 2024 Rockbottom Initiative. All rights reserved
        </p>
        <div className="flex gap-[15px] ">
          <span className="flex items-center p-[10px] rounded-full text-[18px] lg:text-[25px] bg-[#624846]">
            <IoLogoInstagram color="#fff" />
          </span>
          <span className="flex items-center p-[10px] rounded-full text-[18px] lg:text-[25px] bg-[#624846]">
            <FaTwitter color="#fff" />
          </span>
          <span className="flex items-center p-[10px] rounded-full text-[18px] lg:text-[25px] bg-[#624846]">
            <FaYoutube color="#fff" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
