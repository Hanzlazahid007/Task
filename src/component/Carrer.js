import React from "react";
import carrer from "../picture/Group 341.png";

const Carrer = () => {
  return (
    <>
      <div>
        <div className="carrer p-[10px] max-h-[120px]  bg-[#FFB814]">
          <h1 className="heading pb-[23px]  text-center font-bold text-4xl">
            Carrers
          </h1>
          <div className="group31 bg ">
            <img className="h-24 ml-[46%] mb-[100px]" src={carrer} alt="abc" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;
