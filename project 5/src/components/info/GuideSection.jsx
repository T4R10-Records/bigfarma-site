import React from 'react';
import { motion } from 'framer-motion';

export default function GuideSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose max-w-none"
      >
        <h3 className="text-2xl font-bold mb-4">Guide du CBD</h3>
        <p>
          Le CBD (Cannabidiol) est un composé naturel extrait du chanvre. Découvrez tout ce que vous devez savoir sur ses bienfaits et son utilisation.
        </p>

        <h4 className="text-xl font-bold mb-3 mt-6">Qu'est-ce que le CBD ?</h4>
        <p>
          Le CBD est l'un des nombreux cannabinoïdes présents dans la plante de chanvre. Contrairement au THC, il n'a pas d'effets psychoactifs et est légal en France.
        </p>

        <h4 className="text-xl font-bold mb-3 mt-6">Les Bienfaits du CBD</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aide à la relaxation et à la gestion du stress</li>
          <li>Favorise un sommeil de qualité</li>
          <li>Soulage les douleurs et inflammations</li>
          <li>Améliore la concentration</li>
        </ul>

        <h4 className="text-xl font-bold mb-3 mt-6">Comment Choisir son CBD ?</h4>
        <p>
          Le choix de votre CBD dépend de vos besoins spécifiques. Nos experts sont là pour vous guider vers le produit le plus adapté à vos attentes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-emerald-50 rounded-lg p-6"
      >
        <h3 className="text-xl font-bold mb-4">Conseils d'Utilisation</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-lg">
              <img src="/icons/dosage.svg" alt="Dosage" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-medium">Commencez Doucement</h4>
              <p className="text-sm text-gray-600">
                Débutez avec une petite dose et augmentez progressivement selon vos besoins.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-lg">
              <img src="/icons/consistency.svg" alt="Régularité" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-medium">Soyez Régulier</h4>
              <p className="text-sm text-gray-600">
                La régularité est clé pour obtenir les meilleurs résultats.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}