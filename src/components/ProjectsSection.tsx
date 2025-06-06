
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Developed a comprehensive infrastructure-as-code solution using Terraform and Ansible to automate the deployment of a scalable microservices architecture on AWS.",
      tags: ["Terraform", "AWS", "Ansible", "Kubernetes", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Built a real-time monitoring solution using the ELK stack and Grafana to provide comprehensive visibility into application performance and system health.",
      tags: ["React", "Node.js", "ELK Stack", "Grafana", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Serverless E-commerce Backend",
      description: "Designed and implemented a serverless backend for an e-commerce platform using AWS Lambda, API Gateway, and DynamoDB, resulting in significant cost savings and improved scalability.",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
