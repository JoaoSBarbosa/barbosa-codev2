
import React, {ReactNode} from "react";
import styles from "./TemplateCard.module.css";
interface TemplateCardProps {
    children: ReactNode
}
export const TemplateCard: React.FC<TemplateCardProps> = ({children}) =>{
    return (
        <div className={`${styles.CardContainer}`}>
            {children}
        </div>
    );
}