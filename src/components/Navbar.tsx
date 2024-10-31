import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, Phone, Home, Stethoscope, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home', icon: Home, href: '#home' },
    { id: 'symptoms', name: 'Symptom Checker', icon: Stethoscope, href: '#symptoms' },
    { id: 'firstaid', name: 'First Aid', icon: BookOpen, href: '#firstaid' },
    { 
      id: 'emergency', 
      name: 'Emergency Call', 
      icon: Phone, 
      href: 'tel:911', 
      special: true 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsMobileMenuOpen(false);
    if (!href.startsWith('tel:')) {
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'nav-blur shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-indigo-400 pulse-animation" />
            <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              MedAssist
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''} ${
                  item.special ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-indigo-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''} ${
                  item.special ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;