import { Award, Clock, Globe, Timer, Users, Wrench } from "lucide-react";
import React from "react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Clock strokeWidth={1} className="size-8 text-white" />,
      title: "15+",
      subtitle: "Years of Experience",
    },
    {
      icon: <Timer strokeWidth={1} className="size-8 text-white" />,
      title: "45",
      subtitle: "Minute Quick Response",
    },
    {
      icon: <Users strokeWidth={1} className="size-8 text-white" />,
      title: "20",
      subtitle: "Technicians Available",
    },
    {
      icon: <Wrench strokeWidth={1} className="size-8 text-white" />,
      title: "20k",
      subtitle: "Repairs Done",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl self-center gap-x-20 w-full pl-20 pr-5 gap-4 py-10">
      {stats.map((stat, index) => (
        <div
          key={stat.subtitle + index}
          className="flex items-center gap-3 pl-12 bg-secondary-foreground/10 h-24 relative p-4 rounded-md"
        >
          <div className="absolute bg-gray-900 text-white -left-16 w-24 flex items-center px-3 py-4 rounded-md text-2xl font-bold gap-2">
            {stat.icon}
            <span>{stat.title}</span>
          </div>
          <div className="text-xl font-medium">{stat.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
