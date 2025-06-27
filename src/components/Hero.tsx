import React from 'react';
import { Download, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumes/Aiswarya R resume (1).pdf';
    link.download = 'Aiswarya_R_Flutter_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aiswarya R
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Flutter Developer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Passionate Flutter developer with 1+ years of experience building 
                cross-platform mobile applications. Specialized in Firebase integration, 
                REST APIs, and creating seamless user experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Palakkad, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>aiswaryaravindran2@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91 62385 18989</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleResumeDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://linkedin.com/in/aiswarya-r-a8b400210" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:bg-gray-700 hover:text-white transform hover:-translate-y-1">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Aiswarya R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;