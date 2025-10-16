"use client";
import Link from "next/link";

// Sample products
const products = [
  {
    id: "104",
    title: "4K Ultra HD Smart TV",
    description:
      "50-inch LED Smart TV with 4K resolution, HDR, and built-in streaming apps.",
    price: 499.99,
    rating: 4.8,
  },
  {
    id: "105",
    title: "Wireless Headphones",
    description:
      "Over-ear Bluetooth headphones with active noise cancellation.",
    price: 149.99,
    rating: 4.6,
  },
  {
    id: "106",
    title: "Smartphone X200",
    description: "Latest smartphone with powerful processor and camera.",
    price: 699.99,
    rating: 4.7,
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-100 py-20 flex flex-col items-center text-center px-6">
        <h1 className="text-5xl font-extrabold text-pink-900 mb-6">
          Welcome to Our Store
        </h1>
        <p className="text-gray-700 text-lg mb-6 max-w-2xl">
          Discover the best products with amazing discounts. Shop your favorite
          electronics, accessories, and more!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-md shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-red-800">
                  Price: ${product.price}
                </p>
                <p className="font-semibold text-orange-800">
                  Rating: {product.rating}
                </p>
              </div>
              <Link
                href={`/product/${product.id}`}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-center"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
