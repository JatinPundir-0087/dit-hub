export default function Events() {
  const events = [
    {
      title: "Tech Fest 2026",
      date: "March 15, 2026",
      location: "DIT University Campus",
      description:
        "A university-wide technology festival featuring competitions, workshops, and student projects.",
      category: "Technology",
    },
    {
      title: "Coding Competition",
      date: "March 20, 2026",
      location: "Computer Science Department",
      description:
        "Test your programming and problem-solving skills against fellow DIT students.",
      category: "Competition",
    },
    {
      title: "Cultural Night",
      date: "March 28, 2026",
      location: "University Auditorium",
      description:
        "An evening of music, dance, performances, and celebrations by DIT students.",
      category: "Cultural",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Events
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              Discover what&apos;s happening around DIT University.
            </p>
          </div>

          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
            + Create Event
          </button>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none transition focus:border-gray-500"
          />
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {event.category}
                </span>

                <span className="text-sm text-gray-500">
                  Upcoming
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                {event.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {event.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">Date: </span>
                  {event.date}
                </p>

                <p>
                  <span className="font-medium text-gray-900">
                    Location:{" "}
                  </span>
                  {event.location}
                </p>
              </div>

              <button className="mt-6 font-semibold text-gray-900 hover:underline">
                View Details →
              </button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}