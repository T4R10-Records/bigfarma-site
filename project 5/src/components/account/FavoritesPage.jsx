import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { StarIcon, TrashIcon } from '@heroicons/react/24/outline';

const favorites = [
  {
    id: 1,
    name: "AK-47",
    image: "/ak47-character.png",
    price: "75.00€",
    rating: 5,
    inStock: true
  },
  {
    id: 2,
    name: "Northern Lights",
    image: "/northern-lights-character.png",
    price: "75.00€",
    rating: 4,
    inStock: false
  }
];

export default function FavoritesPage({ onClose }) {
  return (
    <AccountLayout title="LISTE DE FAVORIS" onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favorites.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border p-4"
          >
            <div className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <button className="text-gray-400 hover:text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-2">
                  <span className="font-medium text-emerald-600">{product.price}</span>
                </div>
                <div className="mt-2">
                  {product.inStock ? (
                    <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
                      Ajouter au panier
                    </button>
                  ) : (
                    <button disabled className="w-full bg-gray-100 text-gray-400 py-2 rounded-lg cursor-not-allowed">
                      Rupture de stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AccountLayout>
  );
}