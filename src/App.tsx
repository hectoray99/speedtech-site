import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Tecnologias from "./sections/Tecnologias";
import PorqueElegirnos from "./sections/PorqueElegirnos";
import Mision from "./sections/Mision";
import CallToAction from "./sections/CallToAction";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer";
import QuienesSomos from "./sections/QuienesSomos";

import RevealLoop from "./components/RevealLoop";


export default function App() {
  return (
    <main className="bg-gray-50 text-gray-900 pt-14">
      <Navbar />

      {/* Hero */}
      <RevealLoop y={-24}>
        <Hero />
      </RevealLoop>

      {/* Quienes Somos */}
      <RevealLoop y={24} delay={0.02}>
        <QuienesSomos />
      </RevealLoop>

      {/* Servicios */}
      <RevealLoop y={24} delay={0.05}>
        <Servicios />
      </RevealLoop>

      {/* Tecnologías */}
      <RevealLoop y={24} delay={0.08}>
        <Tecnologias />
      </RevealLoop>

      {/* ¿Por qué elegirnos? */}
      <RevealLoop y={24} delay={0.10}>
        <PorqueElegirnos />
      </RevealLoop>

      {/* Misión */}
      <RevealLoop y={24} delay={0.12}>
        <Mision />
      </RevealLoop>

      {/* Call To Action */}
      <RevealLoop y={20} delay={0.14}>
        <CallToAction />
      </RevealLoop>

      {/* FAQ */}
      <RevealLoop y={20} delay={0.16}>
        <FAQ />
      </RevealLoop>

      {/* Footer */}
      <RevealLoop y={10} delay={0.18}>
        <Footer />
      </RevealLoop>
    </main>
  );
}