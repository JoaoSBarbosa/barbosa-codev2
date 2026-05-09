import {ArrowLeft} from "lucide-react";
import {Button} from "../../shared/components/Button";
import {ProjectCard} from "../../shared/components/ProjectCard";
import {Section} from "../../shared/layout/section/Section";
import {projects} from "@/sections/projects/data/projects.data";

export function ProjectsPage() {
    return (
        <main>
            <Section className="bg-gradient-to-b from-background to-muted/20">
                <div className="max-w-4xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                        Projetos
                    </p>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                        Projetos completos, estudos e solucoes desenvolvidas
                    </h1>
                    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        Uma area dedicada para reunir todos os projetos sem deixar a home
                        carregada. Aqui entram trabalhos em producao, estudos tecnicos,
                        experimentos e solucoes criadas ao longo da carreira.
                    </p>
                    <Button href="/#projetos" variant="outline" size="lg">
                        <ArrowLeft className="h-5 w-5"/>
                        Voltar aos destaques
                    </Button>
                </div>
            </Section>

            <Section className="bg-background">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </Section>
        </main>
    );
}
