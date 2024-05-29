import {SkillCardDataType} from "@/app/types/Skill/SkillCardDataType";

export const SkillCardData: SkillCardDataType[] = [
    {
        id: 1,
        pathImage: "./assets/img/java.svg",
        skillTitle: "Backend",
        skillDescription: "Uso de camadas como services, repositories, controllers e entities para criar sistemas robustos",
        languages: [
            {id: 1, title: "Java"},
            {id: 2, title: "Spring"},
            {id: 3, title: "NodeJs"},
            {id: 4, title: "PHP"},
        ],
        tools: [
            {id: 1, title: "Eclipse"},
            {id: 2, title: "Intelli"},
            {id: 3, title: "Postman"},
        ]
    },
    {
        id: 2,
        pathImage: "./assets/img/react.svg",
        skillTitle: "Frontend",
        skillDescription: "Desenvolvimento de layouts profissionais e totalmente responsivos. ",
        languages: [
            {id: 1, title: "Javascript"},
            {id: 2, title: "React"},
            {id: 3, title: "Next-js"},
            {id: 4, title: "Tailwind"},
            {id: 5, title: "Flowbite"},
        ],
        tools: [
            {id: 1, title: "Figma"},
            {id: 2, title: "Intelli"},
            {id: 3, title: "VS Code"},
        ]
    },
    {
        id: 3,
        pathImage: "./assets/img/mysql.svg",
        skillTitle: "Dados",
        skillDescription: "Garantia que os dados não sejam apenas armazenados, mas organizados com lógica.",
        languages: [
            {id: 1, title: "PostgreSQL"},
            {id: 2, title: "MySQL"},
            {id: 3, title: "MariaDB"},
            {id: 4, title: "MongoDB"},
        ],
        tools: [
            {id: 1, title: "Workbench"},
            {id: 2, title: "pgAdmin"},
        ]
    }
]