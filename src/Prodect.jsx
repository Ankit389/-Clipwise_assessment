import React from 'react';
import productImage from '/pop.png.jpg'; // Ensure this path is correct

const Prodect = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-8 text-center">
        <h2 className="text-4xl font-bold text-gray-700">All Products</h2>
        <div className="flex text-start mt-4 space-x-8 text-lg">
          <span>Filter: <span className="text-blue-500">All Products</span></span>
          <span>Sort: <span className="text-blue-500">Best Selling</span></span>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-8 py-10">
        {/* Example Product Cards */}
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition transform hover:-translate-y-2">
            <img
              src={productImage} // Using the uploaded image
              alt="Crystal Agate Phone Grip"
              className="w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-gray-900 font-semibold text-center">CRYSTAL AGATE PHONE GRIP</h3>
            <p className="text-lg text-gray-600 mt-2">$18.99</p>
            <button className={`mt-4 px-6 py-2 rounded-full transition ${
              index === 0 
                ? 'bg-blue-500 text-white' 
                : 'border-2 border-blue-500 text-blue-500'
            } hover:bg-blue-500 hover:text-white`}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodect;
