import {CardSkill} from "@/app/components/CardSkill/CardSkill";
import {LanguagesType} from "@/app/types/Skill/LanguagesType";
import {ToolsType} from "@/app/types/Skill/ToolsType";
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout} from "@/app/components/Layout/Layout";
import {SkillCardData} from "@/app/data/Skill/SkillCardData";

import styles from "../../CardSkill/CardSkill.module.css";
export const Skill = () => {
    const languages: LanguagesType[] = [
        {id: 1, title: "Java"},
        {id: 2, title: "Spring"},
        {id: 3, title: "NodeJs"},
        {id: 4, title: "PHP"},
    ]
    const tools: ToolsType[] = [
        {id: 1, title: "Eclipse"},
        {id: 2, title: "Intelli"},
        {id: 3, title: "Postman"},
    ]
    return (

        <RootSection isDarkBackgroundColor={true} isBottomBoxShadow={true}>
            <Layout>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 overflow-scroll" id={"skill"}>
                    {SkillCardData.map((skill, index) => {

                        return (
                            <CardSkill
                                key={skill.id}
                                pathImage={skill.pathImage}
                                titleSkill={skill.skillTitle}
                                description={skill.skillDescription}
                                languages={skill.languages}
                                tools={skill.tools}
                            />
                        );
                    })}
                </div>
            </Layout>
        </RootSection>
    )
}