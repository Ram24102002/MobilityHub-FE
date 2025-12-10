import React from 'react';
import man_wheelchair from '../../assets/Home/man_wheelchair.png'

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center">
      <div className="container mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image with decorative elements */}
          <div className="relative flex justify-center">
            {/* Decorative sun rays */}
            <div className="absolute top-20 left-10 flex flex-col gap-3">
                <div className="w-16 h-2 bg-orange-400 rounded-full animate-[sway_1.5s_ease-in-out_infinite]"></div>
                <div className="w-12 h-2 bg-orange-400 rounded-full animate-[sway_1.5s_ease-in-out_infinite]"></div>
                <div className="w-20 h-2 bg-orange-400 rounded-full animate-[sway_1.5s_ease-in-out_infinite]"></div>
            </div>



            {/* Large orange circle background */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] bg-orange-300 rounded-full"></div>
              
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                <img 
                  src= {man_wheelchair}
                  alt="Welcome"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight  fredoka-big">
              Welcome to<br />
              Mobility Hub
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Ingredients in Petpew holistic pet foods are meticulously chosen for their nutrient-rich profiles and health benefits, ensuring your pets thrive both physically and mentally. We prioritize ingredients that offer optimal nutrition and well-being, because we understand that when pets are healthy, they exude vitality and joy.
            </p>

            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}