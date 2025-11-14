import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Home, Thermometer, Sun, Wind, Battery } from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    description: "Switch to LED bulbs and use natural light when possible. Save up to 75% on lighting costs.",
    color: "from-primary to-accent",
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Adjust your thermostat by 2-3 degrees. Small changes make a big difference in energy use.",
    color: "from-accent to-secondary",
  },
  {
    icon: Home,
    title: "Insulation & Sealing",
    description: "Seal drafts and improve insulation to maintain comfortable temperatures efficiently.",
    color: "from-secondary to-primary",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    description: "Consider solar panels or solar water heaters to harness renewable energy sources.",
    color: "from-primary to-accent",
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
    description: "Use natural airflow instead of AC when possible. Open windows strategically for cooling.",
    color: "from-accent to-secondary",
  },
  {
    icon: Battery,
    title: "Unplug Devices",
    description: "Reduce phantom power drain by unplugging electronics and chargers when not in use.",
    color: "from-secondary to-primary",
  },
];

const ConservationTips = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Energy Conservation Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple strategies to reduce your energy consumption and lower your carbon footprint
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tip.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {tip.description}
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

export default ConservationTips;
