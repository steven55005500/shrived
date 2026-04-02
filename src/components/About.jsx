import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About SHRIVEDH</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            SHRIVEDH is a leading digital agency specializing in web development, mobile applications, and digital marketing solutions. Founded by Mr vivek, we help businesses establish and grow their online presence.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Meet Our Leadership</h3>
          <div className="flex justify-center">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 w-64 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                S
              </div>
              <h4 className="font-bold text-lg text-gray-900">Miss Shruti </h4>
              <p className="text-sm text-primary font-medium mt-1">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;