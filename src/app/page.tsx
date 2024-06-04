import Header from "@/app/components/Sections/header/Header";
import {About} from "@/app/components/Sections/about/About";
import {Skill} from "@/app/components/Sections/skill/Skill";
import {Training} from "@/app/components/Sections/training/Training";
import {Experience} from "@/app/components/Sections/experience/Experience";


export default function Home() {
    return (
        <>
            <Header/>
            <About/>
            <Skill/>
            <Training/>
            <Experience/>
        </>
    );
}
