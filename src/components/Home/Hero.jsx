import Hero_wheelchair from "../../assets/Home/Hero_wheelchair.png";
import { ShoppingCart, MousePointerClick, Flag } from "lucide-react";
import Logo from "../../assets/LOGO/Logo_noBG.png";

import Walking_stick from "../../assets/Home/Walking_stick.png";
import Walker from "../../assets/Home/Walker.png";
import Hospital_mobility_Bed from "../../assets/Home/Hospital_mobility_Bed.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-screen  bg-[#F5F1E8] relative overflow-hidden ">
      {/* Floating bone decoration */}
      <div className="absolute top-8 right-32 animate-bounce">
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="10" cy="20" rx="10" ry="12" fill="#F4D8A8" />
          <rect x="10" y="16" width="40" height="8" rx="4" fill="#F4D8A8" />
          <ellipse cx="50" cy="20" rx="10" ry="12" fill="#F4D8A8" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-20 pt-7 2xl:pt-20 pb-2  flex h-full justify-center item-center">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight fredoka-big">
              Buy/Rent our mobility aids in a single Click
              <span className="inline-block align-middle ml-2">
                <MousePointerClick className="w-8 h-8 inline-block" />
              </span>
            </h1>

            <p className="text-md md:text-lg text-gray-700 max-w-xl">
              Whether it's recovery, travel, or daily comfort, we’ve got the
              perfect mobility partner for you.
            </p>

            <div className="flex gap-6">
              <Link to='/rent-buy'>
                <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all flex justify text-center items-center gap-2">
                  Rent / Buy <ShoppingCart />
                </button>
              </Link>
              <Link to="/marketplace">
                <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all flex justify text-center items-center gap-2">
                  Explore Marketplace <Flag />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center pt-7 md:pt-0 pb-2">
            <div className="relative z-10  w-[300px] h-[200px] lg:w-[500px] lg:h-[330px]   overflow-hidden flex justify-center item-center">
              <img
                src={Logo}
                alt="Hero Image"
                className="w-full h-full md:h-75 object-fit "
              />
            </div>

            <div className="flex">
              <img
                src={Hospital_mobility_Bed}
                alt="bed"
                className="w-20 h-20 md:w-40 md:h-40 object-cover mb-4 md:rotate-10"
              />
              <img
                src={Walking_stick}
                alt="walking stick"
                className="w-20 h-20 md:w-40 md:h-40 object-cover mb-4 md:rotate-10"
              />
              <img
                src={Walker}
                alt="walker"
                className="w-20 h-20 md:w-40 md:h-40 object-cover mb-4 -rotate-10"
              />
              <img
                src={Hero_wheelchair}
                alt="wheelchair"
                className="w-20 h-20 md:w-40 md:h-40 object-cover mb-4 -rotate-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
