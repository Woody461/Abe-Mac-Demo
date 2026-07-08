import business from "../../config/business";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Music() {
  if (
    !business.spotify &&
    !business.appleMusic &&
    !business.youtube
  ) {
    return null;
  }

  return (
    <Section id="music">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            Listen • Watch • Book
          </p>

          <SectionTitle>
            Experience Abe Mac
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Stream the latest music, watch live performances, and book Abe Mac
            for festivals, fairs, rodeos, weddings, private events, and
            corporate entertainment throughout Texas and beyond.
          </p>
        </div>

        {/* Featured Video */}
       <div className="mt-16 overflow-hidden rounded-3xl shadow-2xl">
  <iframe
    className="aspect-video w-full"
    src="https://www.youtube.com/embed/TbK_2LBmuJE"
    title="Abe Mac Band - Square One"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

        {/* Streaming Platforms */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {business.spotify && (
            <a
              href={business.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ borderColor: "var(--primary)" }}
            >
              <div className="text-6xl">🎵</div>

              <h3 className="mt-5 text-2xl font-bold">
                Spotify
              </h3>

              <p className="mt-4 text-gray-600">
                Listen to the newest singles and favorite releases.
              </p>
            </a>
          )}

          {business.appleMusic && (
            <a
              href={business.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ borderColor: "var(--primary)" }}
            >
              <div className="text-6xl">🍎</div>

              <h3 className="mt-5 text-2xl font-bold">
                Apple Music
              </h3>

              <p className="mt-4 text-gray-600">
                Stream every release on Apple Music.
              </p>
            </a>
          )}

          {business.youtube && (
            <a
              href={business.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ borderColor: "var(--primary)" }}
            >
              <div className="text-6xl">▶️</div>

              <h3 className="mt-5 text-2xl font-bold">
                YouTube
              </h3>

              <p className="mt-4 text-gray-600">
                Watch official videos and live performances.
              </p>
            </a>
          )}

        </div>

        {/* Performance Highlights */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <h4 className="text-2xl font-bold">🎤</h4>
            <h5 className="mt-3 font-semibold">
              Live Entertainment
            </h5>
            <p className="mt-3 text-gray-600">
              High-energy performances featuring authentic Texas Country music.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <h4 className="text-2xl font-bold">🤠</h4>
            <h5 className="mt-3 font-semibold">
              Texas Country
            </h5>
            <p className="mt-3 text-gray-600">
              Original songs mixed with crowd favorites that everyone enjoys.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <h4 className="text-2xl font-bold">🎸</h4>
            <h5 className="mt-3 font-semibold">
              Professional Show
            </h5>
            <p className="mt-3 text-gray-600">
              Perfect for festivals, fairs, rodeos, weddings, and private events.
            </p>
          </div>

        </div>

        {/* Booking CTA */}
        <div
          className="mt-20 rounded-3xl px-10 py-14 text-center text-white"
          style={{
            backgroundColor: "var(--secondary)"
          }}
        >
          <h3 className="text-4xl font-bold">
            Ready to Book Abe Mac?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Bring authentic Texas Country music to your next event. Available
            for festivals, county fairs, rodeos, weddings, corporate events,
            private parties, and special occasions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {business.bookingEmail && (
              <a
                href={`mailto:${business.bookingEmail}`}
                className="rounded-xl px-8 py-4 font-semibold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--primary)"
                }}
              >
                📅 Book This Artist
              </a>
            )}

            {business.youtube && (
              <a
                href={business.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
              >
                ▶ Watch Live
              </a>
            )}

          </div>
        </div>

      </div>
    </Section>
  );
}

export default Music;