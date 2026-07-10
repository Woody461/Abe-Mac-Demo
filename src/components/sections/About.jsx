import business from "../../config/business";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--primary)" }}
          >
            About Abe Mac
          </p>

          <SectionTitle>
            Welcome to {business.name}
          </SectionTitle>

          <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
            <p>
              Abe Mac is a singer-songwriter, music producer, and independent
              Texas Country artist. He is a father of four talented boys and an
              author. Born and raised in El Paso, Texas, he now resides in San
              Antonio where he continues writing, recording, and performing
              music inspired by his Texas roots.
            </p>

            <p>
              Growing up along the Texas border exposed Abe to many different
              musical styles—from classic rock and traditional Mexican folklore
              music to legendary country artists. These influences shaped his
              signature sound, blending authentic storytelling with powerful
              vocals and unique West Texas guitar picking.
            </p>

            <p>
              Inspired by Waylon Jennings, Merle Haggard, Johnny Cash, Willie
              Nelson, John Mayer, George Strait, and many others, Abe takes his
              audience on a journey through every song. His heartfelt lyrics,
              charismatic stage presence, and unmistakable baritone voice create
              performances that leave a lasting impression.
            </p>

            <div
              className="rounded-xl border-l-4 bg-gray-50 p-5"
              style={{ borderColor: "var(--primary)" }}
            >
              <p className="font-semibold text-gray-900">
                Authentic Texas Country music with heartfelt storytelling,
                unforgettable live performances, and a sound rooted in West
                Texas tradition.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - YouTube Video */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/GaztheX2kTg"
              title="Abe Mac Live Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;