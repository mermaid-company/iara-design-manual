import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-12 border-b border-foreground/10 pb-8">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      )}
      {children}
    </div>
  );
}
