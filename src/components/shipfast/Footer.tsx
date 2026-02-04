import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Coaching Online", href: "#services" },
      { label: "Entrenamiento Presencial", href: "#services" },
      { label: "Plan de Nutrición", href: "#services" },
    ],
    company: [
      { label: "Sobre Mí", href: "#about" },
      { label: "Resultados", href: "#results" },
      { label: "Testimonios", href: "#testimonials" },
      { label: "Blog", href: "#" },
    ],
    support: [
      { label: "Contacto", href: "#contact" },
      { label: "Aviso Legal", href: "/legal" },
      { label: "Privacidad", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-base-100 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={'/icon.png'}
                alt={`${config.appName} logo`}
                className="w-8 md:w-10"
                priority={true}
                width={40}
                height={40}
              />
              <span className="font-extrabold text-lg md:text-xl text-primary">{config.appName}</span>
            </Link>
            <p className="text-sm text-base-content/70 mb-6">
              {config.appDescription}
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="https://www.instagram.com/alvaropersonalfitness" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-ghost text-primary" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@alvaropersonalfitness" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-ghost text-primary" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-base-content">Soporte</h4>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
              {footerLinks.support.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="link link-hover text-xs md:text-sm text-base-content/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs md:text-sm text-base-content/70 mb-2">¿Tienes preguntas?</p>
              <a href="mailto:info@alvaropersonaltrainer.com" className="btn btn-primary text-primary-content btn-sm w-full md:w-auto">
                Contáctame
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-base-content/60 text-center md:text-left">
            © {currentYear} {config.appName}. Todos los derechos reservados.
          </p>
          <p className="text-xs md:text-sm text-base-content/60 text-center">
            Diseñado con ❤️ para ayudarte a alcanzar tus metas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
