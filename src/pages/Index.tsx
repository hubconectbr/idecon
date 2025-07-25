import EventHero from "@/components/EventHero";
import AboutEvent from "@/components/AboutEvent";
import Speakers from "@/components/Speakers";
import EventInfo from "@/components/EventInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventHero />
      <AboutEvent />
      <Speakers />
      <EventInfo />
      <Footer />
    </div>
  );
};

export default Index;
