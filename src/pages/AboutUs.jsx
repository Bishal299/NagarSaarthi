import React from "react";
import { Header } from "./Home/Header";
import { Navbar } from "./Home/Navbar";

function AboutUs({ data = {} }) {
  const {
    intro = "Our platform is a citizen-centric initiative designed to simplify civic issue reporting and strengthen communication between the public and local authorities.",
    mission = {
      heading: "Mission",
      text: "To empower citizens with an easy-to-use platform that ensures their voices are heard, their issues are acknowledged, and solutions are delivered transparently.",
    },
    vision = {
      heading: "Vision",
      text: "To create responsive, sustainable, and inclusive cities where civic issues are resolved swiftly, improving the quality of life for all.",
    },
    achievements = {
      reported: 10000,
      resolved: 9200,
      municipalities: 12,
      awards: 3,
    },
    steps = [
      "Report an Issue — upload photo, description & location",
      "Automatic Routing — routed to the relevant department",
      "Track Progress — real-time status updates",
      "Feedback & Closure — rate and comment after resolution",
    ],
    images = [],
    contact = {
      email: "support@nagarsaarthi.example",
      phone: "+91 98765 43210",
    },
  } = data;

  const stat = (label, value) => (
    <div className="flex flex-col items-start">
      <dt className="text-3xl font-semibold tabular-nums">{value}</dt>
      <dd className="mt-1 text-sm text-gray-600">{label}</dd>
    </div>
  );

  const PlaceholderImage = ({ alt }) => (
    <div
      className="w-full h-64 sm:h-80 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400"
      role="img"
      aria-label={alt}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3v4M16 3v4M3 11h18"
        />
      </svg>
    </div>
  );

  const Section = ({ children, image, index = 0, alt = "Section image" }) => (
    <section className="py-12">
      <div
        className={`container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="lg:w-1/2">
          {image ? (
            <img
              src={image}
              alt={alt}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm border"
            />
          ) : (
            <PlaceholderImage alt={alt} />
          )}
        </div>
        <div className="lg:w-1/2 text-gray-800">{children}</div>
      </div>
    </section>
  );

  // Sections array to simplify alternating images
  const sections = [
    {
      title: "Empowering Citizens, Building Better Cities",
      text: intro,
      image: images[0],
      alt: "Citizens reporting issues",
    },
    {
      title: mission.heading,
      text: mission.text,
      image: images[1],
      alt: "Mission",
      extra: {
        title: vision.heading,
        text: vision.text,
        alt: "Vision",
      },
    },
    {
      title: "Key Achievements",
      text: "Our measurable impact since launch:",
      image: images[2],
      alt: "Achievements",
      stats: achievements,
    },
    {
      title: "How It Works",
      text: steps.map((s, i) => `Step ${i + 1}: ${s}`),
      image: images[3],
      alt: "How it works",
      isList: true,
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Navbar />
      

      {sections.map((section, idx) => (
        <Section key={idx} image={section.image} index={idx} alt={section.alt}>
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.isList ? (
            <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-700">
              {section.text.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          )}

          {section.extra && (
            <>
              <h3 className="text-xl font-semibold mt-6">{section.extra.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{section.extra.text}</p>
            </>
          )}

          {section.stats && (
            <dl className="mt-6 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border">{stat("Issues Reported", section.stats.reported)}</div>
              <div className="bg-gray-50 p-6 rounded-2xl border">{stat("Issues Resolved", section.stats.resolved)}</div>
              <div className="bg-gray-50 p-6 rounded-2xl border">{stat("Partner Municipalities", section.stats.municipalities)}</div>
              <div className="bg-gray-50 p-6 rounded-2xl border">{stat("Awards & Recognitions", section.stats.awards)}</div>
            </dl>
          )}
        </Section>
      ))}

      <footer className="py-10">
        <div className="container mx-auto px-6 lg:px-8 border-t pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold">Contact & Partnerships</h4>
              <p className="mt-2 text-sm text-gray-600">
                Contact us at <br />
                <a href={`mailto:${contact.email}`} className="text-indigo-600 underline">{contact.email}</a>
                <br />
                <span className="text-gray-700">{contact.phone}</span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Civic Reporting Platform — All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default AboutUs;
