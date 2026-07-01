import { motion } from "framer-motion";
import ChatAvatar from "./ChatAvatar";

function Dot({ delay }) {
  return (
    <motion.span
      className="w-2 h-2 rounded-full bg-[var(--primary-500)]"
      animate={{
        y: [0, -4, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        delay,
      }}
    />
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 items-start">

      <ChatAvatar />

      <div
        className="
          px-4
          py-3
          rounded-2xl
          rounded-tl-none
          bg-[var(--primary-light-bg)]
          border
          border-[var(--border-light)]
        "
      >
        <div className="flex gap-1">
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </div>
      </div>

    </div>
  );
}

export default TypingIndicator;