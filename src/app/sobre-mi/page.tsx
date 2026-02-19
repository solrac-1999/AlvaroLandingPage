import { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/shipfast/HeaderWrapper";
import Footer from "@/components/shipfast/Footer";

export const metadata: Metadata = {
  title: "Sobre Mí - Alvaro Personal Trainer",
  description: "Conoce a Alvaro, tu entrenador personal profesional. Más de 10 años de experiencia ayudando a personas a transformar su cuerpo y vida con entrenamiento personalizado.",
  keywords: [
    "entrenador personal Alvaro",
    "sobre mí",
    "biografía entrenador personal",
    "experiencia fitness",
    "certificaciones entrenamiento",
    "online coaching España",
  ],
};

export default function SobreMi() {
  return (
    <>
      <HeaderWrapper />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-base-100">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/Entrenamiento.jpg"
                    alt="Alvaro Personal Trainer - Profesional del fitness con más de 10 años de experiencia"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Sobre Mí
                </div>
                <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight text-base-content">
                  Hola, soy <span className="text-primary">Alvaro</span>
                </h1>
                <p className="text-lg opacity-80 leading-relaxed text-base-content">
                  Tu entrenador personal dedicado a ayudarte a alcanzar tus objetivos de fitness
                  y bienestar. Con más de una década de experiencia en el sector, he ayudado a
                  más de 500 clientes a transformar sus cuerpos y sus vidas.
                </p>
                <p className="text-lg opacity-80 leading-relaxed text-base-content">
                  Mi enfoque se basa en la personalización absoluta. No creo en las dietas
                  extremas ni en los entrenamientos imposibles de mantener. Creo en enfoques
                  sostenibles que se adaptan a TU vida, no al revés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-neutral">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div className="space-y-2">
                <p className="text-4xl lg:text-5xl font-extrabold text-primary">10+</p>
                <p className="text-sm opacity-70 text-base-content">Años de experiencia</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl lg:text-5xl font-extrabold text-primary">500+</p>
                <p className="text-sm opacity-70 text-base-content">Clientes transformados</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl lg:text-5xl font-extrabold text-primary">98%</p>
                <p className="text-sm opacity-70 text-base-content">Satisfacción</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl lg:text-5xl font-extrabold text-primary">10K+</p>
                <p className="text-sm opacity-70 text-base-content">Kg perdidos por clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-base-100">
          <div className="container mx-auto px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-extrabold text-3xl lg:text-4xl tracking-tight mb-6 text-base-content">
                Mi <span className="text-primary">Filosofía</span>
              </h2>
              <p className="text-lg opacity-80 leading-relaxed text-base-content">
                Creo firmemente que el fitness no es solo sobre verse bien, sino sobre
                sentirse bien, tener energía para disfrutar la vida y construir hábitos
                que duren para siempre.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-base-content">Personalización</h3>
                <p className="opacity-70 text-base-content">
                  Cada persona es única. Tu plan de entrenamiento y nutrición se diseña
                  específicamente para ti.
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-base-content">Sostenibilidad</h3>
                <p className="opacity-70 text-base-content">
                  No crees en dietas extremas. Enseño a comer bien y entrenar de forma
                  sostenible a largo plazo.
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-6 border border-base-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-base-content">Compromiso</h3>
                <p className="opacity-70 text-base-content">
                  Estoy comprometido con tu éxito. Te acompaño en cada paso del camino
                  hacia tus objetivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-neutral">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-extrabold text-3xl lg:text-4xl tracking-tight mb-6 text-base-content">
              ¿Listo para comenzar tu <span className="text-primary">transformación</span>?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-base-content">
              Agenda una consulta gratuita y descubre cómo puedo ayudarte a alcanzar
              tus objetivos de fitness.
            </p>
            <a
              href={`https://wa.me/34625672358?text=${encodeURIComponent("Hola Alvaro, me interesa saber más sobre el entrenamiento personalizado")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg text-primary-content gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
