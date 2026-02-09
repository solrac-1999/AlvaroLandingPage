"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "34625672358";
const INSTAGRAM_URL = "https://www.instagram.com/alvaropersonalfitness";
const YOUTUBE_URL = "https://www.youtube.com/@alvaropersonalfitness";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola Alvaro, me interesa comenzar con el entrenamiento personalizado. ¿Podrías darme más información?";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Entrenamiento.jpg"}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-100/90 via-base-100/85 to-base-100/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl tracking-tight mb-4 md:mb-6 text-base-content">
            ¿Listo para empezar tu transformación?
          </h2>
          <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-2xl mx-auto text-base-content">
            Reserva tu primera consulta gratuita. Sin compromiso, sin presión.
            Simplemente conversamos sobre tus objetivos y te cuento cómo puedo ayudarte.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-content backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all group flex flex-col items-center shadow-lg"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-primary-content">WhatsApp</h3>
              <p className="text-xs md:text-sm opacity-90 text-primary-content">Respuesta rápida</p>
            </button>

            {/* YouTube */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-content backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all group flex flex-col items-center shadow-lg"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-primary-content">YouTube</h3>
              <p className="text-xs md:text-sm opacity-90 text-primary-content">@alvaropersonalfitness</p>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-content backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all group flex flex-col items-center shadow-lg"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-primary-content">Instagram</h3>
              <p className="text-xs md:text-sm opacity-90 text-primary-content">@alvaropersonalfitness</p>
            </a>
          </div>

          <p className="mt-4 md:mt-6 text-xs md:text-sm opacity-70 text-base-content">
            Primera consulta gratuita ✓ Sin compromiso ✓ Respuesta inmediata ✓
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

