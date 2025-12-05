"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ColorSwatch } from "@/components/ColorSwatch";
import { useTheme } from "@/components/ThemeProvider";

const coreColors = [
  {
    name: "Verde Base",
    cssVar: "--verde-base",
    hex: "#003314",
    hsl: "hsl(141, 100%, 10%)",
    description: "Cor principal da marca. Representa confiança e tecnologia.",
  },
  {
    name: "Verde Accent",
    cssVar: "--verde-accent",
    hex: "#CCFF00",
    hsl: "hsl(67, 100%, 50%)",
    description: "Cor de destaque. Usada para CTAs e elementos interativos.",
  },
  {
    name: "Branco IARA",
    cssVar: "--branco",
    hex: "#F4F5F0",
    hsl: "hsl(80, 10%, 95%)",
    description:
      "Branco off-white para fundos claros e textos em fundo escuro.",
  },
  {
    name: "Verde Escuro",
    cssVar: "--verde-escuro",
    hex: "#003314",
    hsl: "hsl(141, 100%, 10%)",
    description: "Variação mais escura para gradientes e profundidade.",
  },
  {
    name: "Accent Escuro",
    cssVar: "--verde-accent-escuro",
    hex: "#8FB300",
    hsl: "hsl(67, 100%, 35%)",
    description: "Variação escura do accent para hover states.",
  },
];

const semanticColors = {
  light: [
    {
      name: "Background",
      cssVar: "--background",
      value: "var(--branco)",
      description: "Fundo principal",
    },
    {
      name: "Foreground",
      cssVar: "--foreground",
      value: "var(--verde-base)",
      description: "Texto principal",
    },
    {
      name: "Muted",
      cssVar: "--muted",
      value: "hsl(80, 5%, 90%)",
      description: "Elementos secundários",
    },
    {
      name: "Muted Foreground",
      cssVar: "--muted-foreground",
      value: "hsl(141, 50%, 30%)",
      description: "Texto secundário",
    },
  ],
  dark: [
    {
      name: "Background",
      cssVar: "--background",
      value: "var(--verde-base)",
      description: "Fundo principal",
    },
    {
      name: "Foreground",
      cssVar: "--foreground",
      value: "var(--branco)",
      description: "Texto principal",
    },
    {
      name: "Muted",
      cssVar: "--muted",
      value: "hsl(141, 80%, 8%)",
      description: "Elementos secundários",
    },
    {
      name: "Muted Foreground",
      cssVar: "--muted-foreground",
      value: "hsl(80, 10%, 70%)",
      description: "Texto secundário",
    },
  ],
};

const gradients = [
  {
    name: "Hero Gradient",
    css: "linear-gradient(135deg, var(--verde-base) 0%, var(--verde-escuro) 100%)",
    description: "Gradiente principal para heróis e headers",
  },
  {
    name: "Button Glow",
    css: "linear-gradient(180deg, var(--btn-gloss-opaque) 0%, var(--btn-gloss-zero) 50%)",
    description: "Efeito de brilho para botões",
  },
  {
    name: "Accent Fade",
    css: "linear-gradient(90deg, var(--verde-accent) 0%, var(--verde-accent-escuro) 100%)",
    description: "Transição suave do accent",
  },
];

export default function ColorsPage() {
  const { theme } = useTheme();

  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Cores"
        description="Paleta de cores da IARA com tokens para tema claro e escuro. Cada cor foi cuidadosamente selecionada para transmitir a identidade da marca."
      />

      {/* Cores Principais */}
      <Section
        title="Cores Principais"
        description="A paleta core da marca IARA."
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {coreColors.map((color) => (
            <div key={color.name}>
              <ColorSwatch
                name={color.name}
                value={color.hex}
                cssVar={color.cssVar}
                hex={color.hex}
                hsl={color.hsl}
                textDark={
                  color.name === "Verde Accent" || color.name === "Branco IARA"
                }
              />
              <p className="text-xs text-muted-foreground mt-2">
                {color.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visualização de Contraste */}
      <Section
        title="Contraste"
        description="Exemplos de combinações de cores com contraste adequado."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden">
            <div className="bg-iara-verde-base text-iara-branco p-8">
              <h3 className="font-display text-2xl font-bold mb-2">
                Texto Claro em Fundo Escuro
              </h3>
              <p className="opacity-90">
                Este é um exemplo de texto claro sobre fundo verde escuro.
              </p>
              <button className="mt-4 px-6 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full font-display font-semibold">
                Botão CTA
              </button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-foreground/10">
            <div className="bg-iara-branco text-iara-verde-base p-8">
              <h3 className="font-display text-2xl font-bold mb-2">
                Texto Escuro em Fundo Claro
              </h3>
              <p className="opacity-75">
                Este é um exemplo de texto escuro sobre fundo claro.
              </p>
              <button className="mt-4 px-6 py-2 bg-iara-verde-base text-iara-branco rounded-full font-display font-semibold">
                Botão CTA
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cores Semânticas */}
      <Section
        title="Cores Semânticas"
        description={`Tokens de cor que se adaptam ao tema atual (${
          theme === "light" ? "Claro" : "Escuro"
        }).`}
      >
        <div className="bg-muted rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-semibold">Tema Atual:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-display ${
                theme === "light"
                  ? "bg-iara-branco text-iara-verde-base border border-foreground/20"
                  : "bg-iara-verde-base text-iara-branco"
              }`}
            >
              {theme === "light" ? "☀️ Claro" : "🌙 Escuro"}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticColors[theme].map((color) => (
              <div key={color.name} className="text-center">
                <div
                  className="w-full h-20 rounded-lg mb-3 border border-foreground/10"
                  style={{ backgroundColor: `var(${color.cssVar})` }}
                />
                <h4 className="font-display font-semibold text-sm">
                  {color.name}
                </h4>
                <code className="text-xs text-muted-foreground">
                  {color.cssVar}
                </code>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gradientes */}
      <Section
        title="Gradientes"
        description="Gradientes utilizados em elementos especiais."
      >
        <div className="space-y-6">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="flex items-center gap-6">
              <div
                className="w-32 h-20 rounded-xl shrink-0"
                style={{ background: gradient.css }}
              />
              <div className="flex-1">
                <h4 className="font-display font-semibold">{gradient.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {gradient.description}
                </p>
                <code className="text-xs bg-muted px-3 py-1 rounded-lg inline-block">
                  {gradient.css}
                </code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tokens CSS */}
      <Section
        title="Tokens CSS"
        description="Variáveis CSS para implementação."
      >
        <div className="bg-muted rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">{`:root {
  /* Core Colors */
  --branco: hsl(80, 10%, 95%);
  --verde-base: hsl(141, 100%, 10%);
  --verde-escuro: hsl(141, 100%, 10%);
  --verde-accent: hsl(67, 100%, 50%);
  --verde-accent-escuro: hsl(67, 100%, 35%);
  --texto: hsl(141, 100%, 10%, 0.75);

  /* Button Gradient Colors */
  --btn-gloss-opaque: hsl(141, 100%, 18%);
  --btn-gloss-zero: hsl(141, 100%, 18%, 0);
  --btn-base-90: hsl(141, 100%, 10%, 0.9);

  /* Semantic - Light Mode */
  --background: var(--branco);
  --foreground: var(--verde-base);
  --muted: hsl(80, 5%, 90%);
  --muted-foreground: hsl(141, 50%, 30%);
}

.dark {
  /* Semantic - Dark Mode */
  --background: var(--verde-base);
  --foreground: var(--branco);
  --muted: hsl(141, 80%, 8%);
  --muted-foreground: hsl(80, 10%, 70%);
}`}</pre>
        </div>
      </Section>

      {/* Acessibilidade */}
      <Section
        title="Acessibilidade"
        description="Diretrizes de contraste e acessibilidade."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-foreground/10">
            <div className="text-3xl mb-3">✓</div>
            <h4 className="font-display font-semibold mb-2">WCAG AA</h4>
            <p className="text-sm text-muted-foreground">
              Todas as combinações principais atendem ao padrão AA (4.5:1 para
              texto normal).
            </p>
          </div>
          <div className="p-6 rounded-xl border border-foreground/10">
            <div className="text-3xl mb-3">👁️</div>
            <h4 className="font-display font-semibold mb-2">Alto Contraste</h4>
            <p className="text-sm text-muted-foreground">
              Verde base + Branco IARA oferece excelente legibilidade.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-foreground/10">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-display font-semibold mb-2">Modo Escuro</h4>
            <p className="text-sm text-muted-foreground">
              Sistema de cores adapta automaticamente para ambos os temas.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
