import {ProjectCard} from "../../shared/components/ProjectCard";
import {Section} from "../../shared/layout/section/Section";
// import {projects} from "@/data/portfolio";
import {SectionInfo} from "../../shared/layout/section/section-info";
import {projects, projectsSectionInfo} from "@/sections/projects/data/projects.data";
import {Button} from "../../shared/components/Button";
import {ArrowRight} from "lucide-react";

export function ProjectsSection() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <Section id="projetos" tone="light">
            <SectionInfo
                titleSize={"text-xl"}
                title={projectsSectionInfo.title}
                description={projectsSectionInfo.description}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Button href="/projects" variant="outline" size="lg">
                    Ver todos os projetos
                    <ArrowRight className="h-5 w-5"/>
                </Button>
            </div>
        </Section>
    );
}
