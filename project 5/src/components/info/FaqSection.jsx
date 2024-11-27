import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Qu'est-ce que le CBD ?",
    answer: "Le CBD (Cannabidiol) est un composé naturel extrait du chanvre. Contrairement au THC, il n'a pas d'effets psychoactifs et est légal en France."
  },
  {
    question: "Le CBD est-il légal ?",
    answer: "Oui, le CBD est légal en France tant que le taux de THC est inférieur à 0,2%."
  },
  {
    question: "Comment choisir mon produit CBD ?",
    answer: "Le choix dépend de vos besoins et préférences. Nous vous recommandons de commencer par de petites doses et d'ajuster selon vos ressentis."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les commandes sont généralement livrées sous 24-48h ouvrées."
  }
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border rounded-lg"
        >
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="w-full p-4 text-left flex justify-between items-center"
          >
            <span className="font-medium">{faq.question}</span>
            <ChevronDownIcon
              className={`h-5 w-5 transform transition-transform ${
                openItem === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openItem === index && (
            <div className="p-4 pt-0 text-gray-600">
              {faq.answer}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}