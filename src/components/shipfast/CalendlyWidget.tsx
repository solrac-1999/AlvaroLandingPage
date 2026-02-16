"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/alvaromdpersonalfitness/30min";

const CalendlyWidget = () => {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleCalendlyClick = () => {
    // @ts-expect-error Calendly se carga globalmente desde el script externo
    if (window.Calendly) {
      // @ts-expect-error Calendly se carga globalmente desde el script externo
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {},
        utm: {},
      });
    }
  };

  return (
    <>
      <button
        onClick={handleCalendlyClick}
        className="btn btn-primary text-primary-content btn-sm gap-2"
        aria-label="Agendar reunión con Alvaro"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 md:h-5 md:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="hidden md:inline">Agendar</span>
      </button>

      {/* Script styles */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
};

export default CalendlyWidget;

// Componente versión botón grande (para Hero)
export const CalendlyButtonLarge = () => {
  const handleCalendlyClick = () => {
    // @ts-expect-error Calendly se carga globalmente desde el script externo
    if (window.Calendly) {
      // @ts-expect-error Calendly se carga globalmente desde el script externo
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {},
        utm: {},
      });
    }
  };

  return (
    <>
      <button
        onClick={handleCalendlyClick}
        className="btn btn-primary text-primary-content btn-lg text-base sm:text-lg px-6 sm:px-8 gap-2 w-full sm:w-auto"
        aria-label="Agendar reunión con Alvaro"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="whitespace-nowrap">Agendar Reunión</span>
      </button>

      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
};

// Componente versión botón secundario (para menú móvil)
export const CalendlyButtonMobile = () => {
  const handleCalendlyClick = () => {
    // @ts-expect-error Calendly se carga globalmente desde el script externo
    if (window.Calendly) {
      // @ts-expect-error Calendly se carga globalmente desde el script externo
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {},
        utm: {},
      });
    }
  };

  return (
    <>
      <button
        onClick={handleCalendlyClick}
        className="btn btn-primary text-primary-content w-full gap-2"
        aria-label="Agendar reunión con Alvaro"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Agendar Reunión
      </button>

      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
};
