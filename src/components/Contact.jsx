import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("contactForm")) || [];
    localStorage.setItem("contactForm", JSON.stringify([...existing, formData]));
    setSuccessMessage("✅Thank you for your suggestion!! Your message has been submitted.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const renderInput = (name, label, type = "text") => (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        required
        value={formData[name]}
        onChange={handleChange}
        className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 focus:outline-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-200 
          peer-focus:-top-4 peer-focus:text-sm peer-focus:text-yellow-500 
          ${formData[name] ? "-top-4 text-sm text-yellow-500" : ""}`}
      >
        {label} *
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfdec] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>

        {renderInput("firstName", "First name")}
        {renderInput("lastName", "Last name")}
        {renderInput("email", "Email", "email")}

        <div className="relative w-full">
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 focus:outline-none resize-none"
          />
          <label
            htmlFor="message"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-200 
              peer-focus:-top-4 peer-focus:text-sm peer-focus:text-yellow-500
              ${formData.message ? "-top-4 text-sm text-yellow-500" : ""}`}
          >
            Message *
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Submit
        </button>

        {successMessage && (
          <p className="text-green-600 text-center font-medium">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
