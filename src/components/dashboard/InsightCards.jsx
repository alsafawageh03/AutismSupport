const insights = [
  {
    title: "Communication",
    value: "Good",
    description: "Omar responded well to visual instructions today.",
  },
  {
    title: "Social Skills",
    value: "Improving",
    description: "He joined a short group activity with support.",
  },
  {
    title: "Sensory Response",
    value: "Calm",
    description: "No strong sensory discomfort was recorded today.",
  },
];

function InsightCards() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Daily Insights</h2>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        AI-supported daily observations
      </p>

      <div className="mt-5 grid gap-4">
        {insights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[var(--primary-50)] p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--primary-700)]">
                {item.value}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightCards;