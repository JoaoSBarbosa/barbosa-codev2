import {CardSkill} from "@/app/components/Cards/cardSkill/CardSkill";
import {LanguagesType} from "@/app/types/Skill/LanguagesType";
import {ToolsType} from "@/app/types/Skill/ToolsType";
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout} from "@/app/components/Layout/Layout";
import {SkillCardData} from "@/app/data/Skill/SkillCardData";
import styles from "./Skill.module.css";
import { motion } from 'framer-motion';
export const Skill = () => {

    return (
        <Layout marginBottom={130} sectionTitle={"Skill"} sectionSubTitle={"Tecnologias e ferramentas que utilizo"}>
            <motion.ul
                className={styles.skillContainer}
                id="skill"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
                }}
            >
                {SkillCardData.map((skill) => (
                    <motion.li key={skill.id} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <CardSkill
                            pathImage={skill.pathImage}
                            titleSkill={skill.skillTitle}
                            description={skill.skillDescription}
                            languages={skill.languages}
                            tools={skill.tools}
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </Layout>

        // <Layout marginBottom={130} sectionTitle={"Skill"} sectionSubTitle={"Tecnologias e ferramentas que utilizo"}>
        //     <ul className={`${styles.skillContainer}`} id={"skill"}>
        //         {SkillCardData.map((skill, index) => (
        //             <li key={skill.id}>
        //                 <CardSkill
        //                     pathImage={skill.pathImage}
        //                     titleSkill={skill.skillTitle}
        //                     description={skill.skillDescription}
        //                     languages={skill.languages}
        //                     tools={skill.tools}
        //                 />
        //             </li>
        //         ))}
        //     </ul>
        // </Layout>
    )
}