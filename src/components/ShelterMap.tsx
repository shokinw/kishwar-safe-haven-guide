
import { useEffect, useRef } from "react";

const ShelterMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We're using a placeholder image instead of an actual Google Maps embed
    // In a real implementation, you would integrate with Google Maps API or another mapping service
  }, []);

  return (
    <section id="shelters" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-display">Shelter Locations</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <div ref={mapRef} className="w-full h-96 bg-gray-300 relative">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center p-6 max-w-lg">
                    <h3 className="text-2xl font-bold mb-2">Map Visualization</h3>
                    <p className="mb-4">
                      In an actual implementation, this would be an interactive map showing nearby shelter locations, with distances and directions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-bold text-lg mb-2">Known Shelter Locations:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-emergency mr-2"></span>
                <span>Central District Bunker - 1.2 km away</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-emergency mr-2"></span>
                <span>Southern School Shelter - 2.5 km away</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-emergency mr-2"></span>
                <span>Eastern Hospital Basement - 3.7 km away</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-emergency mr-2"></span>
                <span>Northern Community Center - 4.1 km away</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShelterMap;
