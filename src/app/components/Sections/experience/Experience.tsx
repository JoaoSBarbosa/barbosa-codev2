import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout, Position} from "@/app/components/Layout/Layout";
import {CardExperience} from "@/app/components/Cards/CardExperience/CardExperience";
import styles from "./Experience.module.css";
import {ExperienceList} from "@/app/data/experiene/ExperienceList";

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


export const Experience = () => {
    return (
        <RootSection isDarkBackgroundColor={false} >
            <Layout position={Position.RELATIVE}>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeline}></div>
                    {ExperienceList.map((experience, index) => (
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