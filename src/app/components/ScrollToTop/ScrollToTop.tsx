import { useState, useEffect } from 'react';
import styles from "./ScrollToTop.module.css";
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Adiciona um event listener para controlar a visibilidade da seta
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) { // Altere este valor conforme necessário
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Limpa o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
            <img src={"/assets/icons/arrowUp.svg"} className={"fill-amber-500"}/>
        </div>
    );
}
