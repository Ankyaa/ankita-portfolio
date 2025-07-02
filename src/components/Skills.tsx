
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
    <section id="skills" className="py-20 relative bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skill set spanning project management, data analytics, and emerging AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-scale">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-100 hover:from-primary/20 hover:to-blue-200 transition-all">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
