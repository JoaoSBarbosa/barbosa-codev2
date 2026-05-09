export interface EducationItem {
    id: number;
    title: string;
    organization: string;
    period: string;
    icon: IconEducation
}

export type IconEducation = "graduation" | "award" | "briefcaseBusiness"