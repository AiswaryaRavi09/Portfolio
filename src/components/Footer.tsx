import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aiswarya R</h3>
            <p className="text-gray-400 leading-relaxed">
              Flutter Developer passionate about creating beautiful, 
              functional mobile applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Palakkad, Kerala, India</p>
              <a href="mailto:aiswaryaravindran2@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                aiswaryaravindran2@gmail.com
              </a>
              <a href="tel:+916238518989" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                +91 62385 18989
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Aiswarya R © {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;