function Select({
  options = [],
  className = "",
  placeholder = "Select an option",
  ...props
}) {
  return (
    <select
      className={`
        w-full
        px-4
        py-3
        bg-[var(--bg-card)]
        border border-[var(--border-light)]
        rounded-xl
        text-[var(--text-primary)]
        outline-none
        transition
        focus:ring-2
        focus:ring-[var(--primary-100)]
        focus:border-[var(--primary-500)]
        ${className}
      `}
      {...props}
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;