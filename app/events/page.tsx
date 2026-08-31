export default function Events() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Events
          </h1>

          <p className="mt-2 text-gray-600">
            Discover upcoming events, competitions, workshops, and campus activities.
          </p>
        </div>

        {/* Search and Create Button */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
  type="text"
  placeholder="Search events..."
  className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-500"
/>

          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            + Create Event
          </button>
        </div>

        {/* Events Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Event 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              Event Image
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Competition
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              DIT Hackathon 2026
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Join fellow students for an exciting coding and innovation challenge.
            </p>

            <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
              <p>📅 15 September 2026</p>
              <p className="mt-1">📍 DIT University Campus</p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              Event Image
            </div>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Workshop
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              AI & Machine Learning Workshop
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Learn the fundamentals of artificial intelligence and machine learning.
            </p>

            <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
              <p>📅 20 September 2026</p>
              <p className="mt-1">📍 Seminar Hall</p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              Event Image
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Campus Event
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Cultural Fest
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Celebrate music, dance, art, and culture with the DIT student community.
            </p>

            <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
              <p>📅 28 September 2026</p>
              <p className="mt-1">📍 Main Auditorium</p>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}