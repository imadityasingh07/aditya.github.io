import React from 'react';
import { Target, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Strong collaborative skills with excellent communication and presentation abilities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Strong Work Ethic",
      description: "Committed to hard work and delivering high-quality results consistently"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on achieving objectives and contributing to organizational success"
    }
  ];

  const interests = [
    "Software Development",
    "Data Analytics", 
    "Data Engineering",
    "Information Technology"
  ];

  const hobbies = [
    { icon: "🎵", name: "Listening to Music" },
    { icon: "🏏", name: "Playing Cricket" },
    { icon: "✈️", name: "Travelling" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and driven by the desire to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Strengths */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-blue-600" />
              Strengths
            </h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{strength.title}</h4>
                    <p className="text-gray-600 text-sm">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-600" />
              Areas of Interest
            </h3>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                  <p className="font-medium text-gray-900">{interest}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-blue-600" />
              Hobbies & Interests
            </h3>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <span className="text-2xl">{hobby.icon}</span>
                  <span className="font-medium text-gray-900">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;