
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management",
      skills: ["Agile Methodologies", "Scrum", "KANBAN", "Waterfall", "JIRA", "Trello", "Resource Planning", "Risk Assessment"]
    },
    {
      title: "Data & Analytics",
      skills: ["Power BI", "Tableau", "Python", "SQL", "R", "Business Analytics", "Data Visualization", "Data Science & ML"]
    },
    {
      title: "AI & Technology",
      skills: ["Machine Learning Basics", "AI Applications", "SharePoint", "Smartsheet", "Excel", "CMS", "HTML", "CSS", "XML"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background with consistent theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")`
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-700/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-300">
              Comprehensive skill set spanning project management, data analytics, and emerging AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-scale border border-slate-600/50">
                <h3 className="text-xl font-semibold mb-6 text-emerald-400">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all text-slate-200 border border-emerald-400/30">
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
