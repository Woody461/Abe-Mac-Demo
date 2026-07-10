import business from "../../config/business";
import navigation from "../../config/navigation";

import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {

  // The second nav item (after "About") is whatever this business type's
  // main draw is — Menu, Services, Music, Portfolio, Gallery — generated
  // dynamically per client, so the primary button is always relevant
  // without hardcoding a business-type switch here.

  const primaryLink =
    navigation[1] || navigation[navigation.length - 1];

  return (

    <section
      id="top"
      className="relative flex min-h-[88vh] items-end overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, color-mix(in srgb, var(--secondary) 35%, transparent) 0%, color-mix(in srgb, var(--secondary) 88%, transparent) 75%, var(--secondary) 100%), url('/images/hero.jpg')`,
        backgroundColor: "var(--secondary)"
      }}
    >

      <Container>

        <div className="max-w-3xl pb-16 pt-32">

          <p className="eyebrow" style={{ color: "var(--primary)" }}>
            {business.businessType}
          </p>

          <h1 className="font-display mt-4 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {business.name}
          </h1>

          {business.tagline && (

            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {business.tagline}
            </p>

          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            {primaryLink && (
              <Button href={primaryLink.href} variant="primary">
                {primaryLink.name}
              </Button>
            )}

            {business.phone ? (
              <Button href={`tel:${business.phone}`} variant="ghost">
                Call {business.phone}
              </Button>
            ) : (
              <Button href="#contact" variant="ghost">
                Get In Touch
              </Button>
            )}

          </div>

        </div>

      </Container>

    </section>

  );

}

export default Hero;
