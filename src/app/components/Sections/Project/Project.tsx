"use client";
import {Layout, TextColor} from "@/app/components/Layout/Layout";
import {ProjectList} from "@/app/data/Project/ProjectList";
import {ProjectCard} from "@/app/components/Cards/ProjectsCard/ProjectCard";
import {useState} from "react";
import {ProjectType} from "@/app/types/Project/ProjectCardType";
import {Modal} from "@/app/components/Modal/Modal";
import styles from "./Project.module.css";

export const Project = () => {

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const handleCardClick = (project: ProjectType) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null);
    };
    return (
        <Layout marginTop={100} sectionTitle={"Projetos"} textColor={TextColor.TEXT_WHITE} sectionSubTitle={"Projetos profisionais, Projetos pessoais, Estudos"}>
            <div className={"flex justify-between"}>
                <div className={`${styles.projectContent}  gap-10`}>
                    {ProjectList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => handleCardClick(project)}/>
                    ))}
                </div>

                {selectedProject && (
                    <Modal project={selectedProject} onClose={closeModal} />
                )}

            </div>
        </Layout>
    )
}