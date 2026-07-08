function Heading({
  label,
  title,
  description,
  center = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>

      {label && (
        <p
          className="text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--primary)" }}
        >
          {label}
        </p>
      )}

      <h2
        className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
          {description}
        </p>
      )}

    </div>
  );
}

export default Heading;