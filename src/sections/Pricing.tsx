import Section from "../components/Section";

const plans = [
  { name: "Básico", price: 6000, features: ["Limpieza", "Optimización", "Drivers"] },
  { name: "Intermedio", price: 10000, features: ["Todo lo del Básico", "Backup simple"] },
  { name: "Full", price: 14000, features: ["Todo lo del Intermedio", "Reinstalación completa"] },
];

export default function Pricing() {
  return (
    <Section id="pricing">
      <h2 className="text-3xl md:text-4xl font-bold">Nuestros planes</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold">${p.price.toLocaleString("es-AR")}</div>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a
              href="https://wa.me/5493624000000?text=Quiero%20este%20plan%20de%20speedTech"
              target="_blank"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
            >
              Escribir por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}