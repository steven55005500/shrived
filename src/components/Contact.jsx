import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-[#f4f7fb]">

      {/* Heading */}
      <div className="text-center mb-16 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Have a project in mind? Let's discuss how we can help you achieve your digital goals.
        </p>
      </div>

      {/* ✅ Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column */}
        <div className="bg-white p-8 rounded-xl shadow border border-gray-100 h-fit">
          <h3 className="text-lg font-bold text-primary mb-8">Contact Information</h3>

          <ul className="space-y-6 text-sm text-gray-600">
            <li className="flex items-start">
              <MapPin className="text-primary mr-4 shrink-0 mt-1" size={20} />
              <span className="leading-relaxed">
                Office No. 205, Tech Park Plaza,<br/>
                S.V. Road, Malad West,<br/>
                Mumbai, Maharashtra 400064,<br/>
                India
              </span>
            </li>

            <li className="flex items-center">
              <Phone className="text-primary mr-4 shrink-0" size={20} />
              <span>+91 9453345344</span>
            </li>

            <li className="flex items-center">
              <Mail className="text-primary mr-4 shrink-0" size={20} />
              <span>contact@shrivedh.com</span>
            </li>

            <li className="flex items-center">
              <Clock className="text-primary mr-4 shrink-0" size={20} />
              <span>Mon-Sat: 9:00 AM - 6:00 PM IST</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl shadow border border-gray-100">
          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="input" />
              <input type="email" placeholder="Your Email" className="input" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="tel" placeholder="Phone Number" className="input" />
              <select className="input text-gray-400">
                <option value="">Select Service</option>
                <option value="web">Web Development</option>
                <option value="app">Mobile Development</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <textarea
              placeholder="Tell us about your project"
              rows="5"
              className="input resize-none"
            ></textarea>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-xs text-gray-500">
                I agree to Terms & Privacy Policy.
              </label>
            </div>

            <button className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-3 rounded-md">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;