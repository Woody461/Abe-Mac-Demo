function Button({
  children,
  href,
  onClick,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gray-900 text-white hover:bg-black hover:-translate-y-0.5 shadow-xl",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:border-gray-900",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;