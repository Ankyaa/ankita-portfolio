
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
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
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const downloadCV = () => {
    // Create a proper PDF download link
    const link = document.createElement('a');
    link.href = '/lovable-uploads/5c32b318-bf52-489c-881c-9806a9a4853f.png'; // This should be replaced with actual PDF
    link.download = 'Ankita_Parit_Resume.pdf';
    link.target = '_blank';
    
    // Add some styling to indicate it's a PDF
    const toast = document.createElement('div');
    toast.textContent = 'CV Download Started - Opening in new tab';
    toast.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4F46E5; color: white; padding: 12px 24px; border-radius: 8px; z-index: 9999; font-size: 14px;';
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
      {/* White Mountain Background with Blur Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop")`
        }} />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-100/30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10">
              <img src="/lovable-uploads/0f7a555b-f3bc-4d06-9ff7-997e4f06792a.png" alt="Ankita Parit" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-800">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Ankita Parit</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4">
            Senior Project Specialist & Data Analytics Expert
          </p>
          <p className="text-lg text-blue-600 font-medium mb-8">
            🤖 Passionate about AI & Machine Learning
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Accomplished project management professional with 6+ years of experience delivering 
            complex projects from inception to closure. Expert in data visualization, stakeholder 
            engagement, and driving operational efficiency across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button size="lg" className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg" onClick={downloadCV}>
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 px-0 my-[15px]">
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-white/20 text-gray-700 border border-gray-300 backdrop-blur-sm hover:scale-110 transition-all duration-300" onClick={openGitHub}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-white/20 text-gray-700 border border-gray-300 backdrop-blur-sm hover:scale-110 transition-all duration-300" onClick={openLinkedIn}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-white/20 text-gray-700 border border-gray-300 backdrop-blur-sm hover:scale-110 transition-all duration-300" onClick={openEmail}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Up Button */}
      {showScrollButton && (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <button 
            onClick={scrollToNext} 
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg text-xs border border-gray-300 hover:bg-white/30"
          >
            <ChevronUp className="h-4 w-4 mb-1" />
            <span>Next</span>
          </button>
        </div>
      )}
    </section>
  );
};
