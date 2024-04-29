import Image from "next/image";
import Logo from "../assets/images/Logo (1).png";
import BrownButton from "./BrownButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleBodyOverflow = (open: boolean) => {
    const body = document.body;
    if (body) {
      body.style.overflow = open ? "hidden" : "unset";
    }
  };

  // useEffect(() => {
  //   toggleBodyOverflow(isNavOpen);
  // }, [isNavOpen]);

  const NavItems = [
    {
      id: 1,
      label: "About Us",
    },
    {
      id: 2,
      label: "Volunteer",
    },
    {
      id: 3,
      label: "Login",
    },
    {
      id: 4,
      label: "Register",
    },
  ];

  return (
    <nav className="w-full relative justify-between flex items-center px-[15px] lg:px-[100px] h-[110px] bg-[#fff]">
      <Image src={Logo} alt="logo" />
      <div className="flex items-center gap-[50px]">
        <ul className="hidden lg:flex items-center h-full gap-[50px] ">
          {NavItems.map((item) => (
            <li
              className="text-[#959595] cursor-pointer hover:text-[#8B0000] "
              key={item.id}>
              {item.label}
            </li>
          ))}
        </ul>
        <BrownButton className="hidden lg:block px-[20px]" label="Donate Now" />
      </div>
    </nav>
  );
};

export default Navbar;
