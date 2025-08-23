import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Share2,
  Info,
  ListChecks,
  Users,
} from "lucide-react";
import DarkVeil from "./Darkveil";

export default function SummerMusicFestival() {
  const navigate = useNavigate();
  return (
    <>
      <DarkVeil />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Top Bar */}
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">
                E
              </span>
              <span className="font-semibold">NYX Events</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-gray-700" href="#about">
                About
              </a>
              <a className="hover:text-gray-700" href="#agenda">
                Agenda
              </a>
              <a className="hover:text-gray-700" href="#rules">
                Rules
              </a>
              <a className="hover:text-gray-700" href="#faqs">
                FAQs
              </a>
              <a className="hover:text-gray-700" href="#contact">
                Contact
              </a>
            </nav>
            <a
              href="/Register"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white text-sm hover:opacity-90"
            >
              <Ticket size={16} /> Register
            </a>
          </div>
        </header>

        {/* Hero (no background image) */}
        <section className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 relative overflow-hidden rounded-xl p-4 font-bold">
              <img
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="New Year Celebration"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">
                Summer Music Festival
              </h1>
              <p className="mt-3 text-base text-gray-600" id="about">
                {/* TODO: Replace this placeholder description with your event copy. */}
                Get ready for an unforgettable summer night under the stars!
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <Calendar size={16} /> <span>Aug 28, 2025</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <Clock size={16} /> <span>5:00 PM</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <MapPin size={16} /> <span>Campus 13, Cricket Ground</span>
                </span>
                <button className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 hover:bg-gray-100">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>

            {/* Quick Facts Card */}
            <aside className="md:col-span-1">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Info size={16} /> Quick facts
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-gray-600">Registration</dt>
                    <dd className="font-medium text-gray-900">Opens Soon</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-gray-600">Time Required</dt>
                    <dd className="font-medium text-gray-900">4 Hours</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-gray-600">Location</dt>
                    <dd className="font-medium text-gray-900">
                      KIIT Campus 13, Cricket Ground
                    </dd>
                  </div>
                </dl>
                <a
                  href="/Register"
                  className="mt-5 block rounded-xl bg-gray-900 px-4 py-2 text-center text-white hover:opacity-90"
                >
                  Register Now
                </a>
                <p className="mt-2 text-center text-xs text-gray-500">
                  Limited slots available
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Key Points / Pillars */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Guest",
                desc: "Cold Play",
                icon: <Users className="shrink-0" size={18} />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6 bg-white flex items-start gap-3"
              >
                <div className="h-9 w-9 rounded-xl bg-gray-100 grid place-items-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-bold">Schedule</h2>
            <p className="mt-2 text-sm text-gray-600"></p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-5">
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Reporing - 18:00</li>
                  <li>Concert Starts - 19:30</li>
                  <li>Food & Drinks - 20:30</li>
                  <li>Concert Ends - 23:30</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rules */}
        <section id="rules" className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-bold">Rules & Guidelines</h2>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Please note, strobe lights, flashing lights and lasers may be
                used during some live performances which may be harmful to
                people with photosensitive epilepsy
              </li>
              <li>
                The Festival is not responsible for lost or stolen belongings.
                Take care of your belongings!
              </li>
              <li>
                Visitors park their vehicles at their own risk. Parking is
                regulated by the RSC Jarun authorities
              </li>
              <li>
                Children under the age of 13, accompanied by an adult (parent or
                legal guardian) with a valid festival ticket, are allowed
                entrance to the festival venue free of charge
              </li>
              <li>
                Outside food and beverages are not allowed inside the venue
              </li>
              <li>
                All attendees must comply with venue security and bag checks
              </li>
            </ol>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="border-b bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-bold">Location</h2>
            <div className="mt-4 rounded-2xl border bg-white p-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={16} />
                Campus 13, Cricket Ground
              </div>
              <div className="mt-4 aspect-video w-full rounded-xl bg-gray-100 grid place-items-center text-sm text-gray-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.5877374722254!2d85.81648483147801!3d20.357297702239446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909234b6d901d%3A0xaf4055ab077320f2!2sKIIT%20Cricket%20Ground!5e0!3m2!1sen!2sin!4v1755883395483!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-2xl font-bold">FAQs</h2>
            <div className="mt-6 divide-y rounded-2xl border bg-white">
              {[
                { q: "Is there a age limit?", a: "No! All ages are welcome." },
                {
                  q: "Is there a registration fee?",
                  a: "Details will be announced soon.",
                },
              ].map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                    {f.q}
                    <span className="transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">
                  E
                </span>
                <span className="font-semibold">EVENTITS</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">© 2020 EVENTITS</p>
            </div>
            <div>
              <h4 className="font-semibold">Useful Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#agenda" className="hover:underline">
                    Agenda
                  </a>
                </li>
                <li>
                  <a href="#rules" className="hover:underline">
                    Rules
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  Email:{" "}
                  <a
                    className="hover:underline"
                    href="mailto:example@ecell.org"
                  >
                    summermusicfestival@gmail.com
                  </a>
                </li>
                <li>Phone: +91‑987654321</li>
                <li>Address: Central Park,NY</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
