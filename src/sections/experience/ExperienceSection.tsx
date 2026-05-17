import {ExperienceCard} from "./components/experience-card";
import {Section} from "../../shared/layout/section/Section";
import {experiences} from "./data/experiences.data";
import {MarginBottom, SectionTitle} from "../../shared/layout/section/title";

export function ExperienceSection() {
    return (
        <Section id="experiencia" tone="dark">

            <SectionTitle
                title={"Experiência Profissional"}
                marginBottom={MarginBottom.MB12}
                className={"text-center"}/>

            <div className="relative ">
                <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-border md:block"/>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={experience.position} index={index} {...experience} />
                ))}
            </div>
        </Section>
    );
}
