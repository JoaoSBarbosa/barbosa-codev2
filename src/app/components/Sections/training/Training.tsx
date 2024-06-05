import {Layout, MarginY} from "@/app/components/Layout/Layout";
import React from "react";
import {TrainingData} from "@/app/data/training/TrainingData";
import {CardTraining} from "@/app/components/Cards/cardTraining/CardTraining";
import styles from "./Training.module.css";

export const Training = () => {

    return (
        <Layout sectionTitle={"Ensino superior, Técnico e formação continua"} sectionSubTitle={"Ensino superior, Técnico e formação continua"}>

            <ul className={`${styles.TrainingContainer}`}>
                {TrainingData.map((training) => (
                    <li key={training.id}>
                        <CardTraining cardData={training}/>
                    </li>
                ))}
            </ul>
        </Layout>

    )
}