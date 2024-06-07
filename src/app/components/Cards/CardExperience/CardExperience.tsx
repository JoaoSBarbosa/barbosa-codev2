import styles from "./CardExperience.module.css";
import {ExperienceType} from "@/app/components/Sections/experience/Experience";
import React from "react";

interface CardExperienceProps {
    experience: ExperienceType;
    isLeft: boolean;
}

export const CardExperience: React.FC<CardExperienceProps> = ({experience, isLeft}) => {
    return (
        <div className={`${styles.cardExperienceContainer} ${isLeft ? styles.left : ''}`}>
            <div className={styles.circle}>{experience.startYear}</div>
            <div className={styles.card}>
                <h2 className={"mb-3 text-xl font-bold"}>{experience.jobTitle}</h2>
                <p className={"my-3 text-md"}>{experience.company} {`(${experience.startYear} - ${experience.endYear ? experience.endYear : "atualmente"})`}</p>
                <p className={"text-justify my-5"}>{experience.description}</p>
                <ul className={"flex flex-wrap items-center gap-4"}>
                    {experience.technologies.map((technology) => {
                        const imagePath = `/assets/icons/${technology.technology}.svg`

                        return (
                            <li key={technology.id} >
                                {/*{technology.technology}*/}
                                <img className={"w-8 h-8"} src={imagePath} alt={imagePath}/>
                            </li>

                        )
                    })}
                </ul>
            </div>
        </div>
    );
};
