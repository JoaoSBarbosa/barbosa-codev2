
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

            <div className={`flex items-center w-full justify-center ${styles.cardImageContainer}`}>
                <div className={` ${styles.CardImageContent}`}>
                    <img src={`${pathImage}`} alt={titleSkill} className={"h-1/2 w-full max-h-full"}/>
                </div>
            </div>

            <div className={`${styles.cardInfosContainer}`}>

                <div className={`${styles.cardTitleContainer}`}>
                    <h2 className={`${styles.CardTitle}`}>{titleSkill}</h2>
                </div>

                <div className={`${styles.cardDescription}`}>
                    <p>{description}</p>
                </div>

                <div className={`${styles.CardLanguagesContainer}`}>
                    <h3 className={`${styles.textGradient}`}>Linguagens e Frameworks</h3>
                    <div className={`${styles.CardLanguagesList}`}>
                        {languages.map((language) => (
                            <p key={language.id}>{language.title}, </p>
                        ))}
                    </div>
                </div>

                <div className={`${styles.CardTools}`}>
                    <h3 className={`${styles.textGradient}`}>
                        Ferramentas
                    </h3>
                    <div className={`${styles.cardToolsList}`}>
                        {tools.map((tool) => (
                            <p key={tool.id}>{tool.title}</p>
                        ))}
                    </div>
                </div>

            </div>


        </div>

    );
};
