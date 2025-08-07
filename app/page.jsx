import CallButtons from "@/components/CallButtons";
import MainSection from "@/components/MainSection";
import QualtiesSection from "@/components/QualtiesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <MainSection />
      <QualtiesSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
}
