"use client";

import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

interface ResponsivePreviewProps {
  children: React.ReactNode;
  className?: string;
}

type ViewportSize = "desktop" | "tablet" | "mobile";

const viewports: Record<
  ViewportSize,
  { width: string; icon: typeof Monitor; label: string }
> = {
  desktop: { width: "100%", icon: Monitor, label: "Desktop" },
  tablet: { width: "768px", icon: Tablet, label: "Tablet" },
  mobile: { width: "375px", icon: Smartphone, label: "Mobile" },
};

export function ResponsivePreview({
  children,
  className = "",
}: ResponsivePreviewProps) {
  const [viewport, setViewport] = useState<ViewportSize>("desktop");

  return (
    <div className={`${className}`}>
      {/* Viewport Controls */}
      <div className="flex items-center justify-center gap-2 mb-4 p-2 bg-muted rounded-lg">
        {(
          Object.entries(viewports) as [
            ViewportSize,
            typeof viewports.desktop
          ][]
        ).map(([key, { icon: Icon, label }]) => (
          <button
            key={key}
            onClick={() => setViewport(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
                ${
                  viewport === key
                    ? "bg-iara-verde-base text-iara-branco"
                    : "hover:bg-muted-foreground/20"
                }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-display">{label}</span>
          </button>
        ))}
      </div>

      {/* Preview Container */}
      <div className="flex justify-center overflow-hidden bg-muted/50 rounded-lg p-4">
        <div
          className="bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300"
          style={{
            width: viewports[viewport].width,
            maxWidth: "100%",
          }}
        >
          {children}
        </div>
      </div>

      {/* Current Size Indicator */}
      <p className="text-center text-xs text-muted-foreground mt-2">
        {viewports[viewport].label}: {viewports[viewport].width}
      </p>
    </div>
  );
}
