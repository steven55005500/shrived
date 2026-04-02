import React from 'react';
import { Lightbulb, Users, LineChart } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 px-10 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
      <p className="text-gray-500 mb-12">We offer comprehensive digital solutions to grow your business</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Lightbulb size={32} />
          </div>
          <h4 className="font-bold mb-2 text-primary">Innovative Solutions</h4>
          <p className="text-sm text-gray-500">We stay ahead of industry trends to provide cutting-edge solutions that give you a competitive edge.</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Users size={32} />
          </div>
          <h4 className="font-bold mb-2 text-primary">Client-Centric Approach</h4>
          <p className="text-sm text-gray-500">Your success is our priority. We tailor our services to meet your specific business needs and goals.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <LineChart size={32} />
          </div>
          <h4 className="font-bold mb-2 text-primary">Proven Results</h4>
          <p className="text-sm text-gray-500">Our track record speaks for itself with numerous successful projects and satisfied clients.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;