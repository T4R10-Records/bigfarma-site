import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const subscriptions = [
  {
    id: "SUB-001",
    name: "Pack Découverte Mensuel",
    status: "Actif",
    nextDelivery: "15 Dec 2023",
    price: "75.00€/mois",
    items: [
      { name: "AK-47", quantity: 1 },
      { name: "Northern Lights", quantity: 1 }
    ]
  }
];

export default function SubscriptionsPage({ onClose }) {
  return (
    <AccountLayout title="ABONNEMENTS" onClose={onClose}>
      <div className="space-y-6">
        {subscriptions.map((sub) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{sub.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {sub.status}
                </span>
              </div>
              <span className="font-medium text-emerald-600">{sub.price}</span>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CalendarIcon className="h-5 w-5" />
                <span>Prochaine livraison le {sub.nextDelivery}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CreditCardIcon className="h-5 w-5" />
                <span>Carte bancaire se terminant par 4242</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Produits inclus :</h4>
              {sub.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span>{item.name}</span>
                  <span className="text-sm text-gray-600">x{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
                Gérer l'abonnement
              </button>
              <button className="flex-1 border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50">
                Suspendre
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AccountLayout>
  );
}