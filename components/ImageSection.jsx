import React from "react";
import CallButtons from "./CallButtons";

const ImageSection = () => {
  return (
    <div className="flex w-full bg-[url('/kitchen-2.jpg')] bg-fixed bg-cover bg-center bg-no-repeat flex-col">
      <div className="flex flex-col items-center text-white bg-black/70 self-center py-20 px-10 gap-8 justify-center w-full h-full">
        <span className="text-xs uppercase text-center">
          We provide affordable and reliable appliance repair services
        </span>
        <h1 className="text-4xl font-bold text-center">
          Premium Quality Appliance Repair <br /> Services at Affordable Prices
        </h1>
        <CallButtons onlyCall={true} />
      </div>
    </div>
  );
};

export default ImageSection;
