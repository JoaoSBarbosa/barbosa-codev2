import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

type ContactLinkCardProps = {
  href: string;
  label: string;
  handle: string;
  icon: LucideIcon | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
};

export function ContactLinkCard({ href, label, handle, icon: Icon }: ContactLinkCardProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex h-full min-h-36 flex-col justify-between rounded-lg border border-border bg-card p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
      aria-label={label}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <h3 className="mb-1 text-base font-semibold text-foreground">{label}</h3>
        <p className="break-words text-sm text-muted-foreground">{handle}</p>
      </span>
    </a>
  );
}
