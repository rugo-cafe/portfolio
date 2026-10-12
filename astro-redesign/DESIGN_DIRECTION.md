# vitorhugocunha.xyz / direção editorial, versão 0.2

atualizado em 12/10/2026 após feedback sobre a primeira versão pública.

## intenção
um canto pessoal da web feito por um desenvolvedor criativo; não um currículo animado nem uma landing page empresarial. a identidade emerge do **que foi feito**: ferramentas de escrita, rádio/arquivo sonoro, mixer de ambiências e processamento de imagens.

## princípios
- base calma, mas não institucional: pequenas assimetrias, composições de imagem com proporções diferentes, anotações, interrupções pontuais.
- tipografia bem cuidada, em minúsculas, com escalas moderadas. jamais usar um título gigante como solução para falta de identidade.
- conteúdo pessoal, honesto e direto. evitar expressões vazias como "soluções inovadoras" e linguagem de case study inventado.
- projetos como artefatos diferentes, **sempre visíveis**, não uma tabela genérica com previews escondidas em hover.
- a experiência profissional continua disponível, mas não define toda a personalidade da home.
- sem glassmorphism, glow, bento grid, UI de dashboard ou simulação de terminal.

## tokens atuais
- background claro: `#f2f0e9`; texto: `#222321`; superfície: `#e4e0d7`;
- acento experimental: vermelho tijolo `#aa3d31`, aplicado com parcimônia;
- dark mode com acento próprio `#ff9b83`;
- acentos de fundo podem variar por projeto, sem substituir o sistema principal.

## animação — correção importante
- **não** animar opacidade de seções no scroll; não deixar texto invisível até JS disparar.
- remover `ClientRouter` com crossfade padrão do Astro até haver um caso de uso claro e validado.
- movimentar no máximo transformações sutis em hover/focus (imagens em cards abertos e setas), com `prefers-reduced-motion`.
- nenhum movimento é necessário para compreender o conteúdo.
- qualquer nova transição precisa de teste em navegador real em hardware comum e mobile, sem flicker.

## arquitetura visual
- hero: apresentação humana, sem slogan publicitário ou cargo em destaque.
- galeria de quatro projetos com proporções e posições distintas, imagens disponíveis sem JavaScript.
- sobre: fala pessoal que relaciona design, código, música e o projeto rugo/coisas bonitas.
- experiência: registro profissional secundário, facilmente encontrável.
- páginas dos projetos: registros de artefatos digitais, com imagem principal, notas e informações técnicas. não inventar métricas.
- contato: conversa, não captação de lead.

## retrato
a foto anterior foi retirada do layout da home, mas o arquivo permanece salvo. uma nova foto será escolhida com o usuário; não gerar nem substituir automaticamente seu rosto.

## aceitação
- `npm ci`, `npm run build`, smoke tests.
- validar visualmente 320–390px, tablet, desktop, dark mode, foco/teclado, mobile touch.
- nenhuma transição de opacidade de seções, nenhum piscar entre rotas.
- sempre manter rotas e conteúdo PT/EN.
