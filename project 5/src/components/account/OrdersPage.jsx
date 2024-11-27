import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { TruckIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const orders = [
  {
    id: "CMD-2023-001",
    date: "15 Nov 2023",
    status: "En livraison",
    total: "75.00€",
    items: [
      { name: "AK-47", quantity: 2, price: "37.50€" },
      { name: "Northern Lights", quantity: 1, price: "37.50€" }
    ]
  },
  {
    id: "CMD-2023-002",
    date: "1 Nov 2023",
    status: "Livré",
    total: "150.00€",
    items: [
      { name: "Lemon Haze", quantity: 2, price: "75.00€" },
      { name: "Bruce Banner", quantity: 1, price: "75.00€" }
    ]
  }
];

const getStatusIcon = (status) => {
  switch (status) {
    case "En livraison":
      return <TruckIcon className="h-5 w-5 text-blue-500" />;
    case "En préparation":
      return <ArrowPathIcon className="h-5 w-5 text-yellow-500" />;
    case "Livré":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    default:
      return null;
  }
};

export default function OrdersPage({ onClose }) {
  return (
    <AccountLayout title="COMMANDES ET RETOURS" onClose={onClose}>
      <div className="space-y-6">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Commande {order.id}</h3>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                <span className="text-sm font-medium">{order.status}</span>
              </div>
            </div>

            <div className="border-t pt-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm">x{item.quantity}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-emerald-600">{order.total}</span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
                Suivre la livraison
              </button>
              <button className="flex-1 border border-emerald-600 text-emerald-600 py-2 rounded-lg hover:bg-emerald-50">
                Facture
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AccountLayout>
  );
}