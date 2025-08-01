import React from 'react';
import { Code, Database, Cloud, Monitor, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack Development"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Responsive Design", "Tailwind CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Socket.io"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "SQL", "Database Design", "Data Analytics", "Mongoose ODM"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "C", "C++", "Object Oriented Programming"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Cloud Foundation", "Google Developer Tools", "Deployment"],
      color: "from-red-500 to-red-600"
    }
  ];

  const expertiseAreas = [
    "MERN Stack Development",
    "Full-Stack Web Development", 
    "JavaScript & React"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set in modern web development with specialization in MERN stack technologies
          </p>
        </div>

        {/* Key Areas of Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">MERN Stack Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">MongoDB</h4>
              <p className="text-sm text-gray-600">NoSQL Database</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900">Express.js</h4>
              <p className="text-sm text-gray-600">Backend Framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">React</h4>
              <p className="text-sm text-gray-600">Frontend Library</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900">Node.js</h4>
              <p className="text-sm text-gray-600">Runtime Environment</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Experienced in building complete full-stack applications with modern development practices, 
              RESTful APIs, authentication systems, and database integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;