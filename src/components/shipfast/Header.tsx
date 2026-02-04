"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import CalendlyWidget, { CalendlyButtonMobile } from "./CalendlyWidget";

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
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-100 fixed w-full z-50 shadow-lg border-b border-base-300">
      <nav className="container flex items-center justify-between px-4 md:px-8 py-3 md:py-4 mx-auto" aria-label="Global">
        {/* Logo y nombre */}
        <div className="flex lg:flex-1">
          <Link className="flex items-center gap-2 shrink-0" href="/" title={`${config.appName} homepage`}>
            <Image
              src={'/icon.png'}
              alt={`${config.appName} logo`}
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-base md:text-lg text-primary hidden sm:block">{config.appName}</span>
          </Link>
        </div>

        {/* Enlaces en pantallas grandes */}
        <div className="hidden lg:flex lg:justify-center lg:gap-6 xl:gap-8 lg:items-center">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="link link-hover text-sm font-medium text-base-content hover:text-primary transition-colors" title={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA en pantallas grandes */}
        <div className="hidden lg:flex lg:items-center lg:gap-3 lg:flex-1 lg:justify-end">
          <CalendlyWidget />
        </div>

        {/* Botón menú móvil */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2 text-base-content"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full sm:w-80 px-6 py-4 overflow-y-auto bg-base-100 sm:ring-1 sm:ring-base-300 transform transition ease-in-out duration-300 border-l border-base-300">
          {/* Logo en móvil */}
          <div className="flex items-center justify-between mb-8">
            <Link className="flex items-center gap-2" href="/" title={`${config.appName} homepage`}>
              <Image
                src={'/icon.png'}
                alt={`${config.appName} logo`}
                className="w-8"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg text-primary">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-base-content"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enlaces del menú móvil */}
          <div className="mt-6 space-y-4">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="block py-3 text-base font-medium border-b border-base-300 text-base-content hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA en móvil */}
          <div className="mt-8">
            <CalendlyButtonMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

