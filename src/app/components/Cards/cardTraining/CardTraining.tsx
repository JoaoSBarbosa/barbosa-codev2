"use client"
import {TrainingDataType} from "@/app/types/Training/TrainingDataType";
import React, {useState} from "react";

interface CardTrainingProps {
    cardData: TrainingDataType
}

export const CardTraining: React.FC<CardTrainingProps> = ({cardData}) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="
            flex h-56 min-w-80 flex-col justify-between p-4
            rounded-md bg-dark-gray border border-transparent
            transition-all duration-300 hover:shadow-lg hover:shadow-purple-custom hover:border-purple-custom"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={"flex flex-col gap-7"}>
                <span className={"uppercase text-sm"}>{cardData.level}</span>
                <h1 className={"text-xl"}>{cardData.course}</h1>

                {isHovered && (
                    <div className="flex gap-2">
                        {cardData.technologies.map((tech, index) => (
                            <img key={index} src={`/assets/icons/${tech}.svg`} alt={tech} className="w-6 h-6"/>
                        ))}
                    </div>
                )}
            </div>
            <span className={"text-sm"}>{cardData.institution}</span>
        </div>
    )
}