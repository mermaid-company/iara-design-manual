import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mb-12 sm:mb-16 overflow-hidden">
      <h2 className="font-display text-xl sm:text-2xl font-semibold mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
