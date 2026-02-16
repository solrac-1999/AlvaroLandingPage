import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - Álvaro Personal Trainer",
  description: "Política de Cookies de Álvaro Personal Trainer",
};

const Cookies = () => {
  return (
    <div className="min-h-screen bg-base-100 py-24">
      <div className="container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-base-content">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none text-base-content">
          <p className="text-lg opacity-80 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">1. ¿Qué son las Cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo
              cuando visita nuestro sitio web. Las cookies nos ayudan a mejorar su experiencia de navegación y a entender 
              cómo utiliza nuestro sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">2. Tipos de Cookies que Utilizamos</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-base-content">2.1 Cookies Técnicas (Necesarias)</h3>
              <p className="mb-4">
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. 
                Normalmente se configuran en respuesta a sus acciones como ajustar la privacidad, iniciar sesión o completar formularios.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Finalidad:</strong> Permitir la navegación y el uso de las funcionalidades del sitio web.</li>
                <li><strong>Duración:</strong> Sesión o persistentes (según la cookie).</li>
                <li><strong>Gestión:</strong> Requeridas para el funcionamiento del sitio.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-base-content">2.2 Análisis Estadístico (Sin Cookies)</h3>
              <p className="mb-4">
                Utilizamos Plausible Analytics, una herramienta de análisis respetuosa con la privacidad que <strong>no utiliza cookies</strong> 
                y no rastrea usuarios individuales. Toda la información es anónima y agregada.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedor:</strong> Plausible Analytics (alojado en la UE).</li>
                <li><strong>Finalidad:</strong> Analizar el tráfico de forma anónima y mejorar el sitio web.</li>
                <li><strong>Información recopilada:</strong> Datos agregados anónimos (páginas visitadas, tiempo de navegación).</li>
                <li><strong>Privacidad:</strong> No utiliza cookies, no rastrea usuarios, cumple con GDPR.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">3. Cookies y Tecnologías Utilizadas</h2>
            <p className="mb-4">A continuación, detallamos las cookies y tecnologías de seguimiento que utilizamos:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-base-300">
                <thead>
                  <tr className="bg-base-200">
                    <th className="border border-base-300 px-4 py-2 text-left">Tecnología</th>
                    <th className="border border-base-300 px-4 py-2 text-left">Proveedor</th>
                    <th className="border border-base-300 px-4 py-2 text-left">Finalidad</th>
                    <th className="border border-base-300 px-4 py-2 text-left">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-base-300 px-4 py-2">Plausible Analytics</td>
                    <td className="border border-base-300 px-4 py-2">Plausible (UE)</td>
                    <td className="border border-base-300 px-4 py-2">Análisis estadístico anónimo</td>
                    <td className="border border-base-300 px-4 py-2">Sin cookies</td>
                  </tr>
                  <tr>
                    <td className="border border-base-300 px-4 py-2">next-auth.session-token</td>
                    <td className="border border-base-300 px-4 py-2">NextAuth.js</td>
                    <td className="border border-base-300 px-4 py-2">Autenticación de usuarios (solo si inicia sesión)</td>
                    <td className="border border-base-300 px-4 py-2">Técnica (sesión)</td>
                  </tr>
                  <tr>
                    <td className="border border-base-300 px-4 py-2">theme</td>
                    <td className="border border-base-300 px-4 py-2">DaisyUI</td>
                    <td className="border border-base-300 px-4 py-2">Preferencia de tema (claro/oscuro)</td>
                    <td className="border border-base-300 px-4 py-2">Técnica (persistente)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-base-content/70">
              <strong>Nota importante:</strong> No utilizamos cookies de terceros para publicidad ni seguimiento. 
              Plausible Analytics no utiliza cookies y no recopila datos personales identificables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">4. Gestión de Cookies</h2>
            <p className="mb-4">
              Puede gestionar sus preferencias de cookies de las siguientes maneras:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Panel de preferencias:</strong> Al visitar nuestro sitio web, puede ajustar sus preferencias de cookies.</li>
              <li><strong>Configuración del navegador:</strong> Puede configurar su navegador para rechazar todas las cookies o solo las de terceros.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Chrome: Configuración → Privacidad y Seguridad → Cookies</li>
                  <li>Firefox: Preferencias → Privacidad y Seguridad → Cookies</li>
                  <li>Safari: Preferencias → Privacidad → Cookies</li>
                  <li>Edge: Configuración → Cookies y permisos de sitio</li>
                </ul>
              </li>
              <li><strong>Herramientas online:</strong> Puede utilizar herramientas como Your Online Choices (www.youronlinechoices.com)</li>
            </ul>
            <p className="bg-warning/20 border border-warning p-4 rounded-lg">
              <strong>Nota:</strong> Si desactiva ciertas cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">5. Servicios de Terceros</h2>
            <p className="mb-4">
              Nuestro sitio web utiliza servicios de terceros que respetan la privacidad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plausible Analytics:</strong> Análisis estadístico anónimo sin cookies. 
                <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="link link-primary"> Política de privacidad de Plausible</a></li>
              <li><strong>Stripe:</strong> Para procesamiento de pagos (solo si contrata servicios). 
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="link link-primary"> Política de privacidad de Stripe</a></li>
              <li><strong>Redes sociales:</strong> Los enlaces a redes sociales (Instagram, YouTube) son enlaces directos y 
                no instalan cookies hasta que usted haga clic en ellos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">6. Actualizaciones de esta Política</h2>
            <p className="mb-4">
              Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas 
              o en la legislación aplicable. Le recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-base-content">7. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> hola@alvaropersonaltrainer.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
