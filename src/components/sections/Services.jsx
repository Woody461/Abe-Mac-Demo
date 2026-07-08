import products from "../../config/products";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Services() {

  if (!products.length) {
    return null;
  }

  return (

    <Section id="services">

      <div className="text-center">

        <p
          className="text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--primary)" }}
        >
          Our Services
        </p>

        <SectionTitle>
          What We Offer
        </SectionTitle>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {products.map((service) => (

          <div
            key={service.name}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <h3 className="text-2xl font-bold text-gray-900">
              {service.name}
            </h3>

            {service.price && (

              <p
                className="mt-3 text-lg font-semibold"
                style={{ color: "var(--primary)" }}
              >
                {service.price}
              </p>

            )}

            {service.description && (

              <p className="mt-5 leading-7 text-gray-600">
                {service.description}
              </p>

            )}

          </div>

        ))}

      </div>

    </Section>

  );

}

export default Services;