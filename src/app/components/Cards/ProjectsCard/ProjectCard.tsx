import {TemplateCard} from "@/app/components/Cards/TemplateCard/TemplateCard";
import styles from "./ProjectCard.module.css";
import {ProjectType} from "@/app/types/Project/ProjectCardType";
import {useState} from "react";

interface ProjectCardProps {
    project: ProjectType
    onClick: (project: ProjectType) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project,onClick}) => {

    const [showProject, setShowProject] = useState<boolean>(false);

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const handleSelect = (project: ProjectType) =>{
        setSelectedProject(project);
        setShowProject(true)
    }

    return (
        <TemplateCard>

            <div className={`${styles.ProjectCardContainer}`} onClick={()=> onClick(project)}>

                <div className={`${styles.ProjectCardImgContainer}`}>
                    <img src={`/assets/project/${project.coverImage}`} alt={project.coverImage} />                </div>
                <div className={`${styles.ProjectCardTitleContainer}`}>
                    <h1>{project.title}</h1>
                </div>
                {/*<div className={`${styles.ProjectCardTechContainer}`}>*/}
                {/*    {project.technologies.map((tech) => {*/}
                {/*        const pathImage = `/assets/icons/${tech.tech}.svg`*/}
                {/*        return (*/}
                {/*            <img className={"h-8 w-8"} src={pathImage} alt={''}/>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>

            {/*{showProject &&*/}
            {/*    <div className={"absolute w-screen h-screen flex items-center justify-center"}>*/}
            {/*        <div className={"w-96"}>*/}
            {/*            <h1>{selectedProject?.title}</h1>*/}
            {/*            <div>*/}
            {/*                <img src={`/assets/project/${selectedProject?.coverImage}`} alt={selectedProject?.title}/>*/}
            {/*            </div>*/}
            {/*            <p>{project.description}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*}*/}
        </TemplateCard>
    )
}