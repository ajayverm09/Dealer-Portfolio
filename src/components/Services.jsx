import React from "react";

const service = [
  {
    title: "Buy",
    subtitle: "Find Your Ideal Home",
    description:
      "Looking to buy a new home? Our expert agents will assist you in finding the perfect property that aligns with your needs and budget. We provide comprehensive support from property search to closing the deal.",
  },
  {
    title: "Sell",
    subtitle: "Sell Your Property Fast",
    description:
      "Ready to sell your property? Trust NextGen Brokers to market your property effectively, attract potential buyers, and negotiate the best deal on your behalf. We ensure a seamless selling process from start to finish.",
  },
  {
    title: "Rent",
    subtitle: "Explore Rental Options",
    description:
      "Looking for a rental property? Our team can help you find the perfect rental that suits your lifestyle and preferences. We offer a wide range of rental options and provide support throughout the leasing process.",
  },
  {
    title: "Invest",
    subtitle: "Grow Your Investment Portfolio",
    description:
      "Interested in real estate investment? NextGen Brokers offers expert advice and personalized strategies to help you grow your investment portfolio. Whether you're a seasoned investor or a first-time buyer, we have the expertise to assist you.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#fafae7] py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold text-black text-center mb-10">Our Services</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {service.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <h4 className="text-md text-black font-medium mb-3">{item.subtitle}</h4>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
