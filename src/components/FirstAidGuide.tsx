import React from 'react';
import { Heart, Scissors, ThermometerSun } from 'lucide-react';

const FirstAidGuide = () => {
  const guides = [
    {
      title: 'CPR Steps',
      icon: Heart,
      steps: [
        'Check the scene is safe',
        'Check responsiveness',
        'Call emergency services',
        'Check breathing',
        'Begin chest compressions',
        '30 compressions : 2 breaths'
      ]
    },
    {
      title: 'Bleeding Control',
      icon: Scissors,
      steps: [
        'Clean hands if possible',
        'Apply direct pressure',
        'Use clean cloth/gauze',
        'Maintain pressure',
        'Raise injured area',
        'Seek medical help'
      ]
    },
    {
      title: 'Burns Treatment',
      icon: ThermometerSun,
      steps: [
        'Cool with running water',
        'Remove jewelry/clothing',
        'Cover with clean dressing',
        'Don\'t pop blisters',
        'Don\'t apply ice',
        'Seek medical attention'
      ]
    }
  ];

  return (
    <div className="emergency-card p-6 slide-in">
      <h2 className="text-2xl font-bold mb-6 text-emerald-600 flex items-center gap-2">
        <Heart className="w-7 h-7" />
        First Aid Guide
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <div
            key={guide.title}
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200/50
                     hover:shadow-lg transition-all duration-300 hover:from-emerald-100 hover:to-emerald-200"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <guide.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ml-3">{guide.title}</h3>
            </div>
            <ul className="space-y-3">
              {guide.steps.map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-emerald-800 flex items-center justify-center
                                 text-sm font-semibold shadow-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstAidGuide;