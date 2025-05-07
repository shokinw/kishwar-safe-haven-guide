
import { useState } from "react";
import { Share2, Download, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [showSubscribeMessage, setShowSubscribeMessage] = useState(false);
  const currentDate = new Date();
  
  return (
    <footer className="bg-darkBg text-white py-10 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Access</h3>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded mr-4">
                {/* Placeholder QR code - In production, use a real QR code image */}
                <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-black text-xs text-center">QR Code<br/>for quick access</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm">
                  Scan this code for instant access to Stay Safe Kishwar on your mobile device.
                </p>
                <button className="flex items-center bg-white/10 hover:bg-white/20 transition-colors rounded px-4 py-2">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="text-sm">Save for Offline</span>
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Share this page</h3>
            <p className="mb-4">
              Help spread safety information to others in need.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-skyBlue hover:bg-skyBlue/90 p-2 rounded">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-lg">Stay Safe Kishwar</div>
            <p className="text-sm text-gray-400 mt-1">
              Emergency information and safety resources
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              Last updated: {currentDate.toLocaleDateString()} at {currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
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
