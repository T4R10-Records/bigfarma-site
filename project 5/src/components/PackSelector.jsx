import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { showToast } from './Toast';
import clsx from 'clsx';

export default function PackSelector({ product, onClose }) {
  const { products } = useProducts();
  const { addItem } = useCart();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Filter products from the same range
  const availableProducts = Object.values(products)
    .flat()
    .filter(p => p.range === product.range);

  const handleQuantityChange = (productId, increment) => {
    setSelectedProducts(prev => {
      const existing = prev.find(p => p.id === productId);
      if (!existing && increment > 0) {
        return [...prev, { id: productId, quantity: 1 }];
      }
      
      return prev.map(p => {
        if (p.id === productId) {
          const newQuantity = Math.max(0, p.quantity + increment);
          return newQuantity === 0 ? null : { ...p, quantity: newQuantity };
        }
        return p;
      }).filter(Boolean);
    });
  };

  const getTotalQuantity = () => {
    return selectedProducts.reduce((sum, p) => sum + p.quantity, 0);
  };

  const handleSubmit = () => {
    if (getTotalQuantity() !== 3) {
      showToast('Veuillez sélectionner exactement 3 variétés supplémentaires', 'error');
      return;
    }

    // Add initial product
    addItem(product, '3.5', 1);

    // Add selected products
    selectedProducts.forEach(selection => {
      const selectedProduct = availableProducts.find(p => p.id === selection.id);
      if (selectedProduct) {
        addItem(selectedProduct, '3.5', selection.quantity);
      }
    });

    showToast('Pack ajouté au panier !');
    onClose();
  };

  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Pack {product.range}</h3>
        <p className="text-sm text-gray-600">
          Sélectionnez 3 variétés supplémentaires de 3,5g pour compléter votre pack.
        </p>
        <p className="text-sm text-emerald-600 mt-2">
          Variété initiale : {product.name} (3,5g)
        </p>
      </div>

      <div className="space-y-4">
        {availableProducts.map((p) => (
          <div key={p.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-sm text-gray-500">CBD: {p.cbd}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(p.id, -1)}
                className="p-1 rounded-full hover:bg-gray-100"
                disabled={!selectedProducts.find(sp => sp.id === p.id)}
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="w-8 text-center">
                {selectedProducts.find(sp => sp.id === p.id)?.quantity || 0}
              </span>
              <button
                onClick={() => handleQuantityChange(p.id, 1)}
                className="p-1 rounded-full hover:bg-gray-100"
                disabled={getTotalQuantity() >= 3 && !selectedProducts.find(sp => sp.id === p.id)}
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span>Variétés sélectionnées :</span>
          <span className="font-medium">{getTotalQuantity()} / 3</span>
        </div>
        <button
          onClick={handleSubmit}
          className={clsx(
            'w-full py-3 rounded-lg text-white transition-colors',
            getTotalQuantity() === 3
              ? 'bg-emerald-600 hover:bg-emerald-700'
              : 'bg-gray-400 cursor-not-allowed'
          )}
          disabled={getTotalQuantity() !== 3}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}