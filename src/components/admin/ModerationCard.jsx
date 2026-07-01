import { FiCheck, FiX } from "react-icons/fi";

import Card from "../ui/Card";
import Button from "../ui/Button";

import { ModerationStatus } from "../../constants/enums";

export default function ModerationCard({
  type,
  item,
  onDecision,
  loading = false,
}) {
  const isPost = type === "post";

  return (
    <Card className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            {item.authorName}
          </h4>

          <p className="text-xs text-text-secondary">
            {isPost ? "Post Author" : "Comment Author"}
          </p>
        </div>

        {item.createdAt && (
          <span className="text-xs text-text-secondary">
            {item.createdAt}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="rounded-lg bg-surface-secondary p-4">
        <p className="whitespace-pre-wrap text-sm leading-6 text-text-primary">
          {item.content}
        </p>
      </div>

      {/* Attachment */}
      {isPost && item.photoUrl && (
        <img
          src={`https://autism.runasp.net${item.photoUrl}`}
          alt="Post attachment"
          className="w-full max-h-80 rounded-xl border border-border object-cover"
        />
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="success"
          disabled={loading}
          onClick={() =>
            onDecision(type, item.id, ModerationStatus.Approved)
          }
          className="flex items-center gap-2"
        >
          <FiCheck size={18} />
          Approve
        </Button>

        <Button
          variant="danger"
          disabled={loading}
          onClick={() =>
            onDecision(type, item.id, ModerationStatus.Rejected)
          }
          className="flex items-center gap-2"
        >
          <FiX size={18} />
          Reject
        </Button>
      </div>
    </Card>
  );
}