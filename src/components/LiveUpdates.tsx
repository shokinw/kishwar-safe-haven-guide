
import { useEffect, useState } from "react";
import { News, Info, MessageSquare, MessageSquareWarning } from "lucide-react";

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      type: "alert",
      time: "10:23 AM",
      content: "Air raid sirens active in southwestern district. Seek shelter immediately.",
      icon: <MessageSquareWarning className="h-5 w-5 text-emergency" />
    },
    {
      id: 2,
      type: "news",
      time: "9:15 AM",
      content: "Relief supplies arriving at Central Square distribution point.",
      icon: <News className="h-5 w-5 text-blue-600" />
    },
    {
      id: 3,
      type: "info",
      time: "8:30 AM",
      content: "Water service restored to eastern neighborhoods after repairs.",
      icon: <Info className="h-5 w-5 text-green-600" />
    },
    {
      id: 4,
      type: "alert",
      time: "Yesterday",
      content: "Medical personnel needed at Northern District Hospital. Volunteers please report.",
      icon: <MessageSquare className="h-5 w-5 text-orange-600" />
    },
  ]);

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-display">Live Updates</h2>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Recent News & Alerts</h3>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
          
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {updates.map((update) => (
              <div 
                key={update.id} 
                className={`p-3 rounded-md ${
                  update.type === 'alert' 
                    ? 'bg-red-50 border-l-4 border-emergency' 
                    : update.type === 'news' 
                    ? 'bg-blue-50 border-l-4 border-blue-600' 
                    : 'bg-green-50 border-l-4 border-green-600'
                }`}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    {update.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className={`font-bold ${
                        update.type === 'alert' ? 'text-emergency' : 
                        update.type === 'news' ? 'text-blue-600' : 'text-green-600'
                      }`}>
                        {update.type.toUpperCase()}
                      </span>
                      <span className="text-gray-500 text-sm">{update.time}</span>
                    </div>
                    <p className="text-gray-800">{update.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a href="#" className="text-skyBlue hover:underline font-semibold">
            View all updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;
