import React from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

export default function QuickView({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle bg-white shadow-xl rounded-2xl"
            >
              <div className="flex justify-between items-start">
                <Dialog.Title className="text-lg font-medium">
                  {product.name}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviewCount} avis)
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600">{product.description}</p>
                    
                    <div className="flex gap-4">
                      <div>
                        <span className="text-sm text-gray-500">CBD</span>
                        <div className="font-medium">{product.cbd}%</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">THC</span>
                        <div className="font-medium">{product.thc}%</div>
                      </div>
                    </div>

                    <div>
                      <span className="text-sm text-gray-500">Prix</span>
                      <div className="text-xl font-bold text-emerald-600">
                        {product.prices['3.5'].price}€
                      </div>
                    </div>

                    <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2">
                      <ShoppingCartIcon className="h-5 w-5" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}