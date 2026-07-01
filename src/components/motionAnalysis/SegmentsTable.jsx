import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function SegmentsTable({ segments = [] }) {
  return (
    <Card className="border border-[var(--border-light)] bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Table Title Header Block */}
      <div className="p-5 border-b border-[var(--border-light)] bg-[var(--white)]">
        <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
          Chronological Metrics Stream
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
          Real-time segmentation breakdown compiled by the tracking models.
        </p>
      </div>

      {/* Overflow Scroll Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-page)] text-[var(--text-secondary)] font-semibold text-xs uppercase tracking-wider border-b border-[var(--border-light)] select-none">
              <th className="p-4 pl-6 text-center">Timestamp Interval</th>
              <th className="p-4 text-center">Confidence Score</th>
              <th className="p-4 pr-6 text-center">Classification State</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-light)] text-[var(--text-primary)]">
            {segments.map((seg, i) => (
              <tr 
                key={i} 
                className="hover:bg-[var(--bg-page)]/80 transition-colors duration-150 ease-in-out"
              >
                <td className="p-4 pl-6 font-mono font-medium text-[var(--text-primary)] text-center">
                  {seg.start_time.toFixed(2)}s – {seg.end_time.toFixed(2)}s
                </td>
                <td className="p-4 font-mono font-medium text-[var(--text-secondary)] text-center">
                  <span className="text-[var(--text-primary)]">
                    {(seg.smm_score * 100).toFixed(1)}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] ml-0.5">%</span>
                </td>
                <td className="p-4 pr-6 text-center">
                  <Badge variant={seg.is_smm ? "danger" : "success"} className="text-xs font-bold px-2.5 py-1 rounded-lg">
                    {seg.is_smm ? "SMM Detected" : "Typical"}
                  </Badge>
                </td>
              </tr>
            ))}
            
            {(!segments || segments.length === 0) && (
              <tr>
                <td colSpan={3} className="p-10 text-center text-[var(--text-secondary)] bg-[var(--bg-page)]/30">
                  <p className="text-sm font-medium">No execution block components found.</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">Data stream timeline remains empty.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}