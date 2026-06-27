const progressData = [
  { day: "Sat", value: 45 },
  { day: "Sun", value: 60 },
  { day: "Mon", value: 55 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 68 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 76 },
];

function ProgressChart() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Weekly Progress</h2>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        Child development score this week
      </p>

      <div className="mt-6 flex h-40 items-end gap-4">
        {progressData.map((item) => (
          <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-xl bg-[#047857]"
             style={{ height: item.value * 1.6 + "px" }}
            ></div>
            <span className="text-xs text-[var(--text-muted)]">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressChart;