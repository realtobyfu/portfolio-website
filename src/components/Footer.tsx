
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold text-emerald-600 mb-2">
              Tobias Fu
            </div>
            <p className="text-gray-600">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/realtobyfu" 
              className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tobiasfu" 
              className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:zfu04@tufts.com" 
              className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2024 Tobias Fu. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
