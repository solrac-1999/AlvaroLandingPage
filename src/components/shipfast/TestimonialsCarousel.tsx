"use client";

import { useState } from "react";

const videoCount = 8;

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoCount - 1 : prev - 1));
    setIsPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videoCount - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 md:py-24 bg-base-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-primary/20 text-primary px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Testimonios
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-4">
            Lo que dicen mis <span className="text-primary">clientes</span>
          </h2>
          <p className="text-sm sm:text-lg opacity-70 max-w-2xl mx-auto">
            Historias reales de personas que han transformado su vida conmigo
          </p>
        </div>

        {/* Video Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Video Container - Formato 1080x1920 (9:16) */}
            <div 
              className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[405px] mx-auto rounded-2xl overflow-hidden shadow-lg bg-black"
              style={{ aspectRatio: "9/16" }}
            >
              {!isPlaying ? (
                /* Thumbnail con botón de play */
                <div className="absolute inset-0 w-full h-full">
                  <video
                    className="w-full h-full object-cover"
                    src={`/Testimonio ${currentIndex + 1}.MOV`}
                    preload="metadata"
                  />
                  
                  {/* Overlay con botón de play */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                      aria-label="Reproducir video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-primary-content ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Video counter badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-content px-3 py-1 rounded-full text-sm font-bold z-10">
                    {currentIndex + 1} / {videoCount}
                  </div>
                </div>
              ) : (
                /* Video reproduciéndose */
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                  src={`/Testimonio ${currentIndex + 1}.MOV`}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              )}

              {/* Navigation Buttons - Superpuestos en el video */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100 text-base-content p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                aria-label="Video anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100 text-base-content p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                aria-label="Video siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 px-2">
              {Array.from({ length: videoCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-110"
                      : "bg-base-300 hover:bg-base-200"
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div>
            <p className="text-2xl md:text-4xl font-extrabold text-primary">500+</p>
            <p className="text-xs md:text-sm opacity-70">Clientes satisfechos</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold text-primary">4.9★</p>
            <p className="text-xs md:text-sm opacity-70">Puntuación media</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold text-primary">98%</p>
            <p className="text-xs md:text-sm opacity-70">Completan metas</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold text-primary">10k+</p>
            <p className="text-xs md:text-sm opacity-70">Kg perdidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

