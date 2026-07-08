import business from "../../config/business";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Videos() {
  if (!business.videos?.length) {
    return null;
  }

  const featured = business.videos[0];

  return (
    <Section id="videos">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{
              color: "var(--primary)"
            }}
          >
            Watch Live
          </p>

          <SectionTitle>
            Featured Performances
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Experience Abe Mac's live performances, music videos,
            and unforgettable Texas Country shows.
          </p>

        </div>

        {/* Featured Video */}

        <div className="mt-14 overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${featured.youtubeId}`}
            title={featured.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

        {/* Video Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {business.videos.map((video) => (

            <a
              key={video.youtubeId + video.title}
              href={`https://www.youtube.com/embed/${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full"
              />

              <div className="p-5">

                <h3 className="font-bold">
                  {video.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Click to watch on YouTube
                </p>

              </div>

            </a>

          ))}

        </div>

        <div className="mt-14 text-center">

          <a
            href={business.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-8 py-4 font-semibold text-white transition hover:opacity-90"
            style={{
              backgroundColor: "var(--primary)"
            }}
          >
            View YouTube Channel
          </a>

        </div>

      </div>
    </Section>
  );
}

export default Videos;