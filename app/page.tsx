export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          DIT HUB
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          The independent student platform for DIT University.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm">
            <h2 className="text-xl font-semibold">Buy & Sell</h2>
            <p className="mt-2 text-sm text-gray-600">
              Buy and sell items with fellow DIT students.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm">
            <h2 className="text-xl font-semibold">Lost & Found</h2>
            <p className="mt-2 text-sm text-gray-600">
              Help students find their lost belongings.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm">
            <h2 className="text-xl font-semibold">Notes + PYQs</h2>
            <p className="mt-2 text-sm text-gray-600">
              Find and share useful academic resources.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm">
            <h2 className="text-xl font-semibold">Events</h2>
            <p className="mt-2 text-sm text-gray-600">
              Discover what's happening around campus.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 text-left shadow-sm sm:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-semibold">Campus Feed</h2>
            <p className="mt-2 text-sm text-gray-600">
              A place for the DIT student community to share updates,
              discussions, and useful information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}