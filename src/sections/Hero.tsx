import Section from "../components/Section";
import heroImg from "../assets/hero-ilustracion.png";

const WA_LINK =
  "https://wa.me/5493704906957?text=Hola%20speedTech%2C%20quiero%20más%20info.";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="grid md:grid-cols-2 gap-10 items-center min-h-[80vh]"
    >
      {/* Texto */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl">
          Soluciones informáticas rápidas y confiables
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-700 max-w-xl">
          Reparamos tu PC, desarrollamos tu web y automatizamos tus procesos, sin complicaciones.
        </p>
        <div className="mt-6 sm:mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            📲 Contactanos por WhatsApp
          </a>
        </div>

      </div>

      {/* Imagen */}
      <div className="flex justify-center">
        <img src={heroImg} alt="Soporte técnico" className="w-80 md:w-[600px] lg:w-[650px]" />
      </div>
    </Section>
  );
}
