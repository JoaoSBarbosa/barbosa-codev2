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

import React, {ReactNode} from 'react';
import styles from './BackgroundLayoutStart.module.css';

interface BackgroundLayoutProps {
    children: ReactNode;
}

export const BackgroundLayoutStart: React.FC<BackgroundLayoutProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};


