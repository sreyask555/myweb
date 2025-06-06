
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Development",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "HTML/CSS", "REST APIs", "GraphQL"],
    },
    {
      title: "DevOps",
      skills: ["CI/CD", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "Monitoring"],
    },
    {
      title: "Cloud",
      skills: ["AWS", "Azure", "Google Cloud", "Serverless", "Microservices", "Load Balancing", "Auto Scaling", "S3/Blob Storage"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Linux", "Bash", "Shell Scripting", "Prometheus", "Grafana", "ELK Stack", "Agile/Scrum", "JIRA"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
