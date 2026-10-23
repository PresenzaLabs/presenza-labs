import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Check, LayoutDashboard, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { gsap, useGSAP, splitWords, REDUCED } from "../lib/gsap";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero saber mais sobre criação de sites.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function BrowserPreview() {
  return (
    <div className="hero-visual relative mx-auto w-full max-w-[560px] pb-14 pt-8">
      <div className="hero-window relative z-10 overflow-hidden rounded-xl border border-foreground/12 bg-card shadow-lab">
        <div className="flex h-11 items-center gap-2 border-b border-border bg-background px-4">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-border bg-surface px-3 text-[10px] font-medium text-muted-foreground">
            seusite.com.br
          </div>
        </div>
        <div className="bg-background p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold sm:text-xs">
              Presenza <span className="accent text-primary-strong">Labs</span>
            </span>
            <div className="flex gap-3">
              <span className="h-1.5 w-7 rounded-full bg-border" />
              <span className="h-1.5 w-7 rounded-full bg-border" />
              <span className="h-1.5 w-7 rounded-full bg-border" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-[1.15fr_0.85fr] items-center gap-4 sm:mt-10 sm:gap-7">
            <div className="hero-lines">
              <div className="mb-3 h-2 w-20 rounded-full bg-primary/40" />
              <div className="h-4 w-full rounded-sm bg-foreground sm:h-5" />
              <div className="mt-2 h-4 w-4/5 rounded-sm bg-foreground sm:h-5" />
              <div className="mt-4 h-2 w-full rounded-full bg-border" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-border" />
              <div className="mt-5 h-8 w-24 rounded-md bg-primary sm:h-9 sm:w-28" />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-surface">
              <div className="flex size-14 items-center justify-center rounded-lg bg-foreground text-on-dark sm:size-20">
                <LayoutDashboard className="size-7 text-primary sm:size-10" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
            {["Estratégia", "Design", "Performance"].map((item) => (
              <div key={item} className="hero-tile rounded-md border border-border bg-card p-2.5 sm:p-4">
                <p className="text-[10px] font-semibold sm:text-[11px]">{item}</p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-badge absolute -bottom-1 right-3 z-20 rounded-lg border border-border bg-background px-4 py-3 shadow-lab sm:right-8">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/15">
            <Check className="size-4 text-primary-strong" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Site no ar</p>
            <p className="text-[11px] text-muted-foreground">rápido e responsivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        // 1. Título: palavra por palavra
        splitWords(".hero-title", { delay: 0.15 });

        // 2. Demais elementos em uma timeline, com tempos absolutos
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-eyebrow", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0)
          .fromTo(".hero-text", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.6)
          .fromTo(".hero-cta", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.75)
          .fromTo(".hero-proof", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0.95)
          .fromTo(".hero-visual", { autoAlpha: 0, y: 40, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.2 }, 0.3)
          // o "site" se monta dentro da janela
          .from(".hero-lines > *", { autoAlpha: 0, x: -12, duration: 0.5, stagger: 0.06 }, 0.8)
          .from(".hero-tile", { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.08 }, 1.0)
          .fromTo(".hero-badge", { autoAlpha: 0, y: 20, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.6)" }, 1.3);

        // 3. Parallax leve ao rolar para fora da hero
        gsap.to(".hero-window", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: container }
  );

  return (
    <section id="top" ref={container} className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:min-h-[820px] lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
        <div className="relative z-10 max-w-3xl py-8 lg:py-16">
          <p className="hero-eyebrow eyebrow mb-7 text-primary-strong">
            Desenvolvimento com ciência, estratégia e propósito
          </p>
          <h1 className="hero-title max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Criação de sites profissionais <span className="accent text-primary-strong">personalizados</span>
          </h1>
          <p className="hero-text mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Criamos seu site do jeito que você imagina — rápido, estratégico e preparado para gerar resultados.
          </p>
          <div className="hero-cta mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" /> Quero criar meu site <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="group">
              <a href="#sobre">
                Conhecer a Presenza Labs
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <p className="hero-proof mt-10 text-sm text-muted-foreground">
            Sem mensalidade obrigatória <span className="mx-2 text-foreground/25">/</span> Atendimento próximo
          </p>
        </div>
        <BrowserPreview />
      </div>
    </section>
  );
}
