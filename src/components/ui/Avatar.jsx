function Avatar({ src, alt = "User", size = "md" }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <img
      src={src || "/default-avatar.png"}
      alt={alt}
      className={`
        ${sizes[size]}
        rounded-full
        object-cover
        border-2
        border-[var(--white)]
        shadow-sm
      `}
    />
  );
}

export default Avatar;