import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from "../ui/Button";
import LogoPng from "../assets/logo-presenzalabs.webp"

const WHATSAPP_MESSAGE = "Olá! Vi o site da Presenza Labs e quero solicitar um orçamento.";
const WHATSAPP_URL = `https://wa.me/5511966105279?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const urlLinkedin = "https://www.linkedin.com/in/victor-presen%C3%A7a-a111722b8/";
const urlGithub = "https://github.com/PresenzaLabs";
const urlInstagram = "https://instagram.com/presenzalabs";

function Logo() {
  return (
    <a href="#top" className="flex gap-2 items-center">
      <img 
        src={LogoPng}
        alt="icone Presenza Labs"
        width="24"
        height="24"
        className="size-15"
      />
      <p className="text-2xl font-semibold tracking-tight text-foreground">
        Presenza Labs
      </p>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-border bg-background pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          {/* Topo: Logo + Colunas de Links */}
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            
            {/* Bloco da Marca */}
            <div className="max-w-xs space-y-3">
              <Logo />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Tecnologia aplicada à presença digital. Desenvolvimento sob medida para empresas que buscam alta performance.
              </p>
            </div>

            {/* Navegação em Colunas */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 text-sm">
              
              {/* Coluna 1 */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-foreground">
                  Navegação
                </span>
                <a href="#sobre" className="text-muted-foreground transition-colors hover:text-foreground">
                  Sobre
                </a>
                <a href="#servicos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Serviços
                </a>
                <a href="#projetos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Projetos
                </a>
                <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </a>
              </div>

              {/* Coluna 2 */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-foreground">
                  Soluções
                </span>
                <span className="text-muted-foreground">Landing Pages</span>
                <span className="text-muted-foreground">Sites Institucionais</span>
                <span className="text-muted-foreground">Catálogo de produtos</span>
                <span className="text-muted-foreground">Blogs</span>
              </div>

              {/* Coluna 3 */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-foreground">
                  Conectar
                </span>
                <a
                  href={urlInstagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
                <a
                  href={urlLinkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href={urlGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

          {/* Divisor */}
          <div className="mt-12 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-muted-foreground">
            <p>© {currentYear} Presenza Labs. Todos os direitos reservados.</p>

            {/* Ícones Sociais */}
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href={urlInstagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-primary"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href={urlLinkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-primary"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href={urlGithub}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-primary"
              >
                <FaGithub className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp (Mobile) */}
      <Button
        asChild
        size="icon"
        className="fixed bottom-5 right-5 z-40 shadow-lg lg:hidden"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a Presenza Labs no WhatsApp"
        >
          <FaWhatsapp className="size-6" />
        </a>
      </Button>
    </>
  );
}