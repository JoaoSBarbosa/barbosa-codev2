import {ProjectType} from "@/app/types/Project/ProjectCardType";
import styles from './Modal.module.css';
import {useEffect} from "react";

interface ModalProps {
    project: ProjectType;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({onClose, project}) => {


    useEffect(() => {
        // Adiciona a classe no-scroll ao corpo quando o modal é aberto
        document.body.classList.add('no-scroll');

        // Remove a classe no-scroll ao corpo quando o modal é fechado
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={`${styles.modalContent} ${styles.neuralAnimation}`} onClick={(e) => e.stopPropagation()}>

                <button className={styles.closeButton} onClick={onClose}>x</button>

                <div className={styles.modalBody}>
                    <div className={styles.imageContainer}>
                        <img src={`/assets/project/${project.coverImage}`} alt={project.title}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className={"flex flex-wrap"}>
                            {project.technologies.map((tech) => {
                                return (
                                    <img key={tech.id} src={tech.tech} alt={tech.tech}
                                         className="h-5 w-5 2xl:h-8 2xl:w-8 mr-2"/>
                                );
                            })}
                        </div>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <button className="w-full 2xl:max-w-max mt-12 p-2 bg-purple-custom text-white rounded">Ver
                                Projeto
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}