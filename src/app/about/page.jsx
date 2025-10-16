import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 px-6 text-center">
          <h1 className="text-5xl font-extrabold text-pink-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Welcome to our e-commerce store! We are dedicated to providing the
            best products with amazing discounts. Our mission is to deliver
            quality, reliability, and excellent customer experience.
          </p>
        </section>

        {/* Features / Info Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-pink-900">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide high-quality products at affordable prices, ensuring
                customer satisfaction and trust.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted online store by offering innovative
                solutions and exceptional service.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, transparency, and a customer-first approach in
                everything we do.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
