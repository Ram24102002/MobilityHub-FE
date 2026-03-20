import React, { useState } from "react";
import Logo from "../../assets/LOGO/Logo_noBG.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="w-full bg-slate-900 shadow-sm sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-25 h-10 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/">
            <li className="hover:text-orange-300 cursor-pointer">Home</li>
          </Link>
          <Link to="/products">
            <li className="hover:text-orange-300 cursor-pointer">Products</li>
          </Link>
          <Link to="/rent-buy">
            <li className="hover:text-orange-300 cursor-pointer">Rent/Buy</li>
          </Link>
          <Link to="/marketplace">
            <li className="hover:text-orange-300 cursor-pointer">
              Marketplace
            </li>
          </Link>
          <Link to="/AboutUs">
            <li className="hover:text-orange-300 cursor-pointer">About Us</li>
          </Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/SupportContact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-4 py-2 rounded-lg transition-all shadow-md">
              Support
            </button>
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-3 ml-2 hover:opacity-80 transition-opacity">
              <Link to="/profile">
                {user?.picture ? (
                  <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex justify-center items-center font-bold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                )}
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg px-4 py-2 rounded-lg transition-all shadow-md border border-slate-500">
                Sign In
              </button>
            </Link>
          )}
        </div>

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
          <Link to="/products" onClick={() => setOpen(false)}>
            <p className="p-3 hover:text-orange-300">Products</p>
          </Link>
          <Link to="/rent-buy" onClick={() => setOpen(false)}>
            <p className="p-3 hover:text-orange-300">Rent/Buy</p>
          </Link>
          <Link to="/marketplace" onClick={() => setOpen(false)}>
            <p className="p-3 hover:text-orange-300">Marketplace</p>
          </Link>
          <Link to="/AboutUs" onClick={() => setOpen(false)}>
            <p className="p-3 hover:text-orange-300">About Us</p>
          </Link>

          <Link to="/SupportContact" onClick={() => setOpen(false)}>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-3 py-2 rounded-lg mt-10 transition-all shadow-md">
              Support
            </button>
          </Link>
          {isAuthenticated ? (
             <Link to="/profile" onClick={() => setOpen(false)}>
               <button className="w-full bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white font-bold text-lg px-3 py-2 rounded-lg mt-4 transition-all shadow-md flex justify-center items-center gap-2">
                 <img src={user?.picture} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" /> My Profile
               </button>
             </Link>
          ) : (
             <Link to="/login" onClick={() => setOpen(false)}>
               <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg px-3 py-2 rounded-lg mt-4 transition-all shadow-md border border-slate-500">
                 Sign In
               </button>
             </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
