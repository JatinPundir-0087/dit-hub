export default function Notes() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Notes + PYQs
          </h1>

          <p className="mt-2 text-gray-600">
            Access useful notes, study material, and previous year questions.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search notes and PYQs..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 sm:max-w-md"
          />

          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            + Upload Resource
          </button>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Notes
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              DBMS Notes
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Complete notes covering database concepts, SQL, normalization, and transactions.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Computer Science
              </span>

              <button className="font-medium text-gray-900 hover:underline">
                View →
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              PYQ
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Data Structures PYQs
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Previous year questions for Data Structures and Algorithms.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Computer Science
              </span>

              <button className="font-medium text-gray-900 hover:underline">
                View →
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Notes
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Operating Systems
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Study material covering processes, memory management, and scheduling.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Computer Science
              </span>

              <button className="font-medium text-gray-900 hover:underline">
                View →
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              PYQ
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              DBMS Previous Year Questions
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Important previous year questions for DBMS exam preparation.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Computer Science
              </span>

              <button className="font-medium text-gray-900 hover:underline">
                View →
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}