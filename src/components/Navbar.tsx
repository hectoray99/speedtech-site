import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/icon.png";

const links = [
    { href: "#hero", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#tech", label: "Tecnologías" },
    { href: "#porque", label: "¿Por qué elegirnos?" },
    { href: "#mision", label: "Misión" },
    { href: "#cta", label: "Contacto" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
            <nav className="max-w-5xl mx-auto w-full px-4 md:px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="flex items-center gap-2 font-extrabold text-lg text-gray-900"
                >
                    <img
                        src={logo}
                        alt="speedTech logo"
                        className="h-10 w-auto object-contain"
                    />
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex gap-6 text-base font-medium">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-600 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -25 }}
                        transition={{ duration: 0.20, ease: "easeOut" }}
                        className="md:hidden bg-white/95 backdrop-blur border-b border-black/10 shadow"
                    >
                        <div className="px-4 py-4 flex flex-col gap-4 text-base font-medium">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)} // cierra al hacer click
                                    className="hover:text-blue-600 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}