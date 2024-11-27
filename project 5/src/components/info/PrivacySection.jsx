import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacySection() {
  return (
    <div className="prose max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Politique de Confidentialité</h2>
        <p>
          Nous accordons une grande importance à la protection de vos données personnelles.
        </p>

        <h3>1. Collecte des Données</h3>
        <p>
          Nous collectons uniquement les données nécessaires au traitement de vos commandes et à l'amélioration de nos services.
        </p>

        <h3>2. Utilisation des Données</h3>
        <p>
          Vos données sont utilisées pour traiter vos commandes, personnaliser votre expérience et vous informer de nos offres.
        </p>

        <h3>3. Protection des Données</h3>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé.
        </p>

        <h3>4. Vos Droits</h3>
        <p>
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
        </p>
      </motion.div>
    </div>
  );
}