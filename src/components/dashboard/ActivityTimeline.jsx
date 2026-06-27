const activities = [
  { time: "09:00 AM", title: "Speech practice", status: "Completed" },
  { time: "11:30 AM", title: "Sensory play activity", status: "Completed" },
  { time: "02:00 PM", title: "Social interaction task", status: "In progress" },
  { time: "05:00 PM", title: "Calm routine", status: "Pending" },
];

function ActivityTimeline() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Activity Timeline</h2>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">Today&apos;s activities</p>

      <div className="mt-5 space-y-4">
        {activities.map((item) => (
          <div key={item.time} className="flex gap-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-[var(--primary-600)]"></div>

            <div className="flex-1 rounded-2xl bg-[var(--gray-50)] p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <span className="text-xs text-[var(--text-muted)]">{item.time}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTimeline;