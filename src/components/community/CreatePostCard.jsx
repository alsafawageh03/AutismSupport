import { useState } from "react";
import { LuSend } from "react-icons/lu";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import InfoBadge from "../ui/InfoBadge";

function CreatePostCard({onPost}) {
  const [text, setText] = useState("");
  const isDisabled = text.trim() === "";

  const handlePost = () => {
    if (isDisabled) return;

    onPost(text);
    setText("");
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4">

        <Card className="relative overflow-visible mb-4 p-4 space-y-4 bg-[var(--bg-card)] rounded-2xl shadow-sm border border-[var(--border-light)]">

        <div className="flex gap-3 ">
          
             <InfoBadge />
          
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your story or advice with the community..."
          />

          </div>
          
          <div className="mt-4 flex justify-end">
          <Button
            onClick={handlePost}
            disabled={isDisabled}
            className={`flex items-center gap-2 ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
          >
              <LuSend />
            <span>Post</span>
            
            
            </Button>
        </div>
        
        </Card>
      </div>
  )
}

export default CreatePostCard