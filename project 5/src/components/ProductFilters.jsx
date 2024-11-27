import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PRODUCT_CATEGORIES, PRODUCT_RANGES } from '../data/constants.jsx';
import clsx from 'clsx';

const effects = [
  'Relaxation',
  'Énergie',
  'Sommeil',
  'Anti-stress',
  'Anti-douleur',
  'Concentration'
];

function ProductFilters({ filters, onFilterChange, onClose }) {
  const [priceRange, setPriceRange] = useState(filters.maxPrice || 200);

  const handleFilterChange = (type, value) => {
    onFilterChange({
      ...filters,
      [type]: value
    });
  };

  const handleEffectToggle = (effect) => {
    const currentEffects = filters.effects || [];
    const newEffects = currentEffects.includes(effect)
      ? currentEffects.filter(e => e !== effect)
      : [...currentEffects, effect];
    handleFilterChange('effects', newEffects);
  };

  const handleReset = () => {
    setPriceRange(200);
    onFilterChange({
      category: '',
      range: '',
      effects: [],
      maxPrice: 200,
      xTremCBD: false,
      zeroTHC: false
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Filtres</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Catégories</h3>
          <div className="space-y-2">
            {PRODUCT_CATEGORIES.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.name}
                  onChange={() => handleFilterChange('category', category.name)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ranges */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Gammes</h3>
          <div className="space-y-2">
            {PRODUCT_RANGES.map((range) => (
              <label key={range.id} className="flex items-center">
                <input
                  type="radio"
                  name="range"
                  checked={filters.range === range.name}
                  onChange={() => handleFilterChange('range', range.name)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {range.name} - {range.description}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Effects */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Effets</h3>
          <div className="space-y-2">
            {effects.map((effect) => (
              <label key={effect} className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.effects || []).includes(effect)}
                  onChange={() => handleEffectToggle(effect)}
                  className="h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-700">{effect}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-900">Prix maximum</h3>
            <span className="text-sm text-gray-500">{priceRange}€</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            step="5"
            value={priceRange}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setPriceRange(value);
              handleFilterChange('maxPrice', value);
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Additional Options */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Options</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.xTremCBD}
                onChange={(e) => handleFilterChange('xTremCBD', e.target.checked)}
                className="h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-700">X-Trem CBD</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.zeroTHC}
                onChange={(e) => handleFilterChange('zeroTHC', e.target.checked)}
                className="h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-700">0% THC</span>
            </label>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="p-4 border-t">
        <button
          onClick={handleReset}
          className={clsx(
            'w-full py-2 px-4 rounded-lg text-sm font-medium',
            'bg-gray-100 text-gray-700 hover:bg-gray-200',
            'transition-colors duration-200'
          )}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
}

export default ProductFilters;