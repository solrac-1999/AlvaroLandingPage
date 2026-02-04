"use client";

import { useState } from "react";
import { CalendlyButtonLarge } from "./CalendlyWidget";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const benefitCards = [
    {
      text: "Perder grasa abdominal y ganar músculo",
    },
    {
      text: "Entrena 3-4 días/semana sin romper tu agenda",
    },
    {
      text: "Nutrición abierta sin romper tu vida social",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-100 to-primary/5 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Texto a la izquierda */}
          <div className="lg:w-5/12 order-2 lg:order-1">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-primary-content px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">⏰ Pocas plazas disponibles</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-base-content leading-tight mb-4 sm:mb-6">
              Transforma tu cuerpo y tu vida con{" "}
              <span className="text-primary">el método AUSSI</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-6 sm:mb-8 max-w-xl text-base-content">
              Sistema de entrenamiento y nutrición adaptado a tus objetivos,
              sin cardio eterno, ni dietas de lechuga y entrenando menos de 1 hora
            </p>

            {/* Calendly Button */}
            <CalendlyButtonLarge />

            {/* Benefit Cards */}
            <div className="mt-8 space-y-3">
              {benefitCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl border-2 border-yellow-400 bg-yellow-400/10"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-base-content">
                    {card.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video a la derecha */}
          <div className="lg:w-7/12 w-full order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-black w-full">
              {!isPlaying ? (
                /* Thumbnail con botón de play */
                <div className="relative w-full">
                  <video
                    className="w-full h-auto max-h-[70vh] object-contain bg-black"
                    src="/Hero.MOV"
                    preload="metadata"
                  />
                  
                  {/* Overlay con botón de play */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                      aria-label="Reproducir video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-primary-content ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                /* Video reproduciéndose */
                <video
                  autoPlay
                  controls
                  className="w-full h-auto max-h-[70vh] object-contain bg-black"
                  onEnded={() => setIsPlaying(false)}
                  src="/Hero.MOV"
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

