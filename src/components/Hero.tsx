import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Profile Section */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100 hover:ring-blue-200 transition-all transform hover:scale-105">
              <img 
                src="https://i.ibb.co/kVscvmWV/1000231818-01.jpg" 
                alt="Aditya Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Aditya Kumar Singh
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              MERN Stack Developer & Software Engineer
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                New Delhi, India
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Born Nov 5, 2001
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Results-oriented MERN stack developer with strong web development skills and a passion for creating 
              innovative full-stack solutions. Experienced in building modern web applications using MongoDB, 
              Express.js, React, and Node.js. Seeking challenging opportunities to apply technical expertise and 
              contribute to organizational success through cutting-edge web technologies.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1GL30njzTxxPHw-XS7zRzFPPUexf7iFOJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>

            {/* Contact Button */}
            <button 
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get In Touch
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
