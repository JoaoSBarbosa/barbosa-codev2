import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
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
