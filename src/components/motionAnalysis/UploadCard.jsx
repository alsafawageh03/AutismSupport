import { useEffect, useRef, useState } from "react";
import { LuCloudUpload } from "react-icons/lu";
import Card from "../ui/Card";
import Alert from "../ui/Alert";

const MAX_SIZE = 100 * 1024 * 1024; // 100 MB

export default function UploadCard({
  selectedVideo,
  onVideoSelect,
  disabled = false,
}) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [localError, setLocalError] = useState("");

  const validateFile = (file) => {
    setLocalError("");
    if (!file) return;

    // Standard structural container checking
    if (!file.type.startsWith("video/")) {
      setLocalError("Invalid file type. Please upload a valid standard video container.");
      return;
    }

    if (file.size > MAX_SIZE) {
      setLocalError("Video clip parameters exceed maximum allowed limit of 100 MB.");
      return;
    }

    onVideoSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;
    if (e.dataTransfer.files?.[0]) validateFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="space-y-4 w-full">
      {localError && (
        <Alert variant="error" title="Validation Alert">
          {localError}
        </Alert>
      )}

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="video/*"
        disabled={disabled}
        onChange={(e) => {
          if (e.target.files?.[0]) validateFile(e.target.files[0]);
        }}
      />

      {!selectedVideo && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && inputRef.current?.click()}
          className={`
            flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 select-none
            ${disabled 
              ? "cursor-not-allowed opacity-40 bg-[var(--bg-page)] border-[var(--border-light)]" 
              : "cursor-pointer bg-[var(--bg-card)]"
            }
            ${dragging
              ? "border-[var(--primary-500)] bg-[var(--primary-50)] ring-4 ring-[var(--primary-100)] scale-[1.01]"
              : "border-[var(--border-default)] hover:border-[var(--primary-400)] hover:bg-[var(--bg-page)]"
            }
          `}
        >
          {/* Animated upload container circle */}
          <div className={`
            mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300
            ${dragging 
              ? "bg-[var(--primary-200)] text-[var(--primary-700)] animate-bounce" 
              : "bg-[var(--primary-50)] text-[var(--primary-600)]"
            }
          `}>
            <LuCloudUpload size={30} />
          </div>

          <div className="space-y-1 max-w-sm">
            <p className="text-base font-bold text-[var(--text-primary)] tracking-tight">
              Click to upload files or drop media here
            </p>
            <p className="text-xs font-medium text-[var(--text-secondary)] leading-relaxed">
              Supports high-definition MP4, MOV, or AVI containers up to 100 MB total tracking file size.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}