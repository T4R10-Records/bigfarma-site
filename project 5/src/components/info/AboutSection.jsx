import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose max-w-none"
      >
        <h3 className="text-2xl font-bold mb-4">Notre Histoire</h3>
        <p>
          Fondée avec la vision de rendre le bien-être accessible à tous, notre entreprise s'est établie comme un leader dans la distribution de produits CBD de haute qualité.
        </p>
        
        <h3 className="text-2xl font-bold mb-4 mt-8">Notre Mission</h3>
        <p>
          Notre mission est de fournir des produits CBD de la plus haute qualité, sourcés de manière éthique et testés rigoureusement, pour améliorer le bien-être quotidien de nos clients.
        </p>

        <h3 className="text-2xl font-bold mb-4 mt-8">Nos Valeurs</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Qualité premium et innovation constante</li>
          <li>Transparence totale sur nos produits et processus</li>
          <li>Service client exceptionnel</li>
          <li>Engagement environnemental</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4 mt-8">Notre Engagement</h3>
        <p>
          Nous nous engageons à maintenir les plus hauts standards de qualité dans l'industrie du CBD. Chaque produit est soumis à des tests rigoureux en laboratoire pour garantir sa pureté et son efficacité.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-emerald-50 rounded-lg p-6"
      >
        <h3 className="text-xl font-bold mb-4">Certifications et Garanties</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <img src="/certification1.svg" alt="Bio" className="w-16 h-16 mx-auto mb-2" />
            <p className="text-sm font-medium">100% Bio</p>
          </div>
          <div className="text-center p-4">
            <img src="/certification2.svg" alt="Lab" className="w-16 h-16 mx-auto mb-2" />
            <p className="text-sm font-medium">Testé en Laboratoire</p>
          </div>
          <div className="text-center p-4">
            <img src="/certification3.svg" alt="Quality" className="w-16 h-16 mx-auto mb-2" />
            <p className="text-sm font-medium">Qualité Premium</p>
          </div>
          <div className="text-center p-4">
            <img src="/certification4.svg" alt="Eco" className="w-16 h-16 mx-auto mb-2" />
            <p className="text-sm font-medium">Éco-responsable</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}