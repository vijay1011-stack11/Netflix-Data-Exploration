import { Film, Tv, LayoutGrid, Globe } from "lucide-react";

const stats = [
  { label: "Total Titles", value: "8,807", icon: LayoutGrid },
  { label: "Movies", value: "6,131", icon: Film },
  { label: "TV Shows", value: "2,676", icon: Tv },
  { label: "Countries", value: "748", icon: Globe },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-lg border-t-2 border-t-primary border border-border p-5 flex items-center gap-4"
        >
          <div className="p-2.5 rounded-lg bg-primary/10">
            <stat.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
