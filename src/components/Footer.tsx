
import { useState } from "react";
import { Bell, BellRing } from "lucide-react";

const Footer = () => {
  const [showSubscribeMessage, setShowSubscribeMessage] = useState(false);
  
  return (
    <footer className="bg-darkBg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Access Offline</h3>
            <p className="mb-4">
              Save this page for offline access during emergencies when internet connectivity might be limited.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-darkBg py-2 px-4 rounded font-bold hover:bg-gray-200 transition-colors">
                Download Page
              </button>
              <button className="border border-white py-2 px-4 rounded font-bold hover:bg-white/10 transition-colors">
                Save as PDF
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">
              Receive alerts when new emergency information is available.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="py-2 px-4 w-full rounded-l text-gray-800 focus:outline-none"
              />
              <button 
                className="bg-actionOrange text-white py-2 px-4 rounded-r font-bold hover:bg-actionOrange/90 transition-colors"
                onClick={() => setShowSubscribeMessage(true)}
              >
                Subscribe
              </button>
            </div>
            {showSubscribeMessage && (
              <p className="text-green-300 mt-2">Thank you! You'll receive updates.</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <BellRing className="h-5 w-5 text-emergency mr-2" />
              <span className="font-bold text-lg">Stay Safe Kishwar</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Emergency information and safety resources
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2025 Stay Safe Kishwar. All emergency information is provided as guidance. Always follow official instructions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
