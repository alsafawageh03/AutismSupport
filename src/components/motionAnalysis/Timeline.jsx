import Card from "../ui/Card";

export default function Timeline({ segments = [], duration = 1 }) {
  const totalDuration = duration || 1;

  return (
    <Card className="p-5 border border-[var(--border-light)] bg-[var(--bg-card)] rounded-2xl space-y-5 shadow-sm transition-all duration-300">
      
      {/* Title Header Layout Block */}
      <div>
        <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
          Temporal Event Mapping
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
          Visual distribution of flagged instances along the duration track.
        </p>
      </div>
      
      {/* Visual Timeline Track bar */}
      <div className="relative w-full h-10 bg-[var(--bg-page)] rounded-xl overflow-hidden border border-[var(--border-light)] shadow-inner">
        {segments.map((seg, idx) => {
          if (!seg.is_smm) return null;
          const leftPercent = (seg.start_time / totalDuration) * 100;
          const widthPercent = ((seg.end_time - seg.start_time) / totalDuration) * 100;

          return (
            <div
              key={idx}
              className="absolute top-0 bottom-0 transition-all duration-200 cursor-pointer group"
              style={{
                left: `${Math.max(0, Math.min(leftPercent, 100))}%`,
                width: `${Math.max(1, Math.min(widthPercent, 100))}%`,
                backgroundColor: "var(--danger)",
                backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
                backgroundSize: "1rem 1rem",
                opacity: 0.6
              }}
              title={`SMM Block: ${seg.start_time.toFixed(2)}s - ${seg.end_time.toFixed(2)}s`}
            />
          );
        })}
      </div>

      {/* Timestamp Duration Labels Bar */}
      <div className="flex justify-between text-xs font-mono font-bold text-[var(--text-secondary)] px-1 select-none">
        <span className="flex flex-col items-start gap-1">
          <span className="h-1.5 w-0.5 bg-[var(--border-default)] rounded-full" />
          0.00s
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="h-1.5 w-0.5 bg-[var(--border-default)] rounded-full" />
          {(totalDuration / 2).toFixed(2)}s
        </span>
        <span className="flex flex-col items-end gap-1">
          <span className="h-1.5 w-0.5 bg-[var(--border-default)] rounded-full" />
          {totalDuration.toFixed(2)}s
        </span>
      </div>
    </Card>
  );
}