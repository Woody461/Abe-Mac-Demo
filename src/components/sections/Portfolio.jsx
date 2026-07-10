import gallery from "../../config/gallery";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Portfolio() {

  // Hide section if no artwork exists

  if (!gallery.length) {
    return null;
  }

  return (

    <Section id="portfolio">

      <div className="text-center">

        <p className="eyebrow">
          Featured Work
        </p>

        <SectionTitle>
          Portfolio
        </SectionTitle>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {gallery.map((image, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <img
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />

          </div>

        ))}

      </div>

    </Section>

  );

}

export default Portfolio;