import { useEffect, useState, useRef } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

import CommentSection from "./CommentSection";
import PostReport from "./PostReport";

import { LuHeart, LuMessageCircle, LuShare2 } from "react-icons/lu";

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const [comments, setComments] = useState(() => {
    return Array.isArray(post?.comments) ? post.comments : [];
  });
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      user: {
        name: "You",
        avatar: "https://i.pravatar.cc/100",
      },
    };
    console.log("ADDING COMMENT:", text);
    setComments((prev) => {
      if (!Array.isArray(prev)) return [newComment];
      return [...prev, newComment];
    });
  };

  const handleReport = () => {
    console.log("Report Post");
    setOpen(false);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4">

      <Card className="mt-4 p-4 space-y-4 bg-[var(--bg-card)] rounded-2xl shadow-sm border border-[var(--border-light)]">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar src={post.user.avatar} alt={post.user.name} />

            <div>
              <p className="font-semibold text-[var(--gray-800)] text-sm">
                {post.user.name}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {post.createdAt}
              </p>
            </div>
          </div>
          <PostReport/>
        </div>

        {/* CONTENT */}
        <div className="space-y-2">
          {post.title && (
            <h3 className="font-semibold text-[var(--text-primary)]">
              {post.title}
            </h3>
          )}

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {post.text || post.content}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 items-center justify-around pt-2 border-t border-[var(--border-light)]">

  

            {/* LIKE */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition ${liked
                  ? "text-[var(--danger)]"
                  : "text-[var(--text-secondary)]"
                }`}
            >
              <LuHeart size={18} />
              {likes}
            </button>

            {/* COMMENT */}
            <button
              onClick={toggleComments}
              className={`flex items-center gap-1 text-sm transition hover:text-emerald-600 ${showComments
                  ? "text-emerald-600"
                  : "text-[var(--text-secondary)]"
                }`}
            >
              <LuMessageCircle size={18} />
              {comments.length}
            </button>


        </div>

      </Card>

      {/* COMMENT SECTION */}
      {showComments && (
        <CommentSection
          comments={comments}
          onAddComment={handleAddComment}
        />
      )}


    </div>
  );
}

export default PostCard;


