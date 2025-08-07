import React from "react";
import { Button } from "./ui/button";

const CallButtons = ({ onlyCall = false }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button size={"lg"}>Call Us</Button>
      {!onlyCall && (
        <Button className="text-white" variant={"outline"} size={"lg"}>
          Whatsapp Us
        </Button>
      )}
    </div>
  );
};

export default CallButtons;
