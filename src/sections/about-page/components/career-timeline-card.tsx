import { BriefcaseBusiness, MapPin } from "lucide-react";
import type { CareerMoment } from "@/sections/about-page/types/about-page.type";

type CareerTimelineCardProps = {
  moment: CareerMoment;
  index: number;
};

export function CareerTimelineCard({ moment, index }: CareerTimelineCardProps) {
  return (
    <article className="relative rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-primary">
              {String(index + 1).padStart(2, "0")} · {moment.period}
            </p>
            <h2 className="text-2xl font-bold text-foreground">{moment.role}</h2>
            <p className="mt-1 text-base font-medium text-foreground/80">
              {moment.company}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground md:mt-1">
          <MapPin className="h-4 w-4" />
          <span>
            {moment.location} · {moment.mode}
          </span>
        </div>
      </div>

      <p className="mb-5 leading-relaxed text-muted-foreground">{moment.summary}</p>

      <ul className="mb-5 space-y-3">
        {moment.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {moment.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
