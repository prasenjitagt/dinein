"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add a click event listener to close the menu when clicking outside of it
    const closeMenuOnClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".navCont")) {
        setIsMenuOpen(false);
      }
    };


    // Attach the event listener when the component mounts
    document.addEventListener("click", closeMenuOnClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuIcon = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (

    <div className="relative w-[100vw] shadow-xl p-1 mb-4 navCont ">

      <div className={` ${isMenuOpen ? `rounded-t-lg ` : `rounded-lg`} bg-myGreenDark `}>

        <button
          className={` md:hidden lg:hidden transition-transform transform ${isMenuOpen ? "rotate-45" : ``}`}
          onClick={handleMenuIcon}>
          <Image
            width={28}
            height={28}
            alt="menu"
            src={isMenuOpen ? `/icons/cross.svg` : `/icons/menu.svg`}
          />
        </button>
      </div>

      <ul className={`absolute 
      flex
      flex-col
      items-center
      h-[100vh]
      z-10
      lg:hidden
      md:hidden
      opacity-90
      origin-left
      duration-200
      ${isMenuOpen ? `w-[50vw]` : `w-0`}
      text-white
      bg-myGreenDark `}>
        <li >
          <Link onClick={handleMenuIcon} href={`/`}>
            {isMenuOpen && `Home`}
          </Link>
        </li>
        <li>
          <Link onClick={handleMenuIcon} href={`/add-item`}>
            {isMenuOpen && `Add Item`}

          </Link>
        </li>
        <li>
          <Link onClick={handleMenuIcon} href={`/biryani`}>
            {isMenuOpen && `Biryani`}

          </Link>
        </li>
      </ul>






    </div>)
};

export default Navbar;
