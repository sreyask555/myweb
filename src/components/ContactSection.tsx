
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      name: "Email",
      value: "sreyas1516@gmail.com",
      icon: Mail,
      url: "mailto:sreyas1516@gmail.com",
    },
    {
      name: "GitHub",
      value: "github.com/sreyask555",
      icon: Github,
      url: "https://github.com/sreyask555",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/sreyas-s-7187661a9",
      icon: Linkedin,
      url: "https://linkedin.com/in/sreyas-s-7187661a9",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactLinks.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors">
                <div className="flex items-center">
                  <contact.icon className="mr-3 h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={contact.url} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
