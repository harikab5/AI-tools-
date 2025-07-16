import React from "react";

const ContactUs = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <div className="mb-6">
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="200"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
    <form className="mb-6">
      <input type="text" placeholder="Your Name" className="block mb-2 p-2 border rounded w-full" />
      <input type="email" placeholder="Your Email" className="block mb-2 p-2 border rounded w-full" />
      <textarea placeholder="Your Message" className="block mb-2 p-2 border rounded w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
    <div>
      <h2 className="font-semibold">Contact Info</h2>
      <p>Email: info@aitools.com</p>
      <p>Phone: +1 234 567 890</p>
    </div>
  </div>
);

export default ContactUs;