import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import KeyOfferings from "./KeyOffering";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 transition-all duration-500">
            YOUR HOME BUYER GUIDE
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-yellow-600">Deal Acres</span>,
            your trusted partner in finding the perfect property. Our dedicated
            team is here to guide you through the real estate journey, ensuring
            a smooth and successful experience.
          </p>
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Couple viewing property"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <Services />
      </div>

      <div className="bg-[url('https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg')] pb-10 pt-6 px-4 sm:px-6">
        <div className="flex justify-end mb-5">
          <Link to="/properties">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition text-sm sm:text-base">
              All Properties
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden group rounded-lg w-full h-full">
            <img
              src="https://static.wixstatic.com/media/13eefd27e5a543a688fff990b0adb35b.jpg/v1/fit/w_746,h_846,q_90,enc_avif,quality_auto/13eefd27e5a543a688fff990b0adb35b.jpg"
              alt="property1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Property 1</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg w-full h-full">
            <img
              src="https://static.wixstatic.com/media/11062b_0bb7a95d51dd475c8666596576d894e9~mv2.jpg/v1/fit/w_342,h_698,q_90,enc_avif,quality_auto/11062b_0bb7a95d51dd475c8666596576d894e9~mv2.jpg"
              alt="property2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Property 2</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-2 relative overflow-hidden group rounded-lg w-full h-full">
            <img
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
              alt="property3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Property 3</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg w-full h-full">
            <img
              src="https://static.wixstatic.com/media/11062b_ae4aee931e2844ce838bac1b63eae7ea~mv2_d_3024_3024_s_4_2.jpg/v1/fit/w_746,h_846,q_90,enc_avif,quality_auto/11062b_ae4aee931e2844ce838bac1b63eae7ea~mv2_d_3024_3024_s_4_2.jpg"
              alt="property4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Property 4</p>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg w-full h-full">
            <img
              src="https://static.wixstatic.com/media/11062b_12c5062734ed4505b1f63b912263f202~mv2.jpg/v1/fit/w_746,h_1110,q_90,enc_avif,quality_auto/11062b_12c5062734ed4505b1f63b912263f202~mv2.jpg"
              alt="property5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Property 5</p>
            </div>
          </div>
        </div>
      </div>

      <KeyOfferings />

      <div>
        <img
          className="object-cover w-full"
          src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
          alt="Property image"
        />
      </div>
    </div>
  );
}

export default HomePage;
