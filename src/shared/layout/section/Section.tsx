import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  tone?: "dark" | "light";
}

export function Section({
  id,
  children,
  className = "",
  container = true,
  tone,
}: SectionProps) {
  const toneClass =
    tone === "dark"
      ? "section-band-dark"
      : tone === "light"
        ? "section-band-light"
        : "";

  return (
    <section
      id={id}
      className={`scroll-mt-24 bg-background text-foreground py-16 md:py-24 ${toneClass} ${className}`}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
