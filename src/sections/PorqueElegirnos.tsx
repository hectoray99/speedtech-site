import Section from "../components/Section";
import { Clock, UserCheck, Zap, Cpu } from "lucide-react";

const features = [
    { icon: <Clock className="w-9 h-9 sm:w-10 sm:h-10 text-blue-500" />, text: "Atención a domicilio y online" },
    { icon: <Zap   className="w-9 h-9 sm:w-10 sm:h-10 text-yellow-500" />, text: "Soluciones rápidas y personalizadas" },
    { icon: <UserCheck className="w-9 h-9 sm:w-10 sm:h-10 text-green-500" />, text: "Trato cercano y profesional" },
    { icon: <Cpu   className="w-9 h-9 sm:w-10 sm:h-10 text-purple-500" />, text: "Tecnología actual al alcance de todos" },
];

export default function PorqueElegirnos() {
    return (
        <Section id="porque" className="text-center">
            <h2 className="text-center mb-8 sm:mb-10">¿Por qué elegirnos?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="mb-4">
                            {/* subí un toque los íconos para mobile */}
                            {f.icon /* asegurate que usen className="w-9 h-9 sm:w-10 sm:h-10 ..." */}
                        </div>
                        <p className="text-base sm:text-lg text-gray-700">{f.text}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
