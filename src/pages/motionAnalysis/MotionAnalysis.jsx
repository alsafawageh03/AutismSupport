import { useMotionAnalysis } from "../../hooks/useMotionAnalysis";
import UploadCard from "../../components/motionAnalysis/UploadCard";
import VideoPreviewCard from "../../components/motionAnalysis/VideoPreviewCard";
import AnalysisProgress from "../../components/motionAnalysis/AnalysisProgress";
import PredictionCard from "../../components/motionAnalysis/PredictionCard";
import StatisticsGrid from "../../components/motionAnalysis/StatisticsGrid";
import Timeline from "../../components/motionAnalysis/Timeline";
import SegmentsTable from "../../components/motionAnalysis/SegmentsTable";
import DownloadReportMenu from "../../components/motionAnalysis/DownloadReportMenu";

// Shared Project UI Components
import Card from "../../components/ui/Card";
import Alert from "../../components/ui/Alert";
import Title from "../../components/ui/Title"; 
import { LuInfo, LuTriangleAlert } from "react-icons/lu";

export default function MotionAnalysis() {
  const {
    selectedVideo,
    loading,
    error,
    status,
    analysisResult,
    handleVideoSelect,
    handleRemoveVideo,
    startAnalysis,
  } = useMotionAnalysis();

  return (
    <div className="min-h-screen bg-[var(--bg-page)] py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      
      {/* 1. Integrated Shared Title Component Header */}
      <div className="max-w-7xl mx-auto space-y-4">
        <Title 
          title="AI Motion Analysis Engine"
          subtitle="Upload short clinical home movement clips to trace stereotypic motor responses safely. Our neural diagnostic layer charts frame anomalies to support comprehensive therapeutic tracking."
        />

        {/* --- Enhanced Medical Disclaimer --- */}
        <div className="flex items-start gap-3.5 p-4.5 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 rounded-xl shadow-xs transition-colors  px-4 py-4">
          {/* Diagnostic Safety Warning Icon */}
          <div className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
            <LuTriangleAlert size={20} strokeWidth={2.2} />
          </div>
          
          <div className="space-y-1">
            <h5 className="font-bold text-sm tracking-wide text-amber-800 dark:text-amber-300 uppercase">
              Important Medical Notice
            </h5>
            <p className="text-[14px] leading-relaxed font-medium text-amber-700 dark:text-amber-400">
              This assessment is preliminary and <span className="font-bold underline decoration-amber-400/50">is not a medical diagnosis</span>. 
              Please consult a medical specialist or qualified clinician for a complete, accurate, and official evaluation.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Workspace Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-6">
        
        {/* Left Side: Dynamic Pipeline Components */}
        <div className="lg:col-span-2 space-y-6">
          {error && (
            <Alert variant="error" title="Pipeline Exception Encountered">
              {error}
            </Alert>
          )}

          {/* 2. Upload Card component frame */}
          {!selectedVideo && (
            <UploadCard 
              selectedVideo={selectedVideo} 
              onVideoSelect={handleVideoSelect} 
              disabled={loading} 
            />
          )}

          {/* 4. Video Preview execution view wrapper */}
          {selectedVideo && status !== "Uploading" && status !== "Processing" && (
            <VideoPreviewCard
              video={selectedVideo}
              onRemove={handleRemoveVideo}
              onAnalyze={startAnalysis}
              disabled={loading}
            />
          )}

          {/* 5. Analysis Progress Tracking layout wrapper */}
          {loading && (status === "Uploading" || status === "Processing") && (
            <AnalysisProgress status={status} />
          )}
        </div>

        {/* Right Side: Static Information Columns */}
        <div className="space-y-6">
          {/* 3. Recording Tips Card matching the system design token rules */}
          <Card className="p-6 border border-[var(--border-light)] bg-[var(--bg-card)] shadow-sm rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[var(--primary-50)] text-[var(--primary-600)] rounded-xl shrink-0">
                <LuInfo size={22} />
              </div>
              <div className="space-y-4 w-full">
                <h4 className="font-bold text-base text-[var(--text-primary)] border-b border-[var(--border-light)] pb-2">
                  Recording Guidelines
                </h4>
                <ul className="text-sm text-[var(--text-secondary)] space-y-3 pl-1 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-500)] font-bold mt-0.5">•</span>
                    <span>Capture scenes inside clear, well-lit spatial rooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-500)] font-bold mt-0.5">•</span>
                    <span>Ensure the target child's entire body remains completely within the frame.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-500)] font-bold mt-0.5">•</span>
                    <span>Mount cameras on static surfaces to eliminate tracking motion noise.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-500)] font-bold mt-0.5">•</span>
                    <span>Maintain brief runtime metrics spanning 10–20 seconds max.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary-500)] font-bold mt-0.5">•</span>
                    <span>Isolate diagnostic sessions to one subject per video file.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 6. Comprehensive Results Dashboard Output Section */}
      {status === "Completed" && analysisResult && (
        <div className="max-w-7xl mx-auto border-t border-[var(--border-light)] pt-10 mt-10 space-y-8 animate-fadeIn">
          
          {/* Output Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-light)] shadow-sm">
            <h2 className="text-xl font-extrabold text-[var(--text-primary)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[var(--success)] rounded-full animate-pulse" />
              Report Diagnostics Output
            </h2>
            <DownloadReportMenu data={analysisResult} />
          </div>

          {/* Model Evaluation Result */}
          <PredictionCard prediction={analysisResult.prediction} />
          
          {/* Key Metrics Layout Cards Grid */}
          <StatisticsGrid report={analysisResult.report} />

          {/* Visual Timelines and Metric Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-1 h-full">
              <Timeline 
                segments={analysisResult.segments} 
                duration={analysisResult.report?.video_duration_seconds || 1} 
              />
            </div>
            <div className="lg:col-span-2 h-full">
              <SegmentsTable segments={analysisResult.segments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}