import React from "react";
import teamwork from "../picture/teamwork business people (2) 1.png";
import Footer from "./Footer";
import Findus from "./Findus";
import Nojob from "./Nojob";
import Contactus from "./Contactus";

const Main = () => {
  return (
    <div className="main m-auto pt-20 h-[100%]">
      <div className="flex">
        <div className="left ml-9 w-[50%] mr-10">
          <h1 className="font-bold pt-[5rem] text-2xl ml-20">
            {" "}
            Ready for Change ?
          </h1>
          <p className="ml-20 w-[85%] mt-2 ">
            Wannabee is an ever-growing hive, and we are always looking for
            brilliant people to join our team. We want to hear from you if you
            have a strong passion for digital marketing and want to join a
            thriving team of professionals.
          </p>
          <h1 className="ml-20 mt-8 mb-4 w-2/4 font-bold text-2xl mx-20">
            Wannabee perks
          </h1>
          <ul className="list-disc ml-20 pl-5">
            <li>Market competitive salary </li>
            <li>Balanced work life</li>
            <li>Employee training program</li>
            <li>Paid time offs</li>
            <li> Healthy work environment</li>
            <li> Completely remote</li>
          </ul>
        </div>
        <div>
          <img className="h-[470px]" src={teamwork} alt="teamwork" />
        </div>
      </div>
      <Nojob />
      <Contactus />

      <Findus />
      <Footer />
    </div>
  );
};

export default Main;
