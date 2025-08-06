import CallButtons from "@/components/CallButtons";
import MainSection from "@/components/MainSection";
import QualtiesSection from "@/components/QualtiesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <MainSection />
      <QualtiesSection />
      <StatsSection />
    </div>
  );
}
