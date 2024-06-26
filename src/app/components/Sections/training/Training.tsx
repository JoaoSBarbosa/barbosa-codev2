import {Layout} from "@/app/components/Layout/Layout";
import React from "react";
import {TrainingData} from "@/app/data/training/TrainingData";
import {CardTraining} from "@/app/components/Cards/cardTraining/CardTraining";
import { motion } from 'framer-motion';
import defaultStyles from "../../../styles/cardDefaultStyles.module.css";

export const Training = () => {
    return (
        <Layout id={"training"} sectionTitle={"Formação"} sectionSubTitle={"Ensino superior, Técnico e formação continua"}>
            <motion.ul
                // className={styles.TrainingContainer}
                className={defaultStyles.container}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
                }}
            >
                {TrainingData.map((training) => (
                    <motion.li key={training.id} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <CardTraining cardData={training} />
                    </motion.li>
                ))}
            </motion.ul>
        </Layout>
    )
}