import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, reveal, REDUCED } from "../lib/gsap";

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        reveal(".section-head");
        reveal(".quote-block", { y: 40, delay: 0.15 });
        gsap.from(".quote-mark", {
          yPercent: 30,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".quote-block", start: "top 85%", once: true },
        });
      });
    },
    { scope: container }
  );

  return (
    <section id="avaliacoes" ref={container} className="scroll-mt-20 bg-surface-strong py-24 text-on-dark lg:py-32">
      <div className="mx-auto grid max-w-7xl items-end gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
        <SectionHeading
          dark
          eyebrow="Avaliações"
          title={<>Resultados reais merecem histórias <span className="accent text-primary">reais</span>.</>}
          text="Este espaço vai receber os depoimentos dos nossos clientes. Sem textos inventados, apenas experiências verdadeiras."
        />

        <figure className="quote-block reveal relative border-l border-on-dark/20 pl-8 lg:pl-12">
          <span aria-hidden className="quote-mark block font-serif text-[7rem] leading-[0.6] text-primary">
            “
          </span>
          <blockquote className="mt-6 font-serif text-2xl italic leading-snug text-on-dark/85 sm:text-3xl">
            O próximo depoimento pode ser sobre o seu projeto.
          </blockquote>
          <figcaption className="mt-6 text-sm text-on-dark/50">Depoimentos em breve</figcaption>
        </figure>
      </div>
    </section>
  );
}
