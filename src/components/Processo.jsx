import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, ScrollTrigger, reveal, REDUCED } from "../lib/gsap";

const steps = [
  {
    title: "Conversa inicial",
    text: "Entendemos o seu negócio, o objetivo do site e o público. Já saímos dessa conversa com o prazo definido.",
  },
  {
    title: "Proposta e planejamento",
    text: "Você recebe o escopo, a estrutura das páginas e o valor fechado antes de qualquer linha de código.",
  },
  {
    title: "Design e desenvolvimento",
    text: "Construímos o site sob medida e você acompanha cada etapa, aprovando antes de seguir.",
  },
  {
    title: "Publicação",
    text: "Cuidamos de domínio, hospedagem e de colocar tudo no ar. O site é 100% seu desde o primeiro dia.",
  },
];

export default function Processo() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        reveal(".section-head");

        // Linha que cresce junto com a rolagem
        gsap.fromTo(
          ".proc-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".proc-steps", start: "top 70%", end: "bottom 70%", scrub: true },
          }
        );

        // Cada etapa entra em fade e acende o número
        gsap.utils.toArray(".proc-step").forEach((step) => {
          reveal(step, { start: "top 80%" });

          ScrollTrigger.create({
            trigger: step,
            start: "top 70%",
            end: "max",
            toggleClass: { targets: step.querySelector(".proc-dot"), className: "is-active" },
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <section id="processo" ref={container} className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1fr_1.15fr] lg:px-8">
        <div className="self-start md:sticky md:top-32">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title={<>Do primeiro contato ao site <span className="accent text-primary-strong">no ar</span></>}
            text="Quatro etapas, sem surpresas. Você sabe o que acontece em cada uma e quando."
          />
        </div>

        <ol className="proc-steps relative space-y-16 pl-14">
          {/* Trilho fixo e linha animada */}
          <span aria-hidden className="absolute bottom-2 left-[17.5px] top-2 w-px bg-foreground/12" />
          <span aria-hidden className="proc-line absolute bottom-2 left-[17.5px] top-2 w-px origin-top bg-primary" />

          {steps.map((step, i) => (
            <li key={step.title} className="proc-step reveal relative">
              <span className="proc-dot absolute -left-14 top-0 grid size-9 place-items-center rounded-full border border-foreground/20 bg-background font-serif text-base italic text-foreground transition-colors duration-300">
                {i + 1}
              </span>
              <h3 className="pt-1 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-md leading-7 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
