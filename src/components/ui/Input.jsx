function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        rounded-2xl
        border
        border-gray-300
        bg-white
        px-5
        py-4
        text-gray-900
        outline-none
        transition-all
        duration-300
      "
      style={{
        "--focus-color": "var(--primary)",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "var(--primary)";
        e.target.style.boxShadow = "0 0 0 4px color-mix(in srgb, var(--primary) 20%, white)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "";
        e.target.style.boxShadow = "";
      }}
    />
  );
}

export default Input;