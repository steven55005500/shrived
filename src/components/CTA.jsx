import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="mb-8 font-light max-w-2xl mx-auto px-4">
        Let's discuss how we can help you achieve your digital goals. Our team is ready to provide customized solutions for your unique needs.
      </p>
      <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
        Get a Free Consultation
      </button>
    </section>
  );
};

export default CTA;