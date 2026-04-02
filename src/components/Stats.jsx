import React from 'react';

const Stats = () => {
  const statsData = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Team Experts" },
    { number: "2+", label: "Years Experience" }
  ];

  return (
    <section className="px-6 md:px-10 py-12 -mt-6 md:-mt-10 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100 transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</h3>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;