import React, { useState } from 'react';
import Card2 from '../assets/Util/Card2';
import { products } from '../data/products';

export default function RentBuy() {
  const [activeTab, setActiveTab] = useState('buy');

  const filteredItems = products.filter(item => item.type.includes(activeTab));

  return (
    <div className="min-h-screen bg-[#F5F1E8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center fredoka-big">
          Find Your Mobility Aid
        </h1>
        
        {/* Toggle Rent/Buy and Filter Button */}
        <div className="flex justify-center mb-10 gap-4"> {/* Added gap for spacing */}
          <div className="bg-white p-1 rounded-xl inline-flex shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'buy' 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'rent' 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Rent
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <Card2 key={item.id} product={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 py-20 text-lg">
            No items found for {activeTab}.
          </div>
        )}
      </div>
    </div>
  );
}
