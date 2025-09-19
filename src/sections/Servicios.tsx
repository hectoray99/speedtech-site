import { useState } from "react";
import Section from "../components/Section";
import { Laptop, Globe, X, Info } from "lucide-react";
import StaggerLoop from "../components/StaggerLoop";
import { motion, type Variants } from "framer-motion";

type Service = {
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  details: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Reparación de PC",
    icon: <Laptop className="w-10 h-10 text-blue-500" />,
    bullets: ["Optimización completa", "Instalación de drivers", "Soporte a domicilio"],
    details: (
      <>
        Ponemos tu equipo a punto sin vueltas:
        <strong className="font-semibold"> diagnóstico express</strong>, limpieza profunda,
        <strong className="font-semibold"> drivers al día</strong> y optimización de arranque
        para que vuelva a rendir como nuevo.
        Si lo necesitás, vamos a domicilio en
        <strong className="font-semibold"> Resistencia y alrededores</strong>.
        Nos enfocamos en <strong className="font-semibold">estabilidad</strong>,
        <strong className="font-semibold"> seguridad</strong> y
        <strong className="font-semibold"> rendimiento real</strong>,
        sin tecnicismos innecesarios y con precios claros.
      </>
    ),
  },
  {
    title: "Desarrollo Web & Automatizaciones",
    icon: <Globe className="w-10 h-10 text-green-500" />,
    bullets: ["Páginas modernas", "Sistemas a medida", "Automatización de tareas"],
    details: (
      <>
        En <strong className="font-semibold">speedTech</strong> nos obsesiona que tu web cargue rápido,
        se vea <strong className="font-semibold">profesional</strong> y convierta.
        Diseñamos sitios modernos con buenas prácticas
        (<span className="font-semibold">performance</span>,
        <span className="font-semibold"> SEO técnico básico</span> y
        <span className="font-semibold"> accesibilidad</span>),
        integramos formularios que escriben directo a WhatsApp o email,
        y conectamos pagos si lo necesitás.
        También construimos <strong className="font-semibold">automatizaciones</strong> que ahorran tiempo:
        desde chatbots y flujos con planillas hasta integraciones simples que unen tus herramientas.
        Te proponemos la <strong className="font-semibold">mejor solución para tu contexto</strong>,
        sin venderte de más.
      </>
    ),
  },
];

// Stagger rápido (items ágiles)
const fastItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.17, 0.67, 0.83, 0.67], // easeOut
    },
  },
};

export default function Servicios() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

  return (
    <Section id="servicios" className="text-center">
      <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>

      {/* Grid con stagger veloz */}
      <StaggerLoop className="grid md:grid-cols-2 gap-8" delay={0.05}>
        {services.map((srv, i) => (
          <motion.div
            key={i}
            variants={fastItem}
            whileHover={{ y: -6, scale: 1.018 }}
            whileTap={{ scale: 0.995 }}
            transition={{
              type: "spring",
              stiffness: 420,   // respuesta rápida
              damping: 28,      // suavidad sin rebote molesto
              mass: 0.28
            }}
            className="
    group p-6 rounded-2xl bg-white shadow
    border border-gray-200/60
    transform-gpu will-change-transform
    transition-transform duration-150 ease-out
    hover:shadow-lg
  "
          >
            <div className="flex justify-center mb-4">
              {/* Icono con micro-feedback */}
              <motion.div
                whileHover={{ rotate: 2, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, mass: 0.2 }}
                className="inline-block"
              >
                {srv.icon}
              </motion.div>
            </div>

            <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
            <ul className="text-gray-600 space-y-1 mb-5">
              {srv.bullets.map((b, j) => (
                <li key={j}>• {b}</li>
              ))}
            </ul>

            <button
              onClick={() => open(i)}
              className="
      inline-flex items-center gap-2 px-4 py-2 rounded-xl
      bg-blue-600 hover:bg-blue-700 text-white font-medium
      transition-colors duration-150
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
    "
            >
              <Info className="w-4 h-4" />
              Saber más
            </button>
          </motion.div>
        ))}
      </StaggerLoop>

      {/* Modal de detalles */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
          <div className="relative z-10 w-full max-w-2xl">
            <div className="rounded-2xl bg-white shadow-2xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex items-center gap-3">
                  {services[openIndex].icon}
                  <h3 className="text-2xl font-bold">{services[openIndex].title}</h3>
                </div>
                <button onClick={close} className="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Cerrar">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-left text-lg leading-relaxed text-gray-700">
                {services[openIndex].details}
              </p>
              <div className="mt-6 flex justify-end">
                <button onClick={close} className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}