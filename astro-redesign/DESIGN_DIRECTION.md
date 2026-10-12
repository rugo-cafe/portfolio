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


## proposta experimental v0.3: movimento com significado (não publicada)
- pequenos glifos relacionados ao projeto respondem à passagem do scroll; o conteúdo e as capturas permanecem visíveis e imóveis.
- o índice lateral atualiza a posição da leitura e oferece âncoras reais, inclusive sem JavaScript.
- barra de percurso com escala transformada por requestAnimationFrame sob demanda, sem loops de renderização permanentes.
- nenhuma animação de entrada de seções, mudança de opacidade do texto ou roteamento em crossfade.
- uma cor-sinal cítrica (`--accent-signal`) experimentada nos glifos, não como fundo indiscriminado.
- começar a reescrita conforme `EDITORIAL_VOICE.md`; textos da v0.3 são propostas revisáveis.
- NÃO fazer merge antes de ver a composição e as interações no navegador.

- As imagens podem deslocar no máximo 12 px no scroll, usando transforms e sem alterar opacidade; fundos geométricos remetem ao material dos projetos (linhas/escrita, ondas/rádio, faixas/som, pontos/dither). Esta escolha é experimental e reversível.


## referências pesquisadas / 2026-10-12

Referências usadas como **princípios**, não como templates:

1. [Are.na](https://www.are.na/about): conteúdo como coleção conectável, não listagem de serviços. Aplicação: índice de objetos com categorias simples e navegação que aproxima os projetos.
2. [The Pudding](https://pudding.cool/resources/): scroll como mudança de contexto e instrumento de leitura. Aplicação: índice de capítulo, barra de progresso e movimento pequeno nos elementos gráficos, sem revelar/esconder texto.
3. [Bruno Simon](https://bruno-simon.com/): interação como evidência do que o autor sabe construir. Não copiar 3D, mas demonstrar autonomia digital por pequenas respostas táteis.
4. [Active Theory](https://activetheory.net): movimento com sistema e direção de arte própria. Rejeitamos a escala WebGL e o alto custo de performance para este projeto.

### próximos limites de qualidade
- identidade visual não é uma cor aleatória por projeto: cada gramática (linhas/ondas/barras/pontos) deve corresponder a uma prática concreta.
- movimento não deve impor performance, atrasar leitura ou exigir JavaScript para navegar.
- medir FPS/CLS e conferir clique, foco, toque e navegação em aparelhos reais **antes do merge**.
- evitar slogans de portfólio, inclusive metáforas ambiciosas demais.

## acabamento v0.4 / revisão de implementação
- Reescrita do hero com afirmações mais específicas e menos grandiosas: design e desenvolvimento de interfaces, rádio, arquivo HKCR.
- Tipografia deliberadamente distinta apenas onde serve à personalidade do projeto: registro com nota serifada no coisas bonitas, mono no dither studio, sem sacrificar legibilidade.
- Metadados de case detail corrigidos após detectar seletor CSS indevido.
- Âncoras da galeria, espaçamento de toque no índice mobile e no-JS progressivo reforçados pelos testes estáticos.
- Compilação não equivale a teste visual em navegador. A fotografia permanece fora do site até escolha do proprietário.
