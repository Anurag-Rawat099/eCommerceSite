import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import React, { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center py-5 justify-between font-medium">
      <img className="w-36" src={assets.logo} alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>Home</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/Collection">
          <p>Collection</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/About">
          <p>About</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/Contact">
          <p>Contact</p>
          <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img src={assets.profile_icon} className="w-5" alt="" />
          <div className="group-hover:block hidden absolute left-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black text-white rounded-full aspect-square w-4 text-center text-[8px] leading-4">
            6
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
        <div>
          {/* SideBar Menu */}
          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transtion-all ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <img className="rotate-180 h-5" src={assets.dropdown_icon} alt="" />
                <p>Back</p>
              </div>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to="/collection"
              >
                Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;