//
//
// "use client";
// import {Layout, TextColor} from "@/app/components/Layout/Layout";
// import {ProjectList} from "@/app/data/Project/ProjectList";
// import {ProjectCard} from "@/app/components/Cards/ProjectsCard/ProjectCard";
// import {useState} from "react";
// import {ProjectType} from "@/app/types/Project/ProjectCardType";
// import {Modal} from "@/app/components/Modal/Modal";
// import styles from "./Project.module.css";
// import {EmptyListMessage} from "@/app/components/Display/EmptyListMessage";
// import {motion} from 'framer-motion';
//
// export const Project = () => {
//     const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
//     const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>("");
//     const [techCategoryFilter, setTechCategoryFilter] = useState<string>("");
//
//     const handleCardClick = (project: ProjectType) => {
//         setSelectedProject(project);
//     };
//
//     const closeModal = () => {
//         setSelectedProject(null);
//     };
//
//     const filteredProjects = ProjectList.filter((project) => {
//         const matchesProjectCategory = projectCategoryFilter ? project?.projectCategory?.toString() === projectCategoryFilter : true;
//         const matchesTechCategory = techCategoryFilter ? project?.techCategory?.toString() === techCategoryFilter : true;
//         return matchesProjectCategory && matchesTechCategory;
//     });
//
//     return (
//         <Layout
//             marginTop={100}
//             sectionTitle={"Projetos"}
//             textColor={TextColor.TEXT_WHITE}
//             sectionSubTitle={"Projetos profissionais, Projetos pessoais, Estudos"}
//         >
//             <motion.ul
//                 // className={styles.projectContent}
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                     hidden: {opacity: 0, y: 50},
//                     visible: {opacity: 1, y: 0, transition: {staggerChildren: 0.3}}
//                 }}
//             >
//
//                 <div className={styles.filterContainer}>
//                     <select className={`${styles.filterDropdown}`} value={projectCategoryFilter} onChange={(e) => setProjectCategoryFilter(e.target.value)}>
//                         <option value="">Todos os Projetos</option>
//                         <option value="1">Pessoais</option>
//                         <option value="2">Profissionais</option>
//                         <option value="3">Escola/Faculdade</option>
//                     </select>
//                     <select className={`${styles.filterDropdown} bg-purple-custom`} value={techCategoryFilter} onChange={(e) => setTechCategoryFilter(e.target.value)}><option value="">Todas as Tecnologias</option>
//                         <option value="1">Frontend</option>
//                         <option value="2">Backend</option>
//                         <option value="3">Fullstack</option>
//                     </select>
//                 </div>
//                 {filteredProjects.length > 0 ? (
//                     <div className={"border border-red-500"}>
//                         <ul className={`${styles.projectContent} gap-10`}>
//                             {filteredProjects.map((project) => (
//                                 <motion.li key={project.id}
//                                            variants={{hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}}>
//
//                                     <ProjectCard
//                                         key={project.id}
//                                         project={project}
//                                         onClick={() => handleCardClick(project)}
//                                     />
//                                 </motion.li>
//                             ))}
//                         </ul>
//                         {selectedProject && <Modal project={selectedProject} onClose={closeModal}/>}
//                     </div>
//                 ) : (
//                     <EmptyListMessage message="Nenhum projeto encontrado."/>)}
//
//             </motion.ul>
//         </Layout>
//     );
// };


"use client";
import {Layout, TextColor} from "@/app/components/Layout/Layout";
import {ProjectList} from "@/app/data/Project/ProjectList";
import {ProjectCard} from "@/app/components/Cards/ProjectsCard/ProjectCard";
import {useState} from "react";
import {ProjectType} from "@/app/types/Project/ProjectCardType";
import {Modal} from "@/app/components/Modal/Modal";
import styles from "./Project.module.css";
import styles2 from "../training/Training.module.css";
import defaultStyles from "../../../styles/cardDefaultStyles.module.css";
import {EmptyListMessage} from "@/app/components/Display/EmptyListMessage";
import {motion} from 'framer-motion';

export const Project = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>("");
    const [techCategoryFilter, setTechCategoryFilter] = useState<string>("");

    const handleCardClick = (project: ProjectType) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const filteredProjects = ProjectList.filter((project) => {
        const matchesProjectCategory = projectCategoryFilter ? project?.projectCategory?.toString() === projectCategoryFilter : true;
        const matchesTechCategory = techCategoryFilter ? project?.techCategory?.toString() === techCategoryFilter : true;
        return matchesProjectCategory && matchesTechCategory;
    });

    return (
        <Layout
            id={"projects"}
            marginTop={100}
            sectionTitle={"Projetos"}
            textColor={TextColor.TEXT_WHITE}
            sectionSubTitle={"Projetos profissionais, Projetos pessoais, Estudos"}
        >


            <div className={styles.filterContainer}>
                <select className={`${styles.filterDropdown} bg-deep-gray`} value={projectCategoryFilter}
                        onChange={(e) => setProjectCategoryFilter(e.target.value)}>
                    <option value="">Todos os Projetos</option>
                    <option value="1">Pessoais</option>
                    <option value="2">Profissionais</option>
                    <option value="3">Escola/Faculdade</option>
                </select>
                <select className={`${styles.filterDropdown} bg-deep-gray`} value={techCategoryFilter}
                        onChange={(e) => setTechCategoryFilter(e.target.value)}>
                    <option value="">Todas as Tecnologias</option>
                    <option value="1">Frontend</option>
                    <option value="2">Backend</option>
                    <option value="3">Fullstack</option>
                </select>
            </div>
            <motion.ul
                className={defaultStyles.container}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0, transition: {staggerChildren: 0.3}}
                }}
            >
                {filteredProjects.length > 0 ? (

                    <>
                        {filteredProjects.map((project) => (
                            <motion.li key={project.id}
                                       variants={{hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}}>

                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleCardClick(project)}
                                />
                            </motion.li>
                        ))}

                        {selectedProject && <Modal project={selectedProject} onClose={closeModal}/>}
                    </>

                ) : (
                    <EmptyListMessage message="Nenhum projeto encontrado."/>)
                }

            </motion.ul>
        </Layout>
    );
};
