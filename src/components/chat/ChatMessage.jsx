import { LuUser } from "react-icons/lu";
import ReactMarkdown from "react-markdown";

import ChatAvatar from "./ChatAvatar";

function ChatMessage({ message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex w-full ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${
          isAssistant ? "" : "flex-row-reverse"
        }`}
      >
        {isAssistant ? (
          <ChatAvatar />
        ) : (
          <div
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-[var(--gray-500)]
              text-white
              flex-shrink-0
            "
          >
            <LuUser size={18} />
          </div>
        )}

        <div
          className={`
            px-4
            py-3
            rounded-2xl
            text-sm
            leading-7
            shadow-sm
            break-words
            overflow-hidden

            ${
              isAssistant
                ? `
                    rounded-tl-none
                    bg-[var(--primary-light-bg)]
                    text-[var(--text-primary)]
                    border
                    border-[var(--border-light)]
                  `
                : `
                    rounded-tr-none
                    bg-[var(--primary-600)]
                    text-white
                  `
            }
          `}
        >
          {isAssistant ? (
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0 whitespace-pre-wrap">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <ul className="list-disc pl-5 my-2 space-y-1">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 my-2 space-y-1">
                    {children}
                  </ol>
                ),

                li: ({ children }) => (
                  <li>{children}</li>
                ),

                strong: ({ children }) => (
                  <strong className="font-semibold">
                    {children}
                  </strong>
                ),

                code: ({ children }) => (
                  <code className="px-1 rounded bg-[var(--gray-100)] text-[var(--primary-700)]">
                    {children}
                  </code>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            <p className="whitespace-pre-wrap">
              {message.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;