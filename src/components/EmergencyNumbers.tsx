
import { Phone, Building, Building2, Hospital, Shield } from "lucide-react";

const EmergencyNumbers = () => {
  const emergencyContacts = [
    {
      name: "Army Command",
      number: "911-0001",
      icon: <Shield className="h-8 w-8 text-emergency" />,
      description: "Military emergency response"
    },
    {
      name: "Police",
      number: "911-0002",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      description: "Local police department"
    },
    {
      name: "Fire Service",
      number: "911-0003",
      icon: <Building className="h-8 w-8 text-orange-600" />,
      description: "Fire & rescue services"
    },
    {
      name: "Hospitals",
      number: "911-0004",
      icon: <Hospital className="h-8 w-8 text-green-600" />,
      description: "Medical emergencies"
    },
  ];

  return (
    <section id="emergency-numbers" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-display">Important Emergency Numbers</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyContacts.map((contact) => (
            <div key={contact.name} className="emergency-card flex flex-col items-center">
              <div className="mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-emergency mr-2" />
                <a href={`tel:${contact.number.replace(/-/g, '')}`} className="text-lg font-bold text-emergency">
                  {contact.number}
                </a>
              </div>
              <p className="text-gray-600 text-center">{contact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyNumbers;
