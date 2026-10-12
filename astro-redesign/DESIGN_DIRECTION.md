# direção de arte — vitorhugocunha.xyz
versão 0.1 · 2026-10-12 · proposta em desenvolvimento

## propósito
portfólio de **desenvolvedor criativo**, capaz de comunicar competências profissionais sem se tornar uma landing page de serviços. Deve carregar uma assinatura autoral e continuar fácil de percorrer para recrutadores.

## princípios acordados
- **70% precisão editorial + 30% objeto digital**.
- sofisticação com estranhamento discreto: rigor na organização, pequenas quebras de expectativa.
- tipografia cuidadosa, **sem manchetes gigantes como truque estético**.
- base neutra com **cor de destaque inesperada e parcimoniosa**.
- composição, conteúdo e comportamento acima de efeitos decorativos.
- manter linguagem preferencialmente em minúsculas.
- web independente e experimental, sem nostalgia óbvia, terminais simulados ou estética de dashboard.

## antipadrões
- bento grid genérico, cards arredondados em todo lugar e gradientes decorativos.
- glassmorphism, sombras pesadas, blur e círculos fluorescentes sem função.
- scroll reveal obrigatório ou texto oculto até animação; cursor especial desnecessário.
- seção de ferramentas competindo com o conteúdo; badges de tecnologia em todos os projetos.
- experiências que dependem de hover e quebram no toque.

## hipótese cromática (a testar)
| token | valor | intenção |
| --- | --- | --- |
| canvas | `#F0EFEA` | papel mineral |
| ink | `#222321` | preto suave |
| muted | `#73746F` | informação secundária |
| rule | `#D4D3CD` | divisão |
| accent | `#6358D7` | violeta azulado, usado raramente |

modo escuro: repensar contraste e superfícies, não inverter as cores mecanicamente.

## tipografia
- sans-serif de leitura com personalidade discreta; mono para índices e metadados.
- referências exploratórias: IBM Plex Sans, IBM Plex Mono e Geist; **ainda não é decisão de fonte final**.
- hierarquia por peso, ritmo, alinhamento e microtipografia, não por escala extrema.

## arquitetura proposta
1. cabeçalho e apresentação sucinta.
2. trabalhos selecionados: riji, coisas bonitas, ambi mixer, dither studio.
3. sobre e experiência profissional: incluir contexto de interfaces, frontend e CRM, sem esconder experiência real.
4. laboratório/experimentos, quando houver material suficiente.
5. contato e links externos.

## projetos
- substituir cards padronizados por **índice editorial** com número, nome, categoria e prévia.
- desktop: imagem associada à entrada em hover/foco, sem bloquear a navegação.
- mobile: imagem visível no fluxo de cada entrada; nunca depender de hover.
- preservar links, descrições e idioma PT/EN.
- páginas individuais com estruturas próprias, guiadas pelo material de cada projeto; não inventar métricas.

## responsividade
- o layout deve ser composto para mobile, não apenas encolhido.
- margens fluidas, grid orientado pelo conteúdo; tipografia com `clamp()` quando fizer sentido.
- sem rolagem horizontal obrigatória para ler projetos.
- transições opcionais, sem layout shift; suportar teclado, foco visível e `prefers-reduced-motion`.

## fases
**v1 — estrutura:** consolidar direção, substituir apresentação e listagem de projetos, preservar rotas e conteúdos.  
**v2 — editorial:** trabalhar sobre e experiência, revisar navegação, ajustar dark mode, desenvolver páginas internas.  
**v3 — acabamento:** revisão visual em desktop/tablet/mobile, acessibilidade, desempenho, microinterações e conteúdo.

## critérios de aceite
- legível sem JavaScript e sem hover;
- links e rotas PT/EN intactos;
- navegação por teclado e imagens com texto alternativo;
- sem excesso de efeitos ou elementos repetidos;
- comportamento validado em larguras estreitas antes da publicação.

## escopo técnico
projeto Astro em `astro-redesign/` dentro de `rugo-cafe/portfolio`. Desenvolvimento em branch separada; não publicar sem avaliação visual.
