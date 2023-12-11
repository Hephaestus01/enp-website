import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ENP_Logo from '../assets/images/ENP_Logo.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={ENP_Logo} alt="Elephant Nature Park" className="h-8 md:h-10" />
              </a>
        <div className="text-xl font-bold">Elephant Nature Park</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute inset-x-0 top-0 p-4 mt-16 bg-white shadow-md md:shadow-none md:relative md:flex md:items-center md:p-0 md:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a
                href="#home"
                className="block py-2 text-gray-800 hover:text-gray-600 md:py-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-gray-800 hover:text-gray-600 md:py-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#visit"
                className="block py-2 text-gray-800 hover:text-gray-600 md:py-0"
              >
                Visit
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-gray-800 hover:text-gray-600 md:py-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
