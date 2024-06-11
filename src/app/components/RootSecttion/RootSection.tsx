import {ReactNode} from "react";
import styles from "./RootSectionProps.module.css"
interface RootSectionProps {
    isDarkBackgroundColor?: boolean;
    isBottomBoxShadow?: boolean;
    isShadowContainer?: boolean;
    children: ReactNode;
}

export const RootSection = ({isDarkBackgroundColor,isBottomBoxShadow,isShadowContainer, children}: RootSectionProps) => {

    return (
        <section
            className={`${styles.rootContainer} `}>
            <div className={`${styles.galaxyBackground}`}>
                {[...Array(50)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.star}`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.comet}`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `-${Math.random()}s`,
                        }}
                    />
                ))}
            </div>


            {children}
        </section>
    )
}