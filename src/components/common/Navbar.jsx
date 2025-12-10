import React, { useState } from "react";
import Logo from "../../assets/LOGO/Logo_noBG.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 shadow-sm sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={Logo}
            alt="Logo"
            className="w-25 h-10 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/"><li className="hover:text-orange-300 cursor-pointer">Home</li></Link>
          <a href='#BestSellingProducts' ><li className="hover:text-orange-300 cursor-pointer">Products</li></a>
          <li className="hover:text-orange-300 cursor-pointer">How It Works</li>
          <li className="hover:text-orange-300 cursor-pointer">Pricing</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-orange-400 text-black px-3 py-1 rounded-lg">
          Support
        </button>

        {/* Mobile Menu Icon */}
        <div 
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </div>
      </div>

     {/* MOBILE DROPDOWN MENU */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <div className="bg-slate-800 px-6 py-4 space-y-10">
    <Link to="/" onClick={() => setOpen(false)}>
      <p className="p-3 hover:text-orange-300">Home</p>
    </Link>
    <Link to="/" onClick={() => setOpen(false)}>
      <p className="p-3 hover:text-orange-300">Products</p>
    </Link>
    <Link to="/" onClick={() => setOpen(false)}>
      <p className="p-3 hover:text-orange-300">How It Works</p>
    </Link>
    <Link to="/" onClick={() => setOpen(false)}>
      <p className="p-3 hover:text-orange-300">Pricing</p>
    </Link>
    
    
    

    <button className="w-full bg-orange-400 text-black px-3 py-2 rounded-lg mt-10">
      Support
    </button>
  </div>
</div>

    </nav>
  );
}
