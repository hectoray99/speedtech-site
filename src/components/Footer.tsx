const WA_LINK =
  "https://wa.me/5493704906957?text=Hola%20speedTech%2C%20quiero%20hacer%20una%20consulta."; // ← cambiá el número

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-24 border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-extrabold">speedTech</h3>
          <p className="mt-2 text-sm text-gray-600">
            Reparación y optimización de PC a domicilio en Resistencia y alrededores.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2"
            aria-label="Escribir a speedTech por WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Resistencia, Chaco</li>
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline"
                aria-label="Contactar por WhatsApp"
              >
                +54 9 370 490-6957
              </a>
            </li>
            <li>
              <a
                href="mailto:speedtech.rcta@gmail.com"
                className="underline underline-offset-2 hover:no-underline"
              >
                speedtech.rcta@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navegación */}
        <nav aria-label="Secciones del sitio">
          <h4 className="font-semibold">Secciones</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#hero" className="hover:underline">Inicio</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#porque" className="hover:underline">¿Por qué elegirnos?</a></li>
            <li><a href="#mision" className="hover:underline">Misión</a></li>
            <li><a href="#cta" className="hover:underline">Contacto</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-12 flex items-center justify-between text-xs text-gray-600">
          <p>© {year} speedTech. Todos los derechos reservados.</p>
          <a href="#hero" className="hover:underline" aria-label="Volver arriba">
            ↑ Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}