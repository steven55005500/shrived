import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      name: 'FashionHub', 
      type: 'E-Commerce Platform', 
      tech: 'React, Node.js, MongoDB',
      // Fashion aur shopping ki image
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'FinTrust Bank', 
      type: 'Mobile Banking App', 
      tech: 'React Native, Firebase',
      // Mobile pe finance/banking ki image
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'MediCare Plus', 
      type: 'Healthcare Portal', 
      tech: 'Vue.js, Python',
      // Doctor/Medical tech ki image
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'TechGrow', 
      type: 'SEO Campaign', 
      tech: 'Analytics, Content',
      // Laptop aur growth charts ki image
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'FoodieExpress', 
      type: 'Restaurant App', 
      tech: 'Flutter, Firebase',
      // Tasty food ki image
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'DataVision', 
      type: 'Analytics Dashboard', 
      tech: 'D3.js, React',
      // Data dashboard ki image
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white pt-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-gray-500">Some of our recent projects that showcase our expertise</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            
            {/* Image Box - Yahan ab placeholder ki jagah asli image aayegi */}
            <div className="h-56 overflow-hidden relative">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            
            {/* Content Box */}
            <div className="p-6">
              <p className="text-xs text-primary font-bold mb-2 uppercase tracking-wider">{p.type}</p>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{p.tech}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;