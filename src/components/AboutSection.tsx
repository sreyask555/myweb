
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full bg-accent/10 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/58c92fac-cef5-4ec4-a0f4-50c1a39c8d06.png" 
                alt="Sreyas S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="md:w-2/3">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed font-light text-foreground/90">
                  I'm a passionate <span className="font-medium text-accent">Software Developer</span> and <span className="font-medium text-accent">DevOps Engineer</span> with extensive experience in building robust applications and optimizing infrastructure for scalability and reliability.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a strong foundation in both development and operations, I bridge the gap between writing code and deploying it effectively. My approach combines technical expertise with a deep understanding of business needs to deliver solutions that are not just functional, but also maintainable and future-proof.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm constantly exploring new technologies and methodologies to enhance my skillset and bring innovative solutions to complex problems. When I'm not coding or configuring servers, you'll find me contributing to open-source projects and sharing knowledge with the tech community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
