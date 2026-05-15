import { existsSync } from 'node:fs';

export type ProjectStatus = 'live' | 'in-progress' | 'planned';
export type ProjectSlug = 'riji' | 'coisas-bonitas' | 'dither-studio' | 'ambi-mixer';

export interface ProjectContent {
  title: string;
  subtitle: string;
  overview: string;
  challengeAndSolution: string;
  role: string[];
  stack: string[];
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectEntry extends ProjectContent {
  slug: ProjectSlug;
  status: ProjectStatus;
  color: 'purple' | 'terracotta' | 'green';
  image: string;
  fallbackImage: string;
  imageAlt: string;
  resolvedImage: string | null;
}

const projectContent: Record<ProjectSlug, ProjectContent> = {
  riji: {
    title: '日记 riji',
    subtitle: 'registro diário minimalista e seguro.',
    overview: 'um espaço focado em privacidade e fluidez para anotações do dia a dia. a ideia principal foi criar um diário digital sem distrações visuais.',
    challengeAndSolution: 'o maior foco foi garantir a privacidade de quem escreve. o app utiliza criptografia local para assegurar que as notas sejam lidas apenas pelo próprio usuário, unindo uma interface extremamente limpa com uma arquitetura segura por baixo dos panos.',
    role: ['ui design', 'frontend'],
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
    role: ['visual design', 'frontend', 'curadoria'],
    stack: ['html', 'css', 'javascript'],
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
    role: ['ui design', 'desenvolvimento web'],
    stack: ['svelte', 'canvas api'],
  },
  'ambi-mixer': {
    title: 'ambi mixer',
    subtitle: 'gerador de ambiências para foco.',
    overview: 'um web app desenhado para ajudar na concentração, combinando diferentes texturas sonoras para criar a atmosfera perfeita para trabalhar ou estudar.',
    challengeAndSolution: 'atualmente em desenvolvimento, o foco está na criação de uma interface limpa onde a manipulação dos canais de áudio seja tátil e intuitiva, rodando de forma leve em segundo plano.',
    role: ['ui design', 'frontend'],
    stack: ['svelte', 'web audio api'],
    links: [
      {
        label: 'abrir app',
        href: 'https://ambi-mixer.vercel.app/',
      },
    ],
  },
};

const baseProjects: Array<Omit<ProjectEntry, keyof ProjectContent | 'resolvedImage'>> = [
  {
    slug: 'riji',
    status: 'in-progress',
    color: 'purple',
    image: '/projects/riji-thumb.webp',
    fallbackImage: '/projects/riji-placeholder.svg',
    imageAlt: 'captura da interface do riji',
  },
  {
    slug: 'coisas-bonitas',
    status: 'live',
    color: 'terracotta',
    image: '/projects/coisas-bonitas-thumb.webp',
    fallbackImage: '/projects/coisas-bonitas-placeholder.svg',
    imageAlt: 'captura do site coisas bonitas',
  },
  {
    slug: 'ambi-mixer',
    status: 'in-progress',
    color: 'terracotta',
    image: '/projects/ambi-mixer-thumb.webp',
    fallbackImage: '/projects/ambi-studio-placeholder.svg',
    imageAlt: 'captura do ambi mixer em funcionamento',
  },
  {
    slug: 'dither-studio',
    status: 'live',
    color: 'purple',
    image: '/projects/dither-studio-thumb.webp',
    fallbackImage: '/projects/dither-studio-placeholder.svg',
    imageAlt: 'captura do dither studio',
  },
];

function resolvePublicAsset(assetPath: string, fallbackPath: string): string | null {
  if (existsSync(new URL(`../../public${assetPath}`, import.meta.url))) {
    return assetPath;
  }

  if (existsSync(new URL(`../../public${fallbackPath}`, import.meta.url))) {
    return fallbackPath;
  }

  return null;
}

export const projectEntries: ProjectEntry[] = baseProjects.map((project) => ({
  ...project,
  ...projectContent[project.slug],
  resolvedImage: resolvePublicAsset(project.image, project.fallbackImage),
}));

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectEntries.find((project) => project.slug === slug);
}
