import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const REDUCED = "(prefers-reduced-motion: no-preference)";

// Fade + subida ao entrar na tela. Usado pelos cabeçalhos e listas das seções.
export function reveal(targets, { trigger, y = 30, stagger = 0, delay = 0, start = "top 85%" } = {}) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: { trigger: trigger ?? targets, start, once: true },
    }
  );
}

// Título palavra por palavra, com máscara (o texto "sobe" de dentro da linha)
export function splitWords(target, { delay = 0, scrollTrigger } = {}) {
  gsap.set(target, { autoAlpha: 1 });

  return SplitText.create(target, {
    type: "words",
    mask: "words",
    autoSplit: true,
    onSplit(self) {
      // Estende a máscara para baixo sem mudar o layout, para não cortar descendentes (ç, g, p)
      gsap.set(self.masks, { paddingBottom: "0.15em", marginBottom: "-0.15em" });

      return gsap.from(self.words, {
        yPercent: 125,
        duration: 0.9,
        stagger: 0.07,
        delay,
        ease: "power4.out",
        scrollTrigger,
      });
    },
  });
}

export { gsap, useGSAP, ScrollTrigger, SplitText, REDUCED };
