import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const SAMPLE_REVIEWS = [
  {
    id: 1,
    author: "Jean D.",
    rating: 5,
    date: "Il y a 2 jours",
    content: "Excellent produit, les effets sont rapides et durables. Je recommande !"
  },
  {
    id: 2,
    author: "Marie L.",
    rating: 4,
    date: "Il y a 1 semaine",
    content: "Très satisfaite de la qualité. Les arômes sont vraiment agréables."
  },
  {
    id: 3,
    author: "Pierre M.",
    rating: 5,
    date: "Il y a 2 semaines",
    content: "Le meilleur CBD que j'ai essayé jusqu'à présent. Je ne change plus !"
  }
];

export default function ProductReviews({ product }) {
  return (
    <div className="space-y-6">
      <div className="bg-sage-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Note moyenne</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">({product.reviewCount} avis)</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const percentage = rating === 5 ? 75 : rating === 4 ? 20 : 5;
            return (
              <div key={rating} className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-20">
                  <span>{rating}</span>
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-gray-500">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {SAMPLE_REVIEWS.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{review.author}</h4>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>

      <button className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
        Laisser un avis
      </button>
    </div>
  );
}