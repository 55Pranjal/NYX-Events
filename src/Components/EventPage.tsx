// components/EventPage.tsx
import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Share2,
  Info,
  Users,
} from "lucide-react";

export default function EventPage({ data }: { data: any }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">
              {data.title}
            </h1>
            <p className="mt-3 text-base text-gray-600">{data.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                <Calendar size={16} /> {data.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                <Clock size={16} /> {data.time}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5">
                <MapPin size={16} /> {data.location}
              </span>
              <button className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 hover:bg-gray-100">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Quick Facts */}
          <aside className="md:col-span-1">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Info size={16} /> Quick facts
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">Registration</dt>
                  <dd className="font-medium text-gray-900">
                    {data.registrationStatus}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">Location</dt>
                  <dd className="font-medium text-gray-900">{data.location}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Guest */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
          {data.guest && (
            <div className="rounded-2xl border p-6 bg-white flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-gray-100 grid place-items-center">
                <Users size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Guest</h3>
                <p className="text-sm text-gray-600 mt-1">{data.guest}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Agenda */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold">Agenda</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {data.agenda.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold">Rules & Guidelines</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
            {data.rules.map((rule: string, idx: number) => (
              <li key={idx}>{rule}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-6 divide-y rounded-2xl border bg-white">
            {data.faqs.map((faq: any, idx: number) => (
              <details key={idx} className="group p-5">
                <summary className="flex justify-between gap-4 text-sm font-bold cursor-pointer">
                  {faq.q}
                  <span className="transition group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-sm text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
