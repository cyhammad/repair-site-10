import React from "react";
import CallButtons from "./CallButtons";
import { Phone } from "lucide-react";
import { company } from "@/lib/company";

const RoundedImageSection = () => {
  return (
    <div className="flex items-center px-5">
      <div className="flex w-full bg-[url('/kitchen.jpg')] rounded-2xl overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat flex-col self-center">
        <div className="flex flex-col items-center text-white bg-black/70 self-center py-20 px-5 gap-8 justify-center w-full h-full">
          <h1 className="text-3xl font-bold text-center">
            Hire Us Right Now! <br />
            <span className="text-gray-400">
              Get Your Appliance Fixed Today!
            </span>
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-primary flex items-center justify-center rounded-full size-13">
              <Phone />
            </div>
            <span className="text-white font-bold">{company.number}</span>
          </div>
          <CallButtons onlyCall={true} />
        </div>
      </div>
    </div>
  );
};

export default RoundedImageSection;
