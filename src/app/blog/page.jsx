import Link from "next/link";

// Sample blog posts (replace with your own JSON if needed)
const blogPosts = [
  {
    id: "1",
    title: "Top 10 Electronics Trends in 2025",
    excerpt: "Discover the most exciting electronics trends shaping the future this year.",
    date: "October 17, 2025",
  },
  {
    id: "2",
    title: "How to Choose the Best Smart TV",
    excerpt: "A complete guide to selecting the perfect Smart TV for your home.",
    date: "October 10, 2025",
  },
  {
    id: "3",
    title: "5 Must-Have Accessories for Your Smartphone",
    excerpt: "Boost your smartphone experience with these essential accessories.",
    date: "October 5, 2025",
  },
];

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-pink-900 mb-12">Our Blog</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold text-purple-700">{post.title}</h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <Link
                href={`/blog/${post.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default page;