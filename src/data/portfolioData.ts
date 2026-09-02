import {
  ExperienceItem,
  ProjectItem,
  PublicationItem,
  TechItem,
  EducationItem,
  LanguageItem,
} from '../types';

export const personalInfo = {
  name: 'Amin Goodarzi',
  role: 'Frontend-Focused Software Developer',
  targetRole: 'Full-Stack Developer',
  headline: 'Frontend-focused developer building toward full-stack.',
  supportingCopy:
    'I build polished web experiences with React, Next.js, and TypeScript, while increasingly working across Python, Django, databases, and software architecture.',
  location: 'Tehran, Iran',
  status: 'Based in Tehran · Building web products · Always learning',
  email: 'amingoudarzy@yahoo.com',
  linkedin: 'https://linkedin.com/in/amingoodarzi',
  github: 'https://github.com/Amin-Gz',
  civilicaProfile: 'https://civilica.com',
  about: `Amin Goodarzi is a frontend-focused software developer with professional experience in modern web development and an increasing focus on full-stack engineering. He specializes in designing robust user interfaces with React, Next.js, TypeScript, and Tailwind CSS, and expands his craft across backend systems using Python, Django, Node.js, Express, and SQL databases. He holds a Bachelor's degree in Computer Engineering and has published 6 academic research papers in applied AI, optimization, and information systems.`,
  personality: `When I’m not debugging interfaces or structuring databases, there’s a reasonable chance I’m on a board somewhere — wakeboarding, snowboarding, or cable boarding.`,
  hobbies: ['Wakeboarding', 'Snowboarding', 'Cable Boarding', 'Fitness', 'Flyboarding'],
};

export const experiences: ExperienceItem[] = [
  {
    id: 'tonb',
    role: 'Frontend Developer / Team Lead',
    company: 'Tonb Software Development Company',
    location: 'Tehran, Iran',
    period: '2023 — Present',
    isCurrent: true,
    description:
      'Led frontend development and collaborative architecture for high-demand web applications, bridging modern frontend patterns with backend service integration.',
    highlights: [
      'Led frontend architecture and mentored engineers on TypeScript, React, and Next.js best practices.',
      'Architected interactive canvas and drag-and-drop workflows using Konva.js and React DnD.',
      'Owned independent feature lifecycles from technical design to production deployment.',
      'Implemented robust backend feature integrations and streamlined API contracts.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Git', 'Konva.js', 'React DnD', 'Tailwind CSS'],
  },
  {
    id: 'ariomex',
    role: 'Frontend Developer',
    company: 'Ariomex',
    companyUrl: 'https://ariomex.ir',
    location: 'Tehran, Iran',
    period: '2022 — 2023',
    description:
      'Engineered core web platforms, responsive administrative panels, and cross-platform mobile features.',
    highlights: [
      'Developed high-density administration panels and real-time dashboard interfaces.',
      'Integrated multilingual internationalization (i18n) and accessibility standards.',
      'Contributed to mobile application features using React Native.',
      'Standardized component library and UI states with Mantine and modern React.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'React Native', 'Mantine', 'i18n'],
  },
  {
    id: 'keykavoos',
    role: 'Frontend Developer Intern',
    company: 'KeyKavoos Zaman',
    location: 'Tehran, Iran',
    period: '2021 — 2022',
    description:
      'Immersive engineering internship building over 20 mini-projects, modular web modules, and product reconstructions.',
    highlights: [
      'Engineered 20+ mini-projects mastering DOM mechanics, component lifecycles, and API integration.',
      'Recreated core user-facing and transaction flows inspired by major platforms including Divar and ZarinPal.',
      'Gained hands-on full-stack exposure with Node.js, Express.js, and MSSQL database queries.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MSSQL', 'JavaScript'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'avazeh-school',
    title: 'Avazeh School',
    tagline: 'Educational Web Platform',
    category: 'Full-Stack',
    featured: true,
    description:
      'A comprehensive educational platform designed for structured student learning, course management, and academic engagement.',
    longDescription:
      'Avazeh School delivers an intuitive learning management experience featuring course browsing, lesson modules, dynamic scheduling, and interactive study resources for modern online education.',
    liveUrl: 'https://avazehschool.ir',
    role: 'Frontend & Architecture Lead',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    highlights: [
      'Designed responsive student portals and course directory workflows.',
      'Optimized Core Web Vitals for lightning-fast page transitions.',
      'Implemented secure data fetching and modular state management.',
    ],
    metricsOrScope: 'Live Production Platform',
  },
  {
    id: 'dav-kimya',
    title: 'Dav Kimya',
    tagline: 'Industrial Company Website & Catalog',
    category: 'Frontend',
    featured: false,
    description:
      'Official corporate presence and product catalog for chemical manufacturing and distribution.',
    longDescription:
      'Engineered an editorial corporate website showcasing chemical products, industrial specifications, and technical inquiry forms with smooth, brand-aligned visual hierarchy.',
    liveUrl: 'https://davkimya.com',
    role: 'Frontend Developer',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    highlights: [
      'Crafted high-contrast product catalog with instant search & filtering.',
      'Achieved 100/100 performance and accessibility scores in Lighthouse.',
      'Engineered responsive inquiry pipelines and interactive spec sheets.',
    ],
    metricsOrScope: 'Corporate Web Presence',
  },
  {
    id: 'ariomex-platform',
    title: 'Ariomex Web & Admin',
    tagline: 'Web Platform & Administration Suite',
    category: 'Web Application',
    featured: false,
    description:
      'High-throughput web platform and administrative portal featuring dense data views and user management.',
    longDescription:
      'Built mission-critical user interfaces for Ariomex, including real-time dashboards, user permissions, multi-language support, and administrative workflow orchestration.',
    liveUrl: 'https://ariomex.ir',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React', 'TypeScript', 'Mantine', 'i18n', 'React Native'],
    highlights: [
      'Constructed dense, responsive administration dashboards.',
      'Integrated i18n localization for multi-regional audiences.',
      'Engineered reusable data tables and complex form state validators.',
    ],
    metricsOrScope: 'Admin & Customer Portal',
  },
  {
    id: 'divar-sample',
    title: 'Divar Marketplace Sample',
    tagline: 'Classifieds & Marketplace Architecture Recreation',
    category: 'Frontend',
    featured: false,
    description:
      'High-fidelity recreation of Divar’s classifieds marketplace focusing on instant filtering, spatial layout, and smooth interactions.',
    longDescription:
      'A precision recreation of Divar’s core user journey, demonstrating advanced search indexing, category trees, image galleries, and responsive listing cards built with modern React tooling.',
    githubUrl: 'https://github.com/Amin-Gz/divar.irSample',
    role: 'Creator & Developer',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Instant client-side filter engine with category nesting.',
      'Fluid image carousel and responsive detail sheets.',
      'Fast build tooling powered by Vite and strict TypeScript types.',
    ],
    metricsOrScope: 'Open Source Sample',
  },
  {
    id: 'cosmetics-store',
    title: 'Cosmetics Store',
    tagline: 'E-Commerce Platform & Cart Experience',
    category: 'Full-Stack',
    featured: false,
    description:
      'Full sample e-commerce application featuring product catalogs, variant selectors, and persistent cart management.',
    longDescription:
      'A sleek, modern e-commerce storefront with intuitive navigation, category filtering, cart drawers, and checkout flow simulation crafted with Next.js and Tailwind CSS.',
    githubUrl: 'https://github.com/Amin-Gz/cosmetics-store',
    role: 'Creator & Developer',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    highlights: [
      'Interactive cart drawer with state persistence and promo code calculation.',
      'Optimized product galleries and dynamic variant pickers.',
      'Fully responsive mobile-first checkout navigation.',
    ],
    metricsOrScope: 'E-Commerce Architecture',
  },
  {
    id: 'django-backend',
    title: 'Dockerized Django Backend',
    tagline: 'Modular Python & Django REST API Architecture',
    category: 'Backend',
    featured: false,
    description:
      'Production-ready, containerized Django backend service structured with Docker, Docker Compose, and PostgreSQL.',
    longDescription:
      'A clean backend boilerplate and service architecture implementing robust authentication, relational database modeling, database migrations, environment configurations, and Docker Compose orchestration.',
    githubUrl: 'https://github.com/Amin-Gz/djangoBackend',
    role: 'Backend Developer',
    technologies: ['Python', 'Django', 'Docker', 'Docker Compose', 'PostgreSQL', 'REST API'],
    highlights: [
      'Containerized development and deployment pipeline using Docker Compose.',
      'Secure token authentication and role-based API permissions.',
      'Clean ORM models with indexing and automated database migrations.',
    ],
    metricsOrScope: 'Backend Service Architecture',
  },
];

export const publications: PublicationItem[] = [
  {
    id: 'pub-01',
    indexNumber: '01',
    title: 'Application of Genetic Algorithms in Production / Process Planning',
    conference: '5th International Conference on Architecture, Civil Engineering & Urban Management',
    year: 2022,
    pages: 28,
    civilicaId: 'MEMARCONF05_278',
    civilicaUrl: 'https://civilica.com/doc/MEMARCONF05_278',
    topics: ['Genetic Algorithms', 'Industrial Optimization'],
    category: 'Optimization',
    abstractSummary:
      'Explores the formulation and optimization of multi-stage production schedules and manufacturing process planning using advanced genetic algorithm heuristics to minimize cycle times and idle overhead.',
    keyContributions: [
      'Constructed fitness functions modeling multi-variable shop floor constraints.',
      'Benchmarked chromosome mutation rates against traditional deterministic scheduling.',
      'Documented 28-page comparative study on computational convergence times.',
    ],
  },
  {
    id: 'pub-02',
    indexNumber: '02',
    title: 'Comparing Prediction Error of AI Algorithms for Traffic Forecasting',
    conference: '5th International Conference on Architecture, Civil Engineering & Urban Management',
    year: 2022,
    pages: 13,
    civilicaId: 'MEMARCONF05_279',
    civilicaUrl: 'https://civilica.com/doc/MEMARCONF05_279',
    topics: ['AI', 'Traffic Prediction', 'Genetic Algorithms'],
    category: 'AI',
    abstractSummary:
      'Presents a quantitative error-rate benchmark comparing neural networks, genetic heuristics, and statistical time-series models for short-term and medium-term urban traffic flow forecasting.',
    keyContributions: [
      'Evaluated RMSE and MAPE metrics across heterogeneous urban sensory datasets.',
      'Demonstrated hybrid model resilience during peak fluctuation anomalies.',
      'Published 13-page empirical findings on algorithmic accuracy trade-offs.',
    ],
  },
  {
    id: 'pub-03',
    indexNumber: '03',
    title: 'The Effect of IT Investment on Organizational Productivity',
    conference: '5th National Conference on Management, Economics and Accounting',
    year: 2022,
    pages: 22,
    civilicaId: 'MANAGEMENTCONF05_230',
    civilicaUrl: 'https://civilica.com/doc/MANAGEMENTCONF05_230',
    topics: ['Information Technology', 'Organizational Productivity'],
    category: 'Information Systems',
    abstractSummary:
      'Investigates the direct and indirect correlations between enterprise software infrastructure investments, workforce efficiency, and measurable operational productivity gains.',
    keyContributions: [
      'Modeled capital expenditure ROI across digital workflow transitions.',
      'Identified organizational readiness factors accelerating productivity returns.',
      'Authored 22-page econometric and organizational framework analysis.',
    ],
  },
  {
    id: 'pub-04',
    indexNumber: '04',
    title: 'IT Investment and Decentralized Decision-Making',
    conference: '5th National Conference on Management, Economics and Accounting',
    year: 2022,
    pages: 23,
    civilicaId: 'MANAGEMENTCONF05_231',
    civilicaUrl: 'https://civilica.com/doc/MANAGEMENTCONF05_231',
    topics: ['Information Technology', 'Decision Making'],
    category: 'Information Systems',
    abstractSummary:
      'Analyzes how modern information systems and real-time distributed data access empower decentralized organizational decision-making hierarchies and operational agility.',
    keyContributions: [
      'Surveyed structural changes in mid-to-large enterprise communication flows.',
      'Correlated data accessibility with localized operational response velocity.',
      'Delivered 23-page conceptual framework on managerial decentralization.',
    ],
  },
  {
    id: 'pub-05',
    indexNumber: '05',
    title: 'Student Characteristics Affecting E-Learning System Success',
    conference: '5th National Conference on E-Learning & Modern Educational Technology',
    year: 2022,
    pages: 24,
    civilicaId: 'CELCONF05_138',
    civilicaUrl: 'https://civilica.com/doc/CELCONF05_138',
    topics: ['E-Learning', 'Fuzzy Network Analysis'],
    category: 'E-Learning',
    abstractSummary:
      'Applies Fuzzy Analytic Network Process (FANP) modeling to quantify and rank key student behavioral and demographic characteristics that drive e-learning platform adoption and retention.',
    keyContributions: [
      'Developed fuzzy multi-criteria matrices to weight engagement drivers.',
      'Quantified digital literacy, intrinsic motivation, and interface UX impact.',
      '24-page analytical contribution to modern pedagogical software design.',
    ],
  },
  {
    id: 'pub-06',
    indexNumber: '06',
    title: 'Instructor Characteristics Affecting E-Learning System Success',
    conference: '5th National Conference on E-Learning & Modern Educational Technology',
    year: 2022,
    pages: 24,
    civilicaId: 'CELCONF05_139',
    civilicaUrl: 'https://civilica.com/doc/CELCONF05_139',
    topics: ['E-Learning', 'Fuzzy Network Analysis'],
    category: 'E-Learning',
    abstractSummary:
      'Utilizes Fuzzy Network Analysis to assess instructor readiness, pedagogical adaptability, and digital delivery feedback loops in determining digital education platform success.',
    keyContributions: [
      'Formulated fuzzy evaluation frameworks for instructor technological competence.',
      'Benchmarked feedback response times and multimedia course material effectiveness.',
      'Published 24-page empirical evaluation with practical UX recommendations.',
    ],
  },
];

export const techStack: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', description: 'Component architecture, custom hooks, concurrent mode' },
  { name: 'Next.js', category: 'Frontend', description: 'App Router, Server Components, SSR/SSG workflows' },
  { name: 'TypeScript', category: 'Frontend', description: 'Strict typing, generics, robust interfaces' },
  { name: 'JavaScript', category: 'Frontend', description: 'ESNext, async/await, modern DOM APIs' },
  { name: 'HTML5', category: 'Frontend', description: 'Semantic structure, accessibility (a11y), SEO' },
  { name: 'CSS3', category: 'Frontend', description: 'Modern layouts, flexbox, grid, custom properties' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first styling, design systems, responsive design' },
  { name: 'Vite', category: 'Frontend', description: 'Modern build tooling, lightning-fast dev server' },
  { name: 'Sass / SCSS', category: 'Frontend', description: 'Modular stylesheets, mixins, custom styling' },
  { name: 'Mantine', category: 'Frontend', description: 'Accessible UI component system, theme customization' },
  { name: 'Konva.js', category: 'Frontend', description: 'High-performance 2D canvas drawing & interactive graphics' },
  { name: 'React DnD', category: 'Frontend', description: 'Drag-and-drop interactions and data pipelines' },
  { name: 'i18n', category: 'Frontend', description: 'Multi-language localization and RTL/LTR adaptation' },

  // Mobile
  { name: 'React Native', category: 'Mobile', description: 'Cross-platform native iOS & Android applications' },
  { name: 'Expo', category: 'Mobile', description: 'Managed workflows, rapid prototyping & mobile deployment' },

  // Backend
  { name: 'Python', category: 'Backend', description: 'Clean scripting, data handling, and backend logic' },
  { name: 'Django', category: 'Backend', description: 'High-level Python web framework, ORM, authentication' },
  { name: 'Node.js', category: 'Backend', description: 'JavaScript runtime, asynchronous I/O, server scripts' },
  { name: 'Express.js', category: 'Backend', description: 'Fast, minimalist RESTful API endpoints and middleware' },

  // Data
  { name: 'PostgreSQL', category: 'Data', description: 'Relational database, indexing, complex querying' },
  { name: 'Microsoft SQL Server', category: 'Data', description: 'Enterprise relational data management and T-SQL' },
  { name: 'Supabase', category: 'Data', description: 'Modern cloud database, authentication, real-time subscriptions' },

  // Tools
  { name: 'Git', category: 'Tools', description: 'Version control, branching strategies, collaborative workflows' },
  { name: 'GitHub', category: 'Tools', description: 'Code hosting, pull requests, CI/CD actions' },
  { name: 'Docker', category: 'Tools', description: 'Containerization, reproducible environment packaging' },
  { name: 'Docker Compose', category: 'Tools', description: 'Multi-container orchestration for local and staging environments' },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Islamic Azad University, North Tehran Branch',
    location: 'Tehran, Iran',
    period: '2019 — 2024',
    details: [
      'Comprehensive study of software engineering principles, algorithms, data structures, and computer architecture.',
      'Conducted academic research in applied AI heuristics, genetic algorithms, and fuzzy network analysis.',
    ],
  },
];

export const languages: LanguageItem[] = [
  { name: 'English', proficiency: 'Advanced', note: 'Professional working proficiency in reading, writing, and technical communication.' },
  { name: 'French', proficiency: 'Intermediate', note: 'Conversational and reading comprehension.' },
];
