import React from 'react';
import Walking_stick from '../../assets/Home/Walking_stick.png'
import Hero_wheelchair from '../../assets/Home/Hero_wheelchair.png'
import Walker from '../../assets/Home/Walker.png'
import Hospital_mobility_Bed from '../../assets/Home/Hospital_mobility_Bed.png'

export default function PetFoodPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] relative overflow-hidden">

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 z-10 min-h-full justify-center">
        <div className="grid  md:grid-cols-3 gap-8 items-end max-w-7xl mx-auto">

          <div className="flex flex-row md:flex-col items-center justify-center gap-4 w-full">
            <img 
              src={Walker}
              alt="walker"
              className="w-34 h-34 md:w-64 md:h-64 object-cover mb-4 -rotate-10"
            />
           <img 
              src={Hero_wheelchair}
              alt="wheelchair"
              className="w-34 h-34 md:w-64 md:h-64 object-cover mb-4 -rotate-10"
            />
          </div>

          {/* Center - Title and buttons */}
          <div className="text-center flex flex-col justify-center item-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4  fredoka-big">
              Explore Mobility Aids
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose from a range of well-maintained, safe, and hygienic mobility equipment.
            </p>
            
            <div className="flex flex-col gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
                Explore
              </button>
            </div>
          </div>

          {/* Right - Cat section */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-4 w-full">
            <img 
              src={Hospital_mobility_Bed}
              alt="bed"
              className="w-34 h-34 md:w-64 md:h-64 object-cover mb-4 md:rotate-10"
            />
            <img 
              src={Walking_stick}
              alt="walking stick"
              className="w-34 h-34 md:w-64 md:h-64 object-cover mb-4 md:rotate-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}