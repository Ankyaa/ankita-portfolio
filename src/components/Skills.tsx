
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
      {/* White Mountain Background with Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop")`
        }}
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-100/30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/40">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive skill set spanning project management, data analytics, and emerging AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-scale border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-indigo-600">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 transition-all text-gray-700 border border-indigo-200">
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
