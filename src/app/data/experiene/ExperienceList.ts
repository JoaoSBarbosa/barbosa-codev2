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
        id: 1,
        startYear: 2023,
        endYear: null,
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
]
