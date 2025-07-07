
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management",
      skills: ["Agile Methodologies", "Scrum", "KANBAN", "Waterfall", "JIRA", "Trello", "Resource Planning", "Risk Assessment"]
    },
    {
      title: "E-Learning & Content",
      skills: ["Content Development", "CMS", "HTML", "CSS", "XML", "SharePoint", "Smartsheet", "Course Building", "Learning Objects"]
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Excel", "Business Analytics", "Dashboard Creation", "Data Reporting"]
    }
  ];

  return (
    <section id="skills" className="py-12 relative">
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
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-white/90">
              Comprehensive skill set spanning project management, e-learning content development, and data visualization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-scale border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-indigo-300">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all text-gray-200 border border-indigo-400/30 backdrop-blur-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
