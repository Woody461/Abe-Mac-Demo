import Logo from "../ui/Logo";
import navigation from "../../config/navigation";
import business from "../../config/business";

function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{
        backgroundColor: "var(--background)",
        borderBottom: "1px solid rgba(0,0,0,.08)"
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Logo />

        <nav className="hidden gap-8 md:flex">

          {navigation.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="font-medium transition"
              style={{
                color: "var(--text)"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text)";
              }}
            >
              {item.name}
            </a>

          ))}

        </nav>

      
      </div>
    </header>
  );
}

export default Navbar;