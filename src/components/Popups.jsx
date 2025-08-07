import React, { useState } from "react";
import Popup from "./Popup";

function Popups() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("contacts")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("contacts", JSON.stringify(updated));
    setFormData({ name: "", email: "", message: "" });
    setShowPopup(false);
    alert("Message saved to local storage!");
  };

  return (
    <div className={`flex justify-center sm:justify-end mt-6 sm:mt-10`}>
      <button
        onClick={() => setShowPopup(true)}
        className="w-40 h-10 bg-[#EEC355] rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
      >
        Get in Touch
      </button>

      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Popups;
