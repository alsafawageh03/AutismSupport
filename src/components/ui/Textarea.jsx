function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        min-h-[90px]
        resize-none
        rounded-xl
        border border-[var(--border-light)]
        p-4
        text-[var(--text-primary)]
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--primary-500)]
      "
    />
  );
}

export default Textarea;