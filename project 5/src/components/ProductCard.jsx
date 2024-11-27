import React from 'react';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { showToast } from './Toast';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

export default function ProductCard({ product, onProductSelect }) {
  const { addItem } = useCart();

  const getBadgeColor = (range) => {
    const colors = {
      'Signature': 'bg-purple-600',
      'Premium': 'bg-amber-600',
      'Découverte': 'bg-emerald-600'
    };
    return colors[range] || 'bg-emerald-600';
  };

  const getPriceDisplay = () => {
    if (product.prices && product.prices['3.5']) {
      const basePrice = product.prices['3.5'];
      return {
        price: basePrice.price,
        pricePerGram: basePrice.pricePerGram
      };
    } else {
      return {
        price: product.price,
        pricePerGram: null
      };
    }
  };

  const priceDisplay = getPriceDisplay();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, '3.5', 1);
    showToast(`${product.name} ajouté au panier !`);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    showToast(`${product.name} ajouté aux favoris !`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className={`${getBadgeColor(product.range)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {product.range}
        </span>
        <span className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-medium border border-emerald-600">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div 
        className="relative aspect-square bg-gray-50 flex items-center justify-center p-4 cursor-pointer"
        onClick={() => onProductSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        
        {/* Effects Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {product.effects?.slice(0, 2).map((effect, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700"
            >
              {effect}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${
                i < product.rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
          {product.reviewCount && (
            <span className="text-xs text-gray-500 ml-2">
              ({product.reviewCount})
            </span>
          )}
        </div>

        {/* CBD/THC Info */}
        <div className="flex gap-4 mt-2 text-sm">
          <span className="text-emerald-600">CBD: {product.cbd}%</span>
          <span className="text-gray-600">THC: {product.thc}%</span>
        </div>

        {/* Price & Action */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-sm text-gray-500">À partir de</div>
              <div className="font-bold text-emerald-600">{priceDisplay.price}€</div>
              {priceDisplay.pricePerGram && (
                <div className="text-xs text-gray-500">{priceDisplay.pricePerGram}</div>
              )}
            </div>
            <button
              onClick={handleAddToWishlist}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onProductSelect(product)}
              className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
            >
              Choisir
            </button>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-emerald-100 text-emerald-700 p-2 rounded-lg hover:bg-emerald-200 transition-colors"
            >
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}