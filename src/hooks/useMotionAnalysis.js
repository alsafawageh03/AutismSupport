import { useState, useEffect, useRef } from "react";
import { motionAnalysisService } from "../services/motionAnalysisService";

export function useMotionAnalysis() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Idle"); // Idle, Uploading, Processing, Completed, Failed
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const pollingIntervalRef = useRef(null);

  // PRODUCTION TIMING CONFIGURATION
  const INITIAL_COOLDOWN_MS = 5000;  // 5 seconds initial wait
  const POLLING_INTERVAL_MS = 6000;   // 6 seconds gap between status checks

  const handleVideoSelect = (file) => {
    setSelectedVideo(file);
    setError("");
  };

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
    setError("");
    resetAnalysis();
  };

  const resetAnalysis = () => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    setLoading(false);
    setStatus("Idle");
    setAnalysisResult(null);
  };

  const startAnalysis = async () => {
    if (!selectedVideo) return;
    
    setLoading(true);
    setStatus("Uploading");
    setError("");

    // Use a mutable tracking flag to prevent race conditions or stale state references inside setInterval
    let isJobRunning = true;

    try {
      // API 1: Submit the heavy file payload
      console.log("Starting step 1: Uploading video...");
      const initUploadResponse = await motionAnalysisService.uploadVideo(selectedVideo);
      const targetId = initUploadResponse.analysisId;
      console.log("Upload complete! Received analysisId:", targetId);
      
      setStatus("Processing");

      // PRODUCTION DEFERRAL: Intentionally wait before hitting status API
      await new Promise((resolve) => setTimeout(resolve, INITIAL_COOLDOWN_MS));

      // Centralized polling function
      const checkStatus = async () => {
        if (!isJobRunning) return;

        try {
          console.log(`Polling status API for job ID: ${targetId}...`);
          const pollState = await motionAnalysisService.getAnalysisStatus(targetId);
          console.log("Server status response payload:", pollState);
          
          setAnalysisResult(pollState);
          
          // Normalize the string to lowercase to prevent matching errors (e.g., "completed" vs "Completed")
          const serverStatus = pollState?.status?.toLowerCase() || "";

          if (serverStatus === "completed") {
            console.log("Job status matched: Completed! Stopping background tracking loop.");
            isJobRunning = false;
            setStatus("Completed");
            setLoading(false);
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
          } else if (serverStatus === "failed") {
            console.warn("Job status matched: Failed! Stopping background tracking loop.");
            isJobRunning = false;
            setStatus("Failed");
            setLoading(false);
            setError("AI pipeline failed to process clinical motion tracking points.");
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
          } else {
            console.log(`Job is still running. Status is: ${pollState.status || 'Processing'}`);
          }
        } catch (pollErr) {
          console.error("Polling endpoint error:", pollErr);
          isJobRunning = false;
          if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
          }
          setStatus("Failed");
          setLoading(false);
          setError("Connection timeout encountered while updating computational pipeline status.");
        }
      };

      // Run the very first status check safely after the initial cooldown period
      await checkStatus();

      // If the process wasn't completed in the first check, establish the interval loop
      if (isJobRunning) {
        pollingIntervalRef.current = setInterval(checkStatus, POLLING_INTERVAL_MS);
      }

    } catch (err) {
      console.error("Upload handler caught error:", err);
      isJobRunning = false;
      setLoading(false);
      setStatus("Failed");
      setError(
        err.response?.data?.message || 
        `Server responded with status code ${err.response?.status || 'unknown'}`
      );
    }
  };

  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
    };
  }, []);

  return {
    selectedVideo,
    loading,
    error,
    status,
    analysisResult,
    handleVideoSelect,
    handleRemoveVideo,
    startAnalysis,
    resetAnalysis,
    setError,
  };
}
export default useMotionAnalysis;