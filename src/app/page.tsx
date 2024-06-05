import Header from "@/app/components/Sections/header/Header";
import {About} from "@/app/components/Sections/about/About";
import {Skill} from "@/app/components/Sections/skill/Skill";
import {Training} from "@/app/components/Sections/training/Training";
import {Experience} from "@/app/components/Sections/experience/Experience";
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {BackgroundLayout} from "@/app/components/BackgroudLayout/BackgroundLayout";


export default function Home() {
    return (
        <RootSection>
            <Header/>
            {/*<About/>*/}
            <BackgroundLayout>
                <Skill/>
                <Training/>
            </BackgroundLayout>

            <Experience/>
        </RootSection>
    );
}
