import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Galgotias University",
      location: "Greater Noida",
      year: "2024",
      type: "Masters",
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "Post Graduate Diploma in Computer Application (PGDCA)",
      institution: "Arunachal University of Studies",
      location: "Arunachal Pradesh", 
      year: "2022",
      type: "Diploma",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      degree: "Bachelor of Arts (B.A.)",
      institution: "Jannayak Chandrashekhar University",
      location: "Ballia",
      year: "2020",
      type: "Bachelors",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const training = {
    title: "AICTE-EDU Skills Virtual Internship",
    duration: "10 weeks",
    topic: "Cloud Foundation, Google Developer",
    platform: "AWS",
    year: "2024"
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Training</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A strong academic foundation in computer science and continuous learning through professional training
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Credentials</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.type}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</h5>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            Professional Training
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{training.title}</h4>
              <p className="text-lg text-blue-600 font-semibold mb-3">{training.topic}</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {training.duration}
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {training.platform}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;