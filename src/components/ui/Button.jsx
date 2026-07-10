function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) {

  const base =
    "notch-corner inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300";

  const styles = {

    primary: {
      className: "hover:-translate-y-0.5",
      style: { backgroundColor: "var(--primary)", color: "var(--on-primary)" }
    },

    secondary: {
      className: "border hover:-translate-y-0.5",
      style: {
        backgroundColor: "transparent",
        borderColor: "var(--edge)",
        color: "var(--text)"
      }
    },

    ghost: {
      className: "border hover:bg-white/10",
      style: {
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,0.35)",
        color: "#fff"
      }
    }

  };

  const variantConfig = styles[variant] || styles.primary;

  const classes = `${base} ${variantConfig.className} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={variantConfig.style} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={variantConfig.style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
