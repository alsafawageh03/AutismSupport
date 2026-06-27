function WelcomeBanner() {
  return (
    <section className="rounded-3xl bg-[var(--primary-700)] p-6 text-white shadow-sm">
      <p className="text-sm opacity-90">Welcome back 👋</p>

      <h1 className="mt-2 text-2xl font-bold">
        Mother Dashboard
      </h1>

      <p className="mt-2 max-w-2xl text-sm opacity-90">
        Track your child progress, daily insights, reminders, and activities in one calm place.
      </p>
    </section>
  );
}

export default WelcomeBanner;