"use client";

import { useState, useEffect, useRef } from "react";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features: {
  name: string;
  description: JSX.Element;
  svg: JSX.Element;
}[] = [
  {
    //https://icon-sets.iconify.design/la/dumbbell/
    name: "Rutinas",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Creación y personalización de plantillas de planes de entrenamiento.",
            "Registro automático del progreso.",
            "Adaptación automática a los objetivos y progresos con IA.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 30 30"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          d="M21.313 3.5c-.766 0-1.547.297-2.125.875a2.9 2.9 0 0 0-.75 1.344c-.208-.043-.41-.094-.625-.094c-.766 0-1.547.266-2.125.844a3 3 0 0 0 0 4.218l.843.844l-5 5l-.844-.843a2.95 2.95 0 0 0-2.093-.876c-.766 0-1.547.297-2.125.876a3 3 0 0 0-.782 2.78c-.48.126-.933.34-1.312.72a3 3 0 0 0 0 4.218l.031.032l1.344 1.375l-.688.687L6.5 26.938l.688-.688l1.406 1.375a3 3 0 0 0 4.219 0a2.95 2.95 0 0 0 .75-1.313c.96.208 2.007-.039 2.75-.78a3 3 0 0 0 0-4.22l-.844-.843l5-5l.843.844a3 3 0 0 0 4.22 0c.738-.743.988-1.79.78-2.75a2.9 2.9 0 0 0 1.313-.75a3 3 0 0 0 0-4.22L26.25 7.189l.688-.688L25.5 5.062l-.688.688l-1.406-1.375a2.95 2.95 0 0 0-2.093-.875m0 2a.95.95 0 0 1 .687.281L26.219 10a.95.95 0 0 1 0 1.375a.99.99 0 0 1-1.407 0l-4.187-4.188a.99.99 0 0 1 0-1.406a.95.95 0 0 1 .688-.281m-3.5 2.094c.25 0 .492.117.687.312l5.594 5.594a.99.99 0 0 1 0 1.406c-.39.39-.98.36-1.375-.031h-.032l-5.593-5.594c-.39-.39-.36-.98.031-1.375c.191-.183.445-.312.688-.312m.125 5.343l1.125 1.126l-5 5l-1.126-1.125zm-9.344 3.876c.25 0 .492.117.687.312h.031l5.594 5.594c.39.39.36.98-.031 1.375c-.39.37-.988.386-1.375 0l-.688-.688l-.124-.093l-4.094-4.125l-.688-.688a.99.99 0 0 1 0-1.406a.95.95 0 0 1 .688-.282zm-2.125 3.5c.25 0 .523.117.718.312l4.188 4.188a.99.99 0 0 1 0 1.406c-.39.39-.98.39-1.375 0L5.781 22a.95.95 0 0 1 0-1.375c.196-.195.438-.313.688-.313z"
        />
      </svg>
    ),
  },
  {
    //https://icon-sets.iconify.design/cil/apple/
    name: "Nutrición",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Creación y personalización de plantillas de dietas.",
            "Seguimiento con cálculo de ingesta calórica y macronutrientes diarios.",
            "Sugerencias de recetas en base a los objetivos con IA.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M452.415 213.048c-10.609-27.192-27.511-48.256-48.92-61.078a157.7 157.7 0 0 1-17.583 26.757l.115.063c31.881 18.323 50.423 65.148 45.091 113.871c-8.833 80.721-33.35 136.043-69.036 155.775c-23.2 12.827-52.133 11-86-5.424l-3.308-1.6h-24.389l-3.307 1.6c-33.867 16.426-62.8 18.251-86 5.424c-35.685-19.732-60.2-75.054-69.036-155.775c-5.332-48.723 13.211-95.549 45.091-113.871a66.6 66.6 0 0 1 33.74-8.768c24.143 0 51.966 11.311 82.2 33.656l1.078.8s43.583-5.299 60.849-13.138c52.021-23.617 63.5-61.156 65.536-66.254a121.9 121.9 0 0 0-1.021-93.559l-4.073-10.169l-10.949.11A122.777 122.777 0 0 0 242.039 159.7c-18.9-10.59-37.278-17.343-54.884-20.14c-24.943-3.965-47.811-.1-67.968 11.486c-22.138 12.724-39.581 34.164-50.442 62c-9.874 25.307-13.608 54.817-10.514 83.094c10.142 92.681 39.659 155.027 85.361 180.3a99.9 99.9 0 0 0 49.1 12.543c19.585 0 40.629-5.194 62.975-15.575h9.83c42.394 19.693 80.085 20.718 112.071 3.032c45.7-25.271 75.221-87.617 85.363-180.3c3.092-28.275-.642-57.785-10.516-83.092M328.019 60.826a90.5 90.5 0 0 1 23.693-6.564a90.8 90.8 0 0 1-75.056 115.205a90.84 90.84 0 0 1 51.363-108.641"
        />
      </svg>
    ),
  },
  {
    name: "Pagos",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Pagos automáticos para que tú y tus clientes no tengáis que preocuparos.",
            "Creación de recibos y facturas personalizadas.",
            "Recordatorios y gestion de impagos automáticos.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    name: "Calendario",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Muestra las rutinas y dietas de forma visual.",
            "Recordatorios automáticos de citas y eventos.",
            "Facilita el seguimiento de los clientes"
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Seguimiento",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Fichas personalizables que se adaptan a tus necesidades.",
            "Monitorización de métricas clave.",
            "Control de hábitos.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 1h-2a1 1 0 0 0-1 1v16.992h4V2a1 1 0 0 0-1-1m-6 6H9a1 1 0 0 0-1 1v10.992h4V8a1 1 0 0 0-1-1m-6 6H3a1 1 0 0 0-1 1v4.992h4V14a1 1 0 0 0-1-1"
        />
      </svg>
    ),
  },
  {
    name: "Chat",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Comunicación instantánea a través de la app.",
            "Envío de emails y notificaciones para mantener a tus clientes informados.",
            "Envíos masivos para facilitar las ventas y la gestión.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 25 25"
      >
        <path
          fill="currentColor"
          d="M6 14h8v-2H6zm0-3h12V9H6zm0-3h12V6H6zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"
        />
      </svg>
    ),
  },
  {
    name: "Biblioteca",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Acceso a una base de datos con descripciones, imágenes y videos de ejercicios.",
            "Clasificación de ejercicios por tipo, grupo muscular, nivel de dificultad.",
            "Puedes utilizar nuestra base de datos o generar tu propio contendio.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 25 25"
      >
        <path fill="currentColor" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z" />
        <path
          fill="currentColor"
          d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
        />
      </svg>
    ),
  },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState<string>(
    features[0].name
  );
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            Centraliza la gestión
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            Otros competidores son muy caros, y sabemos que intentar recordarlo
            todo te da dolor de cabeza. Se te acaban las excusas para no mejorar
            tu vida y tu negocio.
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* 💡 TIP cambiando grid-cols-X se pueden poner el numero de iconos que vayamos a tener */}
        <div className="grid grid-cols-7 gap-4 md:gap-8 max-md:px-8 mb-4">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/50"
                }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)?.name}
              </h3>

              {features.find((f) => f.name === featureSelected)?.description}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
