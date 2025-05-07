
import EmergencyAlert from "@/components/EmergencyAlert";
import Header from "@/components/Header";
import FindSafePlace from "@/components/FindSafePlace";
import EmergencyNumbers from "@/components/EmergencyNumbers";
import LiveUpdates from "@/components/LiveUpdates";
import ShelterMap from "@/components/ShelterMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyAlert />
      <Header />
      <main>
        <FindSafePlace />
        <EmergencyNumbers />
        <LiveUpdates />
        <ShelterMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
