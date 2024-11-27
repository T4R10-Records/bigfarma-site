import React from 'react';
import { motion } from 'framer-motion';

export default function TermsSection() {
  return (
    <div className="prose max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Conditions Générales de Vente</h2>
        <p>
          Les présentes conditions générales de vente régissent l'utilisation de notre site web et la vente de nos produits CBD.
        </p>

        <h3>1. Commandes</h3>
        <p>
          Toute commande passée sur notre site implique l'acceptation intégrale et sans réserve des présentes conditions générales de vente.
        </p>

        <h3>2. Prix</h3>
        <p>
          Les prix sont indiqués en euros TTC. Nous nous réservons le droit de modifier nos prix à tout moment.
        </p>

        <h3>3. Livraison</h3>
        <p>
          Les délais de livraison sont donnés à titre indicatif. Nous nous efforçons de respecter les délais annoncés.
        </p>

        <h3>4. Retours</h3>
        <p>
          Vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation à compter de la réception de votre commande.
        </p>
      </motion.div>
    </div>
  );
}