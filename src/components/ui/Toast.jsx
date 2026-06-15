function Toast({ message, type = "success" }) {
  const variants = {
    success:
      "bg-[var(--success)] text-[var(--white)]",

    error:
      "bg-[var(--danger)] text-[var(--white)]",

    warning:
      "bg-[var(--warning)] text-[var(--white)]",

    info:
      "bg-[var(--info)] text-[var(--white)]",
  };

  return (
    <div
      className={`
        fixed
        bottom-4
        right-4
        px-5
        py-3
        rounded-xl
        shadow-lg
        z-50
        ${variants[type]}
      `}
    >
      {message}
    </div>
  );
}

export default Toast;