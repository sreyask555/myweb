
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="header" className="min-h-screen flex flex-col justify-center pt-16 pb-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <span className="text-muted-foreground opacity-0 animate-fade-in animation-delay-100">Hello, I'm</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 opacity-0 animate-fade-in animation-delay-200">
            Sreyas S
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 font-light mt-2 opacity-0 animate-fade-in animation-delay-300">
            <span className="font-bold text-foreground">Software Developer</span> + <span className="font-bold text-foreground">DevOps Engineer</span>
          </h2>
          <p className="text-xl md:text-2xl mt-6 opacity-0 animate-fade-in animation-delay-400">
            Crafting Scalable Code & Reliable Infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-500">
            <Button asChild className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDownIcon className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
}
