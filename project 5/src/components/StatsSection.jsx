import React from 'react';

const stats = [
  {
    value: "98%",
    description: "Clients Satisfaits de nos Produits CBD"
  },
  {
    value: "100%",
    description: "Produits Testés en Laboratoire"
  },
  {
    value: "24/7",
    description: "Service Client à votre Écoute"
  }
];

function StatsSection() {
  return (
    <div className="bg-emerald-50 rounded-lg p-12 my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-5xl font-bold text-emerald-600">{stat.value}</h3>
            <p className="mt-4 text-gray-700 text-lg">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;