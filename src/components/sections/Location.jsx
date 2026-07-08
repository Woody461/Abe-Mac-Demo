import location from "../../config/location";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function Location() {

  // Nothing to display

  if (
    location.type === "location" &&
    !location.address
  ) {
    return null;
  }

  if (
    location.type === "events" &&
    (!location.events || location.events.length === 0)
  ) {
    return null;
  }

  // -----------------------------
  // Business Location
  // -----------------------------

  if (location.type === "location") {

    return (

      <Section id="location">

        <div className="mx-auto max-w-4xl text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            Visit Us
          </p>

          <SectionTitle>
            Find Our Location
          </SectionTitle>

          <p className="mt-6 text-lg text-gray-600">
            {location.address}
          </p>

          <a
            href={mapsLink(location.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl px-8 py-4 font-semibold text-white transition hover:opacity-90"
            style={{
              backgroundColor: "var(--primary)"
            }}
          >
            Get Directions
          </a>

        </div>

      </Section>

    );

  }

  // -----------------------------
  // Events
  // -----------------------------

  return (

    <Section id="events">

      <div className="mx-auto max-w-5xl">

        <p
          className="text-center text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--primary)" }}
        >
          Upcoming Events
        </p>

        <SectionTitle>
          Where To Find Us
        </SectionTitle>

        <div className="mt-12 space-y-8">

          {location.events.map((event) => (

            <div
              key={`${event.name}-${event.date}`}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
            >

              <h3 className="text-2xl font-bold text-gray-900">
                {event.name}
              </h3>

              <p className="mt-3 text-gray-700">
                {event.date}
              </p>

              <p className="text-gray-700">
                {event.time}
              </p>

              <p className="mt-4 text-gray-600">
                {event.address}
              </p>

              <a
                href={mapsLink(event.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--primary)"
                }}
              >
                Get Directions
              </a>

            </div>

          ))}

        </div>

      </div>

    </Section>

  );

}

export default Location;