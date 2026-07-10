import { useState } from "react";
import business from "../../config/business";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function Contact() {
  const hasContactInfo =
    business.phone ||
    business.email ||
    business.address ||
    business.instagram ||
    business.facebook;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    eventDate: "",
    eventType: "Festival",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    success: false,
    error: "",
    message: "",
  });

  if (!hasContactInfo && !business.generateQR) {
    return null;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    setStatus({
      success: false,
      error: "",
      message: "",
    });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus({
        success: true,
        message: data.message,
        error: "",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        venue: "",
        eventDate: "",
        eventType: "Festival",
        message: "",
      });

    } catch (err) {
      setStatus({
        success: false,
        error: err.message,
        message: "",
      });
    }

    setLoading(false);
  }

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            Booking & Contact
          </p>

          <SectionTitle>
            Let's Make Your Event Unforgettable
          </SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Interested in booking Abe Mac?
            Complete the form below and we'll contact you within
            1–2 business days.
          </p>

        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Booking Form */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="mb-8 text-3xl font-bold">
              Booking Request
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4"
              />

              <input
                name="venue"
                value={form.venue}
                onChange={handleChange}
                type="text"
                placeholder="Venue"
                className="w-full rounded-xl border p-4"
              />

              <input
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                type="date"
                className="w-full rounded-xl border p-4"
                required
              />

              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              >

                <option>Festival</option>

                <option>Wedding</option>

                <option>Private Party</option>

                <option>Corporate Event</option>

                <option>Rodeo</option>

                <option>Restaurant / Bar</option>

                <option>Other</option>

              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your event..."
                className="w-full rounded-xl border p-4"
                required
              />              {status.error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-4 text-lg font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundColor: "var(--primary)",
                }}
              >
                {loading ? "Sending Booking Request..." : "Submit Booking Request"}
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="rounded-3xl bg-gray-50 p-10">

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              {business.phone && (
                <div>
                  <h4 className="font-semibold text-lg">
                    📞 Phone
                  </h4>

                  <a
                    href={`tel:${business.phone}`}
                    className="text-gray-600 hover:underline"
                  >
                    {business.phone}
                  </a>
                </div>
              )}

              {business.email && (
                <div>
                  <h4 className="font-semibold text-lg">
                    📧 Email
                  </h4>

                  <a
                    href={`mailto:${business.email}`}
                    className="break-all text-gray-600 hover:underline"
                  >
                    {business.email}
                  </a>
                </div>
              )}

              {business.address && (
                <div>
                  <h4 className="font-semibold text-lg">
                    📍 Location
                  </h4>

                  <p className="text-gray-600">
                    {business.address}
                  </p>
                </div>
              )}

            </div>

            {/* Social Links */}

            <div className="mt-10">

              <h4 className="mb-4 text-xl font-semibold">
                Follow Abe Mac
              </h4>

              <div className="flex flex-wrap gap-4">

                {business.instagram && (
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Instagram
                  </a>
                )}

                {business.facebook && (
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Facebook
                  </a>
                )}

                {business.youtube && (
                  <a
                    href={business.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    YouTube
                  </a>
                )}

              </div>

            </div>

            {/* Booking Types */}

            <div
              className="mt-12 rounded-3xl p-8 text-white"
              style={{
                backgroundColor: "var(--secondary)",
              }}
            >

              <h4 className="text-2xl font-bold">
                Available For
              </h4>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <div>🎤 Festivals</div>
                <div>💍 Weddings</div>
                <div>🎉 Private Parties</div>
                <div>🏢 Corporate Events</div>
                <div>🤠 Rodeos</div>
                <div>🎸 Live Music Venues</div>

              </div>

            </div>

            {/* Response Time */}

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">

              <h4 className="text-xl font-semibold">
                Response Time
              </h4>

              <p className="mt-3 text-gray-600">
                We usually respond to booking requests within
                <strong> 24–48 hours.</strong>
              </p>

            </div>

          </div>

        </div>

      </div>

    </Section>
  );
}

export default Contact;