function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-4
        py-1.5
        text-sm
        font-semibold
      "
      style={{
        backgroundColor: "color-mix(in srgb, var(--primary) 15%, white)",
        color: "var(--primary)",
      }}
    >
      {children}
    </span>
  );
}

export default Badge;