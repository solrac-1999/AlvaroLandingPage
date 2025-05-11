"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";
import ButtonTheme from "./ButtonTheme";

const links: {
  href: string;
  label: string;
}[] = [
  { href: "/#features", label: "Funcionalidades" },
  { href: "/#pricing", label: "Tarifas" },
  { href: "/#testimonials", label: "Opiniones" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#cta", label: "Registrarse" },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-neutral">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto" aria-label="Global">
        {/* Logo y nombre de la app */}
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
            <span className="font-extrabold text-lg">{config.appName}</span>
          </Link>
        </div>

        {/* Enlaces en pantallas grandes */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="link link-hover" title={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA y tema en pantallas grandes */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 lg:flex-1 lg:justify-end">
          <ButtonSignin extraStyle="btn-primary" />
        </div>
        
        {/* Botón de cambio de tema alineado completamente a la derecha */}
        <div className="absolute right-8">
          <ButtonTheme />
        </div>
      </nav>

      {/* Menú móvil */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-neutral/50" onClick={() => setIsOpen(false)}></div>
        <div className="fixed inset-y-0 right-0 z-10 w-3/4 px-8 py-4 overflow-y-auto bg-neutral sm:ring-1 sm:ring-neutral/10 transform transition ease-in-out duration-300">
          {/* Logo en móvil */}
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2" href="/" title={`${config.appName} homepage`}>
              <Image
                src={'/icon.png'}
                alt={`${config.appName} logo`}
                className="w-8"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enlaces del menú móvil */}
          <div className="mt-6">
            {links.map((link) => (
              <Link href={link.href} key={link.href} className="block py-2 text-lg" title={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="divider"></div>
          {/* CTA en móvil */}
          <ButtonSignin extraStyle="btn-primary" />
          <ButtonTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
