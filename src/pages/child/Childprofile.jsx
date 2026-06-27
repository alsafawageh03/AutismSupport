import useChildProfile from "../../hooks/useChildProfile";

function ChildProfile() {
  const { profile: childProfile, loading, error } = useChildProfile();

  return (
    <main className="min-h-screen bg-[var(--bg-page)] p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-3xl bg-[var(--primary-700)] p-6 text-white">
          <p className="text-sm opacity-90">Child Profile</p>

          <h1 className="mt-2 text-3xl font-bold">
            {loading ? "Loading..." : childProfile.name}
          </h1>

          <p className="mt-2 text-sm opacity-90">
            {childProfile.age} • {childProfile.gender} • {childProfile.supportLevel}
          </p>

          {error && (
            <p className="mt-3 text-xs opacity-80">
              Showing demo data until API connection is available.
            </p>
          )}
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
            <h2 className="text-lg font-bold">Basic Information</h2>

            <div className="mt-4 space-y-3 text-sm">
              <p>
                <b>Preferred Schedule:</b> {childProfile.preferredSchedule}
              </p>
              <p>
                <b>Support Level:</b> {childProfile.supportLevel}
              </p>
              <p>
                <b>Communication:</b> {childProfile.communication.join(", ")}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
            <h2 className="text-lg font-bold">Strengths & Interests</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {childProfile.strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--primary-50)] px-4 py-2 text-sm text-[var(--primary-700)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-[var(--border-light)]">
          <h2 className="text-lg font-bold">Main Daily Challenges</h2>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {childProfile.challenges.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[var(--gray-50)] p-4 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChildProfile;