"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Entrenadora Personal",
    text: "FitTracker me ha permitido optimizar mi tiempo y llevar un control más preciso del progreso de mis clientes. ¡Un cambio total en mi rutina!",
    rating: 5,
    avatar: null, // Puedes añadir la URL de una imagen si existe
  },
  {
    name: "Juan Pérez",
    role: "Cliente Fitness",
    text: "Gracias a FitTracker puedo ver mi progreso de forma clara y mantenerme motivado para alcanzar mis objetivos de entrenamiento.",
    rating: 5,
    avatar: null,
  },
  {
    name: "Ana López",
    role: "Entrenadora Personal",
    text: "La facilidad de uso de FitTracker me permite dedicar más tiempo a lo que realmente importa: ayudar a mis clientes a cumplir sus metas.",
    rating: 5,
    avatar: null,
  },
  {
    name: "Carlos García",
    role: "Cliente Fitness",
    text: "FitTracker me ha ayudado a ser constante con mi entrenamiento al mostrar mi progreso día a día. ¡Es increíblemente motivador!",
    rating: 5,
    avatar: null,
  },
  {
    name: "Elena Sánchez",
    role: "Entrenadora Personal",
    text: "Ahora puedo gestionar las rutinas de mis clientes en menos tiempo generándome más beneficios y tiempo para mí mismo, ¡FitTracker es la herramienta que necesitaba!",
    rating: 5,
    avatar: null,
  },
  {
    name: "Mario Díaz",
    role: "Cliente Fitness",
    text: "Me encanta lo intuitiva que es FitTracker. He mejorado mi rendimiento al poder seguir mi progreso con precisión.",
    rating: 5,
    avatar: null,
  },
];

const TestimonialsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcular el ancho de una tarjeta (testimonio)
  const cardWidth = 300; // Aproximadamente un tercio del contenedor

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 15000); // Desplazamiento automático cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;

      // Si hemos llegado al final, volvemos al principio
      if (scrollLeft + cardWidth * 3 >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0); // Resetear al primer testimonio
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  // Función para manejar el clic en los puntos de navegación
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      // Calculamos el desplazamiento hacia el testimonio correspondiente
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="bg-base-100 px-6 md:px-8 lg:px-12">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-10 text-center">
            Resultados Que Hablan Por Sí Solos
          </h2>

          <div className="relative">
            {/* Carrusel de Testimonios */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/3 bg-neutral shadow-lg rounded-lg p-8 text-center space-y-4"
                  style={{
                    minWidth: "calc(100% / 3)",
                  }}
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary-content text-2xl font-semibold overflow-hidden">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={`Avatar de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    )}
                  </div>

                  {/* Nombre y Rol */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>

                  {/* Estrellas */}
                  <div className="flex justify-center space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className={`${
                          starIndex < testimonial.rating ? "text-yellow-400" : "text-gray-400"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-base-content text-left leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Puntos de navegación */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.slice(0, -1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full bg-secondary ${currentIndex === index ? "bg-primary" : "bg-opacity-50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estilo del Scrollbar */}
      <style jsx>{`
        .scroll-smooth {
          padding-bottom: 12px;
        }

        .scroll-smooth::-webkit-scrollbar {
          height: 8px;
        }

        .scroll-smooth::-webkit-scrollbar-track {
          background: var(--neutral);
        }

        .scroll-smooth::-webkit-scrollbar-thumb {
          background: var(--secondary);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
