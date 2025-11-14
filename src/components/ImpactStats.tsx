import { Leaf, Zap, Droplet, Recycle } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "30%",
    label: "Energy Saved",
    description: "Average reduction in home energy use",
  },
  {
    icon: Recycle,
    value: "75%",
    label: "Waste Recycled",
    description: "Materials diverted from landfills",
  },
  {
    icon: Droplet,
    value: "40%",
    label: "Water Conserved",
    description: "Through efficient practices",
  },
  {
    icon: Leaf,
    value: "2.5T",
    label: "CO₂ Reduced",
    description: "Per household annually",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Power of Small Actions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the measurable impact your sustainable choices can make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-foreground">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
