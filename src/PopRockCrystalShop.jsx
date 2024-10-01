import React from 'react';
import crystalImage from '/pop.png.jpg'; // Importing your crystal image
import bagIcon from '/pop2.png.png'; // Importing the bag icon

const PopRockCrystalShop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-300 to-pink-200">
      {/* Navbar */}
      <nav className="bg-blue-300 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-800">Pop Rock Crystal</h1>
          
          {/* Links in a column layout */}
          <div className="flex gap-4 items-center">
            <a href="#home" className="text-gray-900 mb-2 hover:text-white">Home</a>
            <a href="#shop" className="text-gray-900 mb-2 hover:text-white">Shop</a>
            <a href="#about" className="text-gray-900 mb-2 hover:text-white">About Us</a>
            <a href="#help" className="text-gray-900 mb-2 hover:text-white">Help</a>
          </div>

          {/* Bag Icon */}
          <div className="flex items-center justify-center ml-4">
            <img 
              src={bagIcon} 
              alt="Shopping Bag" 
              className="w-10 h-10 object-contain" // Adjusted size and object fit
            />
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <header className="flex flex-col lg:flex-row justify-between items-center py-20 px-10 lg:px-20">
        {/* Left Section (Text) */}
        <div className="lg:w-1/2 text-left text-white">
          <h1 className="text-6xl font-extrabold">
            Welcome to <br />
            Pop Rock Crystal Shop!
          </h1>
          <p className="mt-4 text-lg">
            Here you will find unique phone accessories, crystals, jewelry, and more.
            Free shipping inside the U.S. and our phone grips come with a limited warranty.
            Enjoy!
          </p>
          <div className="mt-8">
            <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              Shop Now
            </button>
            <a href="#about" className="ml-4 text-white underline hover:text-gray-200">About Us</a>
          </div>
        </div>

        {/* Right Section (Product) */}
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative bg-white p-6 rounded-3xl shadow-lg h-96 w-1/2">
            {/* Image Section */}
            <div className="p-6 rounded-lg flex justify-center items-center">
              {/* Use your uploaded image */}
              <img
                src={crystalImage}
                alt="Crystal Agate Phone Grip"
                className="rounded-lg object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">CRYSTAL AGATE PHONE GRIP</h3>
              <p className="font-semibold text-lg mt-2">$18.99</p>
            </div>

            {/* Pagination Component (Carousel Indicator) */}
            <div className="mt-6 flex justify-center items-center">
              <button className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-1">
                &#8249; {/* Left arrow */}
              </button>
              <div className="flex space-x-1">
                <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span className="w-4 h-4 bg-purple-200 rounded-full"></span>
                <span className="w-4 h-4 bg-purple-200 rounded-full"></span>
                <span className="w-4 h-4 bg-purple-200 rounded-full"></span>
                <span className="w-4 h-4 bg-purple-200 rounded-full"></span>
              </div>
              <button className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-1">
                &#8250; {/* Right arrow */}
              </button>
            </div>

          </div>
        </div> 
      </header>

      {/* Scroll down indicator */}
      <div className="flex justify-center items-center mt-10">
        <p className="text-gray-500 text-lg">⬇ Scroll Down</p>
      </div>
    </div>
  );
};

export default PopRockCrystalShop;
