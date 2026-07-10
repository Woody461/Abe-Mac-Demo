import business from "../../config/business";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Music() {

  // Hide section if no streaming links exist
  if (
    !business.spotify &&
    !business.appleMusic &&
    !business.youtube
  ) {
    return null;
  }

  return (

    <Section id="music">

      <div className="mx-auto max-w-4xl text-center">

        <p className="eyebrow">
          Listen Now
        </p>

        <SectionTitle>
          Stream My Music
        </SectionTitle>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          {business.spotify && (

            <a
              href={business.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Spotify
            </a>

          )}

          {business.appleMusic && (

            <a
              href={business.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Apple Music
            </a>

          )}

          {business.youtube && (

            <a
              href={business.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              YouTube
            </a>

          )}

        </div>

      </div>

    </Section>

  );

}

export default Music;