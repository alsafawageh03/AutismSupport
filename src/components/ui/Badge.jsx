import clsx from "clsx";

const variants = {
  primary:
    "bg-[var(--primary-50)] text-[var(--primary)] border border-[var(--primary-100)]",

  secondary:
    "bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]",

  success:
    "bg-[var(--success-light)] text-[var(--success)] border border-[var(--success-border)]",

  warning:
    "bg-[var(--warning-light)] text-[var(--warning)] border border-[var(--warning-border)]",

  danger:
    "bg-[var(--danger-light)] text-[var(--danger)] border border-[var(--danger-border)]",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

function Badge({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="text-[0.9em]">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export default Badge;