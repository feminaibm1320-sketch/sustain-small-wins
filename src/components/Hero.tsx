import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Energy Conservation &<br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Waste Management
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground/90">
          Discover simple, practical steps to reduce energy. Learn how small actions create big impact through conservation tips, eco-friendly practices, and innovative green solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-soft)] transition-all"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-2 hover:bg-primary/5"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
