import React, { useState } from 'react';
import { Menu, X, Download, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Aditya Kumar Singh
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600 transition-colors">Education</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:7905377660" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              7905377660
            </a>
            <a href="mailto:adityasingh20637@gmail.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:7905377660" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  7905377660
                </a>
                <a href="mailto:adityasingh20637@gmail.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  adityasingh20637@gmail.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;