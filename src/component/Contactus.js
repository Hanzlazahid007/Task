import React from "react";
import logo from "../picture/1 2.png";
import svg from "../picture/svf.svg";
import { BiSolidPhoneCall } from "react-icons/bi";
import mask from "../picture/Mask group.png";
import { CgMail } from "react-icons/cg";

const Contactus = () => {
  return (
    <div>
      <div className="flex absolute -mt-4 ml-[34.5rem] justify-center ">
        <img className="h-8" src={mask} />
        <img className="h-14 -mt-3" src={mask} />
        <img className="h-8" src={mask} />
      </div>

      <div className="container flex h-[250px] mt-2  bg-[#FFCC56] rounded-t-[50px]">
        <div>
          <img className="h-2/3 ml-10 inset-0" src={svg} />
          <h1 className="font-bold  mt-[-3.2rem] ml-[5.8rem] max-w-[150px]">
            Bringing More buzz to your brand!
          </h1>
        </div>
        <div className="ml-80 mt-10 font-medium">
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Carrer</li>
            <li>Our portfolio</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="ml-80 mt-10 font-medium">
          <ul>
            <li>Contact US:</li>
            <li className="flex">
              <BiSolidPhoneCall className="mt-1 mr-2" />
              <p>0992 320982</p>
            </li>
            <li className="flex">
              <CgMail className="mt-1 mr-2" />
              <p>bee@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
