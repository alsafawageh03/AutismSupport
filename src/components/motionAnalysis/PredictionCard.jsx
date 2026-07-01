import React from "react";
import { LuTriangleAlert, LuCircleCheck, LuActivity } from "react-icons/lu";
import Card from "../ui/Card";

export default function PredictionCard({ prediction }) {
  if (!prediction) return null;

  // Normalize string for safe checking
  const lowerPrediction = prediction.toLowerCase();

  // Determine configuration based on severity
  let config = {
    colorVar: "var(--danger)",
    bgVar: "rgba(239, 68, 68, 0.06)", // Soft danger alpha overlay
    icon: <LuTriangleAlert size={28} />,
    badgeText: "High Severity Response"
  };

  if (lowerPrediction.includes("low") || lowerPrediction.includes("normal") || lowerPrediction.includes("no stereotypic")) {
    config = {
      colorVar: "var(--success)",
      bgVar: "var(--primary-50)", // Using your --primary-50 token
      icon: <LuCircleCheck size={28} />,
      badgeText: "Typical Kinematics Baseline"
    };
  } else if (lowerPrediction.includes("moderate") || lowerPrediction.includes("medium")) {
    config = {
      colorVar: "var(--warning)",
      bgVar: "rgba(245, 158, 11, 0.06)", // Soft warning alpha overlay
      icon: <LuActivity size={28} />,
      badgeText: "Moderate Observation Threshold"
    };
  }

  return (
    <Card 
      className="p-6 border transition-all duration-300 rounded-2xl relative overflow-hidden shadow-sm"
      style={{ 
        borderColor: `calc(${config.colorVar}0.25)`, // Soft matching border shade
        backgroundColor: "var(--bg-card)"
      }}
    >
      {/* Decorative colored left edge indicator pill */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ backgroundColor: config.colorVar }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pl-2">
        <div className="flex items-center gap-4">
          {/* Accent icon block frame */}
          <div 
            className="p-3.5 rounded-xl shrink-0 transition-colors duration-300"
            style={{ 
              backgroundColor: config.bgVar,
              color: config.colorVar 
            }}
          >
            {config.icon}
          </div>
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] block">
              Computational AI Assessment
            </span>
            <h3 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
              {prediction}
            </h3>
          </div>
        </div>

        {/* Floating Semantic Status Indicator Badge */}
        <div 
          className="w-fit text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap select-none self-start sm:self-center"
          style={{ 
            backgroundColor: config.bgVar,
            color: config.colorVar,
            border: `1px solid calc(${config.colorVar}0.15)`
          }}
        >
          {config.badgeText}
        </div>
      </div>
    </Card>
  );
}