export const reportGenerator = {
  downloadJSON: (data, filename = "motion-analysis-report.json") => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  downloadCSV: (data, filename = "motion-analysis-segments.csv") => {
    if (!data?.segments?.length) return;
    const headers = ["Start Time (s)", "End Time (s)", "Is SMM", "SMM Score"];
    const rows = data.segments.map((s) => [
      s.start_time,
      s.end_time,
      s.is_smm ? "Yes" : "No",
      s.smm_score.toFixed(4),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", encodedUri);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  downloadPDFMock: (data, filename = "motion-analysis-summary.txt") => {
    // Elegant plain-text summary fallback representing clinical layout notes
    const content = `
========================================
AI MOTION ANALYSIS MEDICAL REPORT SUMMARY
========================================
Status: ${data.status}
Result Assessment: ${data.prediction || "N/A"}

STATISTICAL METRICS:
- Stereotypic Motor Movements (SMM) Rate: ${data.report?.smm_percentage}%
- SMM Flagged Segments: ${data.report?.smm_segments_count}
- Total Evaluated Timelines: ${data.report?.total_segments}
- Video Frame Duration: ${data.report?.video_duration_seconds}s

SEGMENTS LOG:
${data.segments?.map((s, idx) => `[Segment #${idx + 1}] Start: ${s.start_time}s | End: ${s.end_time}s | Score: ${(s.smm_score * 100).toFixed(1)}%`).join("\n")}
========================================
Generated via AutismSupport Diagnostics Platform
    `;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
};