import business from "../../config/business";

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >

      <img
        src="/images/logo.png"
        alt={business.name}
        className="h-14 w-14 rounded-full border-2 object-cover"
        style={{
          borderColor: "var(--primary)"
        }}
      />

      <div>

        <h2
          className="text-xl font-bold"
          style={{ color: "var(--text)" }}
        >
          {business.name}
        </h2>

        <p
          className="text-sm font-medium"
          style={{ color: "var(--primary)" }}
        >
          {business.businessType}
        </p>

      </div>

    </a>
  );
}

export default Logo;