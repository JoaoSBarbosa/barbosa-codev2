import {TemplateCard} from "@/app/components/Cards/TemplateCard/TemplateCard";
import styles from "./ProjectCard.module.css";
import {ProjectType} from "@/app/types/Project/ProjectCardType";
import {useEffect, useState} from "react";

interface ProjectCardProps {
    project: ProjectType
    onClick: (project: ProjectType) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project, onClick}) => {

    const [showProject, setShowProject] = useState<boolean>(false);
    const [showIcons, setShowIcons] = useState(false);

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const handleSelect = (project: ProjectType) => {
        setSelectedProject(project);
        setShowProject(true)
    }

    useEffect(() => {
        const handleResize = () => {
            setShowIcons(window.innerWidth < 800);
            console.log(showIcons)

        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    const handleShowIcons = () =>{

    }


    return (
        <div

            className={`${styles.ProjectCardContainer}`}

             onClick={() => onClick(project)}
             onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}>
            <div className={`${styles.ProjectCardTitleContainer}`}>
                <h1>{project.title}</h1>
            </div>
            <div className={`${styles.ProjectCardImgContainer}`}>
                <img src={`/assets/project/${project.coverImage}`} alt={project.coverImage}/>
            </div>

            <div className={`${styles.ProjectCardTechContainer} transition-all`}>
                {showIcons && project.technologies.map((tech) => (
                    <img key={tech.id} className={"h-6 w-6"} src={tech.tech} alt={`icon-${tech.tech}`}/>
                ))}
            </div>
        </div>
    );
}