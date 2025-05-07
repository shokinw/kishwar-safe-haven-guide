
import { useState } from "react";
import { MapPin, Phone, Shield, Building2, Hospital, Building } from "lucide-react";
import { Button } from "./ui/button";

const EmergencyTools = () => {
  const [downloadInitiated, setDownloadInitiated] = useState(false);
  
  const emergencyContacts = [
    {
      name: "Army Helpline",
      number: "1-800-111-0001",
      icon: <Shield className="h-5 w-5 text-emergency" />
    },
    {
      name: "Police",
      number: "1-800-111-0002",
      icon: <Building2 className="h-5 w-5 text-blue-600" />
    },
    {
      name: "Hospital",
      number: "1-800-111-0003",
      icon: <Hospital className="h-5 w-5 text-green-600" />
    },
    {
      name: "Fire Services",
      number: "1-800-111-0004",
      icon: <Building className="h-5 w-5 text-orange-600" />
    },
  ];

  const handleDownloadGuide = () => {
    // In a real app, this would trigger a PDF download
    setDownloadInitiated(true);
    setTimeout(() => setDownloadInitiated(false), 3000);
  };

  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="bg-darkBg text-white p-4">
        <h2 className="text-2xl font-bold font-display">Emergency Tools</h2>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Find Safe Place Button */}
        <div className="text-center">
          <button className="bg-emergency hover:bg-emergency/90 text-white font-bold py-4 px-6 rounded-lg shadow-lg w-full transition-transform hover:scale-105 flex items-center justify-center">
            <MapPin className="mr-2 h-5 w-5" />
            Find Nearest Safe Place
          </button>
        </div>
        
        {/* Emergency Contacts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Emergency Contacts</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <a 
                key={contact.name}
                href={`tel:${contact.number.replace(/[-\s]/g, '')}`}
                className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <div className="mr-3">{contact.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-emergency">{contact.number}</div>
                </div>
                <Phone className="h-5 w-5 text-gray-500" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Safety Guide Download */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={handleDownloadGuide}
            className="w-full"
          >
            {downloadInitiated ? 'Downloading...' : 'Download Safety Guide (PDF)'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyTools;
