// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./images/Logo.png" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2 py-2 rounded-2xl">
          Hoster Is Hiring
        </button>
      </div>
      <ul>
        <li className="hidden lg:flex justify-between font-lato items-center text-gray-400 gap-6 px-4 py-4">
          <a href="#">Plans</a>
          <a href="#">Find Domain</a>
          <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">
          Sign In
        </a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
          Join Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
