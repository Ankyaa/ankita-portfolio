
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSkills = (index: number) => {
    setExpandedSkills(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: "PowerBI Dashboard Development",
      description: "Created comprehensive PowerBI dashboards for real-time user data analysis and business reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Power BI", "Data Visualization", "Business Analytics", "Excel", "Dashboard Design"],
      clients: "Multiple Enterprise Clients",
      experience: "Developed interactive dashboards that provided stakeholders with real-time insights into business performance. Created standardized templates and trained team members on dashboard usage. Improved data accessibility and reduced manual reporting time."
    },
    {
      title: "Salesforce Content Management",
      description: "Led content authoring and platform configuration for Salesforce learning solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Salesforce", "Content Development", "Project Management", "CMS"],
      clients: "Salesforce, Accenture",
      experience: "Managed content development projects for Salesforce platform. Coordinated with cross-functional teams to ensure content quality and timely delivery. Established workflows for content review, approval, and publishing processes."
    },
    {
      title: "Medical Terminology Learning Module",
      description: "Developed interactive HTML-based learning modules for medical education with comprehensive content",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      technologies: ["HTML", "CSS", "XML", "Content Development"],
      clients: "Medical Education Sector",
      experience: "Created 20+ interactive learning modules covering medical terminology. Worked closely with subject matter experts to ensure content accuracy. Developed engaging learning experiences that improved knowledge retention and completion rates."
    },
    {
      title: "Corporate Training Solutions",
      description: "Managed content development projects for Fortune 500 companies focusing on process optimization and quality",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      technologies: ["JIRA", "Content Management", "Quality Assurance", "Project Coordination"],
      clients: "Coca-Cola, Mondelez, Abbott",
      experience: "Coordinated content development for multiple Fortune 500 clients. Managed project timelines, resource allocation, and quality assurance processes. Maintained strong client relationships and ensured project deliverables met requirements."
    },
    {
      title: "Cengage Learning Platform",
      description: "Led content authoring and CMS configuration for educational technology solutions",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["CMS", "Content Strategy", "Platform Configuration", "Educational Technology"],
      clients: "Cengage SAM, Walch, VHL",
      experience: "Managed content migration and platform configuration for educational publishers. Developed content workflows and quality standards. Coordinated with multiple stakeholders to ensure successful platform launches and content delivery."
    },
    {
      title: "Microsoft Office Simulations",
      description: "Developed comprehensive simulations for Microsoft Office applications using XML and best practices",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      technologies: ["XML", "Microsoft Office", "Simulation Development", "Code Review", "Quality Testing"],
      clients: "Corporate Training Programs",
      experience: "Created realistic simulations for Microsoft Office training programs. Implemented code review processes and quality testing procedures. Developed training materials that were adopted by multiple corporate training initiatives."
    }
  ];

  return (
    <section id="projects" className="py-8 sm:py-12 relative">
      {/* New Blue Desk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/lovable-uploads/0eeea2b7-5896-40bb-9e33-3c6569181a30.png")`
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-white/90 px-2">
              Key projects delivered for enterprise clients across various industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative h-[450px] sm:h-[520px] perspective-1000">
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.includes(index) ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <Card className="absolute inset-0 hover-scale overflow-hidden backface-hidden bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-3 sm:p-4">
                      <CardHeader className="pb-2 sm:pb-3 flex-grow p-0">
                        <CardTitle className="text-base sm:text-lg text-white line-clamp-2 mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-xs sm:text-sm line-clamp-2 mb-2">{project.description}</CardDescription>
                        <p className="text-xs sm:text-sm text-yellow-300 font-medium">Clients: {project.clients}</p>
                      </CardHeader>
                      <CardContent className="pt-0 pb-0 space-y-2 sm:space-y-3 mt-auto p-0">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {expandedSkills.includes(index) ? (
                            // Show all skills
                            project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-indigo-500/30 text-white text-xs rounded backdrop-blur-sm border border-indigo-300/30"
                              >
                                {tech}
                              </span>
                            ))
                          ) : (
                            // Show only first 2 skills
                            <>
                              {project.technologies.slice(0, 2).map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-2 py-1 bg-indigo-500/30 text-white text-xs rounded backdrop-blur-sm border border-indigo-300/30"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 2 && (
                                <button
                                  onClick={() => toggleSkills(index)}
                                  className="px-2 py-1 bg-yellow-500/40 text-black font-semibold text-xs rounded backdrop-blur-sm hover:bg-yellow-500/50 transition-colors border border-yellow-400/60"
                                >
                                  +{project.technologies.length - 2} more
                                </button>
                              )}
                            </>
                          )}
                          {expandedSkills.includes(index) && project.technologies.length > 2 && (
                            <button
                              onClick={() => toggleSkills(index)}
                              className="px-2 py-1 bg-yellow-500/40 text-black font-semibold text-xs rounded backdrop-blur-sm hover:bg-yellow-500/50 transition-colors border border-yellow-400/60"
                            >
                              Show less
                            </button>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md border-0 text-xs sm:text-sm"
                          onClick={() => toggleCard(index)}
                        >
                          <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm shadow-lg border border-indigo-400/30 flex flex-col">
                    <CardHeader className="pb-2 sm:pb-3 flex-shrink-0 p-3 sm:p-4">
                      <CardTitle className="text-base sm:text-lg text-indigo-200">Work Experience</CardTitle>
                      <CardDescription className="font-medium text-gray-200 text-sm">{project.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow pt-0 pb-3 sm:pb-4 px-3 sm:px-4">
                      <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 flex-grow overflow-y-auto leading-relaxed">
                        {project.experience}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-indigo-400/50 text-indigo-200 hover:bg-indigo-500/20 bg-transparent backdrop-blur-sm mt-auto text-xs sm:text-sm"
                        onClick={() => toggleCard(index)}
                      >
                        <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Back to Project
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
