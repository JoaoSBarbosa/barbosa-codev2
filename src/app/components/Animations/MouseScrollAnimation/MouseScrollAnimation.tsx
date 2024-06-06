import styles from './MouseScrollAnimation.module.css';
export const MouseScrollAnimation  = () =>{
    return (
        <div className={`${styles.mouseContainer}`}>
            <div className={`${styles.mouse}`}>
                <div className={`${styles.scroller}`}></div>
            </div>
            <span>Navegar para baixo</span>
        </div>
    )
}