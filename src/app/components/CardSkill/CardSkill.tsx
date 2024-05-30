// import styles from "./CardSkill.module.css"
// import {LanguagesType} from "@/app/types/Skill/LanguagesType";
// import {ToolsType} from "@/app/types/Skill/ToolsType";
// interface CardSkillProps {
//     pathImage: string;
//     titleSkill: string;
//     description: string;
//     languages: LanguagesType[];
//     tools: ToolsType[]
// }
// export const CardSkill: React.FC<CardSkillProps>= ({pathImage,titleSkill,tools,languages,description}) =>{
//     return(
//         <div className={`${styles.CardContainer} bg-gray-950`}>
//
//             <div>
//                 <img src={`${pathImage}`} alt=""/>
//             </div>
//             <div>
//                 <h2>{titleSkill}</h2>
//             </div>
//             <div>
//                 <p>{description}</p>
//             </div>
//             <div>
//                 <h3>Linguagens e Framework</h3>
//                 {languages.map((language)=>(
//                     <p>{language.title}, </p>
//                 ))}
//             </div>
//         </div>
//     )
// }

import styles from "./CardSkill.module.css";
import {LanguagesType} from "@/app/types/Skill/LanguagesType";
import {ToolsType} from "@/app/types/Skill/ToolsType";

export enum IconHeightEnum {
    H0 = "h-0 w-0",
    HPX = "h-px",
    H05 = "h-0.5",
    H1 = "h-1",  /* 4px */
    H2 = "h-2",  /* 8px */
    H3 = "h-3",  /* 12px */
    H4 = "h-4 w-4",  /* 6px */
    H8 = "h-8",  /* 32px */
    H9 = "h-9",  /* 36px */
    H10 = "h-10",  /* 40px */
    H11 = "h-11",  /* 44px */
}

interface CardSkillProps {
    pathImage: string;
    titleSkill: string;
    description: string;
    languages: LanguagesType[];
    tools: ToolsType[];
    className?: string;
    iconHeight?: IconHeightEnum// Adiciona uma prop para classes adicionais
}

export const CardSkill: React.FC<CardSkillProps> = ({
                                                        pathImage,
                                                        iconHeight,
                                                        titleSkill,
                                                        tools,
                                                        languages,
                                                        description,
                                                        className
                                                    }) => {
    return (
        <div className={`${styles.CardContainer}`}>
            <div className={`flex p-2 items-center justify-center `}>
                <picture className={`${iconHeight ? iconHeight : "h-16 w-16"} flex items-center justify-center rounded-full bg-purple-custom`}>
                    <img src={`${pathImage}`} alt={titleSkill}
                         className={``} style={{
                             height: "80%",
                        width: "80%",
                        objectFit: "contain"
                    }}/>
                </picture>

            </div>


            <div className={""}>
                <h2 className={`${styles.CardTitle} text-purple-custom text-2xl font-bold text-center my-4`}>{titleSkill}</h2>
            </div>
            <div className={`${styles.cardDescription} h-24 mb-4 py-2 text-center`}>
                <p>{description}</p>
            </div>
            <div className={`${styles.CardLanguagesContainer}`}>
                <h3 className={"text-purple-500 font-bold text-xl text-center"}>Linguagens e Frameworks</h3>
                <div className={"flex justify-center gap-1.5 my-4"}>
                    {languages.map((language) => (
                        <p key={language.id}>{language.title}, </p>
                    ))}
                </div>
            </div>
            <div className={styles.CardTools}>
                <h3 className={"text-purple-500 font-bold text-xl text-center"}>Ferramentas</h3>
                <div className={"flex justify-center gap-1.5 my-4"}>
                    {tools.map((tool) => (
                        <p key={tool.id}>{tool.title}</p>
                    ))}
                </div>
            </div>
        </div>

    );
};