"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center mb-3">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Rohan Andhariya
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
    flex-col md:flex-row md:flex 
    md:space-x-6 absolute md:static top-[70px] left-0 w-full md:w-auto 
    bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 
    z-50 transition-all duration-300 ease-in-out px-5
    ${isOpen ? "flex" : "hidden"}
  `}
        >
          {[
            { name: "ABOUT", href: "/#about" },
            { name: "EXPERIENCE", href: "/#experience" },
            { name: "SKILLS", href: "/#skills" },
            { name: "EDUCATION", href: "/#education" },
            { name: "PROJECTS", href: "/#projects" },
          ].map(({ name, href }) => (
            <li key={name} className="px-4 py-2">
              <Link
                href={href}
                className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
                onClick={() => setIsOpen(false)} // close on mobile click
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
