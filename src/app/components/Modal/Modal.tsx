import {ProjectType} from "@/app/types/Project/ProjectCardType";
import styles from './Modal.module.css'; // Importe o arquivo de estilos
interface ModalProps {
    project: ProjectType;
    onClose: () => void;

}

export const Modal: React.FC<ModalProps> = ({onClose, project}) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={`${styles.modalContent} ${styles.neuralAnimation}`} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>

                </button>
                <div className={styles.modalBody}>
                    <div className={styles.imageContainer}>
                        <img src={`/assets/project/${project.coverImage}`} alt={project.title}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className={"flex flex-wrap"}>
                            {project.technologies.map((tech) => {
                                const pathImage = `https://raw.githubusercontent.com/usuario/repositorio/main/assets/icons/${tech.tech}.svg`; // URL do GitHub
                                return (
                                    <img key={tech.id} src={tech.tech} alt={tech.tech} className="h-8 w-8 mr-2"/>
                                );
                            })}
                        </div>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <button className="mt-12 p-2 bg-purple-custom text-white rounded">Ver Projeto</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // <div className={`${styles.modalOverlay}`} onClick={onClose}>
        //     <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        //         <button className={styles.closeButton} onClick={onClose}>X</button>
        //         <img src={`/assets/project/${project.coverImage}`} alt={project.title}/>
        //         <h1>{project.title}</h1>
        //         <p>{project.description}</p>
        //         <div className={"flex flex-wrap"}>
        //             {project.technologies.map((tech) => {
        //                 // const pathImage = `https://raw.githubusercontent.com/usuario/repositorio/main/assets/icons/${tech.tech}.svg`; // URL do GitHub
        //                 return (
        //                     <img key={tech.id} src={tech.tech} alt={tech.tech} className="h-8 w-8 mr-2"/>
        //                 );
        //             })}
        //         </div>
        //         <a href={project.url} target="_blank" rel="noopener noreferrer">
        //             <button className="mt-4 p-2 bg-blue-500 text-white rounded">Ver Projeto</button>
        //         </a>
        //     </div>
        // </div>
    )
}