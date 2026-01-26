import React from "react";
import Hero_wheelchair from "../../assets/Home/Hero_wheelchair.png";
import Logo from "../../assets/LOGO/Logo_noBG.png";
import Walking_stick from "../../assets/Home/Walking_stick.png";
import Walker from "../../assets/Home/Walker.png";
import Hospital_mobility_Bed from "../../assets/Home/Hospital_mobility_Bed.png";

function MarketplaceHero({ setActiveTab }) {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text + Buttons */}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight fredoka-big">
              Mobility Hub Marketplace
            </h1>

            <p className="text-xl lg:text-2xl xl:text-4xl  text-gray-600 mb-8">
              Buy or rent your mobility aids
            </p>

            <div className="flex gap-3">
              <a href="#MarketPlaceBody">
                <button
                  onClick={() => setActiveTab?.("rent")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-medium rounded-lg transition"
                >
                  Browse Items
                </button>
              </a>

              <button className="border border-gray-300 hover:border-gray-400 text-gray-900 px-6 py-3 text-sm font-medium rounded-lg transition">
                List an Item
              </button>
            </div>
          </div>

          {/* RIGHT: Images */}
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <div className="w-[280px] h-[180px] md:w-[420px] md:h-[280px] mb-6">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Thumbnails */}
            <div className="flex gap-4">
              <img
                src={Hospital_mobility_Bed}
                alt="bed"
                className="w-20 h-20 md:w-32 md:h-32 object-contain rotate-6"
              />
              <img
                src={Walking_stick}
                alt="walking stick"
                className="w-20 h-20 md:w-32 md:h-32 object-contain -rotate-6"
              />
              <img
                src={Walker}
                alt="walker"
                className="w-20 h-20 md:w-32 md:h-32 object-contain rotate-6"
              />
              <img
                src={Hero_wheelchair}
                alt="wheelchair"
                className="w-20 h-20 md:w-32 md:h-32 object-contain -rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceHero;
