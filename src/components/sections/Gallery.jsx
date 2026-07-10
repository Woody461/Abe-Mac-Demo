import gallery from "../../config/gallery";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Gallery() {

  if (!gallery.length) {
    return null;
  }

  return (

    <Section id="gallery" className="bg-surface">

      <div className="text-center">

        <p className="eyebrow">Gallery</p>

        <SectionTitle>
          Our Work
        </SectionTitle>

        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--muted)" }}>
          Take a look at some of our favorite photos.
        </p>

      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {gallery.map((image, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="h-72 w-full object-cover transition duration-300 hover:scale-105"
            />

          </div>

        ))}

      </div>

    </Section>

  );

}

export default Gallery;
