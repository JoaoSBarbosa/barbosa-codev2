import {
  ArrowRight,
  Code2,
  Database,
  type LucideIcon,
  Wrench,
} from "lucide-react";
import { Section } from "@/shared/layout/section/Section";
import { competencies } from "@/sections/about/data/competencies.data";
import { Button } from "@/shared/components/Button";
import {Card} from "@/shared/components/ui/card";
import { aboutParagraphs } from "./data/competencies.data";

const competencyIcons: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  wrench: Wrench,
};

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-background">
      <div className="mx-auto ">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Sobre Mim</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6">
          <Button
            variant="outline"
            size="lg"
            href="/about"
            className="border-primary/40 text-primary shadow-sm hover:border-primary hover:bg-primary/10"
          >
            Conhecer trajetória
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-semibold">
            Principais Competências
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {competencies.map((item) => {
              const Icon = competencyIcons[item.icon];
              return (
                <Card className={"p-4"} key={item.id}>
                  <article key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
