const insights = [
  {
    title: "Communication",
    status: "Good",
    note: "Omar responded well to visual instructions and short sentences today.",
  },
  {
    title: "Social Interaction",
    status: "Improving",
    note: "He participated in a short group activity with guided support.",
  },
  {
    title: "Sensory Response",
    status: "Calm",
    note: "No strong sensory discomfort was recorded during daily activities.",
  },
  {
    title: "Routine Adaptation",
    status: "Needs Support",
    note: "He needed extra preparation before changing from one task to another.",
  },
];

function DailyInsights() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-3xl bg-[var(--primary-700)] p-6 text-white">
          <p className="text-sm opacity-90">Daily Insights</p>
          <h1 className="mt-2 text-3xl font-bold">Today&apos;s Child Insights</h1>
          <p className="mt-2 text-sm opacity-90">
            AI-supported observations to help mothers understand daily progress.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border-light)] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  {item.title}
                </h2>
                <span className="rounded-full bg-[var(--primary-50)] px-3 py-1 text-xs font-semibold text-[var(--primary-700)]">
                  {item.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DailyInsights;