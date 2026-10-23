import { useRef } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, reveal, REDUCED } from "../lib/gsap";

const faqs = [
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "O prazo médio de entrega varia entre 7 e 14 dias úteis, dependendo do tipo e da complexidade do projeto. Definimos esse cronograma logo na reunião inicial.",
  },
  {
    question: "O site terá mensalidade obrigatória?",
    answer: "Não. Você paga pelo desenvolvimento e a propriedade do site é 100% sua. Os únicos custos recorrentes são os de hospedagem e domínio, que são pagos diretamente aos provedores.",
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Com certeza. Todos os nossos projetos são desenvolvidos com a abordagem Mobile-First, garantindo um design fluido, rápido e adaptado para qualquer tamanho de tela.",
  },
  {
    question: "Como funciona a manutenção após a entrega?",
    answer: "Entregamos o site pronto para uso. Se precisar de ajustes futuros, novas páginas ou suporte contínuo, oferecemos planos e serviços avulsos de manutenção.",
  },
  {
    question: "Preciso entender de tecnologia para ter um site?",
    answer: "Não. Cuidamos de todo o processo técnico — do registro do domínio à publicação — e explicamos cada etapa em linguagem simples e sem jargões.",
  },
];

export default function Faq() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        reveal(".section-head");
        reveal(".faq-item", { trigger: ".faq-list", y: 20, stagger: 0.08, start: "top 85%" });
      });
    },
    { scope: container }
  );

  return (
    <section id="faq" ref={container} className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          className="self-start lg:sticky lg:top-32"
          eyebrow="Dúvidas frequentes"
          title={<>Tudo explicado sem <span className="accent text-primary-strong">complicação</span>.</>}
          text="Respostas diretas para você tomar uma decisão com segurança."
        />

        <div className="faq-list border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item reveal group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-medium text-foreground transition-colors hover:text-primary-strong sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="size-5 shrink-0 text-primary-strong transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-7 text-sm leading-7 text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
