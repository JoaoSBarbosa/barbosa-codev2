import {TechType} from "@/app/types/Tech/TechType";

export type ProjectType ={
    id: number;
    coverImage: string;
    title: string;
    description: string;
    url: string;
    technologies: TechType[]
}