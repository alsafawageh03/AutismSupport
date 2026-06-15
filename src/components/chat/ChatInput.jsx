import { LuSend } from "react-icons/lu";
import Input from "../ui/Input";

function ChatInput({
  value,
  onChange,
  onSend,
}) {
  return (
    <form
      onSubmit={onSend}
      className="p-4 border-t bg-[var(--bg-card)] border-[var(--border-light)]"
    >
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Type your message..."
          className="h-12"
        />

        <button
          type="submit"
          disabled={!value.trim()}
          className="
            w-12
            h-12
            rounded-lg
            bg-[var(--primary-500)]
            text-[var(--white)]
            flex
            items-center
            justify-center
            hover:bg-[var(--primary-600)]
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          <LuSend size={18} />
        </button>
      </div>
    </form>
  );
}

export default ChatInput;