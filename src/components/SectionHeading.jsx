// Cabeçalho padrão das seções. `title` aceita JSX para o destaque em itálico.
export default function SectionHeading({ eyebrow, title, text, className = "", dark = false }) {
  return (
    <div className={`section-head max-w-2xl ${className}`}>
      <p className={`eyebrow ${dark ? "text-primary" : "text-primary-strong"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.25rem] ${dark ? "text-on-dark" : "text-foreground"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-on-dark/65" : "text-muted-foreground"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
