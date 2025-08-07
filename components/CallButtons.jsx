import React from "react";
import { Button } from "./ui/button";
import { company } from "@/lib/company";
import Link from "next/link";

const CallButtons = ({ onlyCall = false }) => {
  const whatsappMessage = encodeURIComponent(
    "Hey, I want to inquire about your appliance repair services. Can you please provide me with more information about your rates and availability?"
  );
  const whatsappUrl = `https://wa.me/${company.number.replace(
    /\s/g,
    ""
  )}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        className={!onlyCall && "flex flex-col w-full"}
        href={`tel:${company.number}`}
      >
        <Button size={"lg"}>Call Us</Button>
      </Link>
      {!onlyCall && (
        <Link
          className={!onlyCall && "flex flex-col w-full"}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-white" variant={"outline"} size={"lg"}>
            Whatsapp Us
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CallButtons;
