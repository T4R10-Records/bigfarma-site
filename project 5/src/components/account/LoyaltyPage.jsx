import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { GiftIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';

const rewards = [
  {
    id: 1,
    name: "Réduction de 10%",
    points: 500,
    description: "Sur votre prochaine commande",
    available: true
  },
  {
    id: 2,
    name: "Livraison gratuite",
    points: 300,
    description: "Pour votre prochaine commande",
    available: true
  },
  {
    id: 3,
    name: "Produit offert",
    points: 1000,
    description: "Un produit découverte gratuit",
    available: false
  }
];

const history = [
  {
    date: "15 Nov 2023",
    points: "+150",
    reason: "Commande CMD-2023-001"
  },
  {
    date: "1 Nov 2023",
    points: "+300",
    reason: "Commande CMD-2023-002"
  }
];

export default function LoyaltyPage({ onClose }) {
  return (
    <AccountLayout title="PROGRAMME FIDÉLITÉ" onClose={onClose}>
      <div className="space-y-8">
        {/* Points Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 rounded-lg p-6 text-center"
        >
          <SparklesIcon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-emerald-800">1600 points</h3>
          <p className="text-emerald-600">Rang Argent</p>
          <div className="mt-4 h-2 bg-emerald-200 rounded-full">
            <div className="h-full w-4/5 bg-emerald-600 rounded-full"></div>
          </div>
          <p className="text-sm text-emerald-700 mt-2">400 points avant le rang Or</p>
        </motion.div>

        {/* Available Rewards */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <GiftIcon className="h-5 w-5 text-emerald-600" />
            Récompenses disponibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{reward.name}</h4>
                    <p className="text-sm text-gray-500">{reward.description}</p>
                  </div>
                  <span className="text-emerald-600 font-medium">{reward.points} pts</span>
                </div>
                <button
                  className={`w-full mt-4 py-2 rounded-lg ${
                    reward.available
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!reward.available}
                >
                  {reward.available ? 'Utiliser' : 'Points insuffisants'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrophyIcon className="h-5 w-5 text-emerald-600" />
            Historique des points
          </h3>
          <div className="space-y-2">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center py-2 border-b"
              >
                <div>
                  <p className="font-medium">{item.reason}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <span className="text-emerald-600 font-medium">{item.points}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
}