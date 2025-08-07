import {
  Globe,
  Settings,
  Smile,
  Clock,
  Shield,
  Users,
  Award,
} from "lucide-react";
import React from "react";

const QualtiesSection = () => {
  const qualities = [
    {
      icon: <Shield strokeWidth={1} className="size-8 text-white" />,
      title: "Reliable Work",
    },
    {
      icon: <Users strokeWidth={1} className="size-8 text-white" />,
      title: "Expert Team",
    },
    {
      icon: <Smile strokeWidth={1} className="size-8 text-white" />,
      title: "Client Satisfaction",
    },
    {
      icon: <Settings strokeWidth={1} className="size-8 text-white" />,
      title: "Quality Repairs",
    },
    {
      icon: <Clock strokeWidth={1} className="size-8 text-white" />,
      title: "Fast Service",
    },

    {
      icon: <Award strokeWidth={1} className="size-8 text-white" />,
      title: "Best Value",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full bg-primary">
      <div className="w-full  p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl">
        {qualities.map((quality, index) => (
          <div className="flex items-center gap-3" key={index + quality.title}>
            <div className="rounded-full min-w-16 border-2 flex items-center justify-center border-white size-16">
              {quality.icon}
            </div>
            <div className="text-white text-sm font-medium">
              {quality.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualtiesSection;
