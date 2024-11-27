import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function ProductVideo({ product }) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <PlayIcon className="h-16 w-16 mx-auto mb-2" />
            <p>Vidéo bientôt disponible</p>
          </div>
        </div>
      </div>
      
      <div className="bg-sage-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">À propos de cette vidéo</h3>
        <p className="text-gray-700">
          Découvrez prochainement les caractéristiques de {product.name} en vidéo.
          Nos experts vous présenteront en détail ses propriétés, arômes et effets.
        </p>
      </div>
    </div>
  );
}