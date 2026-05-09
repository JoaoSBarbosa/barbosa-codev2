export type TimelineSide = "left" | "right";

export interface ExperienceItem {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
    side: TimelineSide;

    // preparado para backend futuro sem quebrar nada
    startDate?: string;
    endDate?: string | null;
}