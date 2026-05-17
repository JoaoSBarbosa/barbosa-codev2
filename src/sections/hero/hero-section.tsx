import Image from "next/image";
import {ChevronDown, Mail} from "lucide-react";
import {Button} from "../../shared/components/Button";
import {Section} from "../../shared/layout/section/Section";
import {socialLinks} from "../contact/data/social-links.data";
import {IconBadge} from "@/shared/components/ui/icon-badge";
import {GithubIcon, LinkedinIcon} from "@/shared/components/icons/brand-icons";
import {hero} from "@/sections/hero/data/hero.data";

export function HeroSection() {
    const github = socialLinks[0];
    const linkedin = socialLinks[1];
    const email = socialLinks[2];

    return (
        <Section
            tone="dark"
            className="relative flex min-h-[calc(100vh-4rem)] items-center pt-10">
            <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                <div>

                    <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                        {hero.title}
                    </h1>
                    <p className="mb-4 text-xl font-semibold text-primary md:text-2xl">
                        {hero.subtitle}
                    </p>
                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        {hero.description}
                    </p>

                    <div className="relative mb-8 lg:hidden">
                        <div className="relative mx-auto aspect-square w-full max-w-sm">
                            <div
                                className="absolute inset-0 rotate-6 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10"
                            />
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                                <Image
                                    src={hero.image}
                                    alt="Retrato estilizado do desenvolvedor"
                                    width={820}
                                    height={820}
                                    priority
                                    quality={72}
                                    sizes="(max-width: 1024px) 80vw, 32rem"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                        <Button
                            variant="primary"
                            size="md"
                            href="#projetos"
                            className="w-full px-4 py-2 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                        >
                            Ver Projetos
                        </Button>
                        <Button
                            variant="outline"
                            size="md"
                            href="#contato"
                            className="w-full px-4 py-2 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                        >
                            Entrar em Contato
                        </Button>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <IconBadge
                            as="a"
                            href={github.href}
                            target="_blank"
                            aria-label="Abrir perfil no GitHub"
                            rel="noopener noreferrer"
                            icon={GithubIcon}
                            iconClassName="text-primary"
                        />
                        <IconBadge
                            as="a"
                            href={linkedin.href}
                            target="_blank"
                            aria-label="Abrir perfil no LinkedIn"
                            rel="noopener noreferrer"
                            icon={LinkedinIcon}
                            iconClassName="text-primary"
                        />
                        <IconBadge
                            as="a"
                            href={email.href}
                            aria-label="Enviar email"
                            icon={Mail}
                            iconClassName="text-primary"
                        />
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <div className="relative mx-auto aspect-square max-w-md">
                        <div
                            className="absolute inset-0 rotate-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5"/>
                        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                            <Image
                                src={hero.image}
                                alt="Retrato estilizado do desenvolvedor"
                                width={820}
                                height={820}
                                priority
                                quality={72}
                                sizes="(max-width: 1280px) 40vw, 32rem"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>


            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
                <ChevronDown className="h-6 w-6 text-muted-foreground"/>
            </div>
        </Section>
    );
}
