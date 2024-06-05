import {Menu} from "../../header/menu";
import {Layout} from "@/app/components/Layout/Layout";
import {Banner} from "@/app/components/header/banner";
import {RootSection} from "@/app/components/RootSecttion/RootSection";

export default function Header() {
    return (
        <RootSection>

            <Layout>
               <div className={"flex flex-col gap-32 mb-20"}>
                   <Menu/>
                   <Banner/>
               </div>
            </Layout>
        </RootSection>

    )
}