import {TemplateCard} from "@/app/components/Cards/TemplateCard/TemplateCard";
import styles from "./ProjectCard.module.css";
import {ProjectType} from "@/app/types/Project/ProjectCardType";
import {useState} from "react";

interface ProjectCardProps {
    project: ProjectType
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {

    const [showDescription, setShowDescription] = useState<boolean>(false);

    return (
        <TemplateCard>

            <div className={`${styles.ProjectCardContainer}`}>

                <div className={`${styles.ProjectCardImgContainer}`}>
                    <img src={`/assets/project/${project.coverImage}`} alt={project.coverImage} />                </div>
                <div className={`${styles.ProjectCardTitleContainer}`}>
                    <h1>{project.title}</h1>
                </div>
                <div className={`${styles.ProjectCardTechContainer}`}>
                    {project.technologies.map((tech) => {
                        const pathImage = `/assets/icons/${tech.tech}.svg`
                        return (
                            <img className={"h-8 w-8"} src={pathImage} alt={''}/>
                        )
                    })}
                </div>
            </div>

            {showDescription &&
                <div className={"absolute"}>
                    <p>{project.description}</p>
                </div>

            }
        </TemplateCard>
    )
}