

// import styles from "./CardExperience.module.css";
// import { ExperienceType } from "@/app/components/Sections/experience/Experience";
// import React from "react";
//
// interface CardExperienceProps {
//     experience: ExperienceType;
//     isLeft: boolean;
// }
//
// export const CardExperience: React.FC<CardExperienceProps> = ({ experience, isLeft }) => {
//     return (
//         <div className={`${styles.cardExperienceContainer} ${isLeft ? styles.left : ''}`}>
//             <div className={styles.circle}>{experience.startYear}</div>
//             <div className={styles.card}>
//                 <h2>{experience.jobTitle}</h2>
//                 <p>{experience.company} {`(${experience.startYear} - ${experience.endYear ? experience.endYear : "atualmente"})`}</p>
//                 <p>{experience.description}</p>
//                 <ul>
//                     {experience.technologies.map((technology) => (
//                         <li key={technology.id}>{technology.technology}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

import styles from "./CardExperience.module.css";
import { ExperienceType } from "@/app/components/Sections/experience/Experience";
import React from "react";

interface CardExperienceProps {
    experience: ExperienceType;
    isLeft: boolean;
}

export const CardExperience: React.FC<CardExperienceProps> = ({ experience, isLeft }) => {
    return (
        <div className={`${styles.cardExperienceContainer} ${isLeft ? styles.left : ''}`}>
            <div className={styles.circle}>{experience.startYear}</div>
            <div className={styles.card}>
                <h2>{experience.jobTitle}</h2>
                <p>{experience.company} {`(${experience.startYear} - ${experience.endYear ? experience.endYear : "atualmente"})`}</p>
                <p>{experience.description}</p>
                <ul>
                    {experience.technologies.map((technology) => (
                        <li key={technology.id}>{technology.technology}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
