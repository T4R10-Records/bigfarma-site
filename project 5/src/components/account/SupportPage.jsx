import React from 'react';
import AccountLayout from './AccountLayout';
import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const supportChannels = [
  {
    icon: ChatBubbleLeftIcon,
    title: "Chat en direct",
    description: "Discutez avec un conseiller",
    action: "Démarrer une conversation",
    available: true
  },
  {
    icon: PhoneIcon,
    title: "Par téléphone",
    description: "09 78 35 44 21",
    action: "Appeler",
    available: true,
    hours: "Lun-Ven: 9h-18h"
  },
  {
    icon: EnvelopeIcon,
    title: "Par email",
    description: "support@example.com",
    action: "Envoyer un email",
    available: true
  }
];

const faqItems = [
  {
    question: "Comment suivre ma commande ?",
    answer: "Vous pouvez suivre votre commande dans la section 'Commandes et retours' de votre compte."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les commandes sont généralement livrées sous 24-48h ouvrées."
  },
  {
    question: "Comment retourner un produit ?",
    answer: "Contactez notre service client pour obtenir un numéro de retour. Les retours sont gratuits sous 14 jours."
  }
];

export default function SupportPage({ onClose }) {
  return (
    <AccountLayout title="ASSISTANCE CLIENT" onClose={onClose}>
      <div className="space-y-8">
        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border p-4 text-center"
            >
              <channel.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-semibold">{channel.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{channel.description}</p>
              {channel.hours && (
                <p className="text-xs text-gray-400 mb-2">{channel.hours}</p>
              )}
              <button
                className={`w-full py-2 rounded-lg ${
                  channel.available
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!channel.available}
              >
                {channel.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Questions fréquentes</h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border p-4"
              >
                <h4 className="font-medium mb-2">{item.question}</h4>
                <p className="text-sm text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Envoyez-nous un message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sujet
              </label>
              <select className="w-full p-2 border rounded-lg">
                <option>Question sur ma commande</option>
                <option>Problème de livraison</option>
                <option>Retour produit</option>
                <option>Autre question</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded-lg"
                placeholder="Comment pouvons-nous vous aider ?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </AccountLayout>
  );
}