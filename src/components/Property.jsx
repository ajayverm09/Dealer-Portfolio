import React from "react";

const PropertyPage = () => {
  return (
    <div className="bg-[#fafae7]">
      <div className="min-h-screen px-4 py-10 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">Find Your Dream Home</h1>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Property A"
              className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Property A</h2>
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">Exclusive Property</h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Explore our exclusive range of luxurious properties that cater to your refined taste and lifestyle.
                From elegant penthouses to waterfront mansions, our luxury homes embody sophistication and comfort —
                the ultimate in upscale living.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen px-4 py-10 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Property B</h2>
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">Exclusive Property</h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Explore our exclusive range of luxurious properties that cater to your refined taste and lifestyle.
                From elegant penthouses to waterfront mansions, our luxury homes embody sophistication and comfort —
                the ultimate in upscale living.
              </p>
            </div>
            <img
              src="https://static.wixstatic.com/media/f61af8_e130fc3e48434847a39c919ef71527b9.png/v1/fill/w_624,h_664,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_e130fc3e48434847a39c919ef71527b9.png"
              alt="Property B"
              className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen px-4 py-10 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <img
              src="https://static.wixstatic.com/media/f61af8_6eec4eef48154d4f843cc41d2ccda277.png/v1/fill/w_588,h_696,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_6eec4eef48154d4f843cc41d2ccda277.png"
              alt="Property C"
              className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Property C</h2>
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">Exclusive Property</h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Explore our exclusive range of luxurious properties that cater to your refined taste and lifestyle.
                From elegant penthouses to waterfront mansions, our luxury homes embody sophistication and comfort —
                the ultimate in upscale living.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen px-4 py-10 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Property D</h2>
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">Exclusive Property</h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                Explore our exclusive range of luxurious properties that cater to your refined taste and lifestyle.
                From elegant penthouses to waterfront mansions, our luxury homes embody sophistication and comfort —
                the ultimate in upscale living.
              </p>
            </div>
            <img
              src="https://static.wixstatic.com/media/f61af8_a1d54dc5177f4908a730cc1b5ead408f.png/v1/fill/w_616,h_664,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_a1d54dc5177f4908a730cc1b5ead408f.png"
              alt="Property D"
              className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
