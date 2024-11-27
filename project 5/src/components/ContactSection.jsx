import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="votre@email.com"
              />
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

        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-xl font-bold mb-4">Informations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">123 Rue du CBD</p>
                  <p className="text-gray-600">75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Horaires d'ouverture</p>
                  <p className="text-gray-600">Lun - Ven: 9h - 18h</p>
                  <p className="text-gray-600">Sam: 10h - 16h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Service Client</h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos achats.
            </p>
            <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
              Chat en direct
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}