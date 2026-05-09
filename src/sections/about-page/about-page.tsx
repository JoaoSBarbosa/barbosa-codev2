import Image from "next/image";
import {ArrowLeft, ArrowRight, BookOpen, GraduationCap} from "lucide-react";
import {Button} from "../../shared/components/Button";
import {Section} from "../../shared/layout/section/Section";
import {aboutIntro, careerMoments, educationMoment, studyFocusItems,} from "@/sections/about-page/data/about-page.data";
import {CareerTimelineCard} from "@/sections/about-page/components/career-timeline-card";
import {hero} from "@/sections/hero/data/hero.data";

export function AboutPage() {
    return (
        <main>
            <Section className="bg-gradient-to-b from-background to-muted/20">
                <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="max-w-4xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                            {aboutIntro.eyebrow}
                        </p>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                            {aboutIntro.title}
                        </h1>
                        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                            {aboutIntro.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button href="/#contato" size="lg">
                                Entrar em contato
                                <ArrowRight className="h-5 w-5"/>
                            </Button>
                            <Button href="/" variant="outline" size="lg">
                                <ArrowLeft className="h-5 w-5"/>
                                Voltar ao portfolio
                            </Button>
                        </div>
                    </div>

                    {/*<div className="relative mx-auto w-full max-w-sm lg:ml-auto">*/}
                    {/*    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/10"/>*/}
                    {/*    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">*/}
                    {/*        <Image*/}
                    {/*            src={hero.imageCover}*/}
                    {/*            alt="Retrato de Joao Barbosa"*/}
                    {/*            width={520}*/}
                    {/*            height={520}*/}
                    {/*            priority*/}
                    {/*            quality={72}*/}
                    {/*            sizes="(max-width: 1024px) 22rem, 24rem"*/}
                    {/*            className="aspect-square w-full object-cover"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/10"/>
                        <div
                            className="relative overflow-hidden rounded-2xl  bg-primary shadow-xl">
                            <Image
                                src={hero.imageCover}
                                alt="Retrato de Joao Barbosa"
                                width={520}
                                height={520}
                                priority
                                quality={72}
                                sizes="(max-width: 1024px) 22rem, 24rem"
                                className="aspect-square w-full object-cover object-top "
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-background">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                        Linha do tempo
                    </p>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Experiencias que moldaram minha forma de construir software
                    </h2>
                    <p className="leading-relaxed text-muted-foreground">
                        Minha trajetoria passou por operacao, suporte, e-commerce, desenvolvimento
                        Java, sustentacao de sistemas legados e desenvolvimento pleno com .NET.
                        Isso me deu uma leitura mais completa sobre produto, negocio, incidentes,
                        arquitetura e entrega tecnica.
                    </p>
                </div>

                <div className="space-y-6">
                    {careerMoments.map((moment, index) => (
                        <CareerTimelineCard
                            key={`${moment.company}-${moment.period}`}
                            moment={moment}
                            index={index}
                        />
                    ))}
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <div
                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <GraduationCap className="h-6 w-6"/>
                        </div>
                        <p className="mb-2 text-sm font-semibold text-primary">Formacao</p>
                        <h2 className="mb-2 text-2xl font-bold text-foreground">
                            {educationMoment.course}
                        </h2>
                        <p className="mb-2 font-medium text-foreground/80">
                            {educationMoment.institution}
                        </p>
                        <p className="mb-4 text-sm text-muted-foreground">{educationMoment.period}</p>
                        <p className="leading-relaxed text-muted-foreground">
                            {educationMoment.description}
                        </p>
                    </article>

                    <div>
                        <div className="mb-6 flex items-start gap-4">
                            <div
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <BookOpen className="h-6 w-6"/>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                                    Estudos continuos
                                </p>
                                <h2 className="text-3xl font-bold text-foreground">
                                    Aprendizado alem da formacao academica
                                </h2>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {studyFocusItems.map((item) => (
                                <article
                                    key={item.title}
                                    className="rounded-xl border border-border bg-card p-5 shadow-sm"
                                >
                                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
