
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
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/lovable-uploads/5c32b318-bf52-489c-881c-9806a9a4853f.png';
    link.download = 'Ankita_Parit_Resume.png';
    link.target = '_blank';
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
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-indigo-900/90 backdrop-blur-sm"></div>
      </div>
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10">
              <img 
                src="/lovable-uploads/0f7a555b-f3bc-4d06-9ff7-997e4f06792a.png" 
                alt="Ankita Parit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Ankita Parit</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-4">
            Senior Project Specialist & Data Analytics Expert
          </p>
          <p className="text-lg text-emerald-400 font-medium mb-8">
            🤖 Passionate about AI & Machine Learning
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Accomplished project management professional with 6+ years of experience delivering 
            complex projects from inception to closure. Expert in data visualization, stakeholder 
            engagement, and driving operational efficiency across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="hover-scale bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              className="hover-scale bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg"
              onClick={downloadCV}
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              onClick={openGitHub}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              onClick={openLinkedIn}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              onClick={openEmail}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - positioned at bottom right, hidden on contact page */}
      {showScrollButton && (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white hover:text-emerald-400 transition-colors bg-black/30 backdrop-blur-sm rounded-full p-2 shadow-lg text-xs border border-white/20"
          >
            <span className="mb-1">Scroll</span>
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      )}
    </section>
  );
};
