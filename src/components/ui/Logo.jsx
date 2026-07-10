import { useState } from "react";

import business from "../../config/business";

function Logo() {

  const [imgFailed, setImgFailed] = useState(false);

  const initial = business.name?.trim()?.charAt(0)?.toUpperCase() || "?";

  return (
    <a
      href="#top"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >

      {imgFailed ? (

        <div
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 font-display text-xl"
          style={{
            borderColor: "var(--primary)",
            backgroundColor: "var(--tint)",
            color: "var(--primary)"
          }}
        >
          {initial}
        </div>

      ) : (

        <img
          src="/images/logo.png"
          alt={business.name}
          className="h-14 w-14 rounded-full border-2 object-cover"
          style={{ borderColor: "var(--primary)" }}
          onError={() => setImgFailed(true)}
        />

      )}

      <div>

        <h2 className="font-display text-lg" style={{ color: "var(--text)" }}>
          {business.name}
        </h2>

        <p className="font-mono text-xs tracking-wide" style={{ color: "var(--primary)" }}>
          {business.businessType}
        </p>

      </div>

    </a>
  );
}

export default Logo;
