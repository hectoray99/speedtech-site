import Section from "../components/Section";

const WA_LINK =
    "https://wa.me/5493704906957?text=Hola%20speedTech%2C%20quiero%20más%20info.";

export default function CallToAction() {
    return (
        <Section id="cta" className="text-center bg-blue-600 text-white py-16 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">📲 Contactanos ahora</h2>
            <p className="mb-6 text-lg">Resolvé tu problema tecnológico hoy mismo.</p>
            <a
                href={WA_LINK}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
            >
                Escribir por WhatsApp
            </a>
        </Section>
    );
}
