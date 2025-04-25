import {SkillCardDataType} from "@/app/types/Skill/SkillCardDataType";

export const SkillCardData: SkillCardDataType[] = [
    {
        id: 1,
        pathImage: "./assets/img/java.svg",
        skillTitle: "Backend",
        skillDescription: "Construção de APIs e microsserviços com arquitetura em camadas e práticas como SOLID e mensageria.",
        languages: [
            {id: 1, title: "Java"},
            {id: 2, title: "Spring"},
            {id: 4, title: "Spring Security"},
            {id: 5, title: "Spring Data JPA"},
            {id: 6, title: "Hibernate"},
            {id: 7, title: "JUnit"},
        ],
        tools: [
            {id: 1, title: "Intellij IDEA"},
            {id: 2, title: "Postman"},
            {id: 3, title: "Docker"},
            {id: 4, title: "RabbitMQ"},
            {id: 6, title: "Git"},
        ]
    },
    {
        id: 2,
        pathImage: "./assets/img/react.svg",
        skillTitle: "Frontend",
        skillDescription: "Desenvolvimento de interfaces modernas e responsivas com foco em UX utilizando React, Next.js e Tailwind.",
        languages: [
            {id: 1, title: "JavaScript (ES6+)"},
            {id: 2, title: "TypeScript"},
            {id: 3, title: "React"},
            {id: 4, title: "Next.js"},
            {id: 5, title: "Tailwind CSS"},
            {id: 6, title: "Flowbite"},
        ]
        ,
        tools: [
            {id: 1, title: "Figma"},
            {id: 2, title: "VS Code"},
            {id: 3, title: "IntelliJ IDEA"},
        ]
    },
    {
        id: 3,
        pathImage: "./assets/img/mysql-plain.svg",
        skillTitle: "Dados",
        skillDescription: "Modelagem e gerenciamento de bancos de dados relacionais e NoSQL com foco em integridade e performance.",
        languages: [
            {id: 1, title: "PostgreSQL"},
            {id: 2, title: "MySQL"},
            {id: 3, title: "MariaDB"},
        ],
        tools: [
            { id: 1, title: "MySQL Workbench" },
            { id: 2, title: "pgAdmin" },
            { id: 3, title: "Flyway" }
        ]

    }
]