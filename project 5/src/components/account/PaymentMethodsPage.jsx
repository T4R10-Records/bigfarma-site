import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { CreditCardIcon, TrashIcon } from '@heroicons/react/24/outline';

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/24",
    isDefault: true
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "09/25",
    isDefault: false
  }
];

export default function PaymentMethodsPage({ onClose }) {
  return (
    <AccountLayout title="MOYENS DE PAIEMENT" onClose={onClose}>
      <div className="space-y-6">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border p-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <CreditCardIcon className="h-8 w-8 text-gray-400" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{method.type} •••• {method.last4}</span>
                    {method.isDefault && (
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                        Par défaut
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">Expire {method.expiry}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {!method.isDefault && (
                  <button className="text-sm text-emerald-600 hover:text-emerald-700">
                    Définir par défaut
                  </button>
                )}
                <button className="text-gray-400 hover:text-red-500">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">
          Ajouter une carte
        </button>
      </div>
    </AccountLayout>
  );
}