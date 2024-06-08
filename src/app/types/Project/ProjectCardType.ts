import {TechType} from "@/app/types/Tech/TechType";

export type ProjectType ={
    id: number;
    coverImage: string;
    techCategory?: number;
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
 1 - frontend
 2 - backend
 3 - fullstack


 */
type TechCategoryType ={
    id: number;
    category: string;
}