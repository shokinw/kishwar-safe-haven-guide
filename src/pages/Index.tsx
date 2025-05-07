
import EmergencyAlert from "@/components/EmergencyAlert";
import Header from "@/components/Header";
import LiveUpdates from "@/components/LiveUpdates";
import EmergencyTools from "@/components/EmergencyTools";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyAlert />
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Link 
              to="/scroll-demo" 
              className="inline-block bg-skyBlue hover:bg-skyBlue/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Scroll Animation Demo
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Live News (70% width on desktop) */}
            <div className="w-full lg:w-[70%]">
              <LiveUpdates />
            </div>
            {/* Right Column - Emergency Tools (30% width on desktop) */}
            <div className="w-full lg:w-[30%]">
              <EmergencyTools />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
