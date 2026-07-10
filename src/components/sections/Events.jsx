import location from "../../config/location";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

function maps(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function Events() {

  if (
    location.type !== "events" ||
    !location.events?.length
  ) {
    return null;
  }

  return (

    <Section id="events">

      <div className="text-center">

        <p className="eyebrow">
          Upcoming Events
        </p>

        <SectionTitle>
          Come See Us
        </SectionTitle>

      </div>

      <div className="mt-14 space-y-8">

        {location.events.map((event) => (

          <div
            key={`${event.name}-${event.date}`}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

            <div className="mt-6">
              <Button
                href={maps(event.address)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Get Directions
              </Button>
            </div>

          </div>

        ))}

      </div>

    </Section>

  );

}

export default Events;