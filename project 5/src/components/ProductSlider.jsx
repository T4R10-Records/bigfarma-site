import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductSlider({ onProductSelect }) {
  const { products } = useProducts();

  return (
    <div className="my-8 relative px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        loopAdditionalSlides={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="product-slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard 
              product={product} 
              onProductSelect={onProductSelect}
              layout="carousel"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-50">
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-50">
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ProductSlider;