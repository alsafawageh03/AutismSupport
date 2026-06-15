function Alert({ children, variant = "info" }) {
  const variants = {
    info:
      "bg-[var(--info-bg)] border-[var(--info-border)] text-[var(--info-text)]",

    success:
      "bg-[var(--success-bg)] border-[var(--success-border)] text-[var(--success-text)]",

    warning:
      "bg-[var(--warning-bg)] border-[var(--warning-border)] text-[var(--warning-text)]",

    danger:
      "bg-[var(--danger-bg)] border-[var(--danger-border)] text-[var(--danger-text)]",
  };

  return (
    <div
      className={`
        p-4
        rounded-xl
        border
        ${variants[variant]}
      `}
    >
      {children}
    </div>
  );
}

export default Alert;