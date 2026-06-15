function Skeleton({ className = "" }) {
  return (
    <div
      className={`
        animate-pulse
        bg-[var(--gray-200)]
        rounded-xl
        ${className}
      `}
    />
  );
}

export default Skeleton;