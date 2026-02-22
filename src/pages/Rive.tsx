import { useEffect } from "react";
import { Layers } from "lucide-react";

const RivePage = () => {
  useEffect(() => {
    document.title = "Nilima Sahu | Rive";
  }, []);

  return (
    <div className="min-h-screen yarn-pattern">
      <div className="container mx-auto px-6 pt-28 pb-16 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-yarn-pink" />
            <span className="font-pixel text-[10px] text-yarn-pink">RIVE</span>
          </div>
          <h1 className="font-pixel text-2xl text-foreground mb-4">
            <span className="text-primary">&gt;</span> Animations
          </h1>
          <p className="text-muted-foreground font-body">
            Interactive animations crafted with Rive — where design meets code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder animation slots */}
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="pixel-border border-border rounded-sm bg-card aspect-video flex items-center justify-center hover-pixel group"
            >
              <div className="text-center space-y-3">
                <Layers className="h-10 w-10 text-muted-foreground/30 mx-auto group-hover:text-primary/50 transition-colors" />
                <p className="font-pixel text-[8px] text-muted-foreground/50">animation {n}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RivePage;
