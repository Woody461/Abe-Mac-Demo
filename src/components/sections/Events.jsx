import location from "../../config/location";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function maps(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function Events() {
  if (location.type !== "events") {
    return null;
  }

  return (
    <Section id="events">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            Tour Dates
          </p>

          <SectionTitle>
            Upcoming Shows
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Come experience authentic Texas Country music live.
          </p>

        </div>

        {/* No Shows */}

        {!location.events?.length && (

          <div className="mt-16 rounded-3xl bg-gray-50 p-16 text-center">

            <h3 className="text-3xl font-bold">
              No Upcoming Shows
            </h3>

            <p className="mt-5 text-gray-600">
              New performances are being scheduled now.
              Follow Abe Mac on social media for tour announcements.
            </p>

          </div>

        )}

        {/* Events */}

        {location.events?.length > 0 && (

          <div className="mt-16 space-y-8">

            {location.events.map((event) => {

              const date = new Date(event.date);

              const month = date.toLocaleString("default", {
                month: "short"
              });

              const day = date.getDate();

              return (

                <div
                  key={`${event.name}-${event.date}`}
                  className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >

                  <div className="grid gap-8 lg:grid-cols-[130px_1fr_auto]">

                    {/* Date */}

                    <div
                      className="rounded-2xl p-6 text-center text-white"
                      style={{
                        backgroundColor: "var(--primary)"
                      }}
                    >

                      <div className="text-lg uppercase tracking-widest">
                        {month}
                      </div>

                      <div className="text-5xl font-bold">
                        {day}
                      </div>

                    </div>

                    {/* Event Info */}

                    <div>

                      <h3 className="text-3xl font-bold">
                        {event.name}
                      </h3>

                      <p className="mt-3 text-lg text-gray-600">
                        📍 {event.address}
                      </p>

                      <p className="mt-2 text-gray-500">
                        🕒 {event.time}
                      </p>

                      {event.description && (

                        <p className="mt-4 text-gray-600">
                          {event.description}
                        </p>

                      )}

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-col justify-center gap-4">

                      {event.ticket && (

                        <a
                          href={event.ticket}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
                          style={{
                            backgroundColor: "var(--secondary)"
                          }}
                        >
                          🎟 Tickets
                        </a>

                      )}

                      <a
                        href={maps(event.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border px-6 py-3 text-center font-semibold transition hover:bg-gray-100"
                      >
                        📍 Directions
                      </a>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>
    </Section>
  );
}

export default Events;