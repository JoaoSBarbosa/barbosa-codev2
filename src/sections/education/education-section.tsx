import {Award, BriefcaseBusiness, GraduationCap, type LucideIcon} from "lucide-react";
import {Section} from "../../shared/layout/section/Section";
import {educationItems} from "@/sections/education/data/education-items.data";
import {MarginBottom, SectionTitle} from "../../shared/layout/section/title";

const educationIcons: Record<string, LucideIcon> = {
    graduation: GraduationCap,
    award: Award,
    briefcaseBusiness: BriefcaseBusiness
};

export function EducationSection() {
    return (
        <Section id="formacao" className="bg-background">

            <SectionTitle title={"Formação & Certificações"} marginBottom={MarginBottom.MB12}/>
            <div className="grid  gap-6  md:grid-cols-2 lg:grid-cols-3">
                {educationItems.map((item) => {
                    const Icon = educationIcons[item.icon];

                    return (
                        <article
                            key={item.title}
                            className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary"/>
                            </div>
                            <h3 className="mb-2">{item.title}</h3>
                            <p className="mb-2 text-sm text-muted-foreground">
                                {item.organization}
                            </p>
                            <p className="text-sm text-muted-foreground">{item.period}</p>
                        </article>
                    );
                })}
            </div>
        </Section>
    );
}
