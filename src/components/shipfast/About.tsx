"use client";

import Image from "next/image";
import { CalendlyButtonLarge } from "./CalendlyWidget";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Trainer Image - order 2 on mobile, left on desktop */}
          <div className="lg:w-1/2 relative w-full order-2 lg:order-1">
            <div className="relative w-full h-[450px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={"/Sobre_mi.PNG"}
                alt="Alvaro - Entrenador Personal"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-8">
                <div className="text-center text-primary-content">
                  <p className="text-4xl sm:text-6xl font-bold">+5</p>
                  <p className="text-sm sm:text-lg">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - order 1 on mobile, right on desktop */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block bg-primary/20 text-primary px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 lg:mb-6">
              Sobre Mí
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 sm:mb-4 lg:mb-6 text-base-content">
              Hola, soy <span className="text-primary">Alvaro</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-base sm:text-lg opacity-80 leading-relaxed text-base-content">
              <p>
              Entrenador personal, nutricionista y coach de salud integral con más de 5 años de experiencia en pérdida de grasa abdominal, mejora de la composición corporal y cambio de hábitos.
              </p>

              <p>
              Aplica la metodología AQUI: entrenamientos de fuerza de 30-45 minutos, alimentación flexible y acompañamiento de coaching para resultados sostenibles.
              </p>

              <p>
              Su enfoque está dirigido a quienes buscan dejar atrás dietas ineficaces, mejorar su relación con la comida, recuperar energía y construir hábitos duraderos para verse y sentirse bien.
              </p>
            </div>

            {/* CTA Button - visible only on desktop (inside text column) */}
            <div className="hidden lg:block mt-6">
              <CalendlyButtonLarge />
            </div>

          </div>

          {/* CTA Button - order 3 on mobile only, hidden on desktop */}
          <div className="w-full order-3 lg:hidden flex justify-center mt-6">
            <CalendlyButtonLarge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
