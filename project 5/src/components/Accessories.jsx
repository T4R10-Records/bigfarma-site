import React from 'react';
import ProductCard from './ProductCard';

const accessories = [
  {
    id: 1,
    name: 'Vaporisateur Électronique',
    image: 'https://placehold.co/400x300/emerald/white?text=VAPE',
    category: 'Vape',
    rating: 5,
    thc: 0,
  },
  {
    id: 2,
    name: 'Grinder Premium',
    image: 'https://placehold.co/400x300/emerald/white?text=GRINDER',
    category: 'Accessoire',
    rating: 4,
    thc: 0,
  },
  {
    id: 3,
    name: 'Papers Bio',
    image: 'https://placehold.co/400x300/emerald/white?text=PAPERS',
    category: 'Accessoire',
    rating: 5,
    thc: 0,
  },
  {
    id: 4,
    name: 'Bong en Verre',
    image: 'https://placehold.co/400x300/emerald/white?text=BONG',
    category: 'Accessoire',
    rating: 4,
    thc: 0,
  }
];

function Accessories({ onProductSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {accessories.map((accessory) => (
        <ProductCard 
          key={accessory.id} 
          product={accessory}
          onProductSelect={onProductSelect}
        />
      ))}
    </div>
  );
}

export default Accessories;