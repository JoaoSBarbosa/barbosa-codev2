import {Code2, Database, type LucideIcon, Wrench} from "lucide-react";
import {Badge} from "../../shared/components/Badge";
import {Section} from "../../shared/layout/section/Section";
import {technologyGroups} from "@/sections/skills/data/technology-groups.data";

const groupIcons: Record<string, LucideIcon> = {
    code: Code2,
    database: Database,
    wrench: Wrench,
};

export function SkillsSection() {
    return (
        <Section id="tecnologias" tone="dark">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">
                Tecnologias & Ferramentas
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                {technologyGroups.map((group) => {
                    const Icon = groupIcons[group.icon];

                    return (
                        <article
                            key={group.id}
                            className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary"/>
                            </div>
                            <h3 className="mb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>
        </Section>
    );
}
