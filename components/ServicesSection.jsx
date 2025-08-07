import React from "react";
import { Button } from "./ui/button";
import CallButtons from "./CallButtons";

const ServicesSection = () => {
    // Professional appliance repair services with SEO-optimized content
    const services = [
        {
            title: "Dishwasher Repair Services",
            description: "Expert dishwasher repair and maintenance services. We diagnose and fix all major brands including Bosch, Samsung, LG, Whirlpool, and KitchenAid. Common issues we resolve: water leaks, drainage problems, detergent dispenser malfunctions, and cycle completion errors.",
            image: "/dishwasher.png",
            keywords: "dishwasher repair, appliance repair, professional dishwasher service"
        },
        {
            title: "Gas Oven & Range Repair",
            description: "Certified gas oven and range repair specialists. We handle ignition problems, temperature calibration, burner issues, and safety valve repairs. Serving all major brands with same-day emergency service available.",
            image: "/oven.png",
            keywords: "gas oven repair, range repair, appliance technician"
        },
        {
            title: "Washing Machine Repair",
            description: "Comprehensive washing machine repair services for front-load and top-load models. We fix spin cycle issues, water inlet problems, drainage blockages, and electronic control board failures.",
            image: "/washing.png",
            keywords: "washing machine repair, appliance repair near me"
        },
        {
            title: "Refrigerator Repair Services",
            description: "Professional refrigerator repair including cooling system diagnostics, compressor repairs, defrost system maintenance, and ice maker repairs. We service all refrigerator types and brands.",
            image: "/fridge.png",
            keywords: "refrigerator repair, fridge repair, cooling system repair"
        },
        {
            title: "Dryer Repair & Maintenance",
            description: "Expert dryer repair services for gas and electric models. We repair heating elements, belts, motors, thermostats, and electronic controls. Same-day service available for urgent repairs.",
            image: "/dryer.png",
            keywords: "dryer repair, appliance maintenance, heating element replacement"
        },
        {
            title: "Stove & Cooktop Repair",
            description: "Professional stove and cooktop repair services. We handle electric and gas models, fixing burner issues, ignition problems, temperature controls, and safety features.",
            image: "/stove.png",
            keywords: "stove repair, cooktop repair, burner replacement"
        },
        {
            title: "Television Repair Services",
            description: "Expert TV repair for all major brands including Samsung, LG, Sony, and Vizio. We repair power issues, display problems, sound system malfunctions, and smart TV connectivity issues.",
            image: "/tv.png",
            keywords: "TV repair, television repair, smart TV repair"
        }
    ];

  return (
    <section className="flex flex-col w-full self-center items-center justify-center px-5" aria-label="Professional Appliance Repair Services">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold md:text-5xl text-center mb-4">
          Professional Appliance Repair Services
        </h1>
        <p className="text-lg font-light text-center max-w-3xl mx-auto">
          Expert appliance repair services for all major brands. Our certified technicians provide reliable, 
          same-day repair solutions for dishwashers, washing machines, refrigerators, ovens, dryers, 
          stoves, and televisions. Licensed, insured, and guaranteed workmanship.
        </p>
      </header>
      <div className="grid grid-cols-1 w-full max-w-7xl md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <article key={index} className="flex flex-col w-full gap-4 bg-cover bg-center bg-no-repeat shadow-lg"
            style={{
                backgroundImage: `url(${service.image})`
            }}  
          >
            <div className="flex flex-col bg-black/70 px-4 md:px-8 py-10 justify-between h-full w-full text-white gap-20">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <div className="w-16 h-0.5 bg-yellow-400"></div>
                <p className="text-lg font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-end">
                <CallButtons onlyCall={true} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
