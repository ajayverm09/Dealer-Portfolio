import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#fafae7] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-black transition">
          <span className="text-2xl">✱</span>
          <span className="text-lg font-medium">Deal Acres</span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/blog" className="hover:text-black transition">Blog</Link>
          <Link to="/faq" className="hover:text-black transition">FAQ</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
              Contact Us
            </button>
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-[#fafae7] text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block">Blog</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="block">FAQ</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="inline-block">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
