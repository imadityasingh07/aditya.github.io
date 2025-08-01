import React from 'react';
import { Briefcase, Target, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to begin my professional journey and contribute to innovative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Status */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Career Objective</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Seeking an entry-level position as a <strong>Software Developer</strong> where I can apply my 
                technical skills in web development, programming, and database management to contribute to 
                innovative projects and grow professionally in a dynamic environment.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What I Bring to the Table:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Strong foundation in web development technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Experience with multiple programming languages
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Cloud computing knowledge through AWS training
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Strong work ethic and team collaboration skills
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goals & Aspirations */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mr-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Career Goals</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Develop expertise in modern web frameworks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Contribute to open-source projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Advance in data analytics and engineering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Growth Areas</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-medium text-purple-900">Software Development</p>
                  <p className="text-sm text-purple-700">Building scalable applications</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-medium text-purple-900">Data Analytics</p>
                  <p className="text-sm text-purple-700">Extracting insights from data</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-medium text-purple-900">Cloud Technologies</p>
                  <p className="text-sm text-purple-700">Modern deployment strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;