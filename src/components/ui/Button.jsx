function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}) {
  const base =
    "flex items-center gap-2 px-5 py-2 rounded-xl transition font-medium";

  const variants = {
    primary:
      "bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-[var(--white)]",

    outline:
      "bg-transparent border-2 border-[var(--primary-500)] text-[var(--primary-600)] hover:bg-[var(--primary-500)] hover:text-[var(--white)]",

    ghost:
      "bg-transparent text-[var(--primary-600)] hover:bg-[var(--primary-500)] hover:text-[var(--white)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;