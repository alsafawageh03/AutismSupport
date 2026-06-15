function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;