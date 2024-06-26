// import Header from "@/app/components/Sections/header/Header";
// import {About} from "@/app/components/Sections/about/About";
// import {Skill} from "@/app/components/Sections/skill/Skill";
// import {Training} from "@/app/components/Sections/training/Training";
// import {Experience} from "@/app/components/Sections/experience/Experience";
// import {RootSection} from "@/app/components/RootSecttion/RootSection";
// import {BackgroundLayout} from "@/app/components/BackgroudLayout/BackgroundLayout";
//
//
// export default function Home() {
//     return (
//         <RootSection>
//             <Header/>
//             {/*<About/>*/}
//             <BackgroundLayout>
//                 <Skill/>
//                 <Training/>
//             </BackgroundLayout>
//
//             <Experience/>
//         </RootSection>
//     );
// }

"use client";
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import React, {ReactNode, useEffect, useRef} from "react";
import Header from "@/app/components/Sections/header/Header";
import {BackgroundLayout} from "@/app/components/BackgroudLayout/BackgroundLayout";
import {Skill} from "@/app/components/Sections/skill/Skill";
import {Training} from "@/app/components/Sections/training/Training";
import {Experience} from "@/app/components/Sections/experience/Experience";
import {motion, useAnimation} from 'framer-motion';
import {SectionWrapper} from "@/app/components/Animations/SectionWrapper/SectionWrapper";
import {Project} from "@/app/components/Sections/Project/Project";
import {ContactForm} from "@/app/components/Sections/contact/ContactForm";
import {Footer} from "@/app/components/Sections/footer/Footer";
import ScrollToTop from "@/app/components/ScrollToTop/ScrollToTop";
import {BackgroundLayoutStart} from "@/app/components/BackgroudLayoutStar/BackgroundLayoutStart";

export default function Home() {
    return (
        <RootSection>
            <Header/>
            <BackgroundLayout>
                <SectionWrapper>
                    <Skill/>
                </SectionWrapper>
                <SectionWrapper>
                    <Training/>
                </SectionWrapper>
            </BackgroundLayout>
            <SectionWrapper>
                <Experience/>
            </SectionWrapper>
            <SectionWrapper>
                <Project/>
            </SectionWrapper>
            <SectionWrapper>
                <ContactForm/>
            </SectionWrapper>
            <SectionWrapper>
                <Footer/>
            </SectionWrapper>
            <ScrollToTop/>
        </RootSection>
    );
}


