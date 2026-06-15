function EmptyState({
  title = "No Data",
  description = "Nothing to display yet.",
  icon = "📭",
  action = null,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        py-12
        px-6
      "
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3
        className="
          text-lg
          font-semibold
          text-[var(--text-primary)]
          mb-2
        "
      >
        {title}
      </h3>

      <p
        className="
          text-sm
          text-[var(--text-secondary)]
          max-w-sm
          mb-4
        "
      >
        {description}
      </p>

      {action}
    </div>
  );
}

export default EmptyState;