import business from "../../config/business";

function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "var(--secondary)"
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Artist */}

          <div>

            <img
              src="/images/logo.png"
              alt={business.name}
              className="mb-6 h-24 w-24 rounded-full border-2 object-cover"
              style={{
                borderColor: "var(--primary)"
              }}
            />

            <h2 className="text-3xl font-bold">
              {business.name}
            </h2>

            <p className="mt-4 text-gray-300">
              {business.tagline}
            </p>

            <p className="mt-6 text-sm text-black-400">
              Authentic Texas Country music for festivals,
              weddings, private events, rodeos, and live venues.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Navigation
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#music" className="hover:text-white">
                  Music
                </a>
              </li>

              <li>
                <a href="#events" className="hover:text-white">
                  Tour Dates
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-white">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Listen */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Listen
            </h3>

            <ul className="space-y-3">

              {business.spotify && (
                <li>
                  <a
                    href={business.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Spotify
                  </a>
                </li>
              )}

              {business.appleMusic && (
                <li>
                  <a
                    href={business.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Apple Music
                  </a>
                </li>
              )}

              {business.youtube && (
                <li>
                  <a
                    href={business.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    YouTube
                  </a>
                </li>
              )}

              {business.instagram && (
                <li>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              )}

              {business.facebook && (
                <li>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
              )}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Booking
            </h3>

            {business.phone && (
              <p className="mb-3">
                📞{" "}
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-white"
                >
                  {business.phone}
                </a>
              </p>
            )}

            {business.email && (
              <p className="mb-3">
                📧{" "}
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white break-all"
                >
                  {business.email}
                </a>
              </p>
            )}

            {business.address && (
              <p className="mb-6">
                📍 {business.address}
              </p>
            )}

            <a
              href={`mailto:${business.bookingEmail}`}
              className="inline-block rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
              style={{
                backgroundColor: "var(--primary)"
              }}
            >
              Book Abe Mac
            </a>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-16 border-t border-black pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-black-400 md:flex-row">

            <p>
              © {new Date().getFullYear()} {business.name}. All Rights Reserved.
            </p>

            <p>
              Built with ❤️ by{" "}
              <a
                href="https://martinwebco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white"
              >
                Martin Web Co.
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;