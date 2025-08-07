import { company } from "@/lib/company";
import React from "react";

const Footer = () => {
  const navigationLinks = [
    "Home",
    "About Us",
    "Services",
    "Terms of use",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-white py-12 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-8">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-4xl">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
            Specializing in appliance repair and maintenance services in Dubai
            and Abu Dhabi for all major appliance brands.
          </p>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-800 hover:text-red-600 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
