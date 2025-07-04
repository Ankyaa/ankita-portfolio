
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isContactVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowScrollButton(!isContactVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const currentSection = sections.find(sectionId => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      }
      return false;
    });
    
    const currentIndex = sections.indexOf(currentSection || 'home');
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < sections.length) {
      const nextSection = document.querySelector(`#${sections[nextIndex]}`);
      nextSection?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/5c32b318-bf52-489c-881c-9806a9a4853f.png';
    link.download = 'Ankita_Parit_Resume.pdf';
    link.target = '_blank';

    const toast = document.createElement('div');
    toast.textContent = 'CV Download Started - Opening in new tab';
    toast.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #3B4B8D; color: white; padding: 12px 24px; border-radius: 8px; z-index: 9999; font-size: 14px;';
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ankita-parit-984130157/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Ankyaa?tab=projects', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:ankita.parit6@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Nature Mountain Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url("/lovable-uploads/bb1677dc-a840-43aa-8b3a-98106fb3d1ed.png")`
          }}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-blue-900/30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center my-[10px]">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10">
              <img src="/lovable-uploads/0f7a555b-f3bc-4d06-9ff7-997e4f06792a.png" alt="Ankita Parit" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Ankita Parit</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-4">
            Senior Project Specialist & Data Analytics Expert
          </p>
          <p className="text-lg text-white/80 font-medium mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            🤖 Passionate about AI & Machine Learning
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Accomplished project management professional with 7+ years of experience delivering 
            complex projects from inception to closure. Expert in data visualization, stakeholder 
            engagement, and driving operational efficiency across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="hover-scale bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button size="lg" className="hover-scale bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg" onClick={downloadCV}>
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 px-0 my-[15px]">
            <Button variant="ghost" size="icon" className="hover-scale text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" onClick={openGitHub}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" onClick={openLinkedIn}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" onClick={openEmail}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Smart Scroll Down Button */}
      {showScrollButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={scrollToNext} 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm rounded-full px-2 py-3 shadow-lg hover:bg-black/30 animate-bounce"
          >
            <span className="text-xs mb-1">Scroll</span>
            <ChevronDown className="h-4 w-4" />
            <span className="text-xs mt-1">Down</span>
          </button>
        </div>
      )}
    </section>
  );
};
