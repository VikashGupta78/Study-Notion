import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className=" py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with NavLink */}
        <NavLink to="/home">
          <img src={logo} alt="logo" className="h-12" />
        </NavLink>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <NavLink to="/home" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Log in
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
