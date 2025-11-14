import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">EcoGuide</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">About</a>
            <a href="#" className="hover:text-accent transition-colors">Resources</a>
            <a href="#" className="hover:text-accent transition-colors">Community</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-background/80">
            © 2024 EcoGuide. Making sustainability accessible.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
