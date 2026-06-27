const reminders = [
  {
    title: "Speech Therapy",
    time: "Tomorrow - 10:00 AM",
  },
  {
    title: "Medicine",
    time: "Today - 08:00 PM",
  },
  {
    title: "Doctor Appointment",
    time: "Friday - 01:00 PM",
  },
];

function ReminderWidget() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">
        Upcoming Reminders
      </h2>

      <div className="mt-5 space-y-3">
        {reminders.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl bg-[var(--primary-50)] p-4"
          >
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.time}
              </p>
            </div>

            <div className="h-3 w-3 rounded-full bg-[var(--primary-600)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReminderWidget;