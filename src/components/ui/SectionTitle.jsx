function SectionTitle({
  children,
  className = "",
}) {
  return (
    <h2
      className={`font-display mt-4 text-4xl leading-[0.95] md:text-5xl ${className}`}
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