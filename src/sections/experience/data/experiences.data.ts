import {ExperienceItem} from "@/sections/experience/types/experience.type";

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: "ByFanstore",
        position: "Assistente de programação",
        period: "2022 - 2023",
        description: `
        Responsável pelo desenvolvimento de sites de e-commerce com WordPress, utilizando codificação em JavaScript, HTML5 e CSS para estruturar e estilizar o conteúdo; Criação de documentação técnica para auxiliar na manutenção e atualização do site, assim como na integração com sistemas ERP; • Utilização de ferramentas como: Jira, Trello, Analytics, Google Search Console Google Data, Workspace, Hotjar e Mautic para monitoramento e análise de dados;
        `,
        side: "right" as const,
    },
    {
        id: 2,
        company: "Angulo Sistema",
        position: "Desenvolvedor Java II",
        period: "2023 - 2025",
        description: `
        Responsável pelo desenvolvimento backend Java, aplicando camadas service, controller, repository, DAO, e métodos CRUD para processar requisições. No frontend, emprego React, Next, TypeScript, Tailwind, e Flowbite, consumindo APIs REST do Java e facilitando a comunicação entre frontend e backend.
        `,
        side: "left" as const,
    },
    {
        id: 3,
        company: "Metasix Tecnologia",
        position: "Desenvolvedor Júnior III",
        period: "2025 - 2025",
        description: `Atuação como Desenvolvedor na equipe de sustentação, com foco em correção, manutenção e evolução de código legado em Java EE 8, Spring, WildFly 10, Angular e Ember.js. Responsável por: Implementação de correções em sistemas críticos de produção, garantindo a estabilidade e disponibilidade das aplicações; Desenvolvimento de melhorias e evolução de funcionalidades em aplicações Java e JavaScript`,
        side: "right" as const,
    },
    {
        id: 4,
        company: "Grupo D.Andrade",
        position: "Desenvolvedor Pleno",
        period: "2025 - Presente",
        description: `Desenvolvimento de aplicações e microsserviços em C# e .NET, com foco em código limpo, manutenibilidade e evolução contínua. Atuação em refatoração para modernização de sistemas, melhoria de desempenho e prevenção de falhas de segurança. Aplicação consistente de boas práticas como SOLID e princípios de arquitetura de software.`,
        side: "left" as const,
    },
];
