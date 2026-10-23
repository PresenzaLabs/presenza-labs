import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, reveal, REDUCED } from "../lib/gsap";

// `count` marca os valores que sobem de 0 até o número ao entrar na tela
const stats = [
  {
    prefix: "+",
    count: 8,
    label: "projetos concluídos",
    text: "Experiências digitais entregues para empresas que buscavam crescer.",
  },
  {
    count: 100,
    suffix: "%",
    label: "de satisfação",
    text: "Compromisso total com qualidade, transparência e resultado.",
  },
  {
    value: "7–14",
    label: "dias de prazo médio",
    text: "Agilidade responsável, de acordo com a complexidade do projeto.",
  },
];

export default function Projects() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        reveal(".section-head");
        reveal(".stat-card", { trigger: ".stats-grid", y: 50, stagger: 0.15, start: "top 80%" });

        gsap.utils.toArray(".stat-count").forEach((el) => {
          gsap.from(el, {
            textContent: 0,
            duration: 1.6,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: ".stats-grid", start: "top 80%", once: true },
          });
        });

        gsap.fromTo(
          ".stat-bar",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            delay: 0.4,
            stagger: 0.15,
            ease: "power3.inOut",
            scrollTrigger: { trigger: ".stats-grid", start: "top 80%", once: true },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section id="projetos" ref={container} className="scroll-mt-20 border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Resultados em números"
          title={<>Projetos tratados como <span className="accent text-primary-strong">ciência exata</span>.</>}
          text="Prazos claros, acompanhamento próximo e uma entrega construída para durar."
        />

        <div className="stats-grid mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card reveal bg-background p-8 sm:p-10">
              <p className="text-6xl font-semibold tracking-tight text-foreground tabular-nums sm:text-7xl">
                {stat.count != null ? (
                  <>
                    {stat.prefix}
                    <span className="stat-count">{stat.count}</span>
                    {stat.suffix}
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <div className="stat-bar mt-6 h-px w-full origin-left bg-primary" />
              <h3 className="mt-6 text-base font-semibold text-foreground">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
