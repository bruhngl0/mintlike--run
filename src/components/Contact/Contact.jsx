import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="bg-white p-4 shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="w-full py-2 px-3 border border-gray-300 rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="w-full py-2 px-3 border border-gray-300 rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" className="w-full py-2 px-3 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
