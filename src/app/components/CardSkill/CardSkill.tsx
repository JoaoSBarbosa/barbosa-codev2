import styles from "./CardSkill.module.css"
import {LanguagesType} from "@/app/types/Skill/LanguagesType";
import {ToolsType} from "@/app/types/Skill/ToolsType";
interface CardSkillProps {
    pathImage: string;
    titleSkill: string;
    description: string;
    languages: LanguagesType[];
    tools: ToolsType[]
}
export const CardSkill: React.FC<CardSkillProps>= ({pathImage,titleSkill,tools,languages,description}) =>{
    return(
        <div className={`${styles.CardContainer} bg-gray-950`}>

            <div>
                <img src={`${pathImage}`} alt=""/>
            </div>
            <div>
                <h2>{titleSkill}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <h3>Linguagens e Framework</h3>
                {languages.map((language)=>(
                    <p>{language.title}, </p>
                ))}
            </div>
        </div>
    )
}