import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Testimonials from "./Testimonials";
import KeyOfferings from "./KeyOffering";
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 transition-all duration-500">
            YOUR HOME BUYER GUIDE
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-yellow-600">NextGen Brokers</span>, your trusted partner in finding the perfect property. Our dedicated team is here to guide you through the real estate journey, ensuring a smooth and successful experience.
          </p>
          <Link to ="/contact">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105">
            Contact Us
          </button>
          </Link>
        </div>

        
        <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Couple viewing property"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
            <Services />
        </div>

      </div>

      <div className="bg-[#EEC355] py-12 px-4 sm:px-12">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-black">Our Properties</h2>
      <Link to="/properties">
      <button className="border-0  rounded-full w-32 h-10 -mt-8 cursor-pointer hover:bg-white hover:text-black mb-5 ml-[1250px] bg-black text-white">All Properties</button>
      </Link>

      <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 gap-4">
        
        <img
          src="https://static.wixstatic.com/media/13eefd27e5a543a688fff990b0adb35b.jpg/v1/fit/w_746,h_846,q_90,enc_avif,quality_auto/13eefd27e5a543a688fff990b0adb35b.jpg"
          alt="property1"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://static.wixstatic.com/media/11062b_0bb7a95d51dd475c8666596576d894e9~mv2.jpg/v1/fit/w_342,h_698,q_90,enc_avif,quality_auto/11062b_0bb7a95d51dd475c8666596576d894e9~mv2.jpg"
          alt="property2"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="col-span-2 sm:col-span-1 row-span-2">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
            alt="property3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <img
          src="https://static.wixstatic.com/media/11062b_ae4aee931e2844ce838bac1b63eae7ea~mv2_d_3024_3024_s_4_2.jpg/v1/fit/w_746,h_846,q_90,enc_avif,quality_auto/11062b_ae4aee931e2844ce838bac1b63eae7ea~mv2_d_3024_3024_s_4_2.jpg"
          alt="property4"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://static.wixstatic.com/media/11062b_12c5062734ed4505b1f63b912263f202~mv2.jpg/v1/fit/w_746,h_1110,q_90,enc_avif,quality_auto/11062b_12c5062734ed4505b1f63b912263f202~mv2.jpg"
          alt="property5"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
    <KeyOfferings/>
    <Testimonials/>
    <div>
      <img className="object-cover" src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg" alt="Property image" />
    </div>

    </div>
  );
}

export default HomePage