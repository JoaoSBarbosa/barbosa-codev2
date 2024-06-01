import {Layout} from "@/app/components/Layout/Layout";
import React from "react";
import {RootSection} from "@/app/components/RootSecttion/RootSection";

export const Training = () => {


    return (
        <RootSection isDarkBackgroundColor={true} >
            <Layout>

                <h2 className={"text-center text-3xl mb-4"}>Cursos e Formações</h2>
                <h3 className={"text-center "}>Ensino superior, Técnico e formação continua</h3>
            </Layout>
        </RootSection>

    )
}