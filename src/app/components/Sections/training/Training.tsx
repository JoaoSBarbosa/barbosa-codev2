import {Layout} from "@/app/components/Layout/Layout";
import React from "react";
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {TrainingData} from "@/app/data/training/TrainingData";
import {CardTraining} from "@/app/components/Cards/cardTraining/CardTraining";

export const Training = () => {


    return (
        <RootSection isDarkBackgroundColor={true}>
            <Layout>

                <h2 className={"text-center text-3xl mb-4"} id={"training"}>Cursos e Formações</h2>
                <h3 className={"text-center mb-8"}>Ensino superior, Técnico e formação continua</h3>

                <ul className={"grid grid-cols-3 gap-4"}>
                    {TrainingData.map((training) => (
                        <li key={training.id}>
                            <CardTraining cardData={training}/>
                        </li>
                    ))}
                </ul>
            </Layout>
        </RootSection>

    )
}