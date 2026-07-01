import { useState } from "react";
import {
  FaThumbsUp,
  FaEllipsisVertical,
  FaFlag,
  FaTrash,
} from "react-icons/fa6";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import DropdownMenu from "../ui/DropdownMenu";

function CommentCard({
  comment,
  onReact,
  onDeleteComment,
  onReportComment,
}) {
  const [showReportPrompt, setShowReportPrompt] = useState(false);

  const handleReport = () => {
    const reason = prompt("Why are you reporting this comment?");

    if (reason?.trim()) {
      onReportComment(comment.id, reason.trim());
    }

    setShowReportPrompt(false);
  };

  const handleDelete = () => {
    if (window.confirm("Delete this comment?")) {
      onDeleteComment(comment.id);
    }
  };

  return (
    <Card
      padding="md"
      className="comment-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <Avatar
            src={comment.authorPhoto}
            alt={comment.authorName}
            name={comment.authorName}
            size="sm"
          />

          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h5
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {comment.authorName || "Anonymous"}
              </h5>

              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                }}
              >
                {comment.createdAt}
              </span>
            </div>

            <p
              style={{
                margin: "0.5rem 0",
                color: "var(--text-primary)",
                lineHeight: 1.6,
              }}
            >
              {comment.content}
            </p>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onReact(comment.id, "comment")}
            >
              <FaThumbsUp />
              Like ({comment.reactionsCount ?? 0})
            </Button>
          </div>
        </div>

        <DropdownMenu
          trigger={
            <Button
              variant="ghost"
              size="icon"
            >
              <FaEllipsisVertical />
            </Button>
          }
          items={[
            {
              label: "Report",
              icon: <FaFlag />,
              danger: true,
              onClick: handleReport,
            },
            {
              label: "Delete",
              icon: <FaTrash />,
              onClick: handleDelete,
            },
          ]}
        />
      </div>
    </Card>
  );
}

export default CommentCard;