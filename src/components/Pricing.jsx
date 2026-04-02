import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 pt-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
        <p className="text-gray-500">Flexible pricing plans to suit your business needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-4xl font-bold">$99<span className="text-lg font-normal">/month</span></p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Basic Website Design</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> 5 Pages</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mobile Responsive</li>
              <li className="flex items-center text-gray-400"><X size={18} className="text-red-400 mr-2" /> E-commerce Functionality</li>
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-600 text-white py-2 rounded-md font-medium transition">Get Started</button>
          </div>
        </div>

        {/* Business */}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden transform md:-translate-y-4 relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
          <div className="bg-primary text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Business</h3>
            <p className="text-4xl font-bold">$299<span className="text-lg font-normal">/month</span></p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Custom Website Design</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Up to 15 Pages</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> E-commerce Functionality</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Priority Support</li>
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-600 text-white py-2 rounded-md font-medium transition">Get Started</button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold">$599<span className="text-lg font-normal">/month</span></p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Custom Web Application</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Unlimited Pages</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Advanced E-commerce</li>
              <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> 24/7 Support</li>
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-600 text-white py-2 rounded-md font-medium transition">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;