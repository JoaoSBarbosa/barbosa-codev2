"use client";
import {useEffect, useState} from 'react';
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout} from "@/app/components/Layout/Layout";
import styles from "./Banner.module.css";

export const Banner = () => {
    const [currentLoopIndex, setCurrentLoopIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [displayedText, setDisplayedText] = useState<string>('');
    const [typingSpeed, setTypingSpeed] = useState<number>(100 - Math.random() * 50); // Velocidade de digitação aumentada
    const [charIndex, setCharIndex] = useState<number>(1);
    const rotatingTextOptions: string[] = ["Backend Developer ", "Frontend Developer", "Database"];
    const typingInterval: number = 1000; // Intervalo entre cada loop de texto reduzido

    useEffect(() => {
        const ticker = setInterval(() => {
            updateText();
        }, typingSpeed);

        return () => {
            clearInterval(ticker);
        };
    }, [displayedText]);

    const updateText = () => {
        const currentIndex = currentLoopIndex % rotatingTextOptions.length;
        const fullText = rotatingTextOptions[currentIndex];
        const updatedText = isDeleting
            ? fullText.substring(0, displayedText.length - 1)
            : fullText.substring(0, displayedText.length + 1);

        setDisplayedText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prevSpeed => prevSpeed / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setCharIndex(prevIndex => prevIndex - 1);
            setTypingSpeed(typingInterval);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setCurrentLoopIndex(currentLoopIndex + 1);
            setCharIndex(1);
            setTypingSpeed(100 - Math.random() * 50); // Reiniciar com velocidade rápida
        } else {
            setCharIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div className="flex text-gray-300 flex-col items-center">

                <div className={`${styles.introduction} text-white max-w-screen-xl mx-auto`}>
                    <div className={`${styles.introductionContent}`}>
                        <div className={"flex flex-col justify-between mb-6 "}>
                            <h1>
                                Olá, eu sou o João Barbosa
                                <span className={"text-purple-custom rounded-full"}>.</span>
                            </h1>


                            <h2 className={"text-2xl text-start text-purple-gray-custom"}>
                                <span
                                    className="txt-rotate"
                                    data-period="1000"
                                    data-rotate='[ "Backend Developer ", "Frontend Developer", "Database" ]'
                                >
                                    <span className="wrap">{displayedText}</span>
                                </span>
                                <span className={"font-bold"}>{" | "}</span>
                            </h2>
                        </div>


                        <p className={""}>
                            Desenvolvedor Full Stack Júnior apaixonado por criar soluções web inovadoras.
                            Minhas habilidades abrangem o uso de tecnologias como Java, Spring, SQL,
                            JavaScript e React. Estou comprometido em oferecer resultados excepcionais
                            enquanto continuo a aprimorar minhas habilidades no desenvolvimento de software.
                        </p>
                    </div>
                    <div className={`${styles.introductionImage}`}>
                        <img
                            src={"/assets/img/barbosa.png"}
                            width={500}
                            className={`${styles.image}`}
                            alt={"João Barbosa, desenvolvedor Full Stack Júnior, sorrindo com óculos de grau e camiseta social."}
                        />
                    </div>
                </div>

        </div>

    );
};