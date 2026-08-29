const features = [
  {
    title: "Buy & Sell",
    description:
      "Buy and sell useful items within the DIT University student community.",
    href: "/buy-sell",
  },
  {
    title: "Lost & Found",
    description:
      "Report lost items or help fellow students find their belongings.",
    href: "/lost-found",
  },
  {
    title: "Notes + PYQs",
    description:
      "Find useful notes, study material, and previous year questions.",
    href: "/notes",
  },
  {
    title: "Events",
    description:
      "Discover upcoming events, competitions, workshops, and campus activities.",
    href: "/events",
  },
  {
    title: "Campus Feed",
    description:
      "Share updates, discussions, announcements, and useful information.",
    href: "/feed",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          DIT University Student Platform
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Everything DIT students need, in one place.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          DIT HUB is a student community platform where you can buy and sell
          items, find lost belongings, access notes and PYQs, discover events,
          and stay connected with campus life.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/feed"
            className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Explore Campus Feed
          </a>

          <a
            href="/notes"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Browse Resources
          </a>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore DIT HUB
        </h2>

        <p className="mt-2 text-gray-600">
          Everything you need to stay connected with the DIT community.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

              <p className="mt-6 font-semibold text-gray-900">
                Explore →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}