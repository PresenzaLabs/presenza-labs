import { useRef } from "react";
import { ArrowUpRight, Clock3, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Button } from "../ui/Button";
import { gsap, useGSAP, reveal, splitWords, REDUCED } from "../lib/gsap";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Contact() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        const scrollTrigger = { trigger: ".contact-panel", start: "top 75%", once: true };

        gsap.fromTo(
          ".contact-panel",
          { clipPath: "inset(8% 4% 8% 4% round 1.5rem)" },
          { clipPath: "inset(0% 0% 0% 0% round 0.75rem)", duration: 1.2, ease: "power3.out", scrollTrigger }
        );
        splitWords(".split-title", { delay: 0.2, scrollTrigger });
        reveal(".contact-item", { trigger: ".contact-panel", stagger: 0.12, delay: 0.5, y: 24, start: "top 75%" });
      });
    },
    { scope: container }
  );

  return (
    <section id="contato" ref={container} className="scroll-mt-20 border-t border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="contact-panel relative overflow-hidden rounded-xl bg-surface-strong px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="contact-item reveal eyebrow text-primary">Vamos iniciar um projeto?</p>
              <h2 className="split-title mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-on-dark sm:text-5xl lg:text-6xl">
                Sua ideia pode ser nosso próximo <span className="accent text-primary">experimento</span> de sucesso.
              </h2>
              <p className="contact-item reveal mt-6 max-w-2xl text-base leading-7 text-on-dark/65">
                Conte o que sua empresa precisa. Vamos responder com clareza e encontrar a melhor solução para você.
              </p>
            </div>

            <div className="contact-item reveal">
              <Button asChild size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  Conversar no WhatsApp
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="contact-item reveal relative mt-14 grid gap-3 border-t border-on-dark/15 pt-7 text-sm text-on-dark/70 sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 shrink-0 text-primary" />
              Atendimento 24h
            </span>
            <a
              href="https://instagram.com/presenzalabs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <FaInstagram className="size-4 shrink-0 text-primary" />
              @presenzalabs
            </a>
            <span className="sm:text-right">presenzalabs.com.br</span>
          </div>
        </div>
      </div>
    </section>
  );
}
