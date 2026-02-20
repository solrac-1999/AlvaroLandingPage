"use client";

import { useState } from "react";
import Image from "next/image";

const imageCount = 16;

const cloudinaryImages = [
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%201.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%202.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%203.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%204.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%205.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%206.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%207.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%208.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%209.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2010.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2011.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2012.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2013.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2014.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2015.jpg",
  "https://ik.imagekit.io/alvaropersonal/Antes%20y%20despues%2016.jpg",
];

const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  return (
    <section id="results" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-primary/20 text-primary px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Resultados
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-4 sm:mb-6 text-base-content">
            Transformaciones <span className="text-primary">reales</span>
          </h2>
          <p className="text-sm sm:text-lg opacity-80 leading-relaxed text-base-content">
            Estos son algunos de los resultados conseguidos por mis clientes. 
            Cada transformación es única, porque cada persona es única.
          </p>
        </div>

        {/* Carousel - Only Images */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-base-200">
              <Image
                src={cloudinaryImages[currentIndex]}
                alt={`Transformación ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
                unoptimized
              />
              
              {/* Label */}
              <div className="absolute top-4 left-4 bg-primary text-primary-content px-3 py-1 rounded-full text-sm font-bold">
                {currentIndex + 1} / {imageCount}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-base-100/90 hover:bg-base-100 text-base-content p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-base-100/90 hover:bg-base-100 text-base-content p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 px-2">
              {Array.from({ length: imageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-110"
                      : "bg-base-300 hover:bg-base-200"
                  }`}
                  aria-label={`Ir a transformación ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">100+</p>
            <p className="text-xs md:text-sm opacity-70 text-base-content">Clientes transformados</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">1.000+</p>
            <p className="text-xs md:text-sm opacity-70 text-base-content">Kg perdidos</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">98%</p>
            <p className="text-xs md:text-sm opacity-70 text-base-content">Satisfacción</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">5+</p>
            <p className="text-xs md:text-sm opacity-70 text-base-content">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
