import {ReactNode} from "react";
import styles from "./RootSectionProps.module.css"
interface RootSectionProps {
    isDarkBackgroundColor?: boolean;
    isBottomBoxShadow?: boolean;
    children: ReactNode;
}

export const RootSection = ({isDarkBackgroundColor,isBottomBoxShadow, children}: RootSectionProps) => {

    return (
        <section className={`${isBottomBoxShadow && styles.bgContainer} ${isDarkBackgroundColor ? "bg-deep-gray text-white" : ""} py-8`}>
            {children}
        </section>
    )
}