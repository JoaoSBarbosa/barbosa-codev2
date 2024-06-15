// import styles from "./BackgroundLayoutStart.module.css"
// import React, {ReactNode} from "react";
//
// interface BackgroundLayoutProps {
//     children: ReactNode
// }
//
// export const BackgroundLayoutStart: React.FC<BackgroundLayoutProps> = ({children}) => {
//     return (
//         <div className={`${styles.bgGradient} 2xl:my-8`}>
//             <div className={styles.stars}></div>
//
//             {children}
//         </div>
//     )
// }

import React, { ReactNode } from 'react';
import styles from './BackgroundLayoutStart.module.css';

interface BackgroundLayoutProps {
    children: ReactNode;
}

export const BackgroundLayoutStart: React.FC<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.starsContainer}>
                {/* Estrelas */}
                <div className={`${styles.star} ${styles.star1}`}/>
                <div className={`${styles.star} ${styles.star2}`}/>
                <div className={`${styles.star} ${styles.star3}`}/>
                <div className={`${styles.star} ${styles.star4}`}/>
                <div className={`${styles.star} ${styles.star5}`}/>
                <div className={`${styles.star} ${styles.star6}`}/>
                <div className={`${styles.star} ${styles.star7}`}/>
                <div className={`${styles.star} ${styles.star8}`}/>
                <div className={`${styles.star} ${styles.star9}`}/>
                {/* Cometa (estrela cadente) */}
                <div className={`${styles.comet} ${styles.comet1}`}/>
                <div className={`${styles.comet} ${styles.comet2}`}/>
                <div className={`${styles.comet} ${styles.comet3}`}/>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};


