# Portfolio | Vitor Hugo Cunha

Portfolio pessoal construído com Astro e Tailwind, com foco em interface, frontend e apresentação de projetos autorais.

## Stack

- Astro
- Tailwind CSS
- TypeScript / JavaScript
- Astro Icon

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Convenção de assets reais

O projeto agora está preparado para receber assets finais sem quebrar o layout atual.

### Avatar

- Caminho esperado: `public/avatar/vitor-hugo-avatar.webp`
- Uso atual: [`src/components/About.astro`](src/components/About.astro)
- Comportamento:
  - se o arquivo existir, o About renderiza a foto real;
  - se não existir, o placeholder atual continua aparecendo.

### Thumbnails de projeto

- Pasta: `public/projects`
- Formato padrão: `webp`
- Largura-alvo de export: `1200px`
- Direção visual: screenshot real do projeto, limpa, sem texto extra embutido

Arquivos esperados:

- `public/projects/riji-thumb.webp`
- `public/projects/coisas-bonitas-thumb.webp`
- `public/projects/ambi-mixer-thumb.webp`
- `public/projects/dither-studio-thumb.webp`

Fallbacks atuais:

- `public/projects/riji-placeholder.svg`
- `public/projects/coisas-bonitas-placeholder.svg`
- `public/projects/ambi-studio-placeholder.svg`
- `public/projects/dither-studio-placeholder.svg`

Uso atual: [`src/components/Projects.astro`](src/components/Projects.astro)

Comportamento:

- o componente tenta usar a thumbnail final primeiro;
- se ela ainda não existir, cai automaticamente para o placeholder correspondente.

## Estrutura principal

- `src/components`: blocos visuais principais do site
- `src/layouts`: layout global e metadata
- `src/pages`: rotas
- `src/i18n`: textos e traduções
- `public`: arquivos estáticos e assets

## Inventário técnico leve

Pontos que valem uma rodada futura de estabilização, mas que não foram refatorados agora:

1. Navegação e tema ainda têm bootstrapping distribuído entre `Layout`, `Navbar`, `src/scripts/navbar.ts` e `src/scripts/theme.ts`.
2. A seção de projetos usa um modal local; a consolidação com um utilitário comum pode voltar numa rodada futura se fizer sentido.
3. Ainda há alguns pontos legados fora do fluxo principal que podem ser consolidados em uma limpeza separada, sem mexer no site atual.

Esses itens hoje entram como mapa de riscos e ruído de manutenção, não como bloqueio do site.

## Próximos passos naturais

1. Adicionar o avatar real.
2. Exportar e plugar as quatro thumbnails finais.
3. Fazer uma passada focada em console/runtime errors e unificação leve dos scripts de navegação, tema e modal.
