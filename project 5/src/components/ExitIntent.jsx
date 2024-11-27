import React from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ExitIntent({ isOpen, onClose }) {
  return (
    <Dialog
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
          className="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white shadow-xl rounded-2xl"
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ne partez pas sans votre offre exclusive !
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous maintenant et recevez 10% de réduction sur votre première commande.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
              >
                Obtenir mon code promo
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Dialog>
  );
}