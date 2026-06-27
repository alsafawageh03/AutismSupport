const progressItems = [
  { skill: "Communication", score: 82, note: "Responds well to visual instructions." },
  { skill: "Social Interaction", score: 68, note: "Needs support in group activities." },
  { skill: "Sensory Regulation", score: 76, note: "Calmer during daily routines." },
  { skill: "Daily Routine", score: 71, note: "Improving with visual schedules." },
];

function ProgressTracking() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-3xl bg-[var(--primary-700)] p-6 text-white">
          <p className="text-sm opacity-90">Progress Tracking</p>
          <h1 className="mt-2 text-3xl font-bold">Child Development Progress</h1>
          <p className="mt-2 text-sm opacity-90">
            Track weekly development levels across key support areas.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {progressItems.map((item) => (
            <div
              key={item.skill}
              className="rounded-3xl border border-[var(--border-light)] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  {item.skill}
                </h2>
                <span className="font-bold text-[var(--primary-700)]">
                  {item.score}%
                </span>
              </div>

              <div className="mt-4 h-3 rounded-full bg-[var(--gray-100)]">
                <div
                  className="h-3 rounded-full bg-[var(--primary-600)]"
                  style={{ width: item.score + "%" }}
                ></div>
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

export default ProgressTracking;