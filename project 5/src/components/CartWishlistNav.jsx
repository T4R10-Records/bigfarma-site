import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, TrashIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

export default function CartWishlistNav({ isOpen, type, onClose, onCheckout }) {
  const { items, freeItems, removeItem, updateQuantity, getSubtotal, getPackDiscounts, getTotal } = useCart();

  const handleRemoveItem = (item) => {
    removeItem(item.id, item.weight);
  };

  const handleQuantityChange = (item, change) => {
    updateQuantity(item.id, item.weight, change);
  };

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
            transition={{ type: 'tween', duration: 0.3 }}
            className={clsx(
              'fixed inset-y-0 right-0 bg-white shadow-lg z-50',
              'w-full sm:max-w-md md:max-w-lg',
              'flex flex-col'
            )}
          >
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                {type === 'cart' ? (
                  <>
                    <ShoppingBagIcon className="h-6 w-6" />
                    Mon Panier
                  </>
                ) : (
                  <>
                    <HeartIcon className="h-6 w-6" />
                    Mes Favoris
                  </>
                )}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {type === 'cart' ? (
                items.length > 0 ? (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.weight}`} className="flex gap-4 py-4 border-b">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">
                                {item.name}
                                {item.isPack && (
                                  <span className="ml-2 text-sm text-emerald-600 font-medium">
                                    Pack {item.range}
                                  </span>
                                )}
                              </h3>
                              <div className="text-sm text-gray-500">
                                {item.weight}g
                                {item.isPack && (
                                  <span className="ml-2 text-emerald-600">
                                    (Économie: {(item.originalPrice - item.packPrice).toFixed(2)}€)
                                  </span>
                                )}
                              </div>
                            </div>
                            <button 
                              onClick={() => handleRemoveItem(item)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleQuantityChange(item, -1)}
                                className="w-6 h-6 rounded-full border flex items-center justify-center"
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button 
                                onClick={() => handleQuantityChange(item, 1)}
                                className="w-6 h-6 rounded-full border flex items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-medium text-emerald-600">
                              {(item.isPack ? item.packPrice : item.prices[item.weight].price).toFixed(2)}€
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingBagIcon className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-gray-500">Votre panier est vide</p>
                  </div>
                )
              ) : (
                <div className="text-center py-8">
                  <HeartIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-500">Votre liste de favoris est vide</p>
                </div>
              )}
            </div>

            {type === 'cart' && items.length > 0 && (
              <div className="border-t p-4 md:p-6 space-y-4">
                {/* Free Items */}
                {freeItems.length > 0 && (
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h3 className="font-medium text-emerald-700 mb-2">Offerts avec votre commande :</h3>
                    {freeItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="text-emerald-600">{item.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sous-total</span>
                    <span>{getSubtotal().toFixed(2)}€</span>
                  </div>
                  {getPackDiscounts() > 0 && (
                    <div className="flex justify-between text-sm text-emerald-600">
                      <span>Réduction pack</span>
                      <span>-{getPackDiscounts().toFixed(2)}€</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>{getTotal().toFixed(2)}€</span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
                >
                  Commander
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}