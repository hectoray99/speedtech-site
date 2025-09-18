import Section from "../components/Section";

export default function HowItWorks() {
  return (
    <Section id="work" className="grid md:grid-cols-2 gap-10">
      {/* Features */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h2>
        <ul className="mt-6 space-y-4">
          {["Rápidos", "Claritos en precios", "A domicilio"].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 rounded-full border-2 border-blue-600" />
              <span className="text-lg">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pasos */}
      <div>
        <ol className="mt-8 md:mt-0 space-y-6">
          {["Nos contactás", "Diagnóstico express", "Vamos y resolvemos"].map(
            (t, i) => (
              <li key={t} className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                  {i + 1}
                </span>
                <span className="text-lg">{t}</span>
              </li>
            )
          )}
        </ol>
      </div>
    </Section>
  );
}