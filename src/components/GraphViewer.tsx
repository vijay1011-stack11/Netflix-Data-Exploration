import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { graphs } from "@/data/graphs";

interface GraphViewerProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

const GraphViewer = ({ activeIndex, onNavigate }: GraphViewerProps) => {
  const graph = graphs[activeIndex];
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const handlePrev = () => {
    if (activeIndex > 0) onNavigate(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < graphs.length - 1) onNavigate(activeIndex + 1);
  };

  const progress = ((activeIndex + 1) / graphs.length) * 100;

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-2">
        <h2 className="text-xl font-bold text-foreground">{graph.title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{graph.description}</p>
      </div>

      {/* Graph area */}
      <div key={activeIndex} className="fade-enter px-6 py-4 flex items-center justify-center min-h-[420px]">
        {imgError[activeIndex] ? (
          <div className="w-full h-[400px] rounded-md bg-secondary flex flex-col items-center justify-center gap-3">
            <p className="text-muted-foreground text-lg font-medium">{graph.title}</p>
            <p className="text-muted-foreground/60 text-sm">Placeholder — replace with {graph.image.split("/").pop()}</p>
          </div>
        ) : (
          <img
            src={graph.image}
            alt={graph.title}
            className="max-w-full max-h-[500px] rounded-md object-contain"
            onError={() => setImgError((prev) => ({ ...prev, [activeIndex]: true }))}
          />
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pb-5 space-y-4">
        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
            {activeIndex + 1} / {graphs.length}
          </span>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === graphs.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphViewer;
