import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // <-- Naya import

const Navbar = ({ onOpenLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        <Link to="/" className="text-xl md:text-2xl font-bold text-primary tracking-wide">
          SHRIVEDH
        </Link>
        
        {/* Desktop Links (Mobile pe hide rahenge) */}
       <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
  <Link to="/" className="hover:text-primary transition">Home</Link>
  <Link to="/services" className="hover:text-primary transition">Services</Link>
  <Link to="/portfolio" className="hover:text-primary transition">Portfolio</Link>
  <Link to="/pricing" className="hover:text-primary transition">Pricing</Link>
  <Link to="/about" className="hover:text-primary transition">About Us</Link>
  <Link to="/contact" className="hover:text-primary transition">Contact</Link>

  {/* ✅ Same style as others */}
  <Link to="/terms" className="hover:text-primary transition">
    Terms
  </Link>

  <Link to="/privacy" className="hover:text-primary transition">
    Privacy
  </Link>
</div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onOpenLogin}
            className="bg-primary hover:bg-indigo-600 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition flex items-center gap-2"
          >
            {/* Mobile pe sirf "Login" dikhega, PC pe "Login/Register" */}
            <span className="hidden sm:inline">Login/Register</span>
            <span className="sm:hidden">Login</span>
          </button>

          {/* Hamburger Menu Button (Sirf Mobile pe) */}
          <button 
            className="md:hidden text-gray-600 p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
<div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-xl absolute w-full">

  <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Home</Link>

  <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Services</Link>

  <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Portfolio</Link>

  <Link to="/pricing" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Pricing</Link>

  <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">About Us</Link>

  <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Contact</Link>

  {/* 🔥 Divider for clean separation */}
  

  {/* ✅ Same style as above (not small text) */}
  <Link to="/terms" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">
    Terms & Conditions
  </Link>

  <Link to="/privacy" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">
    Privacy Policy
  </Link>

</div>
        
      )}
    </nav>
  );
};

export default Navbar;