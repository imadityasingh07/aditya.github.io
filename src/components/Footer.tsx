import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aditya Kumar Singh</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate web developer ready to create innovative solutions and contribute to meaningful projects. 
            Let's build something amazing together.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="tel:7905377660" className="text-gray-400 hover:text-white transition-colors">
              Phone: 7905377660
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:adityasingh20637@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              adityasingh20637@gmail.com
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and <Code className="w-4 h-4 mx-1 text-blue-500" /> by Aditya Kumar Singh
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Aditya Kumar Singh. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-4">
              "I do hereby declare that above furnished information is true to the best of my knowledge and belief."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;