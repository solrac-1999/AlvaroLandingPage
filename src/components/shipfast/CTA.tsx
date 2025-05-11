import Image from "next/image";
import ButtonLead from "./ButtonLead";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen" id="cta">
      <Image
        src={"/Entrenamiento.jpg"}
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-base bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Te estamos diciendo que es gratis <br /> ¿Qué más necesitas?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Deja de perder el tiempo leyendo sobre si merece la pena y pruebalo
            tú mismo.
          </p>
          <ButtonLead />
        </div>
      </div>
    </section>
  );
};

export default CTA;
