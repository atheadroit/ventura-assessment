import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import web_logo from './assets/web_logo.gif';
import IpoDetailPage from './IpoDetailPage';

const IpoNavbarFooter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <>
      <div className="container mx-auto p-5 font-sora">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 bg-gray-700 text-white z-50">
          <nav className="flex items-center justify-between p-4">
            <img src={web_logo} alt="Header Logo" className="h-8" /> {/* Logo on the left */}
            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            {/* Desktop Navbar Links */}
            <div className="hidden md:flex md:items-center">
              <Link to="/ipolistpage" className="px-4 py-2 text-white hover:text-gray-300">IPO List</Link>
              <a href="#about" className="px-4 py-2 text-white hover:text-gray-300">About</a>
              <a href="#services" className="px-4 py-2 text-white hover:text-gray-300">Services</a>
              <a href="#contact" className="px-4 py-2 text-white hover:text-gray-300">Contact</a>
            </div>
          </nav>
        </header>
        {/* Full-Screen Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 z-40 flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">
              &times; {/* Close Button */}
            </button>
            <Link to="/ipolistpage" className="text-white text-xl mb-4" onClick={toggleMenu}>IPO List</Link>
            <a href="#about" className="text-white text-xl mb-4" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-white text-xl mb-4" onClick={toggleMenu}>Services</a>
            <a href="#contact" className="text-white text-xl" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
      <IpoDetailPage />
    </>
  );
};

export default IpoNavbarFooter;
