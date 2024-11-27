import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: "Les bienfaits du CBD sur le sommeil",
    excerpt: "Découvrez comment le CBD peut améliorer la qualité de votre sommeil...",
    image: "/blog/sleep.jpg",
    date: "15 Nov 2023"
  },
  {
    id: 2,
    title: "CBD vs THC : Les différences essentielles",
    excerpt: "Comprendre les différences entre ces deux composés du cannabis...",
    image: "/blog/comparison.jpg",
    date: "10 Nov 2023"
  },
  {
    id: 3,
    title: "Guide du débutant : Par où commencer ?",
    excerpt: "Tout ce que vous devez savoir avant de commencer votre parcours CBD...",
    image: "/blog/guide.jpg",
    date: "5 Nov 2023"
  }
];

export default function BlogSection() {
  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="text-sm text-gray-500 mb-2">{article.date}</div>
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm">{article.excerpt}</p>
            <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700">
              Lire la suite
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}