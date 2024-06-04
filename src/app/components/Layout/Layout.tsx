import styles from "./index.module.css";
import React from "react";


export enum Position {
    STATIC = "static",
    FIXED = "fixed",
    ABSOLUTE = "absolute",
    RELATIVE = "relative",
    STICKY = "sticky",

}

type LayoutProps = {
    children?: React.ReactNode; // Adicione as props necessárias aqui
    sectionTitle?: string;
    sectionSubTitle?: string;
    position?: Position;
};

export const Layout = ({children, sectionTitle,position, sectionSubTitle}: LayoutProps) => {
    return (
        <div className={`${styles.layoutContainer} ${position}`}>
            {sectionTitle && <h2 className={"text-center text-3xl mb-4"}>{sectionTitle}</h2>}
            {sectionSubTitle && <h3 className={"text-center mb-8"}>{sectionSubTitle}</h3>}
            {children}
        </div>
    );
}
