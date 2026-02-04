const guarantees = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Primera consulta gratuita",
    description: "Sin compromiso ni presión. Evaluamos tus objetivos y te cuento cómo puedo ayudarte.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sin permanencia",
    description: "Empieza con un mes y continúa solo si estás satisfecho con los resultados.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Respuesta inmediata",
    description: "Te respondo por WhatsApp en menos de 1 hora. Sin letras pequeñas.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte 24/7",
    description: "siempre disponible para resolver tus dudas y apoyarte en tu proceso.",
  },
];

const TrustGuarantees = () => {
  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-primary/20 text-primary px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Garantías
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-4 sm:mb-6">
            Tu tranquilidad es mi <span className="text-primary">compromiso</span>
          </h2>
          <p className="text-sm sm:text-lg opacity-80 leading-relaxed">
            Estas son las garantías que ofrezco para que tomes la decisión sin ninguna duda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl bg-neutral hover:bg-neutral/80 transition-colors"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 md:mb-4">
                {guarantee.icon}
              </div>
              <h3 className="font-bold text-sm md:text-lg mb-2">{guarantee.title}</h3>
              <p className="text-xs md:text-sm opacity-70 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGuarantees;

