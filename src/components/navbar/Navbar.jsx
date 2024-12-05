import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md w-full fixed top-0 bg-primary z-10">
      <nav className="flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../logo.png" alt="Logo" className="h-12 w-24" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col md:flex-row md:justify-center  md:gap-6 absolute md:static bg-primary left-0 top-16 w-full md:w-auto transition-transform duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <li className="text-center md:text-left lg:mt-2">
            <Link to="/" className="block p-2 bg-secondary py-1 px-2 text-white rounded-md">
              Home
            </Link>
          </li>
          <li className="text-center md:text-left lg:mt-2">
            <Link to="/shop" className="block p-2 bg-secondary py-1 px-2 text-white rounded-md">
              Shop
            </Link>
          </li>
          <li className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start p-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 rounded-3xl border border-black"
              />
              <img src="../search.png" className="h-5 w-5 ml-2" alt="Search Icon" />
            </div>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex gap-6 items-center">
          <img src="../cart.png" alt="Cart" className="w-6 h-6" />
          <Link to="/" className="bg-secondary py-1 px-2 text-white rounded-md cursor-pointer">Login</Link>
          <Link to="/" className="bg-secondary py-1 px-2 text-white rounded-md cursor-pointer">Signup</Link>
        </div>
      </nav>
    </header>
  );
}
