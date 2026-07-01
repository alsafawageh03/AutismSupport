import { FaPaperPlane } from "react-icons/fa6";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import EmptyState from "../ui/EmptyState";

import CommentCard from "./CommentCard";

function CommentSection({
  postId,
  comments = [],
  inputValue,
  onInputChange,
  onReact,
  onSendComment,
  onDeleteComment,
  onReportComment,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    onSendComment(postId);
  };

  return (
    <Card
      padding="md"
      className="comment-section"
      style={{
        marginTop: "1rem",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1rem",
        }}
      >
        <Input
          value={inputValue}
          onChange={(e) => onInputChange(postId, e.target.value)}
          placeholder="Write a comment..."
          fullWidth
        />

        <Button
          type="submit"
          variant="primary"
          size="icon"
          disabled={!inputValue.trim()}
          aria-label="Send comment"
        >
          <FaPaperPlane />
        </Button>
      </form>

      {comments.length === 0 ? (
        <EmptyState
          title="No comments yet"
          description="Be the first to leave a comment."
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onReact={onReact}
              onDeleteComment={onDeleteComment}
              onReportComment={onReportComment}
            />
          ))}
        </div>
      )}
    </Card>
  );
}

export default CommentSection;