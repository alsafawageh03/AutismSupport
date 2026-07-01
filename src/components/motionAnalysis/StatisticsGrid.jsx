import { LuPercent, LuActivity, LuLayers, LuClock } from "react-icons/lu";
import Card from "../ui/Card";

export default function StatisticsGrid({ report }) {
  const stats = [
    {
      title: "SMM Proportion",
      value: `${report?.smm_percentage ?? 0}%`,
      icon: <LuPercent size={18} />,
      colorClass: "text-[var(--danger)]",
      bgStyle: "rgba(239, 68, 68, 0.06)" // Match soft danger background
    },
    {
      title: "Flagged Instances",
      value: report?.smm_segments_count ?? 0,
      icon: <LuActivity size={18} />,
      colorClass: "text-[var(--warning)]",
      bgStyle: "rgba(245, 158, 11, 0.06)" // Match soft warning background
    },
    {
      title: "Total Evaluated Nodes",
      value: report?.total_segments ?? 0,
      icon: <LuLayers size={18} />,
      colorClass: "text-[var(--info)]",
      bgStyle: "rgba(59, 130, 246, 0.06)" // Match soft info background
    },
    {
      title: "Analyzed Runtime",
      value: `${report?.video_duration_seconds ?? 0}s`,
      icon: <LuClock size={18} />,
      colorClass: "text-[var(--success)]",
      bgStyle: "var(--primary-50)" // Using your premium primary-50 brand token
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((stat, i) => (
        <Card 
          key={i} 
          className="p-5 border border-[var(--border-light)] bg-[var(--bg-card)] rounded-2xl flex flex-col justify-between space-y-4 shadow-sm transition-all duration-200 hover:shadow-md"
        >
          {/* Header row containing descriptive label and matching indicator circle */}
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              {stat.title}
            </span>
            <div 
              className={`p-2 rounded-xl shrink-0 ${stat.colorClass}`}
              style={{ backgroundColor: stat.bgStyle }}
            >
              {stat.icon}
            </div>
          </div>
          
          {/* Numerical Measurement Layout Node */}
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {stat.value}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}