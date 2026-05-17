import { type LucideIcon, Mail } from "lucide-react";
import { Section } from "../../shared/layout/section/Section";
import {socialLinks} from "@/sections/contact/data/social-links.data";
import {GithubIcon, LinkedinIcon} from "@/shared/components/icons/brand-icons";
import { ContactForm } from "@/sections/contact/components/contact-form";
import { ContactLinkCard } from "@/sections/contact/components/contact-link-card";

const contactIcons: Record<string, LucideIcon | typeof GithubIcon> = {
    GitHub: GithubIcon,
    LinkedIn: LinkedinIcon,
    Email: Mail,
};

export function ContactSection() {
    return (
        <Section id="contato" tone="dark">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Contato
                    </span>
                    <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                        Vamos conversar sobre oportunidades profissionais
                    </h2>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Estou aberto a conversar sobre vagas, posições em times de tecnologia
                        e oportunidades alinhadas à minha experiência como desenvolvedor fullstack.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {socialLinks.map((item) => {
                        const Icon = contactIcons[item.label];

                        return (
                            <ContactLinkCard
                                key={item.id}
                                href={item.href}
                                label={item.label}
                                handle={item.handle}
                                icon={Icon}
                            />
                        );
                    })}
                </div>

                <div className="mt-6">
                    <ContactForm/>
                </div>
            </div>
        </Section>
    );
}
