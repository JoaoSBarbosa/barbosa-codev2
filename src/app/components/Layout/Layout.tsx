import styles from "./index.module.css";
import React from "react";

type LayoutProps = {
    children?: React.ReactNode; // Adicione as props necessárias aqui
};

export const Layout =({ children }: LayoutProps)=> {
    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    );
}
