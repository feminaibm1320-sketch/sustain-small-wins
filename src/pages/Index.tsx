import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ConservationTips from "@/components/ConservationTips";
import WasteManagement from "@/components/WasteManagement";
import GreenSolutions from "@/components/GreenSolutions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactStats />
      <ConservationTips />
      <WasteManagement />
      <GreenSolutions />
      <Footer />
    </div>
  );
};

export default Index;
