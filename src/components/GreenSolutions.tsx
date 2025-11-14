import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Droplets, Building2, Car } from "lucide-react";

const solutions = [
  {
    icon: Sprout,
    title: "Green Spaces",
    description: "Create urban gardens and green roofs to improve air quality and reduce heat islands.",
  },
  {
    icon: Droplets,
    title: "Water Harvesting",
    description: "Collect rainwater for irrigation and reduce strain on municipal water supplies.",
  },
  {
    icon: Building2,
    title: "Smart Buildings",
    description: "Implement IoT sensors and automation to optimize energy use in real-time.",
  },
  {
    icon: Car,
    title: "Clean Transportation",
    description: "Choose electric vehicles, public transit, or bike-sharing for eco-friendly commuting.",
  },
];

const GreenSolutions = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Innovative Green Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and practices for a sustainable future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="border-2 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GreenSolutions;
