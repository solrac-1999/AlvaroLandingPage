import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Álvaro Personal Trainer",
  description: "Política de Privacidad de Álvaro Personal Trainer conforme al RGPD",
};

const Privacy = () => {
  return (
    <div className="min-h-screen bg-base-100 py-24">
      <div className="container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-base-content">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none text-base-content">
          <p className="text-lg opacity-80 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">1. Responsable del Tratamiento</h2>
            <p className="mb-4">
              De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), 
              y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Responsable:</strong> Alvaro Martin Diaz</li>
              <li><strong>Correo electrónico:</strong> hola@alvaropersonaltrainer.com</li>
            </ul>
            <p className="mt-4 text-sm text-base-content/70">
              Este sitio web es gestionado por un particular. Para cualquier consulta relacionada con la protección de datos, 
              puede contactar a través del correo electrónico proporcionado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">2. Finalidad del Tratamiento</h2>
            <p className="mb-4">
              Los datos personales recabados a través del sitio web serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a las consultas y solicitudes de información enviadas por los usuarios.</li>
              <li>Gestionar la contratación de servicios y la relación con los clientes.</li>
              <li>Envío de comunicaciones comerciales sobre servicios y promociones (solo con consentimiento).</li>
              <li>Mejorar la experiencia de usuario y analizar el tráfico del sitio web.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">3. Base Legal del Tratamiento</h2>
            <p className="mb-4">
              El tratamiento de datos personales se basa en las siguientes bases legales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales y consultas.</li>
              <li><strong>Ejecución del contrato:</strong> Para la gestión de servicios contratados.</li>
              <li><strong>Interés legítimo:</strong> Para el análisis de tráfico y mejora del sitio web.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">4. Categorías de Datos</h2>
            <p className="mb-4">
              Los datos que tratamos pueden incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Datos de facturación (NIF, dirección)</li>
              <li>Datos de salud relacionados con el entrenamiento (solo si el usuario los proporciona voluntariamente)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">5. Destinatarios de los Datos</h2>
            <p className="mb-4">
              Los datos personales no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la 
              prestación del servicio contratado (por ejemplo, proveedores de pago).
            </p>
            <p className="mb-4">
              No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">6. Conservación de los Datos</h2>
            <p className="mb-4">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las 
              que fueron recopilados, y durante los plazos legales de conservación aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">7. Derechos del Usuario</h2>
            <p className="mb-4">
              El usuario tiene los siguientes derechos respecto a sus datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Obtener confirmación sobre si estamos tratando sus datos y acceder a ellos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede enviar un correo electrónico a hola@alvaropersonaltrainer.com 
              indicando claramente el derecho que desea ejercer y proporcionando la información necesaria para 
              identificar su solicitud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">8. Seguridad de los Datos</h2>
            <p className="mb-4">
              El responsable del tratamiento adopta las medidas técnicas y organizativas adecuadas para garantizar 
              un nivel de seguridad adecuado al riesgo, incluyendo la protección de los datos contra su tratamiento 
              no autorizado o ilícito, su pérdida, destrucción o daño accidental.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">9. Menores de Edad</h2>
            <p className="mb-4">
              Este sitio web no está dirigido a menores de edad. El responsable del tratamiento no recopilará 
              deliberadamente datos personales de menores de 14 años sin el consentimiento de sus padres o tutores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">10. Reclamaciones</h2>
            <p className="mb-4">
              El usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) 
              si considera que el tratamiento de sus datos personales infringe el RGPD.
            </p>
            <p>
              <strong>AEPD:</strong> www.aepd.es
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
