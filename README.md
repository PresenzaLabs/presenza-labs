# Presenza Labs

Site institucional da [Presenza Labs](https://presenzalabs.com.br/): desenvolvimento de sites pessoais, profissionais e páginas de alta performance.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) para animações
- [Lucide](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/) para ícones

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento com HMR     |
| `npm run build`   | Gera a build de produção em `dist/`     |
| `npm run preview` | Serve a build de produção localmente    |
| `npm run lint`    | Roda o ESLint                           |

## Estrutura

```
public/          arquivos estáticos (favicon, og:image, robots.txt, llms.txt)
src/
  components/    seções da página (Hero, Sobre, Projetos, Avaliações, FAQ, Contato…)
  ui/            componentes de interface reutilizáveis
  lib/           utilitários
  App.jsx        composição das seções
  main.jsx       ponto de entrada
```
