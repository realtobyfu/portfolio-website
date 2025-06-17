import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Tobias Fu";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-emerald-50 to-purple-50">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900 relative group cursor-pointer">
            <span 
              className="bg-gradient-to-r from-emerald-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x hover:scale-105 transition-transform duration-300 inline-block"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-x 3s ease infinite'
              }}
            >
              {displayText}
            </span>
            {showCursor && (
              <span className="animate-pulse text-emerald-600">|</span>
            )}
            
            {/* Floating sparkles */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-2 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-300 opacity-75"></div>
            <div className="absolute -bottom-2 left-12 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce animation-delay-500 opacity-75"></div>
            <div className="absolute top-2 -right-6 w-1 h-1 bg-purple-500 rounded-full animate-pulse animation-delay-700 opacity-75"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I'm a developer and designer interested in tool-making, infrastructure, 
            visibility, and open source.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="text-gray-400 mx-auto" size={32} />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
