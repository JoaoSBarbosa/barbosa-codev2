import React from "react";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import {Badge} from "../../../shared/components/Badge";
import {GithubIcon} from "@/shared/components/icons/brand-icons";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export function ProjectCard({
                                title,
                                description,
                                image,
                                technologies,
                                githubUrl,
                                demoUrl
                            }: ProjectCardProps) {
    return (
        <article
            className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-200 hover:shadow-xl">
            <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    quality={72}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>

            <div className="p-6">
                <h3 className="mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-3">
                    {githubUrl ? (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`Abrir código do projeto ${title}`}
                        >
                            <GithubIcon className="w-4 h-4"/>
                            Código
                        </a>
                    ) : null}
                    {demoUrl ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`Abrir demonstração do projeto ${title}`}
                        >
                            <ExternalLink className="w-4 h-4"/>
                            Demo
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
