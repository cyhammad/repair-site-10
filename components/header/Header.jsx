import { company } from "@/lib/company";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/links";

const Header = () => {
  return (
    <div className="flex w-full items-center sticky top-0 z-50 bg-white justify-center">
      <header className="flex items-center justify-between px-5 py-5 w-full max-w-7xl">
        <h1 className="text-2xl font-bold">{company.name}</h1>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="min-w-screen">
            <SheetHeader className="hidden">
              <SheetTitle>{company.name}</SheetTitle>
              <SheetDescription>{company.number}</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col w-full items-center justify-center">
              <div className="flex flex-col w-full max-w-7xl px-5 gap-10 py-20">
                <h1 className="text-2xl font-bold">{company.name}</h1>
                <div className="flex flex-col w-full max-w-6xl self-center gap-3">
                  {links.map((link) => (
                    <Link
                      href={link.href}
                      className="flex items-center justify-between w-full"
                      key={link.name}
                    >
                      <span>{link.name}</span>
                      <ChevronRight strokeWidth={1} />
                    </Link>
                  ))}
                </div>
                <div className="max-w-6xl self-center font-thin text-2xl text-black/50">
                  Services Availabe All Over UAE
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Header;
