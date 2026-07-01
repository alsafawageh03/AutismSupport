import { LuSend } from "react-icons/lu";

import Button from "../ui/Button";
import Input from "../ui/Input";

function ChatInput({
  value,
  onChange,
  onSend,
  loading = false,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim() || loading) return;

    onSend();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        border-t
        border-[var(--border-light)]
        bg-[var(--bg-card)]
        p-4
      "
    >
      <div className="flex gap-3">

        <Input
          value={value}
          placeholder="Ask anything about autism..."
          onChange={(e) => onChange(e.target.value)}
          disabled={loading}
          className="flex-1"
        />

        <Button
          type="submit"
          disabled={!value.trim() || loading}
          loading={loading}
          className="px-4"
        >
          <LuSend size={18} />
        </Button>

      </div>
    </form>
  );
}

export default ChatInput;