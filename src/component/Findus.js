import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { CgMail } from "react-icons/cg";

const Findus = () => {
  return (
    <>
      <div className="h-28 -mt-2 bg-white">
        <h1 className="font-bold pt-2 mt-2 ml-24 pb-2">You can Find us on:</h1>
        <div className="flex">
          <div className="left flex ml-24 ">
            <div className=" rounded-[50%] mr-2 border-4 border-[#FFCC56] ">
              <FaFacebookF className=" bg-white  m-2 text-2xl" />
            </div>
            <div className=" rounded-[50%] border-4 mr-2 border-[#FFCC56] ">
              <BsInstagram className=" bg-white rounded-[50%] m-2  text-2xl" />
            </div>
            <div className=" rounded-[50%] border-4 mr-2 border-[#FFCC56] ">
              <AiOutlineYoutube className=" bg-white rounded-[50%] m-2  text-2xl" />
            </div>
            <div className=" rounded-[50%] border-4 mr-2 border-[#FFCC56] ">
              <AiOutlineTwitter className=" bg-white rounded-[50%] m-2  text-2xl" />
            </div>
            <div className=" rounded-[50%] border-4 border-[#FFCC56] ">
              <BiLogoLinkedin className=" bg-white rounded-[50%] m-2  text-2xl" />
            </div>
          </div>
          <div className="right flex ml-40 ">
            <ImLocation2 className="mt-2" />
            <p className="ml-4 font-medium">
              Yeoford Way, Marsh Barton, Exeter EX5 8MP,<br></br> United Kingdom
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Findus;
