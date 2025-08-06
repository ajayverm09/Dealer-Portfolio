import React from 'react'

const faq = [
  {
    ques: "How to buy a property?",
    answer: "To buy a property, you need to start by identifying your budget and requirements. Then, you can search for properties online or through a real estate broker. Once you find a suitable property, you can make an offer, negotiate the price, conduct inspections, and finalize the purchase through legal procedures."
  },
  {
    ques: "How to choose the right location for a property?",
    answer: "Choosing the right location for a property depends on factors like proximity to essential amenities, safety, infrastructure development, future growth prospects, and your personal preferences. It's crucial to research different neighborhoods, visit potential locations, and consider your lifestyle needs to make an informed decision"
  },
  {
    ques: "What are the costs involved in buying a property?",
    answer: "When buying a property, you need to consider costs such as the property price, stamp duty, registration fees, legal fees, loan processing fees, and maintenance charges. It's essential to have a clear understanding of all these costs to budget effectively and avoid any financial surprises"
  },
  {
    ques: "What is the role of a real estate broker?",
    answer: "A real estate broker acts as an intermediary between buyers and sellers, helping clients buy, sell, or rent properties. They provide market expertise, negotiate deals, handle paperwork, and ensure smooth transactions. Brokers play a vital role in simplifying the real estate process and guiding clients through property transactions."
  },
  {
    ques: "How to sell a property quickly?",
    answer: "To sell a property quickly, you can start by setting the right price based on market trends and property valuation. Enhancing the property's curb appeal, staging it effectively, marketing through various channels, and working with a reputable real estate broker can help attract potential buyers and expedite the selling process."
  },
  {
    ques: "What are the benefits of investing in real estate",
    answer: "Investing in real estate offers benefits such as potential appreciation in property value, rental income generation, portfolio diversification, tax advantages, and long-term wealth creation. Real estate investments can provide financial stability, passive income opportunities, and a hedge against inflation, making it a popular choice for investors seeking tangible assets."
  },
]

const Faq = () => {
  return (
    <section className="w-full bg-[#FAFAE7] px-4 py-16">
      <h2 className="text-4xl ml-28 font-bold mb-12">FAQ</h2>
      <div className="space-y-12">
        {faq.map((faq, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between pl-28 pr-28 border-b pb-8">
            <p className="font-semibold text-2xl mb-4 sm:mb-0">{faq.ques}</p>
            <p className="text-gray-700 sm:w-2/3 text-right">"{faq.answer}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
