import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { TABS } from '../data/constants.jsx';
import { useCart } from '../context/CartContext';
import { showToast } from './Toast';
import PackSelector from './PackSelector';
import ProductVideo from './ProductVideo';
import ProductReviews from './ProductReviews';
import clsx from 'clsx';

function ProductSidenav({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState('3.5');
  const [showBundleModal, setShowBundleModal] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const contentRef = useRef(null);
  const { addItem } = useCart();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAddToCart = () => {
    addItem(product, selectedSize, 1);
    showToast(`${product.name} ${selectedSize}g ajouté au panier !`);
  };

  const handleAddToWishlist = () => {
    showToast(`${product.name} ajouté aux favoris !`);
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Product Image */}
              <div className="aspect-square bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* Tabs Navigation - Sticky */}
              <div className="sticky top-0 bg-white border-b z-10">
                <div className="flex space-x-4 px-4">
                  {TABS.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={clsx(
                        'py-4 px-1 text-sm font-medium border-b-2 transition-colors',
                        activeTab === tab.id
                          ? 'border-emerald-600 text-emerald-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      )}
                    >
                      <tab.icon className="h-5 w-5 inline-block mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4" ref={contentRef}>
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Effets</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.effects?.map((effect, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                            >
                              {effect}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Arômes</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.aromas?.map((aroma, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                            >
                              {aroma}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'video' && (
                  <ProductVideo product={product} />
                )}

                {activeTab === 'reviews' && (
                  <ProductReviews product={product} />
                )}
              </div>
            </div>

            {/* Footer - Always visible */}
            <div className="border-t p-4 bg-white">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-500">Prix pour {selectedSize}g</div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {product.prices?.[selectedSize]?.price}€
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.prices?.[selectedSize]?.pricePerGram}
                  </div>
                </div>
                <button
                  onClick={handleAddToWishlist}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <HeartIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {Object.keys(product.prices || {}).map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedSize(weight)}
                    className={clsx(
                      'py-2 px-3 rounded text-sm font-medium border transition-colors',
                      selectedSize === weight
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                        : 'border-gray-300 hover:border-emerald-600 hover:bg-emerald-50'
                    )}
                  >
                    {weight}g
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  Ajouter au panier
                </button>
                <button
                  onClick={() => setShowBundleModal(true)}
                  className="flex-1 border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50"
                >
                  Créer un pack
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bundle Modal */}
          <AnimatePresence>
            {showBundleModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 overflow-y-auto"
              >
                <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <PackSelector
                        product={product}
                        onClose={() => setShowBundleModal(false)}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProductSidenav;