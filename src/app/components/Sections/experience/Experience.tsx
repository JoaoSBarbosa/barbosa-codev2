import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout, Position} from "@/app/components/Layout/Layout";
import {CardExperience} from "@/app/components/Cards/CardExperience/CardExperience";
import styles from "./Experience.module.css";

export type ExperienceType = {
    id: number;
    startYear: number;
    endYear: number | null;
    jobTitle: string;
    company: string;
    description: string;
    technologies: ExperienceTechnologiesListType[]
}

export type ExperienceTechnologiesListType = {
    id: number;
    technology: string;
}
export const experienceLis: ExperienceType[] = [
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
                {id: 1, technology: "React"},
                {id: 2, technology: "JavaScript"},
                {id: 3, technology: "HTML"},
                {id: 4, technology: "CSS"}
            ]
    },
    {
        id: 1,
        startYear: 2022,
        endYear: null,
        jobTitle: "Programador júnior",
        company: "Angulo Sistema",
        description: "Responsável pelo desenvolvimento backend Java, aplicando camadas service, controller, repository, " +
            "DAO, e métodos CRUD para processar requisições. No frontend, emprego React, Next, TypeScript, Tailwind, e " +
            "Flowbite, consumindo APIs REST do Java e facilitando a comunicação entre frontend e backend.",
        technologies:
            [
                {id: 1, technology: "Java"},
                {id: 2, technology: "Spring"},
                {id: 3, technology: "Next-js"},
                {id: 4, technology: "MySQL"},
                {id: 5, technology: "React"}
            ]
    },
]

// export const Experience = () => {
//     return (
//
//         <RootSection isDarkBackgroundColor={false}>
//             <Layout position={Position.RELATIVE}>
//                 <div className={`${styles.timeline}`}></div>
//                 {experienceLis.map((experience, index) => (
//                     <CardExperience
//                         key={experience.id}
//                         isLeft={index % 2 !== 0}
//                         experience={experience}/>
//                 ))}
//             </Layout>
//         </RootSection>
//
//     )
// }

export const Experience = () => {
    return (
        <RootSection isDarkBackgroundColor={false} >
            <Layout position={Position.RELATIVE}>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeline}></div>
                    {experienceLis.map((experience, index) => (
                        <CardExperience
                            key={experience.id}
                            isLeft={index % 2 !== 0}
                            experience={experience}
                        />
                    ))}
                </div>
            </Layout>
        </RootSection>
    );
};