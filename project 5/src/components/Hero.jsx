import React from 'react';

function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Floating Characters */}
      <div className="absolute inset-0">
        <img 
          src="/character1.png" 
          alt="" 
          className="absolute w-24 md:w-32 top-1/4 left-1/4 animate-float"
        />
        <img 
          src="/character2.png" 
          alt="" 
          className="absolute w-24 md:w-32 top-1/3 right-1/4 animate-float-delayed"
        />
        <img 
          src="/character3.png" 
          alt="" 
          className="absolute w-24 md:w-32 bottom-1/4 left-1/3 animate-float"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">CODE </span>
            <span className="text-emerald-400">PROMO</span>
          </h1>
          <div className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider">
            BIGFARMA20
          </div>
          <p className="text-xl md:text-2xl text-white mb-8">
            PROFITEZ DE NOTRE OFFRE DE LANCEMENT !
          </p>
          <button 
            onClick={scrollToProducts}
            className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 transform hover:scale-105 transition-all"
          >
            J'en profite maintenant !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;