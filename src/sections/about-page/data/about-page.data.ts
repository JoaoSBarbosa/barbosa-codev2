import type {
  CareerMoment,
  EducationMoment,
  StudyFocus,
} from "@/sections/about-page/types/about-page.type";

export const aboutIntro = {
  eyebrow: "Trajetoria profissional",
  title: "Uma carreira construida entre produto, suporte, arquitetura e sistemas reais",
  description:
    "Comecei na tecnologia atuando perto do negocio, do e-commerce e do suporte. Essa base me ajudou a evoluir para desenvolvimento backend, frontend, sustentacao de sistemas criticos e hoje para solucoes com foco em arquitetura, escalabilidade e qualidade de codigo.",
};

export const careerMoments: CareerMoment[] = [
  {
    company: "Fanstore | Branded Gifts as a Service",
    role: "Assistente de tecnologia",
    period: "ago de 2022 - ago de 2023",
    location: "Sao Paulo, SP",
    mode: "Remoto",
    summary:
      "Inicio da carreira em tecnologia, atuando entre TI, marketing, e-commerce e desenvolvimento web. A experiencia trouxe uma visao pratica sobre operacao, suporte, integracoes e entrega de interfaces para clientes.",
    highlights: [
      "Desenvolvimento e manutencao de plataformas de e-commerce em WordPress com JavaScript, HTML5 e CSS.",
      "Atualizacao de produtos, personalizacao de paginas, criacao de layouts e suporte a demandas de marketing e tecnologia.",
      "Contato com empresas parceiras para integracoes de servicos, incluindo fluxos ligados a ERP.",
      "Monitoramento, correcao de falhas, testes, revisao de codigo e documentacao tecnica.",
      "Uso de Jira, Google Analytics, Search Console, Hotjar e Mautic para analise e melhoria de resultados.",
      "Participacao em projetos para clientes como Ambev, BMW e Itau.",
      "Criacao de formulario com logica automatica de expiracao, reduzindo etapas manuais no processo de aprovacao.",
    ],
    stack: ["JavaScript", "WordPress", "HTML5", "CSS", "ERP", "Jira"],
  },
  {
    company: "ANGULO SISTEMAS",
    role: "Desenvolvedor Java",
    period: "set de 2023 - mai de 2025",
    location: "Ferraz de Vasconcelos, SP",
    mode: "No local",
    summary:
      "Atuacao no desenvolvimento de sistemas internos, ERP e plataforma de suporte tecnico para clientes externos, integrando frontend moderno com backend Java e Spring Boot.",
    highlights: [
      "Construcao de modulos para abertura e gestao de chamados tecnicos.",
      "Desenvolvimento de funcionalidades para cadastro e gerenciamento de colaboradores, eventos, agendamentos, contabilidade e servidores.",
      "Integracao com APIs externas, incluindo Dropbox, para automatizacao de processos.",
      "Implementacao de comunicacao em tempo real com WebSocket.",
      "Uso de Context API e useReducer para gerenciamento de estado no frontend.",
      "Arquitetura em camadas com Controller, Service, Repository e DAO, integrada por APIs RESTful.",
    ],
    stack: ["Java 17", "Java 21", "Spring Boot", "React", "Next.js", "TypeScript", "Tailwind", "WebSocket"],
  },
  {
    company: "Metasix Tecnologia",
    role: "Desenvolvedor de sistemas",
    period: "jun de 2025 - dez de 2025",
    location: "Sao Paulo, SP",
    mode: "Hibrido",
    summary:
      "Atuacao na equipe de Sustentacao, mantendo e evoluindo sistemas legados em ambiente critico, com foco em estabilidade, continuidade dos servicos e melhoria de funcionalidades.",
    highlights: [
      "Correcao, manutencao e evolucao de sistemas com Java EE 8, Spring, WildFly 10, Angular e Ember.js.",
      "Resolucao de incidentes em producao, acompanhando chamados e ciclo de correcao via Jira.",
      "Evolucao de aplicacoes Java e JavaScript com foco em disponibilidade e qualidade operacional.",
      "Integracao e suporte a sistemas baseados em mensageria com RabbitMQ e ActiveMQ.",
      "Atuacao com Elasticsearch para busca e analise de dados.",
    ],
    stack: ["Java EE 8", "Spring", "WildFly 10", "Angular", "Ember.js", "RabbitMQ", "ActiveMQ", "Elasticsearch"],
  },
  {
    company: "D.Andrade - Assessoria em Precatorios",
    role: "Desenvolvedor de Software Pleno",
    period: "jan de 2026 - o momento",
    location: "Sao Paulo, SP",
    mode: "No local",
    summary:
      "Atuacao atual em sistemas do dominio juridico, com foco em C# .NET, arquitetura orientada a servicos, mensageria e boas praticas para evolucao sustentavel de produto.",
    highlights: [
      "Desenvolvimento de sistemas com C# e .NET aplicando codigo limpo, DDD e arquitetura orientada a servicos.",
      "Uso de mensageria no Azure para comunicacao entre servicos e automacao de processos.",
      "Aplicacao de Kubernetes para orquestracao de aplicacoes.",
      "Uso de Dapper para acesso performatico ao SQL Server.",
      "Implementacao de testes unitarios, testes de integracao e automacoes para ganho de eficiencia operacional.",
    ],
    stack: ["C#", ".NET", "DDD", "Azure", "Mensageria", "Kubernetes", "Dapper", "SQL Server"],
  },
];

export const educationMoment: EducationMoment = {
  institution: "UNINTER Centro Universitario Internacional",
  course: "Analise e Desenvolvimento de Sistemas",
  period: "fev de 2022 - jun de 2024",
  description:
    "Formacao superior com base em desenvolvimento de software, programacao, documentacao tecnica e fundamentos para construcao de sistemas.",
};

export const studyFocusItems: StudyFocus[] = [
  {
    title: "Arquitetura e boas praticas",
    description:
      "Estudo continuo de DDD, codigo limpo, arquitetura em camadas, servicos distribuidos e decisoes tecnicas que mantem sistemas evolutivos.",
  },
  {
    title: "Backend e integracoes",
    description:
      "Aprofundamento em Java, Spring, C# .NET, mensageria, APIs REST, persistencia e comunicacao entre sistemas.",
  },
  {
    title: "Frontend com produto",
    description:
      "Evolucao em React, Next.js, TypeScript, interfaces responsivas e experiencia do usuario aplicada a sistemas reais.",
  },
  {
    title: "Aprendizado constante",
    description:
      "Cursos, documentacoes, conteudos tecnicos, estudos por conta propria e pratica continua para acompanhar tecnologias e conceitos mais complexos.",
  },
];
