
import { useState } from "react";
import { MapPin, MapPinCheck } from "lucide-react";

const FindSafePlace = () => {
  const [loading, setLoading] = useState(false);
  const [locationFound, setLocationFound] = useState(false);

  const handleFindShelter = () => {
    setLoading(true);
    
    // Simulating location fetch and processing
    setTimeout(() => {
      setLoading(false);
      setLocationFound(true);
    }, 2000);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-darkBg to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Find a Safe Place</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Click the button below to find the nearest shelter based on your current location.
        </p>
        
        <button 
          onClick={handleFindShelter}
          disabled={loading}
          className="emergency-button flex items-center justify-center mx-auto"
        >
          {loading ? (
            <>
              <span className="mr-2">Locating...</span>
              <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
            </>
          ) : locationFound ? (
            <>
              <MapPinCheck className="mr-2 h-5 w-5" />
              <span>View Nearby Shelters</span>
            </>
          ) : (
            <>
              <MapPin className="mr-2 h-5 w-5" />
              <span>Find Nearby Shelters</span>
            </>
          )}
        </button>
        
        {locationFound && (
          <p className="mt-4 text-green-300">
            Location found! Scroll down to the map to see nearby shelters.
          </p>
        )}
      </div>
    </section>
  );
};

export default FindSafePlace;
