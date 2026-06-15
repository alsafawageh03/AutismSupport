import { LuBot, LuUser } from "react-icons/lu";

function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot ? (
        <>
          <div className="w-8 h-8 rounded-full bg-[var(--primary-500)] flex items-center justify-center flex-shrink-0">
            <LuBot className="text-[var(--white)]" size={16} />
          </div>

          <div
            className="
              max-w-[90%] sm:max-w-[85%] md:max-w-[80%]
              px-4 py-3
              rounded-2xl
              text-sm
              whitespace-pre-line
              leading-relaxed
              bg-[var(--primary-light-bg)]
              text-[var(--text-primary)]
              rounded-tl-none
            "
          >
            {message.text}
          </div>
        </>
      ) : (
        <>
          <div
            className="
              max-w-[90%] sm:max-w-[85%] md:max-w-[80%]
              px-4 py-3
              rounded-2xl
              text-sm
              whitespace-pre-line
              leading-relaxed
              bg-[var(--primary-dark-bg)]
              text-[var(--white)]
              rounded-tr-none
            "
          >
            {message.text}
          </div>

          <div className="w-8 h-8 rounded-full bg-[var(--gray-500)] flex items-center justify-center flex-shrink-0">
            <LuUser className="text-[var(--white)]" size={16} />
          </div>
        </>
      )}
    </div>
  );
}

export default ChatMessage;