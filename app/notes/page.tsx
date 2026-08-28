export default function Notes() {
  const resources = [
    {
      title: "Data Structures Notes",
      description: "Complete notes covering important Data Structures topics.",
      subject: "Data Structures",
      type: "Notes",
      semester: "Semester 3",
    },
    {
      title: "DBMS Previous Year Questions",
      description: "Previous year questions for Database Management Systems.",
      subject: "DBMS",
      type: "PYQ",
      semester: "Semester 4",
    },
    {
      title: "Operating Systems Notes",
      description: "Useful notes for Operating Systems exam preparation.",
      subject: "Operating Systems",
      type: "Notes",
      semester: "Semester 4",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Notes + PYQs
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find and share useful academic resources.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search notes and PYQs..."
            className="w-full max-w-xl rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none focus:border-gray-500"
          />

          <button className="rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white">
            + Upload Resource
          </button>
        </div>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {resource.type}
                </span>

                <span className="text-sm text-gray-500">
                  {resource.semester}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {resource.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {resource.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {resource.subject}
                </span>

                <button className="font-semibold text-gray-900 hover:underline">
                  View →
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}