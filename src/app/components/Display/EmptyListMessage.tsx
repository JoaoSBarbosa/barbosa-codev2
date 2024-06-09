// import styles from "./EmptyListMessage.module.css"
//
interface DisplayMessageProps {
    message: string;
}
// export const EmptyListMessage: React.FC<DisplayMessageProps> = ({message}) =>{
//     return(
//         <div className={`${styles.container}`}>
//             <div className={styles.message}>{message}</div>
//         </div>
//     )
// }


import React from "react";
import styles from "./EmptyListMessage.module.css";

export const EmptyListMessage: React.FC<DisplayMessageProps> = ({ message }) => {
    return (
        <div className={`${styles.container} ${styles.fadeIn}`}>
            <img src="./assets/notfound2.gif" alt="animação not found" className={"w-16 2xl:w-28"}/>
            <div className={styles.message}>{message}</div>
        </div>
    );
};

