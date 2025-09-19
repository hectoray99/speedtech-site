import Section from "../components/Section";
import { motion } from "framer-motion";
// Reemplazá esta importación por tu ilustración real
import aboutImg from "../assets/quienes-ilustracion.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function QuienesSomos() {
  return (
    <Section
      id="quienes"
      className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24"
    >
      {/* Ilustración con animación sutil (float y hover scale) */}
      <motion.div
        className="order-1 md:order-none"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <motion.img
          src={aboutImg}
          alt="Ilustración de speedTech"
          className="w-full max-w-lg mx-auto select-none pointer-events-none drop-shadow-xl"
          // “Flotando” infinito
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4"
      >
        <motion.h2
          variants={itemUp}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          ¿Quiénes somos?
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          En <strong>speedTech</strong> somos un emprendimiento joven de
          Resistencia, apasionado por la tecnología y con muchas ganas de
          crecer. Nacimos con un objetivo simple: ofrecer{" "}
          <span className="font-semibold">
            soluciones informáticas claras, rápidas y confiables
          </span>
          , cuidando cada detalle y escuchando a quienes nos eligen.
        </motion.p>

        <motion.p
          variants={itemUp}
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Nos mueve aprender todo el tiempo, mejorar en cada servicio y
          acompañar a nuestros clientes en lo que necesiten: desde poner a punto
          tu PC hasta crear una web o resolver problemas técnicos del día a día.
          Queremos que sientas que{" "}
          <span className="font-semibold">estamos cerca</span> y que podés
          contar con nosotros.
        </motion.p>

        <motion.div variants={itemUp} className="grid gap-3">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Compromiso real</span> con los
              tiempos y la calidad.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Transparencia</span> en el
              diagnóstico y presupuesto.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500" />
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Mejora continua</span> y ganas de
              aprender siempre.
            </p>
          </div>
        </motion.div>

        {/* CTA opcional (podés quitarlo si no lo necesitás) */}
        {/* <motion.div variants={itemUp} className="pt-2">
          <a
            href="https://wa.me/5493624000000?text=Hola%20speedTech%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta."
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </motion.div> */}
      </motion.div>
    </Section>
  );
}