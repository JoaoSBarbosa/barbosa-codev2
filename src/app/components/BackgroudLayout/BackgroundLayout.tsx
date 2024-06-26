import styles from "./BackgroundLayout.module.css"
import React, {ReactNode} from "react";

interface BackgroundLayoutProps {
    children: ReactNode
}

export const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({children}) => {
    return (
        <div className={`${styles.bgGradient} 2xl:my-8`}>
            {children}
        </div>
    )
}