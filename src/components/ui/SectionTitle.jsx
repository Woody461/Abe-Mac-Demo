function SectionTitle({
  children,
  className = "",
}) {
  return (
    <h2
      className={`mt-4 text-5xl font-extrabold tracking-tight md:text-6xl ${className}`}
      style={{
        color: className.includes("text-white")
          ? undefined
          : "var(--text)",
      }}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;