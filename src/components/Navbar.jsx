import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#fafae7] sticky top-0 z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Link to="/" className="hover:text-black transition">
          <span className="text-2xl">✱</span>
          <span className="text-lg font-medium">Deal Acres</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/properties" className="hover:text-black transition">Properties</Link>
          <Link to="/faq" className="hover:text-black transition">FAQ</Link>
        </nav>

        <div>
          <Link to="/contact">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
