import React from "react";
import { Link } from "react-router-dom";

const offerings = [
  {
    title: "Expert Guidance",
    description:
      "Our team of experienced brokers provides expert guidance and personalized advice to help you make informed real estate decisions. We are committed to ensuring that your property transactions are seamless and successful.",
  },
  {
    title: "Market Insights",
    description:
      "Stay informed with our market insights and trends analysis. We keep you updated on the latest developments in the real estate market, empowering you to make strategic decisions that align with your goals.",
  },
  {
    title: "Client Satisfaction",
    description:
      "At NextGen Brokers, client satisfaction is our top priority. We go the extra mile to ensure that our clients are happy with the services provided. Your success is our success.",
  },
];

const KeyOfferings = () => {
  return (
    <section className="bg-[#f9f9e9] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Key Offerings</h2>
        <div className="space-y-12">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between border-b pb-8"
            >
              <p className="font-medium text-lg mb-4 sm:mb-0">
                {item.title}
              </p>
              <p className="text-gray-700 text-justify sm:w-2/3 ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/contact">
      <button className="border-0 mt-5 rounded-full w-32 h-10 hover:bg-black hover:text-white bg-[#EEC355]">Get in Touch</button>
      </Link>
      </div>
    </section>
  );
};

export default KeyOfferings;
