"use client";

import { useRef, useState, useEffect } from "react";
import { FAQItem } from "@/types/shared";
import { CalendlyButtonLarge } from "./CalendlyWidget";

const faqList: FAQItem[] = [
  {
    question: "¿Cómo funciona el proceso de transformación?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Es muy sencillo. Primero, <strong>agendamos una consulta gratuita</strong> donde conocernos y entender tus objetivos.
        </p>
        <p>
          Después, diseñamos un plan 100% personalizado para ti y arrancamos juntos hacia tus metas.
        </p>
      </div>
    ),
  },
  {
    question: "¿Necesito tener experiencia previa entrenando?",
    answer: (
      <p>
        <strong>¡Para nada!</strong> Trabajo con personas de todos los niveles: desde principiantes absolutos hasta atletas avanzados. El plan se adapta completamente a tu nivel actual. Si nunca has pisado un gimnasio, empezarás con los ejercicios básicos y progresaremos juntos.
      </p>
    ),
  },
  {
    question: "¿Puedo entrenar desde casa o en gimnasio?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          <strong>Tú eliges.</strong> Ofrezco planes de entrenamiento tanto para casa como para gimnasio. Lo importante es que el plan se adapte a TUS posibilidades, no al revés.
        </p>
        <p>
          Si entrenas en casa, diseñaré ejercicios con tu peso corporal o equipamiento mínimo.
        </p>
      </div>
    ),
  },
  {
    question: "¿El plan incluye alimentación?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          <strong>Sí.</strong> La nutrición es una parte fundamental del proceso. Incluyo un plan de alimentación personalizado con menús semanales, recetas adaptadas a tus gustos y una lista de la compra.
        </p>
        <p>
          No creo en dietas extremas: te enseño a comer de forma sostenible y saludable a largo plazo.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuánto tiempo tardaré en ver resultados?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Los primeros cambios suelen notarse en las primeras <strong>2-3 semanas</strong>: más energía, mejor sueño y mejor sensación en tu ropa.
        </p>
        <p>
          Resultados visibles (cambios en composición corporal) típicamente entre <strong>4-8 semanas</strong> siguiendo el plan correctamente. Recuerda: los resultados sostenibles requieren tiempo y consistencia.
        </p>
      </div>
    ),
  },
  {
    question: "¿Hay permanencia o compromiso a largo plazo?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          <strong>No tengo permanencias.</strong> Puedes empezar con un mes y continuar solo si estás satisfecho con los resultados. Sin embargo, la mayoría de mis clientes ven resultados reales entre los 3-6 meses y eligen continuar porque funcionan.
        </p>
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItem }) => {
  const accordion = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 hover:text-primary transition-colors"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className={`flex-1 ${isOpen ? "text-primary" : ""}`}>
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-5 h-5 ml-auto fill-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z" />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  // FAQ Schema for Rich Snippets in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "text": (faq.answer as any).props?.children?.props?.children?.flat?.(2)?.join(' ') || faq.question,
      },
    })),
  };

  useEffect(() => {
    // Inject FAQ Schema JSON-LD into head
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <section className="py-12 md:py-12 bg-neutral" id="faq">
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-secondary/20 text-secondary px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            FAQ
          </div>
          <p className="sm:text-4xl text-2xl sm:text-3xl font-extrabold text-base-content mb-3 sm:mb-4">
            Preguntas frecuentes
          </p>
          <p className="text-sm sm:text-lg opacity-70">
            Todo lo que necesitas saber antes de dar el primer paso
          </p>
        </div>

        <ul className="bg-base-100 rounded-2xl p-4 md:p-8">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>

        <div className="text-center mt-8">
          <p className="text-base-content/70 mb-4 text-sm">
            ¿Tienes más preguntas? Estoy aquí para ayudarte.
          </p>
          <CalendlyButtonLarge />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

