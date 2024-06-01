"use client";
import {useEffect, useState} from 'react';
import {RootSection} from "@/app/components/RootSecttion/RootSection";
import {Layout} from "@/app/components/Layout/Layout";

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
        <div className="flex text-gray-300 flex-col items-center justify-center pt-16 pb-2 ">
            <div className={"w-full h-14 mb-16"}>
                <h1 className={"text-4xl md:text-5xl text-center"}>
                    <span
                        className="txt-rotate"
                        data-period="1000"
                        data-rotate='[ "Backend Developer ", "Frontend Developer", "Database" ]'
                    >
                        <span className="wrap">{displayedText}</span>
                    </span>
                    {" | "}
                </h1>
            </div>
            <div>
                <h2 className={"text-xl md:break-all text-balance max-w-4xl text-center"}>
                    Desenvolvedor Full Stack dedicado por desenvolver sistemas e criar soluções eficientes
                </h2>
            </div>
            <div>
                <img
                    src="/assets/img/barbosa.png"
                    alt="João Barbosa"
                    className="object-cover rounded-full h-96"
                />
            </div>
        </div>

    );
};