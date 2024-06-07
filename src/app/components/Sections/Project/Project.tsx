import {Layout, TextColor} from "@/app/components/Layout/Layout";
import {ProjectList} from "@/app/data/Project/ProjectList";
import {ProjectCard} from "@/app/components/Cards/ProjectsCard/ProjectCard";

export const Project = () => {
    return (
        <Layout marginTop={100} sectionTitle={"Projetos"} textColor={TextColor.TEXT_WHITE} sectionSubTitle={"Projetos profisionais, Projetos pessoais, Estudos"}>
         <div className={"grid grid-cols-3 gap-10"}>
             {ProjectList.map((projec) => (
                 <ProjectCard project={projec}/>
             ))}
         </div>
        </Layout>
    )
}