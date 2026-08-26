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
      overview: 'um espaço focado em privacidade e fluidez para anotações do dia a dia. a ideia principal foi criar um diário digital sem distrações visuais.',
      challengeAndSolution: 'o maior foco foi garantir a privacidade de quem escreve. o app utiliza criptografia local para assegurar que as notas sejam lidas apenas pelo próprio usuário, unindo uma interface extremamente limpa com uma arquitetura segura por baixo dos panos.',
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
      overview: 'o hub central para o programa de rádio coisas bonitas. um espaço para reunir os mixes, as entrevistas e as colaborações musicais transmitidas na hkcr.',
      challengeAndSolution: 'o desafio aqui foi traduzir a atmosfera sonora do projeto para o navegador. desenvolvi uma identidade visual interativa que funciona não apenas como um portfólio de áudio, mas como uma extensão imersiva da experiência da rádio.',
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
      overview: 'uma ferramenta web experimental focada em aplicar algoritmos de dithering em imagens direto no navegador.',
      challengeAndSolution: 'o objetivo foi criar uma interface responsiva que permitisse o ajuste fino dos parâmetros do filtro visual com feedback imediato. o projeto une exploração estética com manipulação eficiente de canvas no front-end.',
      role: ['creative coding', 'canvas & shaders', 'frontend'],
      imageAlt: 'captura do dither studio',
    },
    'ambi-mixer': {
      title: 'ambi mixer',
      subtitle: 'gerador de ambiências para foco.',
      overview: 'um web app desenhado para ajudar na concentração, combinando diferentes texturas sonoras para criar a atmosfera perfeita para trabalhar ou estudar.',
      challengeAndSolution: 'atualmente em desenvolvimento, o foco está na criação de uma interface limpa onde a manipulação dos canais de áudio seja tátil e intuitiva, rodando de forma leve em segundo plano.',
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
      overview: 'a space focused on privacy and flow for everyday writing. the core idea was building a digital journal without visual distractions.',
      challengeAndSolution: "the main focus was protecting the writer's privacy. the app uses local encryption so entries can only be read by their author, pairing an extremely clean interface with a secure architecture underneath.",
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
      overview: 'the central hub for the coisas bonitas radio show. a space to gather the mixes, interviews, and musical collaborations broadcast on hkcr.',
      challengeAndSolution: "the challenge was translating the project's sonic atmosphere to the browser. i built an interactive visual identity that works not just as an audio portfolio, but as an immersive extension of the radio experience.",
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
      overview: 'an experimental web tool focused on applying dithering algorithms to images directly in the browser.',
      challengeAndSolution: "the goal was a responsive interface for fine-tuning the visual filter's parameters with immediate feedback. the project blends aesthetic exploration with efficient canvas manipulation on the frontend.",
      role: ['creative coding', 'canvas & shaders', 'frontend'],
      imageAlt: 'screenshot of dither studio',
    },
    'ambi-mixer': {
      title: 'ambi mixer',
      subtitle: 'an ambience generator for focus.',
      overview: 'a web app designed to help with concentration, blending different sound textures to create the perfect atmosphere for work or study.',
      challengeAndSolution: "currently in development, the focus is a clean interface where mixing audio channels feels tactile and intuitive, running lightly in the background.",
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
