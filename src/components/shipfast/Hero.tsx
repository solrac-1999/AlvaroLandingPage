import Link from "next/link";
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
//Descargada e importada localmente

const Hero = () => {
  return (
    <section className="max-w-7xl min-h-[600px] mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-10 px-8 py-8 lg:py-10">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-4xl tracking-tight md:-mb-4">
          Ser entrenador personal es más rentable que nunca
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Gestionamos tu negocio de entrenamiento personal para que puedas
          centrarte en tus clientes y tener tiempo para ti.
        </p>
        <Link
          className="btn bg-primary text-primary-content hover:bg-primary-focus btn-wide"
          href={"#cta"}
        >
          <img
            src="/favicon.svg"
            alt="Icon"
            className="w-7 h-7 fill-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
          />
          Prueba {config.appName}
        </Link>
        <p className="text-xs -mt-10 ml-20">¿A qué esperas?</p>
      </div>
      <div className="lg:w-full">
        <Image
          src={"/Entrenamiento.jpg"}
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
