import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- Router Link add kiya hai

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-12 px-6 md:px-10">
      {/* Mobile pe 1 column, Tablet pe 2, PC pe 4 columns (Responsive Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">SHRIVEDH</h3>
          <div className="w-10 h-1 bg-teal-500 mb-4"></div>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            We provide high-quality digital solutions including web, mobile, and marketing services to help businesses grow.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Services</h4>
          <div className="w-8 h-1 bg-teal-500 mb-4"></div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-teal-400 transition">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition">App Development</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition">SEO & Marketing</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition">UI/UX Design</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Company</h4>
          <div className="w-8 h-1 bg-teal-500 mb-4"></div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-teal-400 transition">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-teal-400 transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
            <li><Link to="#" className="hover:text-teal-400 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
          <div className="w-8 h-1 bg-teal-500 mb-4"></div>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start">
              <MapPin className="text-teal-500 mr-3 shrink-0 mt-1" size={18} />
              <span className="leading-relaxed">
                Office No. 205, Tech Park Plaza,<br/>
                S.V. Road, Malad West,<br/>
                Mumbai, Maharashtra 400064,<br/>
                India
              </span>
            </li>

            <li className="flex items-center">
              <Phone className="text-teal-500 mr-3 shrink-0" size={18} />
              <span>+91 9453345344</span>
            </li>

            <li className="flex items-center">
              <Mail className="text-teal-500 mr-3 shrink-0" size={18} />
              <span>contact@shrivedh.com</span>
            </li>

            <li className="flex items-center">
              <Clock className="text-teal-500 mr-3 shrink-0" size={18} />
              <span>Mon-Sat: 9AM - 6PM IST</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700/50 text-sm text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
        <p>&copy; {new Date().getFullYear()} SHRIVEDH. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/terms" className="hover:text-teal-400 transition">Terms</Link>
          <Link to="/privacy" className="hover:text-teal-400 transition">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;