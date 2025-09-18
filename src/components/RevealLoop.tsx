// src/components/RevealLoop.tsx
import { useEffect, useRef, type PropsWithChildren } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = PropsWithChildren<{
  y?: number;          // desplazamiento inicial
  delay?: number;      // demora
  amount?: number;     // 0..1, porción visible para disparar
  className?: string;  // clases del contenedor exterior (no del motion)
}>;

export default function RevealLoop({
  y = 20,
  delay = 0,
  amount = 0.2,
  className,
  children,
}: Props) {
  // 🔎 Sentinela: elemento "observado"
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount,
    margin: "-10% 0px -10% 0px", // dispara un poco antes
  });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
        initial="hidden"
        animate={controls}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}