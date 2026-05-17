import React from "react";
import {Briefcase} from "lucide-react";

interface ExperienceCardProps {
    company: string;
    position: string;
    period: string;
    description: string;
    index: number;
    side: 'left' | 'right';
}

export function ExperienceCard({
                                   company,
                                   position,
                                   period,
                                   description,
                                   index,
                                   side
                               }: ExperienceCardProps) {
    const isLeft = side === "left";

    return (
        <article
            className={`relative mb-12 last:mb-0 flex flex-col gap-4 md:mb-16 md:items-start md:gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <div className="w-full flex-1 md:max-w-[calc(50%-2rem)]">
                <div
                    className="rounded-lg border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                        <div
                            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-5 h-5 text-primary"/>
                        </div>

                        <div className="flex-1">
                            <h3 className="mb-1">{position}</h3>
                            <p className="text-sm text-muted-foreground">{company}</p>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>

                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
            {period}
          </span>
                </div>
            </div>

            <div className="relative hidden flex-shrink-0 md:block">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20"/>
            </div>

            <div className="hidden md:block flex-1 md:max-w-[calc(50%-2rem)]"/>
        </article>
    );
}
