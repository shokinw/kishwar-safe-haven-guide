
import { useState } from "react";
import { Info, MessageSquare, MessageSquareWarning, Bell } from "lucide-react";

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      type: "alert",
      time: "10:23 AM",
      date: "May 7, 2025",
      content: "Air raid sirens active in Jammu & Kashmir southwestern district. Seek shelter immediately.",
      icon: <MessageSquareWarning className="h-5 w-5 text-emergency" />
    },
    {
      id: 2,
      type: "news",
      time: "9:15 AM",
      date: "May 7, 2025",
      content: "Relief supplies arriving at Kashmir Central Square distribution point.",
      icon: <Bell className="h-5 w-5 text-blue-600" />
    },
    {
      id: 3,
      type: "info",
      time: "8:30 AM",
      date: "May 7, 2025",
      content: "Water service restored to eastern neighborhoods of Jammu after repairs.",
      icon: <Info className="h-5 w-5 text-green-600" />
    },
    {
      id: 4,
      type: "alert",
      time: "7:45 AM", 
      date: "May 7, 2025",
      content: "Military personnel needed at Northern District Hospital. Volunteers please report.",
      icon: <MessageSquare className="h-5 w-5 text-orange-600" />
    },
    {
      id: 5,
      type: "news",
      time: "6:20 AM",
      date: "May 7, 2025", 
      content: "Government announces new safety protocols for Kashmir border regions.",
      icon: <Bell className="h-5 w-5 text-blue-600" />
    },
  ]);

  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-darkBg text-white p-4">
        <h2 className="text-2xl font-bold font-display">Live News: Jammu & Kashmir</h2>
      </div>
      
      <div className="bg-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Recent Updates</h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>
        
        <div className="space-y-4 max-h-[500px] overflow-y-auto">
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
                    <div className="text-right">
                      <div className="text-gray-500 text-xs">{update.date}</div>
                      <div className="text-gray-700 text-sm">{update.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-800">{update.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 text-center border-t border-gray-200">
        <a href="#" className="text-skyBlue hover:underline font-semibold">
          View all updates from Jammu & Kashmir
        </a>
      </div>
    </section>
  );
};

export default LiveUpdates;
