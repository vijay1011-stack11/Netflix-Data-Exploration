import { graphs } from "@/data/graphs";

interface DashboardSidebarProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

const DashboardSidebar = ({ activeIndex, onSelect }: DashboardSidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-primary">
          Netflix<span className="text-foreground">Insights</span>
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground px-3 mb-3 font-semibold">
          Visualizations
        </p>
        <ul className="space-y-0.5">
          {graphs.map((graph, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={graph.id}>
                <button
                  onClick={() => onSelect(i)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors duration-150 border-l-[3px] ${
                    isActive
                      ? "border-l-primary bg-accent text-accent-foreground font-medium"
                      : "border-l-transparent text-sidebar-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  }`}
                >
                  <span className="text-muted-foreground mr-2 text-xs font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {graph.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <p className="text-[11px] text-muted-foreground text-center">
          Netflix Dataset Explorer
        </p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
