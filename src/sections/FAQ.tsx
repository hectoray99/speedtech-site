import Section from "../components/Section";

const faqs = [
  {
    q: "¿Cuánto tarda una reparación de PC?",
    a: "La mayoría de los trabajos se resuelven en el mismo día, según la complejidad y disponibilidad de repuestos."
  },
  {
    q: "¿Cómo funciona el servicio de desarrollo web?",
    a: "Primero coordinamos una videollamada para entender tus necesidades. Luego te pasamos una propuesta clara con el tiempo estimado y los entregables. Así evitamos sorpresas y vos sabés exactamente qué esperar."
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, transferencia bancaria y Mercado Pago. Para proyectos web o automatizaciones también podés abonar en etapas."
  },
  {
    q: "¿Qué incluye la garantía?",
    a: "En reparaciones de PC, 7 días de garantía sobre el trabajo realizado. En desarrollo web y automatizaciones, soporte básico post-entrega para ajustes menores."
  },
  {
    q: "¿Ofrecen servicio para empresas?",
    a: "Sí, brindamos mantenimiento programado, facturación y soluciones a medida para equipos de trabajo o negocios locales."
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-gray-50 rounded-2xl">
      <h2>Preguntas frecuentes</h2>
      <div className="mt-4 divide-y divide-black/10">
        {faqs.map((f) => (
          <details key={f.q} className="py-3">
            <summary className="cursor-pointer list-none font-semibold text-gray-900">
              {f.q}
            </summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}