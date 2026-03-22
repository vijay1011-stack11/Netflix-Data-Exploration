import { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import StatCards from "@/components/StatCards";
import GraphViewer from "@/components/GraphViewer";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar activeIndex={activeIndex} onSelect={setActiveIndex} />

      <main className="ml-[250px] p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Netflix Data Exploration Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Insights and analytics from the Netflix titles dataset
          </p>
        </div>

        <StatCards />
        <GraphViewer activeIndex={activeIndex} onNavigate={setActiveIndex} />
      </main>
    </div>
  );
};

export default Index;
