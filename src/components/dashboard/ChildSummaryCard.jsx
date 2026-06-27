

function ChildSummaryCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Child Profile</h2>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">Omar Mohamed • 6 years old</p>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-[var(--primary-50)] p-3">
          <p className="text-lg font-bold text-[var(--primary-700)]">82%</p>
          <p className="text-xs text-[var(--text-secondary)]">Progress</p>
        </div>

        <div className="rounded-2xl bg-[var(--gray-50)] p-3">
          <p className="text-lg font-bold text-[var(--info)]">12</p>
          <p className="text-xs text-[var(--text-secondary)]">Activities</p>
        </div>

        <div className="rounded-2xl bg-[var(--gray-50)] p-3">
          <p className="text-lg font-bold text-[var(--warning)]">3</p>
          <p className="text-xs text-[var(--text-secondary)]">Reminders</p>
        </div>
      </div>
    </div>
  );
}

export default ChildSummaryCard;