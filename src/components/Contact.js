import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">We'd love to hear from you. Feel free to get in touch with us.</p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 p-2 w-full h-32 border rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
