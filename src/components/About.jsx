import React from 'react';

const About = () => {
  return (
    <div className="bg-[#FAFAE7] min-h-screen p-6 md:p-16">
      <div className="max-w-7xl mx-auto">
      
        <p className="text-4xl md:text-6xl font-semibold">About</p>

        <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-base md:text-lg leading-relaxed">
              Deal Acres are a leading real estate brokerage specializing in connecting clients with their dream properties. With a focus on personalized service and market expertise, we strive to make the buying and selling process seamless and rewarding. Our team of experienced agents is dedicated to providing top-notch guidance and support, ensuring that every client's real estate journey is a success.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://static.wixstatic.com/media/11062b_8c6241edc8f64edbba3153afa8561277~mv2.jpg/v1/fill/w_1009,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8c6241edc8f64edbba3153afa8561277~mv2.jpg"
              alt="Real Estate"
              className="w-full h-[300px] md:h-[440px] object-cover rounded-md"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-3xl md:text-5xl font-semibold text-center lg:text-left">
              Your Dream Home Awaits
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg"
              alt="Dream Home"
              className="w-full h-[300px] md:h-[440px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
