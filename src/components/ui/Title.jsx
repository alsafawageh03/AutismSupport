function Title({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-[var(--text-primary)]">
        {title}
      </h1>

      {subtitle && (
        <p className="text-[var(--text-secondary)] mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Title;