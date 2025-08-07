import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import FixedCallButtons from "@/components/FixedCallButtons";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Appliance Repair UAE",
  description: "Appliance Repair UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-full min-h-screen ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
        <FixedCallButtons />
      </body>
    </html>
  );
}
