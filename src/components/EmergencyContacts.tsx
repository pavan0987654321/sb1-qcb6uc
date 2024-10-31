import React from 'react';
import { Phone, Heart, AlertCircle } from 'lucide-react';

const EmergencyContacts = () => {
  const emergencyNumbers = [
    { name: 'Emergency Services', number: '911', icon: AlertCircle },
    { name: 'Ambulance', number: '112', icon: Phone },
    { name: 'Poison Control', number: '1-800-222-1222', icon: Heart },
  ];

  return (
    <div className="emergency-card p-6 slide-in">
      <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
        <Phone className="w-7 h-7" />
        Emergency Contacts
      </h2>
      <div className="space-y-4">
        {emergencyNumbers.map((contact, index) => (
          <a
            key={contact.number}
            href={`tel:${contact.number}`}
            className="group flex items-center p-5 bg-gradient-to-r from-red-50 to-red-100 rounded-xl
                     hover:from-red-100 hover:to-red-200 transition-all duration-300
                     border border-red-200/50 hover:border-red-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-white p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <contact.icon className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="font-semibold text-gray-800 group-hover:text-gray-900">{contact.name}</p>
              <p className="text-red-600 font-bold group-hover:text-red-700">{contact.number}</p>
            </div>
            <div className="ml-auto">
              <div className="bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Phone className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;