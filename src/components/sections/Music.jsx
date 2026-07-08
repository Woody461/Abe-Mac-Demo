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
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            Listen • Watch • Stream
          </p>

          
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Stream the latest music, watch live performances, and follow
            Abe Mac on your favorite streaming platforms.
          </p>

        </div>

        {/* Featured Video */}

       

        {/* Latest Release */}

        <div className="mt-20 rounded-3xl bg-gray-50 p-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <p
                className="font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                Latest Release
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {business.latestRelease.title}
              </h2>

              <p className="mt-5 text-lg text-gray-600">
                {business.latestRelease.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {business.spotify && (
                  <a
                    href={business.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:opacity-90"
                  >
                    Spotify
                  </a>
                )}

                {business.appleMusic && (
                  <a
                    href={business.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white hover:opacity-90"
                  >
                    Apple Music
                  </a>
                )}

                {business.youtube && (
                  <a
                    href={business.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:opacity-90"
                  >
                    YouTube
                  </a>
                )}

              </div>

            </div>

            <div className="flex justify-center">

              <img
                src={business.latestRelease.artwork}
                alt={business.latestRelease.title}
                className="w-full max-w-sm rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

        {/* Music Players */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {business.spotifyEmbed && (

            <div className="overflow-hidden rounded-3xl shadow-lg">

              <iframe
                title="Spotify"
                src={business.spotifyEmbed}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />

            </div>

          )}

          {business.appleMusicEmbed && (

            <div className="overflow-hidden rounded-3xl shadow-lg">

              <iframe
                title="Apple Music"
                src={business.appleMusicEmbed}
                width="100%"
                height="352"
                allow="autoplay *; encrypted-media *; fullscreen *"
                style={{
                  border: 0
                }}
              />

            </div>

          )}

        </div>

        {/* Streaming Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {business.spotify && (

            <a
              href={business.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-6xl">
                🎵
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Spotify
              </h3>

              <p className="mt-4 text-gray-600">
                Stream every song on Spotify.
              </p>

            </a>

          )}

          {business.appleMusic && (

            <a
              href={business.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-6xl">
                🍎
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Apple Music
              </h3>

              <p className="mt-4 text-gray-600">
                Listen on Apple Music.
              </p>

            </a>

          )}

          {business.youtube && (

            <a
              href={business.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border bg-white p-10 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-6xl">
                ▶️
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                YouTube
              </h3>

              <p className="mt-4 text-gray-600">
                Watch live performances and official videos.
              </p>

            </a>

          )}

        </div>

        {/* Booking CTA */}

        <div
          className="mt-24 rounded-3xl px-10 py-14 text-center text-white"
          style={{
            backgroundColor: "var(--secondary)"
          }}
        >

          <h2 className="text-4xl font-bold">
            Book Abe Mac
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
            Available for festivals, rodeos, county fairs, weddings,
            private events, corporate entertainment, and live music venues.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href={`mailto:${business.bookingEmail}`}
              className="rounded-xl px-8 py-4 font-semibold text-white transition hover:opacity-90"
              style={{
                backgroundColor: "var(--primary)"
              }}
            >
              Book This Artist
            </a>

            {business.youtube && (

              <a
                href={business.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
              >
                Watch More Videos
              </a>

            )}

          </div>

        </div>

      </div>
    </Section>
  );
}

export default Music;