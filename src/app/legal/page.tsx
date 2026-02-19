import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal - Álvaro Personal Trainer",
  description: "Aviso Legal de Álvaro Personal Trainer conforme a la LSSI",
};

const Legal = () => {
  return (
    <div className="min-h-screen bg-base-100 py-24">
      <div className="container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-base-content">Aviso Legal</h1>
        
        <div className="prose prose-lg max-w-none text-base-content">
          <p className="text-lg opacity-80 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">1. Identificación del Titular</h2>
            <p className="mb-4">
              En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se exponen los siguientes datos de identificación:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Alvaro Martin Diaz</li>
              <li><strong>Correo electrónico de contacto:</strong> alvaromdpersonalfitness@gmail.com</li>
            </ul>
            <p className="mt-4 text-sm text-base-content/70">
              Este sitio web es de carácter personal y no constituye una actividad empresarial formal. Para cualquier consulta, contacto o ejercicio de derechos, utilice el correo electrónico proporcionado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">2. Objeto y Aceptación</h2>
            <p className="mb-4">
              El presente aviso legal regula el uso del sitio web https://alvaropersonaltrainer.com (en adelante, "el sitio web"). 
              La navegación por el sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">3. Uso del Sitio Web</h2>
            <p className="mb-4">
              El usuario se compromete a utilizar el sitio web, sus servicios y contenidos de conformidad con la legislación vigente, 
              el presente Aviso Legal, las buenas costumbres y el orden público.
            </p>
            <p className="mb-4">
              Queda expresamente prohibido el uso del sitio web con fines ilícitos, lesivos de los derechos e intereses de terceros, 
              o que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal utilización.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">4. Propiedad Intelectual e Industrial</h2>
            <p className="mb-4">
              Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, tecnología, software, 
              diseño gráfico y código fuente) son propiedad intelectual del titular o de terceros, y están protegidos por 
              la legislación española de propiedad intelectual e industrial.
            </p>
            <p className="mb-4">
              Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier 
              otra actividad realizada con los contenidos del sitio web sin el consentimiento previo y por escrito del titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">5. Exclusión de Responsabilidad</h2>
            <p className="mb-4">
              El titular no se hace responsable de los posibles daños o perjuicios que pudieran derivarse de la utilización 
              del sitio web, incluyendo, pero no limitándose a: errores u omisiones en los contenidos, falta de disponibilidad 
              del sitio web o la transmisión de virus o programas maliciosos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">6. Links de Terceros</h2>
            <p className="mb-4">
              El sitio web puede incluir enlaces a sitios web de terceros. El titular no ejerce ningún control sobre dichos 
              sitios web ni es responsable de sus contenidos. La inclusión de estos enlaces no implica la aprobación de sus 
              contenidos por parte del titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">7. Modificación del Aviso Legal</h2>
            <p className="mb-4">
              El titular se reserva el derecho de modificar el presente Aviso Legal para adaptarlo a nuevas legislaciones 
              o prácticas comerciales. Se recomienda revisar periódicamente este aviso legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">8. Legislación Aplicable</h2>
            <p className="mb-4">
              El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia 
              que pudiera surgir en relación con el uso de este sitio web, se aplicarán los Juzgados y Tribunales 
              competentes conforme a la normativa procesal española.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
