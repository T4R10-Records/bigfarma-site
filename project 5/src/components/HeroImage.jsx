import React from 'react';

function HeroImage() {
  return (
    <div className="relative h-[400px] my-12 rounded-lg overflow-hidden">
      <img
        src="/hero-image.jpg"
        alt="CBD Field"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Cultivé avec Passion</h2>
          <p className="text-xl">Découvrez notre sélection premium de CBD</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;