export default function Feed() {
  const posts = [
    {
      author: "Rahul Sharma",
      category: "Discussion",
      title: "Best places to study on campus?",
      content:
        "Looking for some quiet places around DIT University where I can study between classes. Any recommendations?",
      time: "2 hours ago",
      likes: 24,
      comments: 8,
    },
    {
      author: "Priya Verma",
      category: "Announcement",
      title: "Hackathon team members needed",
      content:
        "We are looking for two more students to join our team for the upcoming hackathon. Interested students can connect with us.",
      time: "4 hours ago",
      likes: 18,
      comments: 5,
    },
    {
      author: "Aman Singh",
      category: "Campus Life",
      title: "New food options near campus",
      content:
        "A few new food places have opened near the university. Has anyone tried them yet? Share your recommendations!",
      time: "Yesterday",
      likes: 31,
      comments: 12,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Campus Feed
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              Share updates, discussions, and useful information with the DIT
              student community.
            </p>
          </div>

          <button className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
            + Create Post
          </button>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none transition focus:border-gray-500"
          />
        </div>

        <section className="mt-8 space-y-5">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                      {post.author.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>

                      <p className="text-sm text-gray-500">
                        {post.time}
                      </p>
                    </div>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {post.category}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                {post.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {post.content}
              </p>

              <div className="mt-5 flex gap-6 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <button className="transition hover:text-gray-900">
                  ♡ {post.likes} Likes
                </button>

                <button className="transition hover:text-gray-900">
                  💬 {post.comments} Comments
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}