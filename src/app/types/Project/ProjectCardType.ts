import {TechType} from "@/app/types/Tech/TechType";

export type ProjectType ={
    id: number;
    coverImage: string;
    techCategory?: number;
    projectCategory?: number;
    imagesExample?: ImagesExampleType[];
    title: string;
    description: string;
    url: string;
    technologies: TechType[]
}

type ImagesExampleType = {
    id: number;
    imageUrl: string,
}

/*
Tec categoria
 1 - frontend
 2 - backend
 3 - fullstack
 */
type TechCategoryType ={
    id: number;
    category: string;
}

/*
Projeto categoria
 1 - pessoal
 2 - profisional
 2 - faculdade
 */
type ProjectCategoryType ={
    id: number;
    category: string;
}