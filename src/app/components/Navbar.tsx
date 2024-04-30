"use client";
import Image from "next/image";
import Logo from "../assets/images/Logo (1).png";
import BrownButton from "./BrownButton";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleBodyOverflow = (open: boolean) => {
    const body = document.body;
    if (body) {
      body.style.overflow = open ? "hidden" : "unset";
    }
  };

  useEffect(() => {
    toggleBodyOverflow(isNavOpen);
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const NavItems = [
    {
      id: 1,
      label: "About Us",
      link: "/about-us",
    },
    {
      id: 2,
      label: "Volunteer",
      link: "/volunteer",
    },
    {
      id: 3,
      label: "Login",
      link: "/login",
    },
    {
      id: 4,
      label: "Register",
      link: "/register",
    },
  ];

  return (
    <nav className="w-full relative justify-between flex items-center px-[15px] lg:px-[100px] h-[110px] bg-[#fff]">
      <Link href="/">
        <Image className="h-[50px] lg:h-[60px] " src={Logo} alt="logo" />
      </Link>

      {isNavOpen && (
        <div
          onClick={toggleNav}
          className="absolute top-[0px] right-[0px] lg:hidden w-full h-[100vh] bg-[#000] opacity-50"></div>
      )}
      <div className="flex items-center gap-[50px]">
        <ul
          className={`lg:flex lg:items-center gap-[20px] ${
            isNavOpen
              ? "h-[100vh] w-[65%] absolute top-[0px] right-[0px] ps-[30px] pt-[10px] pe-[15px] items-start flex flex-col bg-[#FFF]"
              : "hidden"
          }`}>
          <div
            onClick={toggleNav}
            className="w-full lg:hidden flex justify-end">
            <IoIosCloseCircleOutline size={25} />
          </div>
          {NavItems.map((item) => (
            <Link href={item.link} key={item.id}>
              <li className="text-[#959595] cursor-pointer hover:text-[#8B0000] ">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <BrownButton
          className="hidden bg-[#8B0000] lg:block px-[20px]"
          label="Donate Now"
        />
        <GiHamburgerMenu
          onClick={toggleNav}
          size={25}
          className="block lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
