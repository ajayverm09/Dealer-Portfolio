import React from "react";
import { Link } from "react-router-dom";
import Popups from "./Popups";

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
    <section className="bg-[#f9f9e9] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center sm:text-left">
          Key Offerings
        </h2>
        <div className="space-y-10">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start justify-between border-b pb-6 gap-4"
            >
              <p className="font-semibold text-lg sm:w-1/3">{item.title}</p>
              <p className="text-gray-700 text-justify sm:w-2/3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-10">
          <Popups />
        </div>
      </div>
    </section>
  );
};

export default KeyOfferings;
