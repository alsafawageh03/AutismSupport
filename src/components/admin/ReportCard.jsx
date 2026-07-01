import { FiAlertTriangle } from "react-icons/fi";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ReportCard({ report }) {
  return (
    <Card className="space-y-4 border border-red-200 bg-red-50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiAlertTriangle className="text-red-600" size={18} />

          <h4 className="text-sm font-semibold text-red-700">
            Report
          </h4>
        </div>

        {report.createdAt && (
          <span className="text-xs text-red-500">
            {report.createdAt}
          </span>
        )}
      </div>

      {/* Reason */}
      <div>
        <Badge variant="danger" size="sm">
          Reason
        </Badge>

        <p className="mt-2 text-sm text-red-900">
          {report.reason || "No reason provided"}
        </p>
      </div>

      {/* Target Info */}
      <div className="rounded-lg bg-white/60 p-3">
        <p className="text-xs text-red-700">
          <span className="font-medium">Target ID:</span>{" "}
          {report.targetId}
        </p>

        {report.targetType !== undefined && (
          <p className="text-xs text-red-700">
            <span className="font-medium">Target Type:</span>{" "}
            {report.targetType === 0 ? "Post" : "Comment"}
          </p>
        )}
      </div>
    </Card>
  );
}