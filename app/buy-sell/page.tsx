export default function BuySell() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Buy & Sell</h1>
          <p className="mt-2 text-gray-600">
            Buy and sell items with fellow DIT University students.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <input
          type="text"
           placeholder="Search lost items..."
           className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 sm:max-w-md"
         />

          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            + Sell an Item
          </button>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Engineering Calculator
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Scientific calculator in good condition.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₹500</span>
              <span className="text-sm text-gray-500">Used</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Study Table
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Compact study table suitable for hostel rooms.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₹1,200</span>
              <span className="text-sm text-gray-500">Used</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
              No Image
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Programming Books
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Collection of programming and computer science books.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₹800</span>
              <span className="text-sm text-gray-500">Like New</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}