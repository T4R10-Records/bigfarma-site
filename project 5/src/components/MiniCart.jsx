import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MiniCart({ items, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50"
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Mon Panier ({items.length})</h3>
              <button onClick={onClose}>
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="p-4 border-b flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="text-sm text-gray-500">
                      {item.quantity} x {item.price}€
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <ShoppingBagIcon className="h-12 w-12 mx-auto mb-4" />
                <p>Votre panier est vide</p>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">
                  {items.reduce((sum, item) => sum + item.price * item.quantity, 0)}€
                </span>
              </div>
              <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700">
                Voir le panier
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}