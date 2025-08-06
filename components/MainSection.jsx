import { PersonStanding } from "lucide-react";
import CallButtons from "./CallButtons";

const MainSection = () => {
  return (
    <div className="w-full flex flex-col relative items-center justify-center bg-[url(/kitchen.jpg)] bg-cover bg-fixed min-h-[90vh] h-full bg-center">
      <div className="flex flex-col w-full gap-5 h-full min-h-[90vh] px-5 py-10 bg-black/70">
        <h1 className="text-white text-4xl font-bold">
          Your appliances are in good hands:{" "}
          <span className="text-white/50">
            Quick, Reliable, and Affordable Repairs for All Appliances
          </span>
        </h1>
        <p className="text-white text-lg font-light">
          We are a team of experienced technicians who are dedicated to
          providing the best possible service to our customers. We offer quick,
          reliable, and affordable repairs for all appliances. We offer a wide
          range of services for all appliances of all brands.
        </p>
        <CallButtons />
      </div>
    </div>
  );
};

export default MainSection;
