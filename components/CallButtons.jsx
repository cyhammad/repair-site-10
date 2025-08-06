import React from "react";
import { Button } from "./ui/button";

const CallButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button size={"lg"}>Call Us</Button>
      <Button variant={"outline"} size={"lg"}>
        Whatsapp Us
      </Button>
    </div>
  );
};

export default CallButtons;
