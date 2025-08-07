import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const services = [
    "Dishwasher Repair Services",
    "Gas Oven & Range Repair", 
    "Washing Machine Repair",
    "Refrigerator Repair Services",
    "Dryer Repair & Maintenance",
    "Stove & Cooktop Repair",
    "Television Repair Services"
  ];

  return (
    <div className="flex flex-col w-full">
      <Image src="/kitchen-3.jpg" alt="Professional appliance repair technicians working in modern kitchen" width={1000} height={1000} />
      <div className="flex flex-col w-full px-5 py-10 gap-5">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <span className="text-xl text-center">15+ Years of Experience</span>
        <p className="text-gray-700 text-balanced max-w-3xl mx-auto leading-relaxed">
          We are a leading appliance repair company with over 15 years of experience serving Dubai and Abu Dhabi. 
          Our certified technicians specialize in professional repair services for all major appliance brands. 
          We provide same-day emergency repairs, guaranteed workmanship, and competitive pricing with comprehensive warranties.
        </p>
        <h2 className="text-lg font-bold mt-6">Our Professional Repair Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          {services.map((service, index) => (
            <div key={index} className="flex gap-3">
              <Check strokeWidth={1} className="size-5 text-green-600" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
