import CallButtons from "@/components/CallButtons";
import ImageSection from "@/components/ImageSection";
import RoundedImageSection from "@/components/RoundedImageSection";
import MainSection from "@/components/MainSection";
import QualtiesSection from "@/components/QualtiesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <MainSection />
      <QualtiesSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ImageSection />
      <WhyChooseUsSection />
      <RoundedImageSection />
    </div>
  );
}
