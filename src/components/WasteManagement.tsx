import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, RefreshCw, Package, Leaf } from "lucide-react";

const wasteCategories = [
  {
    id: "reduce",
    icon: Trash2,
    title: "Reduce",
    content: [
      "Buy only what you need to minimize waste",
      "Choose products with minimal packaging",
      "Opt for reusable items over single-use products",
      "Plan meals to reduce food waste",
    ],
  },
  {
    id: "reuse",
    icon: RefreshCw,
    title: "Reuse",
    content: [
      "Repair items instead of replacing them",
      "Donate or sell items you no longer need",
      "Use reusable bags, bottles, and containers",
      "Get creative with upcycling projects",
    ],
  },
  {
    id: "recycle",
    icon: Package,
    title: "Recycle",
    content: [
      "Learn your local recycling guidelines",
      "Clean and sort recyclables properly",
      "Recycle electronics and batteries safely",
      "Compost organic waste when possible",
    ],
  },
  {
    id: "compost",
    icon: Leaf,
    title: "Compost",
    content: [
      "Start a home composting system",
      "Compost fruit and vegetable scraps",
      "Add coffee grounds and tea bags",
      "Use compost to enrich your garden soil",
    ],
  },
];

const WasteManagement = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Waste Management Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The 4 Rs of sustainable waste management: Reduce, Reuse, Recycle, and Compost
          </p>
        </div>

        <Tabs defaultValue="reduce" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-1">
            {wasteCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {wasteCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border-2 border-border animate-fade-in"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
              <ul className="space-y-4">
                {category.content.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/90">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WasteManagement;
