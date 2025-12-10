import React from 'react';
import wheelchair from '../../assets/Products/Wheelchair.png'
import Mobility_bed from '../../assets/Products/Mobility_bed.png'
import WalkingStick from '../../assets/Products/WalkingStick.png'
import walker from '../../assets/Products/walker.png'

export default function BestSellingProducts() {
  const products = [
    {
      id: 1,
      image: wheelchair,
      category: "Mobility Aid",
      title: "Wheelchair",
      BuyPrice: "12,000.00",
      RentPrice: "1000"
    },
    {
      id: 2,
      image: Mobility_bed,
      category: "Mobility Aid",
      title: "Mobility Bed",
      BuyPrice: "72,550.00",
      RentPrice: "5000"
    },
    {
      id: 3,
      image: WalkingStick,
      category: "Mobility Aid",
      title: "Walking Stick",
      BuyPrice: "1799.85",
      RentPrice: "300"
    },
    {
      id: 4,
      image: walker,
      category: "Mobility Aid",
      title: "Walker",
      BuyPrice: "2350.50",
      RentPrice: "500"
    }
  ];

  return (
    <div className="min-h-screen  bg-[#F5F1E8] py-16 px-4" id='BestSellingProducts'>
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 fredoka-big">
            Our Best-Selling / Frequently Rented Mobility Essentials
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            These top picks deliver exceptional performance for everyday use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="bg-white p-6">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <p className="text-orange-500 font-bold text-sm mb-2 tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-md font-bold text-gray-900 mb-4">
                 Buy for - ₹{product.BuyPrice}
                </p>
                <p className="text-md font-bold text-gray-900 mb-4">
                 Rent for - ₹{product.RentPrice} / Month
                </p>

                {/* Buy Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105 shadow-md">
                  Buy / Rent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}