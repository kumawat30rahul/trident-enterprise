import React, { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    foundUs: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white text-gray-700 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-red-600 mb-2">CONTACT OUR TEAM</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reach Out to Us
        </h1>
        <p className="mb-8">
          Whether you're looking for intricate custom designs, quick
          turnarounds, or expert advice, Gurukripa Industries is here to bring
          your vision to life with excellence in sheet metal manufacturing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2">Your Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full p-3 rounded bg-white border border-gray-300"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    className="w-full p-3 rounded bg-white border border-gray-300"
                    placeholder="Enter your contact number"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded bg-white border border-gray-300"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-2">How did you find us?</label>
                  <input
                    type="text"
                    name="foundUs"
                    className="w-full p-3 rounded bg-white border border-gray-300"
                    placeholder="Let us know how you found us"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  className="w-full p-3 rounded bg-white border border-gray-300"
                  placeholder="Type your message here"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition duration-300"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow-sm">
            <div className="mb-8">
              <h3 className="text-red-600 mb-2">OUR ADDRESS</h3>
              <p className="text-xl font-semibold text-gray-800">
                Outskirts of Mumbai,
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Maharashtra, India
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-red-600 mb-2">CONTACT EMAIL</h3>
              <p className="text-xl text-gray-800">contact@gurukripa.com</p>
            </div>

            <div className="mb-8">
              <h3 className="text-red-600 mb-2">CONTACT PHONE</h3>
              <p className="text-xl text-gray-800">+91-000-000-0000</p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
