import { useEffect, useState } from "react";
import { LuTrash2, LuPlay, LuCircleCheck } from "react-icons/lu";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function VideoPreviewCard({
  video,
  onRemove,
  onAnalyze,
  disabled = false,
}) {
  // Fix 1: Initialize with null instead of ""
  const [videoUrl, setVideoUrl] = useState(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!video) {
      setVideoUrl(null);
      return;
    }
    
    const url = URL.createObjectURL(video);
    setVideoUrl(url);

    const helperVid = document.createElement("video");
    helperVid.preload = "metadata";
    helperVid.src = url;
    helperVid.onloadedmetadata = () => setDuration(helperVid.duration);

    // Fix 2: Return the cleanup function properly
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [video]);

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = Math.floor(totalSecs % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Guard clause: Don't render anything if there's no video data yet
  if (!video) return null;

  return (
    <Card className="p-5 border border-[var(--border)] bg-[var(--surface)] rounded-2xl">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
          <LuCircleCheck size={16} className="text-green-600 dark:text-green-400" />
        </div>
        <span className="font-medium text-green-600 dark:text-green-400 text-sm">
          Media loaded successfully
        </span>
      </div>

      {/* Fix 3: Only render video element if videoUrl is ready */}
      {videoUrl && (
        <video
          controls
          src={videoUrl}
          className="w-full rounded-xl bg-black max-h-[360px] object-contain shadow-inner"
        />
      )}

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <span className="block text-xs text-[var(--text-secondary)]">Name</span>
          <span className="font-medium text-sm text-[var(--text-primary)] break-all">{video?.name}</span>
        </div>
        <div>
          <span className="block text-xs text-[var(--text-secondary)]">Size</span>
          <span className="font-medium text-sm text-[var(--text-primary)]">
            {(video?.size / (1024 * 1024)).toFixed(2)} MB
          </span>
        </div>
        <div>
          <span className="block text-xs text-[var(--text-secondary)]">Runtime</span>
          <span className="font-medium text-sm text-[var(--text-primary)]">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 justify-end">
        <Button variant="danger" outline disabled={disabled} onClick={onRemove}>
          <LuTrash2 className="mr-1" /> Clear
        </Button>
        <Button variant="primary" disabled={disabled} onClick={onAnalyze}>
          <LuPlay className="mr-1" /> Run Diagnostics
        </Button>
      </div>
    </Card>
  );
}