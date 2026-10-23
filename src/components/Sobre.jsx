import { useRef } from "react";
import { Code2, Globe, Layout, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, reveal, REDUCED } from "../lib/gsap";

const siteTypes = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    text: "Páginas profissionais completas para transmitir autoridade, apresentar serviços e passar confiança para clientes.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    text: "Páginas focadas em um único objetivo: transformar visitantes em leads e vendas diretas no WhatsApp.",
  },
  {
    icon: Layout,
    title: "Portfólios Comerciais",
    text: "Apresente seus trabalhos, projetos ou cases com design moderno e navegação fluida.",
  },
  {
    icon: Code2,
    title: "Aplicações Sob Medida",
    text: "Sistemas web e interfaces personalizadas construídas especificamente para a regra do seu negócio.",
  },
];

const pillars = [
  "Programação sob medida",
  "Alta performance",
  "Design responsivo",
  "Comunicação transparente",
];

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        reveal(".section-head");
        reveal(".about-copy > p", { trigger: ".about-copy", stagger: 0.12 });
        reveal(".about-pillar", { trigger: ".about-pillars", y: 16, stagger: 0.08 });
        reveal(".services-head", { y: 24 });
        reveal(".service-card", { trigger: ".services-grid", y: 40, stagger: 0.1, start: "top 80%" });
        reveal(".tech-chip", { trigger: ".tech-row", y: 10, stagger: 0.05, start: "top 90%" });
      });
    },
    { scope: container }
  );

  return (
    <section id="sobre" ref={container} className="scroll-mt-20 border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Bloco Superior: História e Pilares */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading
            eyebrow="Sobre o laboratório"
            title={<>Tecnologia com método. Parceria com <span className="accent text-primary-strong">transparência</span>.</>}
            text="A Presenza Labs nasceu em 2026, fundada por Victor Presença, técnico em Desenvolvimento de Sistemas e estudante de Sistemas de Informação."
          />
          <div className="about-copy space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p className="reveal">
              Transformamos estudo, programação e força de vontade em projetos empresariais de alta performance, com design atual e desenvolvimento técnico feito sob medida.
            </p>
            <p className="reveal">
              Trabalhamos com honestidade, comunicação clara e foco total na satisfação de cada cliente — inclusive de quem não entende de tecnologia.
            </p>
            <ul className="about-pillars grid gap-x-8 pt-4 sm:grid-cols-2">
              {pillars.map((item) => (
                <li
                  key={item}
                  className="about-pillar reveal border-t border-foreground/15 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bloco Inferior: O que desenvolvemos */}
        <div id="servicos" className="mt-24 scroll-mt-24">
          <div className="services-head reveal mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              O que <span className="accent text-primary-strong">desenvolvemos</span>
            </h3>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Da primeira página à operação completa, cada solução é planejada para o objetivo do seu negócio.
            </p>
          </div>

          <div className="services-grid grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {siteTypes.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="service-card reveal group bg-background p-7 transition-colors duration-300 hover:bg-card"
              >
                <Icon
                  className="size-6 text-primary-strong transition-transform duration-500 ease-out group-hover:-translate-y-1"
                  strokeWidth={1.6}
                />
                <h4 className="mt-10 text-lg font-semibold text-foreground">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <div className="tech-row mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-3 text-xs text-muted-foreground">Feito com</span>
            {["React", "Tailwind CSS v4", "Vite", "GSAP", "IA aplicada ao processo"].map((tech) => (
              <span
                key={tech}
                className="tech-chip reveal rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
