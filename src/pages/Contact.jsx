import React from "react";

const Contact = () => {
  return (
    <div className="p-8 m-7 max-w-4xl mx-auto font-sans text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you!</p>
      </header>

      {/* Contact Info */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Get in Touch
          </h2>
          <p className="mb-2">
            📍 My College Ave, Khamaria, Uttar Pradesh, 221306
          </p>
          <p className="mb-2">📞 356789</p>
          <p className="mb-2">
            📧{" "}
            <a
              href="mailto:info@mycollege.edu"
              className="text-blue-600 underline"
            >
              info@mycollege.edu
            </a>
          </p>
        </div>

        {/* Embedded Map Placeholder (You can replace this with Google Maps iframe) */}
        <div>
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5356.996899283388!2d82.51036099999999!3d25.239476999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1749688870248!5m2!1sen!2sin"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Send a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              rows="5"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
