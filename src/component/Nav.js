import React from "react";
import logo from "../picture/1 2.png";

const Nav = () => {
  return (
    <div>
      <div className="nav  bg-[#FFB814] flex justify-around  items-center text-center">
        <div className="logo ">
          <img className="h-28 mt-3" src={logo} alt="logo" />
        </div>
        <div>
          <ul className="nav-item flex space-x-4 ml-10 ">
            <li className="item px-5 py-1 rounded-[10px] text-center items-center font-bold bg-white text-black">
              Home
            </li>
            <li className="item px-5 py-1 rounded-[10px] font-bold bg-white text-black">
              About us
            </li>
            <li className="item px-5 py-1 rounded-[10px] font-bold   bg-white text-black">
              Services
            </li>
            <li className="item px-5 py-1 rounded-[10px] font-bold bg-white text-black">
              Blogs
            </li>
            <li className="item px-5 py-1 rounded-[10px] font-bold bg-white text-black">
              Carrers
            </li>
            <li className="item px-5 py-1 rounded-[10px] font-bold bg-white text-black">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
