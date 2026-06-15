import { useState } from "react";
import Card from "../ui/Card";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import InfoBadge from "../ui/InfoBadge";

import { LuSend, LuMessageCircle } from "react-icons/lu";

function CommentSection({ comments = [], onAddComment }) {
  const [text, setText] = useState("");

  const safeComments = Array.isArray(comments) ? comments : [];

  const handleSend = () => {
    if (!text.trim()) return;

    onAddComment?.(text);
    setText("");
  };

  return (
    <Card className="mt-4 p-4 space-y-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-700 font-semibold">
          <LuMessageCircle />
          Comments
        </div>

        <InfoBadge>
          {comments.length}
        </InfoBadge>
      </div>

      {/* INPUT */}
      <div className="flex gap-3 items-start">
        <Avatar
          src="https://i.pravatar.cc/100"
          size="sm"
        />

        <div className="flex-1 space-y-2">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            className="min-h-[80px]"
          />

          <div className="flex justify-end">
            <Button
              onClick={handleSend}
              className={`flex items-center gap-2 ${
                !text.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!text.trim()}
            >
              <LuSend />
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* COMMENTS LIST */}
      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-3">
            No comments yet. Be the first to comment 
          </p>
        ) : (
            
          safeComments.map((c, idx) => (
            <div
              key={idx}
              className="flex gap-3 p-3 rounded-xl bg-gray-50 border"
            >
              <Avatar
                src={c.user?.avatar}
                size="sm"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm text-gray-800">
                    {c.user?.name || "User"}
                  </p>

                  {c.user?.role && (
                    <InfoBadge>
                      {c.user.role}
                    </InfoBadge>
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  {c.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}

export default CommentSection;

