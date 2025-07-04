
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: "Enterprise Data Visualization Dashboard",
      description: "Created comprehensive PowerBI and Tableau dashboards for real-time user data analysis and business insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Power BI", "Tableau", "Business Analytics", "Data Visualization"],
      clients: "Multiple Enterprise Clients",
      experience: "Led a team of 5 analysts to develop interactive dashboards that increased data accessibility by 40%. Implemented real-time data pipelines and automated reporting systems that saved 20+ hours weekly for stakeholders. Conducted training sessions for 50+ users across different departments."
    },
    {
      title: "Salesforce Project Management Suite",
      description: "Led end-to-end project development for Salesforce platform configuration and content authoring solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Salesforce", "Project Management", "Agile", "Stakeholder Management"],
      clients: "Salesforce, Accenture",
      experience: "Managed cross-functional teams of 12+ members across 3 time zones. Successfully delivered 8 major platform configurations on time and within budget. Established agile workflows that improved project delivery speed by 35% and enhanced stakeholder satisfaction scores to 95%."
    },
    {
      title: "Medical Terminology E-Learning Platform",
      description: "Developed interactive HTML-based e-learning solutions and simulation tools for medical education",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      technologies: ["HTML", "CSS", "XML", "E-Learning", "Content Development"],
      clients: "Medical Education Sector",
      experience: "Designed and developed 25+ interactive modules covering complex medical terminology. Collaborated with subject matter experts to ensure content accuracy. The platform achieved 92% completion rates and improved learning outcomes by 30% compared to traditional methods."
    },
    {
      title: "Multi-Client Platform Solutions",
      description: "Managed complex projects for Fortune 500 companies including process optimization and quality assurance",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      technologies: ["JIRA", "Process Optimization", "Quality Assurance", "Cross-functional Leadership"],
      clients: "Coca-Cola, Mondelez, Abbott, Merck",
      experience: "Orchestrated simultaneous projects for 4 Fortune 500 companies, managing budgets exceeding $2M. Implemented process improvements that reduced operational costs by 25%. Led quality assurance initiatives that achieved 99.5% accuracy rates across all deliverables."
    },
    {
      title: "Cengage Learning Content Management",
      description: "Led content authoring and platform configuration projects for educational technology solutions",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["CMS", "Content Strategy", "Platform Configuration", "Educational Technology"],
      clients: "Cengage SAM, Walch, VHL",
      experience: "Spearheaded content migration for 500+ educational resources. Developed standardized workflows that improved content quality and reduced production time by 40%. Managed relationships with 15+ educational publishers and maintained 98% client retention rate."
    },
    {
      title: "Microsoft Office Simulation Suite",
      description: "Developed comprehensive simulations for Microsoft Office tools using XML coding and best practices",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      technologies: ["XML", "Microsoft Office", "Simulation Development", "Code Review"],
      clients: "Corporate Training Sector",
      experience: "Created 100+ realistic simulations covering all Microsoft Office applications. Established code review processes that reduced bugs by 60%. The simulation suite was adopted by 20+ corporate training programs and achieved 95% user satisfaction ratings."
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Nature Mountain Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/lovable-uploads/bb1677dc-a840-43aa-8b3a-98106fb3d1ed.png")`
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-white/90">
              Key projects delivered for Fortune 500 companies and enterprise clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative h-[520px] perspective-1000">
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
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="pb-3 flex-grow">
                        <CardTitle className="text-lg text-white line-clamp-2">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm line-clamp-2">{project.description}</CardDescription>
                        <p className="text-sm text-indigo-300 font-medium">Clients: {project.clients}</p>
                      </CardHeader>
                      <CardContent className="pt-0 pb-4 space-y-3 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 bg-indigo-500/20 text-indigo-200 text-xs rounded backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="px-2 py-1 bg-gray-500/20 text-gray-200 text-xs rounded backdrop-blur-sm">
                              +{project.technologies.length - 2} more
                            </span>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md border-0"
                          onClick={() => toggleCard(index)}
                        >
                          <BarChart3 className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm shadow-lg border border-indigo-400/30 flex flex-col">
                    <CardHeader className="pb-3 flex-shrink-0">
                      <CardTitle className="text-lg text-indigo-200">Work Experience</CardTitle>
                      <CardDescription className="font-medium text-gray-200">{project.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow pt-0 pb-4">
                      <p className="text-sm text-gray-200 mb-4 flex-grow overflow-y-auto leading-relaxed">
                        {project.experience}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-indigo-400/50 text-indigo-200 hover:bg-indigo-500/20 bg-transparent backdrop-blur-sm mt-auto"
                        onClick={() => toggleCard(index)}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
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
