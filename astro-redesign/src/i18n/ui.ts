export const languages = {
  pt: 'Português',
  en: 'English',
  jp: '日本語',
};

export const defaultLang = 'pt';

export const ui = {
  pt: {
    // --- NAV & HERO (Mantidos) ---
    'role.title': 'Design Engineer',
    'nav.home': 'home',
    'nav.about': 'sobre',
    'nav.projects': 'projetos',
    'hero.role': 'design engineer',
    'hero.desc': 'gosto de interfaces simples, com detalhe bem cuidado e execução limpa.',
    
    // --- PROJETOS (Mantidos) ---
    'riji.tag': 'escrita diária minimalista · 2026',
    'riji.title': 'Riji',
    'riji.desc': 'diário minimalista com escrita diária e sync via supabase.',
    'coisas.title': 'coisas bonitas', 
    'coisas.tag1': 'web radio',
    'coisas.tag2': 'ambient',
    'coisas.tag3': 'curadoria',
    
    // --- TOOLKIT & FOOTER (Mantidos) ---
    'toolkit.label': 'toolkit',
    'work.status': 'aberto a projetos e parcerias',
    'work.statusShort': 'disponível',
    'work.title': 'vamos conversar?',
    'work.desc': 'se fizer sentido, podemos construir algo juntos.',
      // --- ABOUT ---
      'about.intro.1': 'sou web designer e dev no brasil, e estudo design de produto na ufsc.',
      'about.intro.2': 'gosto de aprender, testar ideias e cuidar do detalhe. no tempo livre, curto música, games e teclados mecânicos.',
      'about.highlights.ui.title': 'ui/ux',
      'about.highlights.ui.desc': 'interfaces claras, com ritmo visual e boa leitura.',
      'about.highlights.frontend.title': 'frontend',
      'about.highlights.frontend.desc': 'implementação limpa com foco em performance e acabamento.',
      'about.highlights.product.title': 'produto',
      'about.highlights.product.desc': 'penso no todo: da ideia ao deploy.',
      'about.values.label': 'princípios',
      'about.values.1': 'feito com calma',
      'about.values.2': 'detalhe importa',
      'about.values.3': 'menos é mais',
      'about.values.4': 'publica e melhora',
      'about.cta.contact': 'falar comigo',
      'about.cta.cv': 'baixar cv',

      // --- PROJECTS ---
      'projects.status.live': 'live',
      'projects.status.progress': 'em desenvolvimento',
      'projects.status.planned': 'planejado',
      'projects.riji.tagline': 'diário minimalista',
      'projects.riji.desc': 'escrita diária minimalista com foco em privacidade e fluidez.',
      'projects.coisas.tagline': 'galeria audiovisual',
      'projects.coisas.desc': 'galeria de beleza digital e orgânica, com curadoria e colaborações.',
      'projects.noise.tagline': 'focus sound tool',
      'projects.noise.desc': 'mixer de sons para foco, com controles svg customizados.',
      'projects.dither.tagline': 'image processing',
      'projects.dither.desc': 'ferramenta de dithering com rust/wasm para alta performance.',

      'projects.modal.preview': 'preview em breve',
      'projects.riji.modal.intro': 'riji é um diário minimalista inspirado em morning pages, com foco em clareza mental e escrita diária.',
      'projects.riji.linkLabel': 'abrir rijiapp.site',
      'projects.riji.modal.featuresTitle': 'principais funções',
      'projects.riji.feature.1': 'uma entrada por dia com sequência',
      'projects.riji.feature.2': 'notas reutilizáveis e organizáveis',
      'projects.riji.feature.3': 'temas personalizáveis (cores, fundo e fonte)',
      'projects.riji.feature.4': 'login por magic link ou modo visitante',
      'projects.riji.feature.5': 'atalhos de teclado e salvamento automático',
      'projects.riji.feature.6': 'estatísticas e modo escuro',
      'projects.riji.modal.stackTitle': 'stack',
      'projects.riji.modal.archTitle': 'estrutura atual',
      'projects.riji.arch.1': 'frontend em vite + typescript + tailwind',
      'projects.riji.arch.2': 'auth e banco no supabase',
      'projects.riji.arch.3': 'dados de visitante no localStorage',
      'projects.riji.arch.4': 'deploy na vercel',
      'projects.coisas.modal.intro': 'coisas bonitas é uma galeria de beleza digital e orgânica, com releases e colaborações.',
      'projects.coisas.modal.structureTitle': 'estrutura atual',
      'projects.coisas.structure.1': 'galeria principal com obras e releases',
      'projects.coisas.structure.2': 'páginas de about e contact',
      'projects.coisas.structure.3': 'presença mensal no hkcr.live + soundcloud',
      'projects.coisas.link.site': 'visitar site',
      'projects.coisas.link.soundcloud': 'soundcloud',
      'projects.coisas.link.hkcr': 'hkcr.live (monthly)',
      'projects.noise.modal.intro': 'ferramenta para mixar sons ambiente e manter foco no trabalho.',
      'projects.dither.modal.intro': 'processamento de imagens com algoritmos de dithering em wasm.',
    'github.label': 'github',
    
    // --- EXPERIÊNCIA (ATUALIZADO CAMERGE & BIOMA) ---
    'exp.title': 'experiência',
    'exp.path': 'carreira',
    
    // Camerge
    'exp.camerge.role': 'Estagiário em Design de Interface',
    'exp.camerge.company': 'CAMERGE',
    'exp.camerge.desc': 'Design e prototipagem de interfaces de sistemas internos e landing pages. Implementação via HubSpot (HUBL + HTML) e Elementor.',
    'exp.camerge.period': '2024 — Presente',
    
    // Bioma
    'exp.bioma.role': 'Estagiário em Desenvolvimento de Produto',
    'exp.bioma.company': 'Fazendas Bioma',
    'exp.bioma.desc': 'Desenvolvimento de produto digital (site) com Figma e WordPress. Apoio na engenharia de hardware e prototipagem IoT.',
    'exp.bioma.period': '2023 — 2024',
    
    // --- EDUCAÇÃO (ATUALIZADO UFSC & IFC) ---
    'edu.title': 'educação',
    
    // UFSC
    'edu.ufsc.degree': 'Bacharelado em Design de Produto',
    'edu.ufsc.school': 'UFSC',
    'edu.ufsc.desc': 'Foco em Modelagem 3D, Ergonomia e Metodologia de Design.',
    'edu.ufsc.period': '2021 — 2026',
    
    // IFC
    'edu.ifc.degree': 'Técnico em Informática',
    'edu.ifc.school': 'Instituto Federal Catarinense',
    'edu.ifc.desc': 'Fundamentos de lógica de programação, desenvolvimento web (HTML/CSS/JS) e hardware.',
    'edu.ifc.period': '2017 — 2019',
  },
  
  en: {
    // --- NAV & HERO ---
    'role.title': 'Design Engineer',
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.projects': 'projects',
    'hero.role': 'design engineer',
    'hero.desc': 'i like simple interfaces, with careful details and clean execution.',
    
    // --- PROJECTS ---
    'riji.tag': 'minimal daily writing · 2026',
    'riji.title': 'Riji',
    'riji.desc': 'a minimal journal with daily writing and supabase sync.',
    'coisas.title': 'coisas bonitas', 
    'coisas.tag1': 'web radio',
    'coisas.tag2': 'ambient',
    'coisas.tag3': 'curation',
    
    // --- TOOLKIT ---
    'toolkit.label': 'toolkit',
    'work.status': 'open to projects & collaborations',
    'work.statusShort': 'available',
    'work.title': 'want to build something?',
    'work.desc': 'if it makes sense, we can build it together.',
    
    // --- ABOUT ---
    'about.intro.1': 'i am a web designer and developer in brazil, studying product design at ufsc.',
    'about.intro.2': 'i like learning, testing ideas, and paying attention to detail. in my free time i enjoy music, games, and mechanical keyboards.',
    'about.highlights.ui.title': 'ui/ux',
    'about.highlights.ui.desc': 'clear interfaces with good rhythm and readability.',
    'about.highlights.frontend.title': 'frontend',
    'about.highlights.frontend.desc': 'clean implementation with performance and finish in mind.',
    'about.highlights.product.title': 'product',
    'about.highlights.product.desc': 'i think end-to-end: from idea to deploy.',
    'about.values.label': 'principles',
    'about.values.1': 'made with care',
    'about.values.2': 'details matter',
    'about.values.3': 'less is more',
    'about.values.4': 'ship and improve',
    'about.cta.contact': 'contact me',
    'about.cta.cv': 'download cv',

    // --- PROJECTS ---
    'projects.status.live': 'live',
    'projects.status.progress': 'in progress',
    'projects.status.planned': 'planned',
    'projects.riji.tagline': 'minimal journal app',
    'projects.riji.desc': 'minimal daily writing focused on privacy and flow.',
    'projects.coisas.tagline': 'audiovisual gallery',
    'projects.coisas.desc': 'ambient web radio with personal curation and generative visuals.',
    'projects.noise.tagline': 'focus sound tool',
    'projects.noise.desc': 'focus sound mixer with custom svg controls.',
    'projects.dither.tagline': 'image processing',
    'projects.dither.desc': 'image dithering tool with rust/wasm for high performance.',

    'projects.modal.preview': 'preview soon',
    'projects.riji.modal.intro': 'riji is a minimal journal inspired by morning pages, focused on mental clarity through daily writing.',
    'projects.riji.linkLabel': 'open rijiapp.site',
    'projects.riji.modal.featuresTitle': 'key features',
    'projects.riji.feature.1': 'one entry per day with streak counter',
    'projects.riji.feature.2': 'reusable, organized notes',
    'projects.riji.feature.3': 'custom themes (colors, background, font)',
    'projects.riji.feature.4': 'magic link login or guest mode',
    'projects.riji.feature.5': 'keyboard shortcuts and autosave',
    'projects.riji.feature.6': 'stats and dark mode',
    'projects.riji.modal.stackTitle': 'stack',
    'projects.riji.modal.archTitle': 'current structure',
    'projects.riji.arch.1': 'frontend in vite + typescript + tailwind',
    'projects.riji.arch.2': 'auth and database on supabase',
    'projects.riji.arch.3': 'guest data stored in localStorage',
    'projects.riji.arch.4': 'deployed on vercel',
    'projects.coisas.modal.intro': 'coisas bonitas is a digital and organic beauty gallery with releases and collaborations.',
    'projects.coisas.modal.structureTitle': 'current structure',
    'projects.coisas.structure.1': 'main gallery with works and releases',
    'projects.coisas.structure.2': 'about and contact pages',
    'projects.coisas.structure.3': 'monthly presence on hkcr.live + soundcloud',
    'projects.coisas.link.site': 'visit site',
    'projects.coisas.link.soundcloud': 'soundcloud',
    'projects.coisas.link.hkcr': 'hkcr.live (monthly)',
    'projects.noise.modal.intro': 'tool for mixing ambient sounds to stay focused.',
    'projects.dither.modal.intro': 'image processing with dithering algorithms in wasm.',
    'github.label': 'github',

    // --- EXPERIENCE (UPDATED) ---
    'exp.title': 'experience',
    'exp.path': 'career path',
    
    // Camerge
    'exp.camerge.role': 'UI Design Intern',
    'exp.camerge.company': 'CAMERGE',
    'exp.camerge.desc': 'Design and prototyping of internal system interfaces and landing pages. Implementation via HubSpot (HUBL + HTML) and Elementor.',
    'exp.camerge.period': '2024 — Present',
    
    // Bioma
    'exp.bioma.role': 'Product Development Intern',
    'exp.bioma.company': 'Fazendas Bioma',
    'exp.bioma.desc': 'Digital product development (website) using Figma and WordPress. Support in hardware engineering and IoT prototyping.',
    'exp.bioma.period': '2023 — 2024',

    // --- EDUCATION (UPDATED) ---
    'edu.title': 'education',
    
    // UFSC
    'edu.ufsc.degree': 'Bachelor in Product Design',
    'edu.ufsc.school': 'UFSC',
    'edu.ufsc.desc': 'Focus on 3D Modeling, Ergonomics, and Design Methodology.',
    'edu.ufsc.period': '2021 — 2026',
    
    // IFC
    'edu.ifc.degree': 'Technician in Informatics',
    'edu.ifc.school': 'Instituto Federal Catarinense',
    'edu.ifc.desc': 'Foundations of programming logic, web development (HTML/CSS/JS), and hardware.',
    'edu.ifc.period': '2017 — 2019',
  },

  jp: {
    // Mantendo placeholders para evitar erros
    'role.title': 'デザインエンジニア',
    'nav.home': 'ホーム',
    'nav.about': '約',
    'nav.projects': 'プロジェクト',
    'hero.role': 'デザインエンジニア',
    'hero.desc': '細部にまでこだわった流動的なインターフェースの作成に注力しています。',
    'riji.tag': '毎日のミニマル日記 · 2026',
    'riji.title': 'Riji',
    'riji.desc': '毎日の書く習慣を支える、supabase連携のミニマル日記。',
    'projects.riji.linkLabel': 'rijiapp.site を開く',
    'coisas.title': 'coisas bonitas', 
    'coisas.tag1': 'ウェブラジオ',
    'coisas.tag2': 'アンビエント',
    'coisas.tag3': 'キュレーション',
    'toolkit.label': 'ツールキット',
    'work.status': '仕事募集中',
    'work.statusShort': '募集中',
    'work.title': '一緒に働きませんか？',
    'work.desc': '次のプロジェクトについて話し合うために連絡してください。',
    'github.label': 'github',

    'exp.title': '経験',
    'exp.path': 'キャリアパス',
    'exp.camerge.role': 'UIデザインインターン',
    'exp.camerge.company': 'CAMERGE',
    'exp.camerge.desc': 'HubSpotとElementorを使用したインターフェースデザインと実装。',
    'exp.camerge.period': '2024 — 現在',
    'exp.bioma.role': '製品開発インターン',
    'exp.bioma.company': 'Fazendas Bioma',
    'exp.bioma.desc': 'FigmaとWordPressを使用したデジタル製品開発。',
    'exp.bioma.period': '2023 — 2024',

    'edu.title': '教育',
    'edu.ufsc.degree': 'プロダクトデザイン学士',
    'edu.ufsc.school': 'UFSC',
    'edu.ufsc.desc': '3Dモデリングとデザイン方法論。',
    'edu.ufsc.period': '2021 — 2026',
    'edu.ifc.degree': '情報技術者',
    'edu.ifc.school': 'IFC',
    'edu.ifc.desc': 'プログラミングロジックとWeb開発。',
    'edu.ifc.period': '2017 — 2019',
  },
} as const;