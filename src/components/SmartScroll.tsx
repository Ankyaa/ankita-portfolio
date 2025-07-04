
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const SmartScroll = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showScrollButton, setShowScrollButton] = useState(true);

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find current section
      let current = 'home';
      sections.forEach(sectionId => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            current = sectionId;
          }
        }
      });
      
      setCurrentSection(current);
      
      // Hide button on last section
      setShowScrollButton(current !== 'contact');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < sections.length) {
      const nextSection = document.querySelector(`#${sections[nextIndex]}`);
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!showScrollButton) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-lg text-xs border border-gray-300"
      >
        <span className="mb-1">Next</span>
        <ChevronDown className="h-3 w-3" />
      </button>
    </div>
  );
};
