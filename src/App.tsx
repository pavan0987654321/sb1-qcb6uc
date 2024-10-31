import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import SymptomChecker from './components/SymptomChecker';
import FirstAidGuide from './components/FirstAidGuide';
import EmergencyContacts from './components/EmergencyContacts';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="fixed inset-0 -z-10 medical-grid opacity-30" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
      
      <Navbar />

      <main className="container mx-auto px-4 pb-8">
        <section id="home" className="pt-32 pb-16">
          <EmergencyContacts />
        </section>

        <section id="symptoms" className="py-16">
          <SymptomChecker />
        </section>

        <section id="firstaid" className="py-16">
          <FirstAidGuide />
        </section>

        <div className="mt-8 glass-card rounded-xl p-6">
          <p className="text-center text-indigo-300 font-semibold flex items-center justify-center gap-2">
            <span className="text-2xl">⚠️</span>
            This is an AI assistant for guidance only. Always call emergency services in life-threatening situations.
          </p>
        </div>
      </main>

      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="tel:911"
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full shadow-lg 
                   hover:bg-red-700 transition-all duration-300 animate-bounce"
        >
          <Phone className="w-4 h-4" />
          <span className="font-bold text-sm">911</span>
        </a>
      </div>

      <footer className="bg-gray-900/50 border-t border-gray-800 py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-indigo-400 font-medium">
              <span>Developed by Pavan</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919380452790" className="hover:text-indigo-300 transition-colors">
                    +91 9380452790
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:gajulapavan29@gmail.com" className="hover:text-indigo-300 transition-colors">
                    gajulapavan29@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <p className="font-medium text-gray-300">© 2024 Emergency Medical Assistant</p>
            <p className="text-gray-500 text-sm">
              For emergency situations, always call your local emergency services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;