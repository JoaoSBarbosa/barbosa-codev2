import {ExperienceType} from "@/app/components/Sections/experience/Experience";

export const ExperienceList: ExperienceType[] = [
    {
        id: 1,
        startYear: 2022,
        endYear: 2023,
        jobTitle: "Assistente de programação",
        company: "ByFanstore",
        description: "Responsável pelo desenvolvimento de sites de e-commerce com WordPress, utilizando codificação em " +
            "JavaScript, HTML5 e CSS para estruturar e estilizar o conteúdo; Criação de documentação técnica para auxiliar " +
            "na manutenção e atualização do site, assim como na integração com sistemas ERP; " +
            "• Utilização de ferramentas como: Jira, Trello, Analytics, Google Search Console Google Data, " +
            "Workspace, Hotjar e Mautic para monitoramento e análise de dados;",
        technologies:
            [
                {id: 1, technology: "react"},
                {id: 2, technology: "javascript"},
                {id: 3, technology: "html"},
                {id: 4, technology: "css"}
            ]
    },
    {
        id: 2,
        startYear: 2023,
        endYear: 2025,
        jobTitle: "Programador júnior",
        company: "Angulo Sistema",
        description: "Responsável pelo desenvolvimento backend Java, aplicando camadas service, controller, repository, " +
            "DAO, e métodos CRUD para processar requisições. No frontend, emprego React, Next, TypeScript, Tailwind, e " +
            "Flowbite, consumindo APIs REST do Java e facilitando a comunicação entre frontend e backend.",
        technologies:
            [
                {id: 1, technology: "java"},
                {id: 2, technology: "spring"},
                {id: 3, technology: "nextjs"},
                {id: 4, technology: "mysql"},
                {id: 5, technology: "react"}
            ]
    },
    {
        id: 3,
        startYear: 2025,
        endYear: 2025,
        jobTitle: "Programador júnior III",
        company: "Metasix Tecnologia",
        description: "Atuação como Desenvolvedor na equipe de sustentação, com foco em correção, manutenção e evolução " +
            "de código legado em Java EE 8, Spring, WildFly 10, Angular e Ember.js. Responsável por: Implementação de " +
            "correções em sistemas críticos de produção, garantindo a estabilidade e disponibilidade das aplicações; " +
            "Desenvolvimento de melhorias e evolução de funcionalidades em aplicações Java e JavaScript",
        technologies:
            [
                {id: 1, technology: "java"},
                {id: 2, technology: "spring"},
                {id: 3, technology: "wildfly"},
                {id: 4, technology: "angularjs"},
                {id: 5, technology: "elasticsearch"},
                {id: 6, technology: "rabbitmq"},
                {id: 7, technology: "docker"},
                {id: 8, technology: "postgresql"},
            ]
    },
    {
        id: 4,
        startYear: 2025,
        endYear: null,
        jobTitle: "Desenvolvedor de Software Pleno",
        company: "Grupo D.Andrade",
        description: "Desenvolvimento de aplicações e microsserviços em C# e .NET, com foco em código limpo, manutenibilidade e evolução contínua. Atuação em refatoração para modernização de sistemas, melhoria de desempenho e prevenção de falhas de segurança. Aplicação consistente de boas práticas como SOLID e princípios de arquitetura de software.",
        technologies:
            [
                {id: 1, technology: "dotnetcore"},
                {id: 2, technology: "csharp"},
                {id: 3, technology: "azure"},
                {id: 4, technology: "azuredevops"},
                {id: 5, technology: "microsoftsqlserver"},

            ]
    },
]
