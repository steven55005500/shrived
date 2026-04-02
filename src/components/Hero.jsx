import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-24 px-6 md:px-4 text-center mx-4 mt-4 rounded-2xl shadow-lg">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Innovative Digital Solutions</h1>
      <p className="text-base md:text-xl mb-8 font-light max-w-3xl mx-auto opacity-90">
        Transforming your business with cutting-edge technology and creative strategies.
      </p>
      
      {/* Yahan changes kiye hain - flex-col se mobile pe stack honge */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-full sm:w-auto bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
          Get Started
        </button>
        <button className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
          Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;