import { LuSparkles } from "react-icons/lu";
import ChatAvatar from "./ChatAvatar";
import Title from "../ui/Title";

function ChatHeader({
  title = "Smart Support",
  subtitle = "Ask any questions about your child's care",
}) {
  return (
    <div className="text-center mb-6">

      <div className="flex justify-center mb-4">
        <ChatAvatar size={82} />
      </div>

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          px-4
          py-2
          mb-4
          bg-[var(--primary-100)]
          text-[var(--primary-700)]
        "
      >
        <LuSparkles size={16} />

        <span className="text-sm font-medium">
          Specialized AI Assistant
        </span>
      </div>
<div className="max-w-7xl mx-auto">
        <Title 
          title="Smart Support"
          subtitle="Ask any questions about your child's care."
        />
      </div>

    </div>
  );
}

export default ChatHeader;