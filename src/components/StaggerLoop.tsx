import { useEffect, useRef, type PropsWithChildren } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

type Props = PropsWithChildren<{
    className?: string;
    delay?: number;     // delay antes de empezar el stagger
    amount?: number;    // 0..1 - cuánto debe verse para disparar
    stagger?: number;   // ⬅️ nuevo: separación entre items (s)
}>;

export const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StaggerLoop({
    className,
    delay = 0,
    amount = 0.2,
    stagger = 0.12,           // ⬅️ valor por defecto
    children,
}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount, margin: "0px 0px -10% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        controls.start(inView ? "show" : "hidden");
    }, [inView, controls]);

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } }, // ⬅️ usa prop
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={controls}
        >
            {children}
        </motion.div>
    );
}