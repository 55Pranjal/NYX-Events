import React from "react";
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

export default function TechConference() {
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
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="New Year Celebration"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">
                Tech Conference
              </h1>
              <p className="mt-3 text-base text-gray-600" id="about">
                {/* TODO: Replace this placeholder description with your event copy. */}
                Join thousands of developers, entrepreneurs, and tech
                enthusiasts for the largest technology conference of the year.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <Calendar size={16} /> <span>Sep 10, 2025</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <Clock size={16} /> <span>9:00 AM</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                  <MapPin size={16} /> <span>KIIT Campus 6, Auditorium</span>
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
                    <dd className="font-medium text-gray-900">2 Hours</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-gray-600">Location</dt>
                    <dd className="font-medium text-gray-900">
                      KIIT Campus 6, Auditorium
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
                desc: "Sundar Pichai",
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
                  <li>Reporing - 8:45</li>
                  <li>Conference Starts - 9:00</li>
                  <li>Food & Drinks - 10:00</li>
                  <li>Conference Ends - 11:00</li>
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
                Zero tolerance for harassment, discrimination, or disruptive
                behavior.
              </li>
              <li>
                All attendees must register with valid credentials (ID, ticket,
                badge).
              </li>
              <li>Stick to time limits for each session.</li>
              <li>Respect speakers, volunteers, and fellow attendees.</li>
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
                Campus 6, Auditorium
              </div>
              <div className="mt-4 aspect-video w-full rounded-xl bg-gray-100 grid place-items-center text-sm text-gray-500">
                {
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6596788308907!2d85.81683812523839!3d20.355673131130544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093d7c3543e3%3A0x494d26cdf873d62e!2sKIIT%20Auditorium%20Hall!5e0!3m2!1sen!2sin!4v1755882180660!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                }
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
                {
                  q: "Who can attend the conference?",
                  a: "The conference is open to developers, tech enthusiasts, entrepreneurs, students, and professionals from all backgrounds.",
                },
                {
                  q: "Is there a registration fee?",
                  a: "Yes, there is a nominal registration fee to cover costs. Early bird discounts are available.",
                },
                {
                  q: "Will there be food and drinks provided?",
                  a: "Yes, complimentary refreshments will be available during breaks.",
                },
                {
                  q: "How can I register?",
                  a: "Click the 'Register Now' button at the top of the page to secure your spot.",
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
                <span className="font-semibold">NYX Events</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">© 2020 NYX Events</p>
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
                    nyxevents@gmail.com
                  </a>
                </li>
                <li>Phone: +91‑987654321</li>
                <li>Address: KP 25 A</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
