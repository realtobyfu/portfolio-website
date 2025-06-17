
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-700/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-slate-400">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-slate-400">
          <p>&copy; 2024 Portfolio. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
