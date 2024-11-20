import React, { useState } from "react";
import logo from "../assets/akLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between mb-20 py-6 px-4 md:px-8">
      {/* Logo */}
      <img className="w-16" src={logo} alt="Logo" />

      {/* Hamburger Menu for Small Screens */}
      <div
        className="text-2xl md:hidden cursor-pointer z-30 absolute top-6 right-6"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul
        className={`flex flex-col md:flex-row items-center list-none gap-6  md:gap-12 text-xl fixed md:static top-0 right-0 bg-black md:bg-transparent shadow-lg md:shadow-none md:z-auto z-20 w-64 h-full md:w-auto md:h-auto p-6 md:p-0 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <li className="w-full md:w-auto text-center">
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li className="w-full md:w-auto text-center">
          <AnchorLink offset={50} href="#about">
            About Me
          </AnchorLink>
        </li>
        <li className="w-full md:w-auto text-center">
          <AnchorLink offset={50} href="#work">
            Works
          </AnchorLink>
        </li>
        <li className="w-full md:w-auto text-center">
          <AnchorLink offset={50} href="#contact">
            Contact Me
          </AnchorLink>
        </li>
      </ul>

      {/* Connect Button */}
      <div className="hidden md:block py-4 px-4 rounded-full bg-gradient-to-br from-pink-300 to-purple-500 text-lg cursor-pointer transition-transform duration-500 hover:scale-105">
        Connect With Me
      </div>
    </div>
  );
}

export default Navbar;
