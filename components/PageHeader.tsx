import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8 sm:mb-12 border-b border-foreground/10 pb-6 sm:pb-8">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
