import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { company } from "@/lib/company";
import Link from "next/link";

const FixedCallButtons = () => {
  const whatsappMessage = encodeURIComponent(
    "Hey, I want home appliances repair services"
  );
  const whatsappUrl = `https://wa.me/${company.number.replace(
    /\s/g,
    ""
  )}?text=${whatsappMessage}`;

  return (
    <div className="fixed flex flex-col gap-2 items-center right-4 bottom-6">
      <Link href={`tel:${company.number}`}>
        <button className="flex size-12 rounded-full bg-primary items-center justify-center hover:bg-primary/90 transition-colors">
          <PhoneIcon className="size-6 text-white" />
        </button>
      </Link>
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button className="size-12 flex items-center justify-center rounded-full bg-green-400/80 hover:bg-green-400 transition-colors">
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            width={100}
            height={100}
            className="size-8"
          />
        </button>
      </Link>
    </div>
  );
};

export default FixedCallButtons;
