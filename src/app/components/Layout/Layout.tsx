import styles from "./index.module.css";
import React from "react";


export enum Position {
    STATIC = "static",
    FIXED = "fixed",
    ABSOLUTE = "absolute",
    RELATIVE = "relative",
    STICKY = "sticky",
}

export enum MarginY {
    MY0 = "my-0",
    MY1 = "my-1",
    MY2 = "my-2",
    MY3 = "my-3",
    MY4 = "my-4",
    MY5 = "my-5",
    MY6 = "my-6",
    My24 = "my-24",

}

export enum MarginX {
    MX0 = "mx-0",
    MX1 = "mx-1",
    MX2 = "mx-2",
    MX3 = "mx-3",
    MX4 = "mx-4",
    MX5 = "mx-5",
    MX6 = "mx-6",
    MX24 = "mx-24",
}
export enum TextColor {
    TEXT_WHITE = "text-white",
    TEXT_BLACK = "text-black",
}
type LayoutProps = {
    children?: React.ReactNode; // Adicione as props necessárias aqui
    sectionTitle?: string;
    sectionSubTitle?: string;
    position?: Position;
    marginBottom?: string | number;
    marginTop?: string | number;
    textColor?: TextColor;
    id?: string;
};

export const Layout = ({children,textColor,id, sectionTitle, marginBottom, marginTop, position, sectionSubTitle}: LayoutProps) => {
    return (
        <div id={id} className={`${styles.layoutContainer} ${position} ${textColor}`} style={{
            marginTop: marginTop ? marginTop : "",
            marginBottom: marginBottom ? marginBottom : "",
        }}>
            {sectionTitle && <h2 className={"text-center text-2xl 2xl:text-4xl mb-4"}>{sectionTitle}</h2>}
            {sectionSubTitle && <h3 className={"text-sm lg:text-md 2xl:text-2xl text-center mb-8"}>{sectionSubTitle}</h3>}
            {children}
        </div>

    );
}
