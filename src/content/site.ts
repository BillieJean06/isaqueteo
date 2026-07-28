export const profile = {
  name: "Isaque Teodoro",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Construo produtos web escaláveis, acessíveis e rápidos — do banco de dados à interface.",
  location: "Brasil · Remoto",
  email: "isaque.teodoro1234@gmail.com",
  githubUser: "BillieJean06",
  linkedinUser: "isaque-teodoro-017a4b3a1",
  get githubUrl() {
    return `https://github.com/${this.githubUser}`;
  },
  get linkedinUrl() {
    return `https://www.linkedin.com/in/${this.linkedinUser}`;
  },
};

export const about = [
  "Sou desenvolvedor Full Stack com foco em aplicações web modernas. Trabalho do desenho da arquitetura à entrega, priorizando performance, acessibilidade e código sustentável.",
  "Gosto de resolver problemas de verdade: reduzir tempo de carregamento, simplificar fluxos confusos e transformar requisitos vagos em produtos claros e mensuráveis.",
];

export const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Tailwind CSS",
  "Serverless / Edge",
  "CI/CD",
  "Testes automatizados",
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    period: "2026 — atual",
    role: "Desenvolvedor Front-end",
    company: "Limer Gestão Saúde Corporativa",
    description: "Desenvolvimento de aplicações web com arquitetura moderna.",
    highlights: [
      "Desenvolvimento e manutenção da plataforma e landing pages de grande escala.",
      "Implementação de design systems acessíveis",
      "Otimização de Core Web Vitals e SEO técnico",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Assistente Administrativo",
    company: "Limer Gestão de Saúde Corporativa",
    description: "Atendimento ao cliente e suporte interno",
    highlights: ["Atendimento de alta qualidade", "Suporte técnico a usuários"],
  },
  {
    period: "2024 — 2025",
    role: "Atendente e Vendedor",
    company: "Palmifilhos Comercio de Alimentos Ltda",
    description: "Atendimento ao cliente e vendas de produtos",
    highlights: ["Atendimento inicial ao cliente", "Auxilio em vendas"],
  },
];

export const education = [
  { period: "2021 — 2024", title: "Ensino Médio", org: "E.E. Dep. Jamil Gadia" },
  { period: "2022 — 2023", title: "Curso Introdução à Robótica com Arduino", org: "Senai Roberto Mange" },
  { period: "2024 — 2024", title: "CC50 - O Curso de Ciência da Computação de Harvard no Brasil", org: "Universidade Harvard" },
  { period: "2024 — atual", title: "Ciências da Computação", org: "Graduação" },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "Gestão de Envio de Prontuários",
    title: "Gestão de Envio de Prontuários",
    summary:
      "Plataforma desenvolvida para gerenciar o envio e o acompanhamento de prontuários médicos da Unimed Brasil - SOU",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "AD Belém Campinas",
    title: "AD Belém Campinas",
    summary:
      "Site institucional desenvolvido para ampliar a presença digital da igreja, oferecendo uma experiência intuitiva para membros e visitantes, com informações sobre ministérios, projetos, eventos e canais de contato.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Supabase"],
  },
  {
    slug: "Gestão Financeira",
    title: "Gestão Financeira",
    summary:
      "Sistema de controle financeiro simples e intuitivo para gerenciar despesas, receitas e fluxo de caixa em um único lugar.",
    tags: ["TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "arquitetura-serverless-na-pratica",
    title: "Arquitetura serverless na prática",
    date: "2026-06-18",
    readingTime: "7 min",
    excerpt:
      "O que muda quando você deixa de administrar servidores: escala automática, custo por uso e os cuidados que ninguém conta.",
    tags: ["Serverless", "Arquitetura"],
    content: [
      "Serverless não significa ausência de servidores — significa que você deixa de operá-los. A plataforma provisiona, escala e cobra por execução, e o seu trabalho passa a ser desenhar funções pequenas, sem estado e rápidas para inicializar.",
      "O primeiro ganho é escala. Um pico de tráfego não exige planejamento de capacidade: novas instâncias sobem sob demanda. O segundo é custo: em produtos com uso irregular, pagar por requisição costuma ser drasticamente mais barato que manter máquinas ligadas.",
      "Os cuidados reais aparecem no estado. Nada pode viver na memória do processo entre requisições: sessões, filas e caches vão para serviços externos. Cold start também importa — bundles menores e menos dependências pesadas fazem diferença direta na latência percebida.",
      "Na prática, a combinação que uso é: renderização no edge, banco gerenciado com políticas de acesso no próprio banco e funções de servidor tipadas para a lógica sensível. O resultado é uma aplicação que aguenta picos sem intervenção e continua barata quando o tráfego cai.",
    ],
  },
  {
    slug: "acessibilidade-web-alem-do-checklist",
    title: "Acessibilidade web além do checklist",
    date: "2026-05-02",
    readingTime: "6 min",
    excerpt:
      "Contraste, foco visível, semântica e navegação por teclado: como tratar acessibilidade como requisito, não como auditoria final.",
    tags: ["Acessibilidade", "Front-end"],
    content: [
      "Acessibilidade falha quando vira etapa final. Um checklist rodado na véspera do lançamento encontra sintomas; tratar o tema como requisito de produto evita a causa.",
      "Comece pela semântica. Botão é <button>, link é <a>, cabeçalhos seguem uma hierarquia única por página. Isso resolve, sem esforço extra, boa parte do suporte a leitores de tela e à navegação por teclado.",
      "Depois vem o foco visível. Remover o outline padrão sem oferecer substituto quebra a navegação de quem não usa mouse. Um indicador consistente, com contraste suficiente, é obrigatório.",
      "Por fim, não dependa apenas de cor para comunicar estado. Erros, alertas e status precisam de texto ou ícone associado — e todo conteúdo dinâmico relevante deve ser anunciado com regiões live.",
    ],
  },
  {
    slug: "seo-tecnico-para-aplicacoes-react",
    title: "SEO técnico para aplicações React",
    date: "2026-03-21",
    readingTime: "5 min",
    excerpt:
      "Metadados por rota, renderização no servidor e dados estruturados: o mínimo para uma SPA ser bem indexada.",
    tags: ["SEO", "React"],
    content: [
      "Aplicações React historicamente sofrem em busca orgânica por entregarem HTML vazio. Renderização no servidor resolve o problema de base: o crawler recebe conteúdo pronto na primeira resposta.",
      "Com o HTML resolvido, o próximo passo é metadado por rota. Cada página precisa de título único, descrição própria e tags Open Graph correspondentes. Repetir o mesmo título em todo o site desperdiça o principal sinal de relevância.",
      "Dados estruturados em JSON-LD ajudam o buscador a entender o tipo de conteúdo — artigo, pessoa, produto. É barato de implementar e melhora a apresentação nos resultados.",
      "Fecha o conjunto: sitemap atualizado, robots.txt permissivo, URLs canônicas e imagens com dimensões declaradas para evitar deslocamento de layout.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
