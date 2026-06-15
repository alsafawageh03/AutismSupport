function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`
        w-full
        px-4
        py-2.5
        rounded-xl
        bg-[var(--gray-50)]
        border border-[var(--border-light)]
        text-sm
        placeholder-[var(--text-muted)]
        outline-none
        transition
        focus:bg-[var(--white)]
        focus:ring-2
        focus:ring-[var(--primary-100)]
        text-[var(--text-primary)]
        focus:border-[var(--primary-500)]
        focus:outline-none
        ${className}
      `}
    />
  );
}

export default Input;