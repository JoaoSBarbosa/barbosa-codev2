import {Layout} from "@/app/components/Layout/Layout";
import styles from "./Footer.module.css";
import Link from "next/link";
import {MenuFooterLinksList} from "@/app/data/MenuLinksList";

export const Footer = () => {
    return (

        <footer className={"bg-dark-gray py-4"}>
            <Layout>
                <div className={`${styles.footerContainer} py-4  gap-8`}>

                    <div className={styles.footerLogo}>
                        <Link href="/">
                            <img src="/assets/img/logo.svg" className="mr-3" alt="Logo"/>
                        </Link>
                    </div>

                    <div className={`${styles.footerDesc}`}>
                        <h3 className="text-2xl text-white font-bold mb-4">Mais sobre mim</h3>
                        <div className={"flex flex-col gap-2"}>
                            <p className={`text-xl text-gray-400 `}>
                                Desenvolvedor fullstack júnior com foco em Java, Spring, Next.js e
                                React. Apaixonado por desenvolvimento web, busco constantemente novas
                                habilidades em tecnologias como Node.js, C# e Angular para criar
                                soluções inovadoras.
                            </p>
                            <figure>
                                <img src="/assets/header-img.svg" className={`mr-3 h-14 ${styles.floatAnimation}`} alt="Logo"/>
                            </figure>
                        </div>
                    </div>

                    <div className={`${styles.footerLink}`}>
                        <h3 className="text-2xl text-white font-bold mb-4">Links Rápidos</h3>
                        <ul className="text-gray-400">
                            {MenuFooterLinksList.map((link) => (
                                <li key={link.id} className={"mb-2 text-xl hover:text-purple-custom transition-all"}>
                                    <a href={link.href}>{link.value}</a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className={`${styles.footerIcons} `}>
                        <h3 className="text-2xl text-white font-bold mb-4">Siga-me</h3>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/devjbarbosa/" target="_blank"
                               className="text-gray-400 hover:scale-110 transition-all">
                                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10"/>
                            </a>
                            <a href="https://github.com/JoaoSBarbosa" target="_blank"
                               className="text-gray-400 hover:scale-110 transition-all">
                                <img src="/assets/icons/github.svg" alt="GitHub" className="w-10 h-10"/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} Barbosa Code - Todos os direitos reservados.
                    </p>
                    <p className={`text-center text-gray-400 ${styles.credits}`}>
                        Desenvolvido por
                        <a href="https://www.linkedin.com/in/devjbarbosa/" target={'_blank'}>
                            <span className={"mx-1"}>João Barbosa</span>
                        </a>
                    </p>
                </div>
            </Layout>
        </footer>

    )
}