export default function LostFound() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Lost & Found
          </h1>

          <p className="mt-2 text-gray-600">
            Help DIT students find their lost belongings.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
  type="text"
  placeholder="Search lost items..."
  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:border-gray-500 sm:max-w-md"
/>
          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            + Report Lost Item
          </button>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Lost
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Black Wallet
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Lost near the main library.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Reported recently
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Found
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Student ID Card
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Found near the cafeteria.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Reported recently
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Lost
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Blue Water Bottle
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Lost around the sports complex.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Reported recently
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}