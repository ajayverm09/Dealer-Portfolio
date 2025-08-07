import React, { useState } from 'react';

const BlogCard = ({ image, title, excerpt, date }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 w-full max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={image}
            alt="author"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>

        <div className="flex justify-end mt-2">
          <button
            className="text-blue-400 hover:text-blue-600 text-sm font-medium"
            onClick={() => setShowPopup(true)}
          >
            Read More...
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={image}
                alt="author"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-300"
              />
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-gray-500 text-sm mb-2">{date}</p>
              <p className="text-gray-700 text-base">{excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
