import Section from "../components/Section";
import StaggerLoop from "../components/StaggerLoop";
import { motion, type Variants } from "framer-motion";

type Tech = { name: string; src: string; scaleFix?: boolean };

const techs: Tech[] = [
  { name: "React",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Vite",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", scaleFix: true },
  { name: "HTML5",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git",          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Python",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  
];

// ⚡️ Entrada mucho más rápida
const fastItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,                 // antes 0.28
      ease: [0.25, 0.46, 0.45, 0.94], // easeOut rápido
    },
  },
};

export default function Tecnologias() {
  return (
    <Section id="tech" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Tecnologías que usamos</h2>
      <p className="mt-3 max-w-2xl mx-auto text-gray-600">
        Stack moderno y probado. Siempre aprendiendo para darte más valor.
      </p>

      {/* ⬇️ stagger y delay casi nulos para que “dispare” rápido */}
      <StaggerLoop
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        delay={0}
        stagger={0.05}   // antes 0.12
      >
        {techs.map((t) => (
          <motion.div
            key={t.name}
            variants={fastItem}
            // 🎯 Hover inmediato y corto
            whileHover={{ y: -2, boxShadow: "0 8px 18px rgba(0,0,0,.06)" }}
            transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
            className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm"
            style={{ willChange: "transform, box-shadow" }}   // perf
            title={t.name}
          >
            <div className="h-12 flex items-center justify-center">
              <img
                src={t.src}
                alt={t.name}
                className={`max-h-12 max-w-full object-contain ${t.scaleFix ? "scale-125" : ""}`}
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm sm:text-base font-medium text-gray-800">{t.name}</p>
          </motion.div>
        ))}
      </StaggerLoop>

      <p className="mt-8 text-sm text-gray-600">
        Nos actualizamos constantemente para que tu proyecto funcione mejor y dure más.
      </p>
    </Section>
  );
}