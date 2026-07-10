import location from "../../config/location";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function Location() {

  // Nothing to display — no address was collected for this client.
  if (!location.address) {
    return null;
  }

  return (

    <Section id="location">

      <div className="mx-auto max-w-3xl text-center">

        <p className="eyebrow">Visit Us</p>

        <SectionTitle>
          Find Our Location
        </SectionTitle>

        <p className="mt-6 text-lg" style={{ color: "var(--muted)" }}>
          {location.address}
        </p>

        <div className="mt-8">
          <Button
            href={mapsLink(location.address)}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
        </div>

      </div>

    </Section>

  );

}

export default Location;
