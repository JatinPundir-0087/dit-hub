"use client";

import { useState } from "react";

type Post = {
  author: string;
  category: string;
  title: string;
  content: string;
  time: string;
  likes: number;
  comments: number;
};

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([
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
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Discussion");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    if (
      author.trim() === "" ||
      title.trim() === "" ||
      content.trim() === ""
    ) {
      return;
    }

    const newPost: Post = {
      author,
      category,
      title,
      content,
      time: "Just now",
      likes: 0,
      comments: 0,
    };

    setPosts([newPost, ...posts]);

    setAuthor("");
    setCategory("Discussion");
    setTitle("");
    setContent("");
    setShowForm(false);
  };

  const filteredPosts = posts.filter((post) =>
    `${post.author} ${post.category} ${post.title} ${post.content}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
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

          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            {showForm ? "Cancel" : "+ Create Post"}
          </button>
        </div>

        {/* Create Post Form */}
        {showForm && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Create a New Post
            </h2>

            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500"
              >
                <option>Discussion</option>
                <option>Announcement</option>
                <option>Campus Life</option>
                <option>Question</option>
              </select>

              <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
              />

              <textarea
                placeholder="Write your post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
              />

              <button
                onClick={handleCreatePost}
                className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Publish Post
              </button>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none transition focus:border-gray-500"
          />
        </div>

        {/* Posts */}
        <section className="mt-8 space-y-5">
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500 shadow-sm">
              No posts found.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={`${post.title}-${post.author}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                      {post.author.charAt(0).toUpperCase()}
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
            ))
          )}
        </section>
      </div>
    </main>
  );
}