
import { Shield, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";

const EmergencyAlert = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={`${visible ? 'block' : 'hidden'} bg-emergency text-white p-3 animate-blink`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <ShieldAlert className="mr-2 h-6 w-6" />
          <span className="font-bold text-sm md:text-base">
            EMERGENCY ALERT: Stay indoors. Seek shelter immediately if you hear sirens.
          </span>
        </div>
        <button 
          onClick={() => setVisible(false)}
          className="text-white hover:text-gray-200"
          aria-label="Close alert"
        >
          <span className="text-2xl">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default EmergencyAlert;
