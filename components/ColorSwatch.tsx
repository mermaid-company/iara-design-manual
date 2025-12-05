"use client";

import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  value: string;
  cssVar?: string;
  hex?: string;
  hsl?: string;
  textDark?: boolean;
}

export function ColorSwatch({
  name,
  value,
  cssVar,
  hex,
  hsl,
  textDark = false,
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group">
      <div
        className={`
          aspect-square rounded-xl mb-3 
          flex items-end p-4 
          transition-transform duration-300 
          group-hover:scale-105 group-hover:shadow-lg
          cursor-pointer relative overflow-hidden
        `}
        style={{ backgroundColor: value }}
        onClick={() => copyToClipboard(hex || value)}
      >
        {copied && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Copiado!</span>
          </div>
        )}
      </div>
      <h3
        className={`font-display font-semibold text-sm ${
          textDark ? "text-foreground" : ""
        }`}
      >
        {name}
      </h3>
      {cssVar && (
        <p className="text-xs text-muted-foreground font-mono">{cssVar}</p>
      )}
      {hex && <p className="text-xs text-muted-foreground font-mono">{hex}</p>}
      {hsl && <p className="text-xs text-muted-foreground font-mono">{hsl}</p>}
    </div>
  );
}

interface ColorPaletteProps {
  colors: ColorSwatchProps[];
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  );
}
