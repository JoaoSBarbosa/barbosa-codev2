import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/icons/brand-icons";
import { socialLinks } from "@/sections/contact/data/social-links.data";

export function SiteFooter() {
  const github = socialLinks.find((item) => item.label === "GitHub");
  const linkedin = socialLinks.find((item) => item.label === "LinkedIn");
  const email = socialLinks.find((item) => item.label === "Email");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#151326] py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="mb-1 text-lg font-bold">Joao Barbosa</p>
            <p className="text-sm opacity-80">Desenvolvedor Fullstack</p>
          </div>

          <div className="flex gap-4">
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub de Joao Barbosa"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir LinkedIn de Joao Barbosa"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            ) : null}
            {email ? (
              <a
                href={email.href}
                aria-label="Enviar email para Joao Barbosa"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Mail className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {year} Joao Barbosa. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs opacity-60">
            Desenvolvido por Joao Barbosa com Next.js, TypeScript e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
