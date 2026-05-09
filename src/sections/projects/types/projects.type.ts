export interface Projects {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[],
    githubUrl?: string;
    demoUrl?: string;
}