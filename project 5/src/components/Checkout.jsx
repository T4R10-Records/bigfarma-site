import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import { ChevronRightIcon, TruckIcon, GiftIcon } from '@heroicons/react/24/outline';
import { showToast } from './Toast';
import clsx from 'clsx';

const DELIVERY_OPTIONS = [
  {
    id: 'standard',
    name: 'Livraison Standard',
    description: '2-3 jours ouvrés',
    price: 4.99
  },
  {
    id: 'express',
    name: 'Livraison Express',
    description: '24h ouvrées',
    price: 9.99
  },
  {
    id: 'paris',
    name: 'Paris & Île-de-France',
    description: 'Livraison en 1h',
    price: 14.99,
    restricted: true
  }
];

export default function Checkout({ onClose }) {
  const { items, freeItems, getSubtotal, getPackDiscounts, getTotal } = useCart();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const postalCode = watch('postalCode');

  const isParisDelivery = () => {
    return postalCode?.startsWith('75') || 
           (postalCode >= '77000' && postalCode <= '95999');
  };

  const onSubmit = (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      showToast('Commande confirmée !');
      onClose();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex items-center">
                  <div className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center',
                    step >= number ? 'bg-emerald-600 text-white' : 'bg-gray-200'
                  )}>
                    {number}
                  </div>
                  {number < 3 && (
                    <div className={clsx(
                      'h-1 w-24 mx-2',
                      step > number ? 'bg-emerald-600' : 'bg-gray-200'
                    )} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>Livraison</span>
              <span>Paiement</span>
              <span>Confirmation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <>
                      <h2 className="text-xl font-bold mb-4">Informations de livraison</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Prénom
                          </label>
                          <input
                            {...register('firstName', { required: true })}
                            className={clsx(
                              'w-full p-2 border rounded-lg',
                              errors.firstName && 'border-red-500'
                            )}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nom
                          </label>
                          <input
                            {...register('lastName', { required: true })}
                            className={clsx(
                              'w-full p-2 border rounded-lg',
                              errors.lastName && 'border-red-500'
                            )}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>
                          )}
                        </div>
                      </div>

                      {/* Rest of the form fields with similar validation */}
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h2 className="text-xl font-bold mb-4">Paiement</h2>
                      {/* Payment form fields */}
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h2 className="text-xl font-bold mb-4">Confirmation</h2>
                      {/* Order summary and confirmation */}
                    </>
                  )}

                  <div className="flex justify-between pt-4 border-t">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-emerald-600 font-medium"
                      >
                        Retour
                      </button>
                    )}
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 ml-auto"
                    >
                      {step === 3 ? 'Confirmer la commande' : 'Continuer'}
                      <ChevronRightIcon className="h-5 w-5 inline-block ml-2" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6 space-y-4"
              >
                <h2 className="text-xl font-bold">Récapitulatif</h2>

                <div className="divide-y">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.weight}`} className="py-3 flex justify-between">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.weight}g</div>
                      </div>
                      <div className="font-medium">
                        {(item.prices[item.weight].price * item.quantity).toFixed(2)}€
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free Items */}
                {freeItems.length > 0 && (
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-700 mb-2">
                      <GiftIcon className="h-5 w-5" />
                      <span className="font-medium">Offerts avec votre commande</span>
                    </div>
                    {freeItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="text-emerald-600">Offert</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-2 pt-4">
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
                  <div className="flex justify-between text-sm">
                    <span>Livraison</span>
                    <span>
                      {DELIVERY_OPTIONS.find(opt => opt.id === watch('delivery'))?.price.toFixed(2)}€
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>
                      {(
                        getTotal() +
                        (DELIVERY_OPTIONS.find(opt => opt.id === watch('delivery'))?.price || 0)
                      ).toFixed(2)}€
                    </span>
                  </div>
                </div>

                {/* Estimated Delivery */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <TruckIcon className="h-5 w-5" />
                    <span>Livraison estimée :</span>
                  </div>
                  <div className="font-medium mt-1">
                    {watch('delivery') === 'paris'
                      ? 'Aujourd\'hui en 1h'
                      : watch('delivery') === 'express'
                      ? 'Demain'
                      : 'Dans 2-3 jours ouvrés'}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}