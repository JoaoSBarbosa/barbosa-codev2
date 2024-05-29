import Header from "@/app/components/Sections/header/Header";
import {About} from "@/app/components/Sections/about/About";
import {Skill} from "@/app/components/Sections/skill/Skill";


export default function Home() {
    return (
        <>
            <Header/>
            <About/>
            <Skill/>
        </>
    );
}
