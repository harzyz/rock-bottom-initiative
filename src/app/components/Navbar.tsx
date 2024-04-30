import Image from "next/image";
import Logo from "../assets/images/Logo (1).png";
import BrownButton from "./BrownButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      link: '/about-us'
    },
    {
      id: 2,
      label: "Volunteer",
      link: '/volunteer'
    },
    {
      id: 3,
      label: "Login",
      link: '/login'
    },
    {
      id: 4,
      label: "Register",
      link: '/register'
    },
  ];

  return (
    <nav className="w-full relative justify-between flex items-center px-[15px] lg:px-[100px] h-[110px] bg-[#fff]">
      <Link href='/'>
      <Image className='h-[50px] lg:h-[60px] ' src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center gap-[50px]">
        <ul className="hidden lg:flex items-center h-full gap-[50px] ">
          {NavItems.map((item) => (
            <Link href={item.link} key={item.id}>
            <li
              className="text-[#959595] cursor-pointer hover:text-[#8B0000] "
              >
              {item.label}
            </li>
            </Link>
          ))}
        </ul>
        <BrownButton className="hidden bg-[#8B0000] lg:block px-[20px]" label="Donate Now" />
        <GiHamburgerMenu size={25} className='block lg:hidden' />
        
      </div>
    </nav>
  );
};

export default Navbar;
