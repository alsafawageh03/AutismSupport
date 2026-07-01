import { useCallback } from "react";

import {
  FaThumbsUp,
  FaRegComment,
  FaComment,
  FaFlag,
  FaTrash,
  FaEllipsisVertical,
} from "react-icons/fa6";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import DropdownMenu from "../ui/DropdownMenu";

import CommentSection from "./CommentSection";

function PostCard({
  post,
  activePostComments,
  commentInputs,
  onReact,
  onToggleComments,
  onSendComment,
  onInputChange,
  onDeletePost,
  onReportPost,
  onDeleteComment,
  onReportComment,
}) {
  const postId = post?.id;

  const postComments = activePostComments?.[postId] || [];
  const isCommentsOpen = Boolean(activePostComments?.[postId]);
  const currentInputValue = commentInputs?.[postId] || "";

  const imageUrl = post?.photoUrl
    ? `https://autism.runasp.net${post.photoUrl}`
    : null;

  const handleImageError = useCallback((e) => {
    e.target.style.display = "none";
  }, []);

  const handleReport = useCallback(() => {
    const reason = prompt("Why are you reporting this post?");
    if (reason?.trim()) {
      onReportPost?.(postId, reason.trim());
    }
  }, [onReportPost, postId]);

  const handleDelete = useCallback(() => {
    if (window.confirm("Delete this post?")) {
      onDeletePost?.(postId);
    }
  }, [onDeletePost, postId]);

  const handleLike = useCallback(() => {
    onReact?.(postId, "post");
  }, [onReact, postId]);

const handleToggleComments = useCallback(() => {
  console.log(post.id, post.content);
  onToggleComments?.(postId);
}, [onToggleComments, postId]);

  return (
    <Card className="post-card" padding="lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            src={post?.authorPhoto}
            alt={post?.authorName}
            name={post?.authorName}
          />

          <div>
            <h4 style={{ margin: 0, color: "var(--text-primary)" }}>
              {post?.authorName}
            </h4>

            <small style={{ color: "var(--text-secondary)" }}>
              {post?.createdAt}
            </small>
          </div>
        </div>

        <DropdownMenu
          trigger={
            <Button variant="ghost" size="icon">
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
              danger: true,
              onClick: handleDelete,
            },
          ]}
        />
      </div>

      {/* Content */}
      <p
        style={{
          marginTop: "1rem",
          lineHeight: 1.7,
          color: "var(--text-primary)",
        }}
      >
        {post?.content}
      </p>

      {/* Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post"
          onError={handleImageError}
          className="post-image"
        />
      )}

      {/* Actions */}
      <div
        className="flex items-center gap-2"
        style={{
          marginTop: "1rem",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "1rem",
        }}
      >
        <Button variant="ghost" size="sm" onClick={handleLike}>
          <FaThumbsUp />
          Like ({post?.reactionsCount ?? 0})
        </Button>

        <Button variant="ghost" size="sm" onClick={handleToggleComments}>
          {isCommentsOpen ? <FaComment /> : <FaRegComment />}
          Comments ({post?.commentsCount ?? postComments.length})
        </Button>
      </div>

      {/* Comments */}
      {isCommentsOpen && (
        <CommentSection
  postId={postId}
  comments={postComments}
  inputValue={currentInputValue}
  onInputChange={onInputChange}
  onReact={onReact}
  onSendComment={onSendComment}
  onDeleteComment={onDeleteComment}
  onReportComment={onReportComment}
/>
      )}
    </Card>
  );
}

export default PostCard;