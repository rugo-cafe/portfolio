export type ProjectStatus = 'live' | 'in-progress' | 'planned';
export type ProjectSlug = 'riji' | 'coisas-bonitas' | 'dither-studio' | 'ambi-mixer';
export type ProjectLang = 'pt' | 'en';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectContent {
  title: string;
  subtitle: string;
  overview: string;
  challengeAndSolution: string;
  highlights: string[];
  role: string[];
  imageAlt: string;
  links?: ProjectLink[];
}

export interface ProjectEntry extends ProjectContent {
  slug: ProjectSlug;
  status: ProjectStatus;
  color: 'purple' | 'terracotta' | 'green';
  image: string;
  fallbackImage: string;
  stack: string[];
  resolvedImage: string | null;
}

const projectContent: Record<ProjectLang, Record<ProjectSlug, ProjectContent>> = {
  pt: {
    riji: {
      title: '日记 riji',
      subtitle: 'registro diário minimalista e seguro.',
      overview: 'um diário no navegador para escrever sem distrações. o visual tenta sair do caminho e deixar a página para quem escreve.',
      challengeAndSolution: 'a privacidade era central: as notas são criptografadas localmente. tentei fazer essa camada técnica conviver com uma experiência simples de escrita.',
      highlights: [
        'escrita e organização de registros em uma interface sem distrações',
        'criptografia local das anotações com a Web Crypto API',
        'estrutura de dados e experiência de uso desenvolvidas para a aplicação',
      ],
      role: ['product design', 'frontend', 'arquitetura de dados'],
      imageAlt: 'captura da interface do riji',
      links: [
        {
          label: 'abrir site',
          href: 'https://rijiapp.site/',
        },
      ],
    },
    'coisas-bonitas': {
      title: 'coisas bonitas',
      subtitle: 'rádio, arquivo e identidade visual.',
      overview: 'o site do coisas bonitas, meu programa na hkcr. reúne episódios, participações e materiais de cada transmissão num arquivo que continua crescendo.',
      challengeAndSolution: 'queria que o site tivesse algo do ritmo do programa, sem virar só uma lista de players. construí um arquivo navegável onde textos e imagens acompanham cada transmissão.',
      highlights: [
        'arquivo de episódios e colaborações do programa na HKCR',
        'navegação por transmissões com materiais, textos e imagens relacionados',
        'identidade visual e desenvolvimento do site com HTML, CSS e JavaScript',
      ],
      role: ['identidade visual', 'frontend', 'curadoria'],
      imageAlt: 'captura do site coisas bonitas',
      links: [
        {
          label: 'site',
          href: 'https://coisasbonitas.neocities.org/',
        },
        {
          label: 'residência na hkcr.live',
          href: 'https://hkcr.live/residents/coisas-bonitas',
        },
        {
          label: 'soundcloud',
          href: 'https://soundcloud.com/coisasbonitas',
        },
      ],
    },
    'dither-studio': {
      title: 'dither studio',
      subtitle: 'processamento de imagens em real-time.',
      overview: 'uma ferramenta para aplicar dithering em imagens e acompanhar o resultado enquanto ajusto os parâmetros.',
      challengeAndSolution: 'o exercício foi deixar a manipulação do canvas imediata, com controles que não disputam a atenção com a imagem.',
      highlights: [
        'processamento de imagem com Canvas no navegador',
        'ajuste dos parâmetros de dithering com visualização do resultado',
        'interface para experimentação e comparação visual',
      ],
      role: ['creative coding', 'canvas & shaders', 'frontend'],
      imageAlt: 'captura do dither studio',
    },
    'ambi-mixer': {
      title: 'ambi mixer',
      subtitle: 'gerador de ambiências para foco.',
      overview: 'um pequeno mixer de ambiências que permite combinar camadas de som durante a escuta.',
      challengeAndSolution: 'ainda em andamento: estou tentando tornar a mistura de canais intuitiva, sem deixar os controles atrapalharem a escuta.',
      highlights: [
        'mistura de camadas de áudio controladas individualmente',
        'interface de interação com canais de som',
        'projeto em desenvolvimento com Svelte e Web Audio API',
      ],
      role: ['frontend', 'web audio api', 'design de interação'],
      imageAlt: 'captura do ambi mixer em funcionamento',
      links: [
        {
          label: 'abrir app',
          href: 'https://ambi-mixer.vercel.app/',
        },
      ],
    },
  },
  en: {
    riji: {
      title: '日记 riji',
      subtitle: 'a minimal, private daily journal.',
      overview: 'a browser-based journal for writing without distractions. the interface tries to get out of the way and leave room for the words.',
      challengeAndSolution: "privacy was essential: entries are encrypted locally. i wanted that technical layer to coexist with a simple writing experience.",
      highlights: [
        'distraction-free writing and organizing of journal entries',
        'local encryption of entries using the Web Crypto API',
        'data architecture and application experience developed together',
      ],
      role: ['product design', 'frontend', 'data architecture'],
      imageAlt: 'screenshot of the riji interface',
      links: [
        {
          label: 'open site',
          href: 'https://rijiapp.site/',
        },
      ],
    },
    'coisas-bonitas': {
      title: 'coisas bonitas',
      subtitle: 'radio, archive, and visual identity.',
      overview: 'the site for coisas bonitas, my show on hkcr. it brings episodes, guests and material from each broadcast into a growing archive.',
      challengeAndSolution: "i wanted the site to carry some of the show's rhythm without becoming a list of players. i built a browsable archive where text and images accompany each episode.",
      highlights: [
        'an archive of episodes and collaborations from the HKCR show',
        'broadcast navigation with related text and images',
        'visual identity and site development with HTML, CSS and JavaScript',
      ],
      role: ['visual identity', 'frontend', 'curation'],
      imageAlt: 'screenshot of the coisas bonitas site',
      links: [
        {
          label: 'site',
          href: 'https://coisasbonitas.neocities.org/',
        },
        {
          label: 'hkcr.live residency',
          href: 'https://hkcr.live/residents/coisas-bonitas',
        },
        {
          label: 'soundcloud',
          href: 'https://soundcloud.com/coisasbonitas',
        },
      ],
    },
    'dither-studio': {
      title: 'dither studio',
      subtitle: 'real-time image processing.',
      overview: 'a tool to apply dithering to images and see the result while adjusting the parameters.',
      challengeAndSolution: "the challenge was making canvas manipulation immediate, with controls that don't compete with the image.",
      highlights: [
        'in-browser image processing using Canvas',
        'adjustable dithering parameters with visual feedback',
        'an interface for visual experimentation and comparison',
      ],
      role: ['creative coding', 'canvas & shaders', 'frontend'],
      imageAlt: 'screenshot of dither studio',
    },
    'ambi-mixer': {
      title: 'ambi mixer',
      subtitle: 'an ambience generator for focus.',
      overview: 'a small ambient mixer for combining layers of sound while listening.',
      challengeAndSolution: "still in progress: i'm trying to make audio channel mixing feel intuitive without letting the controls get in the way of listening.",
      highlights: [
        'mixing of individually controlled audio layers',
        'interaction design for separate sound channels',
        'work in progress using Svelte and the Web Audio API',
      ],
      role: ['frontend', 'web audio api', 'interaction design'],
      imageAlt: 'screenshot of ambi mixer in action',
      links: [
        {
          label: 'open app',
          href: 'https://ambi-mixer.vercel.app/',
        },
      ],
    },
  },
};

const baseProjects: Array<{
  slug: ProjectSlug;
  status: ProjectStatus;
  color: 'purple' | 'terracotta' | 'green';
  image: string;
  fallbackImage: string;
  stack: string[];
}> = [
  {
    slug: 'riji',
    status: 'in-progress',
    color: 'purple',
    image: '/projects/riji-thumb.webp',
    fallbackImage: '/projects/riji-placeholder.svg',
    stack: [
      'typescript',
      'vite',
      'tailwind css',
      'supabase',
      'web crypto api',
      'markdown-it',
      'highlight.js',
      'dompurify',
      'iro.js',
      'jszip',
      'vercel',
    ],
  },
  {
    slug: 'coisas-bonitas',
    status: 'live',
    color: 'terracotta',
    image: '/projects/coisas-bonitas-thumb.webp',
    fallbackImage: '/projects/coisas-bonitas-placeholder.svg',
    stack: ['html', 'css', 'javascript'],
  },
  {
    slug: 'ambi-mixer',
    status: 'in-progress',
    color: 'terracotta',
    image: '/projects/ambi-mixer-thumb.webp',
    fallbackImage: '/projects/ambi-studio-placeholder.svg',
    stack: ['svelte', 'web audio api'],
  },
  {
    slug: 'dither-studio',
    status: 'live',
    color: 'purple',
    image: '/projects/dither-studio-thumb.webp',
    fallbackImage: '/projects/dither-studio-placeholder.svg',
    stack: ['svelte', 'canvas api'],
  },
];

export function getProjectEntries(lang: ProjectLang = 'pt'): ProjectEntry[] {
  const content = projectContent[lang] ?? projectContent.pt;
  return baseProjects.map((project) => ({
    ...project,
    ...(content[project.slug] ?? projectContent.pt[project.slug]),
    resolvedImage: project.image,
  }));
}

export function getProjectBySlug(slug: string, lang: ProjectLang = 'pt'): ProjectEntry | undefined {
  return getProjectEntries(lang).find((project) => project.slug === slug);
}
