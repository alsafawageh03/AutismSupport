const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: "🏠" },
  { label: "Child Profile", path: "/child", icon: "👦" },
  { label: "Daily Insights", path: "/daily-insights", icon: "💡" },
  { label: "Progress Tracking", path: "/progress-tracking", icon: "📈" },
];

function SidebarNavigation() {
  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm border border-[var(--border-light)]">
      <h2 className="text-xl font-bold text-[var(--primary-700)]">
        AutismCare
      </h2>

      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        Mother Core App
      </p>

      <nav className="mt-6 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)]"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SidebarNavigation;