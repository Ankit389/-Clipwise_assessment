import React from 'react';
import popImage from '/pop.png.jpg'; // Ensure the correct path to your image

const View = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-blue-300 p-12 rounded-xl">
      <button className="bg-transparent border border-blue-500 text-blue-500 py-2 px-6 rounded-full mb-8 cursor-pointer">
        View All
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full  rounded-2xl p-8 shadow-lg">
        {/* Left Section with Text */}
        <div className="text-left">
          <h2 className="text-lg text-gray-700">BEST PRICE</h2>
          <h1 className="text-4xl font-bold text-gray-800 my-4">Agate Phone Grip</h1>

          <div className="flex items-center my-4">
            <span className="text-lg text-gray-400 line-through mr-4">44.50$</span>
            <span className="text-2xl text-orange-500 font-bold">19.50$</span>
          </div>

          <p className="text-gray-600 text-base mb-6">
            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>

          <button className="bg-blue-500 text-white py-2 px-6 rounded-full cursor-pointer">
            BUY NOW
          </button>
        </div>

        {/* Right Section with Circles and Image */}
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-b from-blue-100 to-white flex items-center justify-center shadow-lg">
            <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-lg">
              <img
                src={popImage} // Using the imported image
                alt="Agate Phone Grip"
                className="w-36 h-36   rounded-3xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
