import React from 'react';

const page = () => {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen py-20 px-6 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-pink-900 mb-6 text-center">Contact Us</h1>
      <p className="text-gray-700 text-lg max-w-3xl text-center mb-12">
        Have questions or want to get in touch? Fill out the form below and we will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="bg-white p-10 rounded-xl shadow-md w-full max-w-xl flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            rows="5"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
        </div>
    );
};

export default page;