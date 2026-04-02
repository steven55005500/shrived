import React from 'react';

const Services = () => {
  const servicesData = [
    { title: 'Web Development', desc: 'We build responsive, high-performance websites and web applications using modern frameworks.', list: ['Custom Website Design', 'E-commerce Solutions', 'Content Management Systems', 'API Integration'] },
    { title: 'Mobile Development', desc: 'Create engaging mobile experiences with our native and cross-platform development expertise.', list: ['iOS App Development', 'Android App Development', 'React Native / Flutter', 'Maintenance & Support'] },
    { title: 'Digital Marketing', desc: 'Boost your online presence with data-driven marketing strategies that deliver measurable results.', list: ['Search Engine Optimization', 'Pay-Per-Click Advertising', 'Social Media Marketing', 'Email Marketing'] },
    { title: 'IT Consulting', desc: 'Expert guidance to help you make informed technology decisions and optimize IT infrastructure.', list: ['Technology Strategy', 'Digital Transformation', 'Cloud Solutions', 'Security Audits'] },
    { title: 'Cloud Solutions', desc: 'Scalable and secure cloud infrastructure to power your business applications and data.', list: ['AWS/Azure/Google Cloud', 'Cloud Migration', 'DevOps Implementation', '24/7 Monitoring'] },
    { title: 'Data Analytics', desc: 'Turn your data into actionable insights with our advanced analytics and BI solutions.', list: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Real-time Dashboards'] }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50 pt-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-500">Comprehensive digital solutions tailored to your business needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {servicesData.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6 flex-grow">
              {s.list.map((item, idx) => (
                <li key={idx} className="flex items-start"><span className="text-primary mr-2">•</span>{item}</li>
              ))}
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-600 text-white py-2 rounded-md font-medium transition">Get Quote</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;