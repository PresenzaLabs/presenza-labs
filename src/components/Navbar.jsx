import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "../ui/Button";
import LogoPng from "../assets/logo-presenzalabs.webp"
import { gsap, useGSAP, ScrollTrigger, REDUCED } from "../lib/gsap";

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const navItems = [
  ["Início", "#top"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Processo", "#processo"],
  ["Projetos", "#projetos"],
  ["FAQ", "#faq"],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
      <img
        src={LogoPng}
        alt="Presenza Labs"
        width="50"
        height="50"
        className="size-10"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span>
        Presenza Labs
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(REDUCED, () => {
      gsap.from(header.current, { yPercent: -100, autoAlpha: 0, duration: 0.9, delay: 0.1, ease: "power3.out" });

      // Esconde ao rolar para baixo e volta ao rolar para cima
      const show = gsap.to(header.current, { yPercent: -100, duration: 0.35, ease: "power2.out", paused: true }).reverse();

      ScrollTrigger.create({
        start: "top -120",
        end: "max",
        onUpdate: (self) => (self.direction === 1 ? show.play() : show.reverse()),
        onLeaveBack: () => show.reverse(),
      });
    });
  });

  // Fecha o menu ao pressionar a tecla ESC
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  // Trava o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header ref={header} className="fixed inset-x-0 top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block">
            <Button asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </header>

      {/* Overlay Escuro com Desfoque TOTAL (fora da header) */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Lateral Mobile (fora da header) */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[82%] max-w-sm flex-col bg-background p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="size-6" />
          </Button>
        </div>

        <nav className="mt-12 flex flex-col">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-5 text-xl font-semibold text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button asChild size="lg" className="mt-auto">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="size-5" /> Falar pelo WhatsApp
          </a>
        </Button>
      </aside>
    </>
  );
}