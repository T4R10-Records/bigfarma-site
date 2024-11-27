import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../data/constants.jsx';

function IconSection({ onCategorySelect }) {
  const scrollToProducts = (category) => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    onCategorySelect(category);
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-8">
      {PRODUCT_CATEGORIES.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => scrollToProducts(item.name)}
        >
          <div className="text-gray-600 group-hover:text-emerald-600 transition-colors">
            {item.icon}
          </div>
          <span className="text-sm mt-2 text-center">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default IconSection;