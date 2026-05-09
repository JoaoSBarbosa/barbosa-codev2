import {ContactSection} from "@/sections/contact/contact-section";
import {ExperienceSection} from "@/sections/experience/ExperienceSection";
import {HeroSection} from "@/sections/hero/hero-section";
import {ProjectsSection} from "@/sections/projects/projects-section";
import {SkillsSection} from "@/sections/skills/skills-section";
import {AboutSection} from "@/sections/about/about-section";
import {EducationSection} from "@/sections/education/education-section";

export default function App() {
    return (

        <main id="conteudo">
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <EducationSection/>
            <ContactSection/>
        </main>

    );
}
