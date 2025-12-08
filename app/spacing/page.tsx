"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CopyButton } from "@/components/CopyButton";

const spacingScale = [
  { name: "0", value: "0px", rem: "0rem" },
  { name: "0.5", value: "2px", rem: "0.125rem" },
  { name: "1", value: "4px", rem: "0.25rem" },
  { name: "2", value: "8px", rem: "0.5rem" },
  { name: "3", value: "12px", rem: "0.75rem" },
  { name: "4", value: "16px", rem: "1rem" },
  { name: "5", value: "20px", rem: "1.25rem" },
  { name: "6", value: "24px", rem: "1.5rem" },
  { name: "8", value: "32px", rem: "2rem" },
  { name: "10", value: "40px", rem: "2.5rem" },
  { name: "12", value: "48px", rem: "3rem" },
  { name: "16", value: "64px", rem: "4rem" },
  { name: "20", value: "80px", rem: "5rem" },
  { name: "24", value: "96px", rem: "6rem" },
];

const fluidSpacing = [
  {
    name: "--pad-body",
    value: "clamp(1rem, -1.125rem + 6.8vw, 3.125rem)",
    description: "Padding principal do body, responsivo",
  },
  {
    name: "--pad-hero",
    value: "clamp(1.875rem, -1.25rem + 10vw, 5rem)",
    description: "Padding de seções hero",
  },
];

const borderRadius = [
  {
    name: "Botão",
    token: "--radius-button",
    value: "100px",
    preview: "rounded-full",
  },
  {
    name: "Card",
    token: "--radius-card",
    value: "16px",
    preview: "rounded-2xl",
  },
  {
    name: "Grande",
    token: "--radius-lg",
    value: "24px",
    preview: "rounded-3xl",
  },
];

const gridLayouts = [
  {
    name: "2 Colunas",
    class: "grid-cols-2",
    description: "Layout básico 50/50",
  },
  {
    name: "3 Colunas",
    class: "grid-cols-3",
    description: "Perfeito para cards",
  },
  { name: "4 Colunas", class: "grid-cols-4", description: "Grid denso" },
  {
    name: "12 Colunas",
    class: "grid-cols-12",
    description: "Sistema flexível",
  },
];

export default function SpacingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Espaçamento"
        description="Sistema de espaçamento, grid e layout do design system IARA. Utilize estes tokens para manter consistência visual."
      />

      <Section
        title="Escala de Espaçamento"
        description="Baseada em múltiplos de 4px."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-3 px-4 font-display text-sm">Token</th>
                <th className="py-3 px-4 font-display text-sm">Pixels</th>
                <th className="py-3 px-4 font-display text-sm">REM</th>
                <th className="py-3 px-4 font-display text-sm">Visualização</th>
                <th className="py-3 px-4 font-display text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((space) => (
                <tr
                  key={space.name}
                  className="border-b border-muted/50 hover:bg-muted/30"
                >
                  <td className="py-3 px-4">
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      space-{space.name}
                    </code>
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">{space.value}</td>
                  <td className="py-3 px-4 font-mono text-sm">{space.rem}</td>
                  <td className="py-3 px-4">
                    <div
                      className="bg-iara-verde-accent h-4"
                      style={{ width: space.value }}
                    />
                  </td>
                  <td className="py-3 px-4">
                    <CopyButton text={`space-${space.name}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Espaçamento Fluido"
        description="Valores responsivos usando clamp()."
      >
        <div className="grid gap-4">
          {fluidSpacing.map((space) => (
            <div
              key={space.name}
              className="p-4 bg-muted/30 rounded-xl border border-muted flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-semibold">{space.name}</code>
                  <CopyButton text={space.name} />
                </div>
                <p className="text-sm text-muted-foreground">
                  {space.description}
                </p>
              </div>
              <code className="text-xs bg-muted px-3 py-2 rounded font-mono">
                {space.value}
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Border Radius"
        description="Cantos arredondados padronizados."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {borderRadius.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className="w-32 h-32 mx-auto mb-4 bg-iara-verde-base"
                style={{ borderRadius: radius.value }}
              />
              <h4 className="font-display font-semibold">{radius.name}</h4>
              <div className="flex items-center justify-center gap-2 mt-1">
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {radius.token}
                </code>
                <CopyButton text={radius.token} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {radius.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Sistema de Grid"
        description="Layouts comuns usando CSS Grid."
      >
        <div className="space-y-8">
          {gridLayouts.map((layout) => (
            <div key={layout.name}>
              <div className="flex items-center gap-3 mb-3">
                <h4 className="font-display font-semibold">{layout.name}</h4>
                <CopyButton text={layout.class} label={layout.class} />
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {layout.description}
              </p>
              <div className={`grid ${layout.class} gap-2`}>
                {Array.from({
                  length:
                    layout.class === "grid-cols-12"
                      ? 12
                      : parseInt(layout.class.split("-")[2]),
                }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 bg-iara-verde-accent/20 border-2 border-dashed border-iara-verde-accent dark:border-iara-verde-accent rounded flex items-center justify-center text-xs font-mono text-foreground"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Breakpoints"
        description="Pontos de quebra para design responsivo."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-3 px-4 font-display text-sm">Prefixo</th>
                <th className="py-3 px-4 font-display text-sm">Min-width</th>
                <th className="py-3 px-4 font-display text-sm">Uso típico</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prefix: "sm",
                  width: "640px",
                  usage: "Smartphones landscape",
                },
                { prefix: "md", width: "768px", usage: "Tablets" },
                { prefix: "lg", width: "1024px", usage: "Laptops" },
                { prefix: "xl", width: "1280px", usage: "Desktops" },
                { prefix: "2xl", width: "1536px", usage: "Telas grandes" },
              ].map((bp) => (
                <tr key={bp.prefix} className="border-b border-muted/50">
                  <td className="py-3 px-4">
                    <code className="bg-iara-verde-accent text-iara-verde-base px-2 py-1 rounded text-sm font-semibold">
                      {bp.prefix}:
                    </code>
                  </td>
                  <td className="py-3 px-4 font-mono">{bp.width}</td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {bp.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Uso Recomendado"
        description="Guia rápido de espaçamento."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-500/10 dark:bg-green-500/20 rounded-xl border border-green-500/30">
            <h4 className="font-display font-semibold mb-4 text-green-700 dark:text-green-400">
              ✓ Faça
            </h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
              <li>• Use tokens de espaçamento consistentes</li>
              <li>• Mantenha múltiplos de 4px</li>
              <li>• Use espaçamento fluido para responsividade</li>
              <li>• Agrupe elementos relacionados com menos espaço</li>
            </ul>
          </div>
          <div className="p-6 bg-red-500/10 dark:bg-red-500/20 rounded-xl border border-red-500/30">
            <h4 className="font-display font-semibold mb-4 text-red-700 dark:text-red-400">
              ✗ Evite
            </h4>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li>• Valores arbitrários (23px, 17px)</li>
              <li>• Espaçamento inconsistente entre páginas</li>
              <li>• Misturar unidades (px com rem)</li>
              <li>• Ignorar breakpoints móveis</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
