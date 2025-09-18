type Props = {
  id?: string;
  className?: string;   // clases extra para el contenido interno
  children: React.ReactNode;
};

export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className="py-10 sm:py-14 md:py-20">
      {/* Contenedor centrado + gutters */}
      <div className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
        {children}
      </div>
    </section>
  );
}