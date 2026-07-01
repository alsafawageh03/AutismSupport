import { LuRefreshCw } from "react-icons/lu";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";

export default function AnalysisProgress({ status }) {
  const stepMap = { Uploading: 1, Processing: 2, Completed: 3 };
  const currentStep = stepMap[status] || 1;

  return (
    <Card className="p-8 text-center space-y-8 border border-[var(--border-light)] bg-[var(--bg-card)] rounded-2xl shadow-sm transition-all duration-300">
      
      {/* Spinner & Dynamic Status Message Layout */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative p-4 rounded-full text-[var(--primary-500)]">
          <Spinner size="lg" className="animate-spin" />
        </div>
        
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {status === "Uploading" ? "Syncing Media with Pipeline..." : "Parsing Kinetic Points..."}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
            Our specialized neural networks are tracing body segment anchors to measure movement patterns.
          </p>
        </div>
      </div>

      {/* Visual Step Progress Tracker Line/Nodes */}
      <div className="max-w-md mx-auto pt-4 relative">
        
        {/* Continuous Background Track Line: Centered precisely vertically behind the nodes */}
        <div className="absolute left-[16.66%] top-[34px] h-1 bg-[var(--border-light)] rounded-full z-0 -translate-y-1/2" />

        {/* Continuous Active Progress Line: Fills precisely from node center to node center */}
          <div 
           className="absolute left-[16.66%] top-[34px] h-1 bg-[var(--primary-500)] transition-all duration-700 ease-in-out rounded-full z-0 -translate-y-1/2 origin-left  bg-[var(--border-light)"
            style={{ width: currentStep === 1 ? "0%" : currentStep === 2 ? "35%" : "70%" }}
          />

        {/* Unified Step Column Grid Wrapper */}
        <div className="grid grid-cols-3 relative z-10 w-full">
          
          {/* Step 1 Stack */}
          <div className="flex flex-col items-center text-center">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 shadow-sm mb-3
              ${currentStep >= 1 
                ? "bg-[var(--primary-500)] text-[var(--white)] ring-4 ring-[var(--primary-50)]" 
                : "bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border-light)]"
              }`}
            >
              1
            </div>
            <span className={`text-xs font-semibold select-none ${currentStep === 1 ? "text-[var(--primary-600)] font-bold" : "text-[var(--text-secondary)]"}`}>
              File Upload
            </span>
          </div>

          {/* Step 2 Stack */}
          <div className="flex flex-col items-center text-center">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 shadow-sm mb-3
              ${currentStep >= 2 
                ? "bg-[var(--primary-500)] text-[var(--white)] ring-4 ring-[var(--primary-50)]" 
                : "bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border-light)]"
              }`}
            >
              2
            </div>
            <span className={`text-xs font-semibold select-none ${currentStep === 2 ? "text-[var(--primary-600)] font-bold" : "text-[var(--text-secondary)]"}`}>
              AI Inference
            </span>
          </div>

          {/* Step 3 Stack */}
          <div className="flex flex-col items-center text-center">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 shadow-sm mb-3
              ${currentStep === 3 
                ? "bg-[var(--primary-500)] text-[var(--white)] ring-4 ring-[var(--primary-50)]" 
                : "bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border-light)]"
              }`}
            >
              3
            </div>
            <span className={`text-xs font-semibold select-none ${currentStep === 3 ? "text-[var(--primary-600)] font-bold" : "text-[var(--text-secondary)]"}`}>
              Report Ready
            </span>
          </div>

        </div>
      </div>

    </Card>
  );
}