"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import CalendlyWidget from "./CalendlyWidget";

const CALENDLY_URL = "https://calendly.com/alvaromdpersonalfitness/30min";

// Botón compacto para header móvil
const CalendlyButtonHeaderMobile = () => {
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
    <button
      onClick={handleCalendlyClick}
      className="btn btn-primary text-primary-content btn-sm gap-1 px-2 py-1 text-xs"
      aria-label="Agendar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
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
      <span className="hidden xs:inline">Agendar</span>
    </button>
  );
};

const links: {
  href: string;
  label: string;
}[] = [
  { href: "/#about", label: "Sobre Mí" },
  { href: "/#results", label: "Resultados" },
  { href: "/#testimonials", label: "Testimonios" },
  { href: "/#contact", label: "Contacto" },
];

const Header = () => {
  return (
    <header className="bg-base-100 fixed w-full z-50 shadow-lg border-b border-base-300">
      <nav className="container flex items-center justify-between px-4 md:px-8 py-3 md:py-4 mx-auto" aria-label="Global">
        {/* Logo y nombre */}
        <div className="flex">
          <Link className="flex items-center gap-2 shrink-0" href="/" title={`${config.appName} homepage`}>
            <Image
              src={'/icon.png'}
              alt={`${config.appName} logo`}
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-sm sm:text-base md:text-lg text-primary">{config.appName}</span>
          </Link>
        </div>

        {/* Enlaces de navegación - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8 lg:ml-8">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-sm font-semibold leading-6 text-base-content hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA y menú móvil */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Botón Calendly - Desktop */}
          <div className="hidden lg:block">
            <CalendlyWidget />
          </div>

          {/* Botón Calendly - Móvil */}
          <div className="lg:hidden">
            <CalendlyButtonHeaderMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
