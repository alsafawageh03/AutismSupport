function Spinner({ size = "md" }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        border-4
        border-[var(--border-light)]
        border-t-[var(--primary-500)]
        rounded-full
        animate-spin
      `}
    />
  );
}

export default Spinner;