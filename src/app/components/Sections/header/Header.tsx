import {Menu} from "../../header/menu";
import {Layout} from "@/app/components/Layout/Layout";
import {Banner} from "@/app/components/header/banner";

export default function Header(){
    return(
       <Layout>
           <Menu/>
           <Banner/>
       </Layout>
    )
}