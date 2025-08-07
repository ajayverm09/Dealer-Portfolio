import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#071d31] text-white py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        <div>
          <img src="/logo.png" alt="Deal Acres" className="w-20 mb-4" />
          <p className="mb-2">
            500 Terry Francine St. San Francisco, CA 94158
          </p>
          <p className="mb-1">📞 +91-9871772717</p>
          <p className="mb-3">📞 +91-9971911131</p>
          <p className="mb-1">
            📧 <a href="mailto:info@mysite.com" className="text-blue-400 hover:underline">info@mysite.com</a>
          </p>
          <p>
            📧 <a href="mailto:info@mysite.com" className="text-blue-400 hover:underline">info@mysite.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Me</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
          </div>
        </div>

      </div>

      <div className="text-gray-400 text-xs mt-10 px-4 max-w-6xl mx-auto">
        <p className="mb-4">
          <strong>Disclaimer:</strong> This website showcases my personal real estate portfolio for informational purposes only. It does not constitute professional advice or guarantee property availability, pricing, or investment outcomes. Always consult a licensed realtor.
        </p>
        <p className="mb-6">
          All information on this website is for general purposes only. Property details are subject to change. I am not liable for any inaccuracies or decisions made based on this content...
        </p>
        <p className="text-center text-sm text-gray-300">
          © 2025 <strong>by NextGenBrokers. Powered and secured by Wix</strong>. All Rights Reserved by: <strong>Deal Acres</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
