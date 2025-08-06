import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    message:
      "Working with NextGen Brokers was a game-changer for me. Their team's dedication and professionalism made the buying process smooth and stress-free.",
  },
  {
    name: "Alex Chen",
    message:
      "I highly recommend NextGen Brokers for anyone looking to sell their property. They exceeded my expectations and got me a great deal in no time.",
  },
  {
    name: "Maria Rodriguez",
    message:
      "NextGen Brokers provided exceptional rental services. They found me the perfect apartment within my budget, and I couldn't be happier",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
      <div className="space-y-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between border-b pb-8">
            <p className="font-medium text-lg mb-4 sm:mb-0">{testimonial.name}</p>
            <p className="text-gray-700 sm:w-2/3  text-justify ">"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
