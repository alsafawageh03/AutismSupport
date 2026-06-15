import { LuSparkles } from "react-icons/lu";

function ChatHeader() {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-2 bg-[var(--primary-100)] text-[var(--primary-600)] rounded-full px-4 py-2 mb-4">
        <LuSparkles size={16} />
        <span className="text-sm font-medium">
          Specialized smart assistant
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-1 text-[var(--text-primary)]">
        Smart Support
      </h1>

      <p className="text-[var(--text-secondary)] text-sm">
        Ask any questions about your child's care
      </p>
    </div>
  );
}

export default ChatHeader;