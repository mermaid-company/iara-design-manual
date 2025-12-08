"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SearchBar } from "@/components/SearchBar";
import { CopyButton } from "@/components/CopyButton";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Curated list of icons commonly used in the IARA app
const iaraIcons = [
  // Navigation & UI
  "Home",
  "Menu",
  "X",
  "ChevronDown",
  "ChevronUp",
  "ChevronLeft",
  "ChevronRight",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "ExternalLink",
  "Link",

  // Actions
  "Search",
  "Filter",
  "Plus",
  "Minus",
  "Check",
  "Copy",
  "Download",
  "Upload",
  "Edit",
  "Trash2",
  "Settings",
  "MoreHorizontal",
  "MoreVertical",
  "Refresh",

  // Communication
  "MessageCircle",
  "MessageSquare",
  "Send",
  "Mail",
  "Phone",
  "Video",
  "Mic",
  "Bell",
  "BellRing",
  "AtSign",

  // User & People
  "User",
  "Users",
  "UserPlus",
  "UserCheck",
  "UserX",
  "Contact",
  "CircleUser",

  // Content
  "File",
  "FileText",
  "Folder",
  "Image",
  "Camera",
  "Calendar",
  "Clock",
  "Star",
  "Heart",
  "Bookmark",
  "Tag",
  "Hash",

  // Business
  "Building",
  "Briefcase",
  "CreditCard",
  "DollarSign",
  "ShoppingCart",
  "Package",
  "BarChart",
  "PieChart",
  "TrendingUp",
  "TrendingDown",
  "Target",

  // Status & Indicators
  "AlertCircle",
  "AlertTriangle",
  "Info",
  "HelpCircle",
  "CheckCircle",
  "XCircle",
  "Loader",
  "LoaderCircle",
  "Sparkles",

  // Technology
  "Bot",
  "Cpu",
  "Zap",
  "Wifi",
  "Globe",
  "Smartphone",
  "Monitor",
  "Laptop",

  // Social
  "Share",
  "Share2",
  "ThumbsUp",
  "ThumbsDown",
  "Eye",
  "EyeOff",

  // Theme
  "Sun",
  "Moon",
  "Palette",
];

const iconCategories: Record<string, string[]> = {
  Navegação: [
    "Home",
    "Menu",
    "X",
    "ChevronDown",
    "ChevronUp",
    "ChevronLeft",
    "ChevronRight",
    "ArrowLeft",
    "ArrowRight",
  ],
  Ações: [
    "Search",
    "Filter",
    "Plus",
    "Minus",
    "Check",
    "Copy",
    "Download",
    "Upload",
    "Edit",
    "Trash2",
    "Settings",
  ],
  Comunicação: [
    "MessageCircle",
    "MessageSquare",
    "Send",
    "Mail",
    "Phone",
    "Video",
    "Bell",
    "BellRing",
  ],
  Usuários: ["User", "Users", "UserPlus", "UserCheck", "CircleUser", "Contact"],
  Negócios: [
    "Building",
    "Briefcase",
    "CreditCard",
    "DollarSign",
    "ShoppingCart",
    "BarChart",
    "Target",
  ],
  Status: [
    "AlertCircle",
    "AlertTriangle",
    "Info",
    "HelpCircle",
    "CheckCircle",
    "XCircle",
    "Loader",
    "Sparkles",
  ],
  "IA & Tech": ["Bot", "Cpu", "Zap", "Globe", "Smartphone", "Monitor"],
};

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState(24);
  const [selectedStroke, setSelectedStroke] = useState(2);

  const filteredIcons = useMemo(() => {
    let icons = iaraIcons;

    if (selectedCategory) {
      icons = iconCategories[selectedCategory] || [];
    }

    if (searchQuery) {
      icons = icons.filter((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return icons;
  }, [searchQuery, selectedCategory]);

  const getIcon = (name: string): LucideIcon | null => {
    return (LucideIcons as unknown as Record<string, LucideIcon>)[name] || null;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Iconografia"
        description="Biblioteca de ícones usando Lucide React. Ícones consistentes, acessíveis e otimizados para o IARA."
      />

      {/* Icon Library Info */}
      <Section
        title="Biblioteca"
        description="Usamos Lucide React para iconografia consistente."
      >
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://lucide.dev/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted-foreground/20 transition-colors"
          >
            <LucideIcons.ExternalLink className="w-4 h-4" />
            <span>Lucide Icons (Site Oficial)</span>
          </a>
          <code className="text-sm bg-muted px-3 py-2 rounded">
            npm install lucide-react
          </code>
        </div>
      </Section>

      {/* Icon Customization */}
      <Section title="Personalização" description="Ajuste tamanho e espessura.">
        <div className="flex flex-wrap gap-8">
          <div>
            <label className="block text-sm font-display mb-2">
              Tamanho (px)
            </label>
            <div className="flex gap-2">
              {[16, 20, 24, 32, 40, 48].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded text-sm transition-colors
                    ${
                      selectedSize === size
                        ? "bg-iara-verde-base text-iara-branco"
                        : "bg-muted hover:bg-muted-foreground/20"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-display mb-2">
              Stroke Width
            </label>
            <div className="flex gap-2">
              {[1, 1.5, 2, 2.5, 3].map((stroke) => (
                <button
                  key={stroke}
                  onClick={() => setSelectedStroke(stroke)}
                  className={`px-3 py-1 rounded text-sm transition-colors
                    ${
                      selectedStroke === stroke
                        ? "bg-iara-verde-base text-iara-branco"
                        : "bg-muted hover:bg-muted-foreground/20"
                    }`}
                >
                  {stroke}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-6 p-6 bg-muted/30 rounded-xl flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-iara-verde-base rounded-xl flex items-center justify-center mb-2">
              <LucideIcons.Bot
                size={selectedSize}
                strokeWidth={selectedStroke}
                className="text-iara-branco"
              />
            </div>
            <span className="text-xs text-muted-foreground">Fundo escuro</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-iara-branco rounded-xl flex items-center justify-center mb-2 border border-muted">
              <LucideIcons.Bot
                size={selectedSize}
                strokeWidth={selectedStroke}
                className="text-iara-verde-base"
              />
            </div>
            <span className="text-xs text-muted-foreground">Fundo claro</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-iara-verde-accent rounded-xl flex items-center justify-center mb-2">
              <LucideIcons.Bot
                size={selectedSize}
                strokeWidth={selectedStroke}
                className="text-iara-verde-base"
              />
            </div>
            <span className="text-xs text-muted-foreground">Accent</span>
          </div>
        </div>
      </Section>

      {/* Icon Gallery */}
      <Section
        title="Galeria de Ícones"
        description="Clique em um ícone para copiar o código."
      >
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar
            placeholder="Buscar ícones..."
            onSearch={setSearchQuery}
            className="flex-1 max-w-md"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded text-sm font-display transition-colors
                ${
                  !selectedCategory
                    ? "bg-iara-verde-base text-iara-branco"
                    : "bg-muted hover:bg-muted-foreground/20"
                }`}
            >
              Todos
            </button>
            {Object.keys(iconCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-sm font-display transition-colors
                  ${
                    selectedCategory === cat
                      ? "bg-iara-verde-base text-iara-branco"
                      : "bg-muted hover:bg-muted-foreground/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {filteredIcons.map((iconName) => {
            const IconComponent = getIcon(iconName);
            if (!IconComponent) return null;

            return (
              <div
                key={iconName}
                className="group relative aspect-square bg-muted/30 rounded-xl border border-muted
                           hover:border-iara-verde-accent hover:bg-muted/50 transition-all
                           flex flex-col items-center justify-center p-2 cursor-pointer"
                title={iconName}
              >
                <IconComponent
                  size={selectedSize}
                  strokeWidth={selectedStroke}
                  className="mb-2"
                />
                <span className="text-xs text-muted-foreground truncate w-full text-center">
                  {iconName}
                </span>

                {/* Copy button on hover */}
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={`<${iconName} />`} />
                </div>
              </div>
            );
          })}
        </div>

        {filteredIcons.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum ícone encontrado para &ldquo;{searchQuery}&rdquo;</p>
          </div>
        )}
      </Section>

      {/* Usage Code */}
      <Section title="Como Usar" description="Exemplos de código React.">
        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-display">Import</span>
              <CopyButton
                text={`import { Bot, MessageCircle, Zap } from "lucide-react";`}
              />
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Bot, MessageCircle, Zap } from "lucide-react";`}</code>
            </pre>
          </div>

          <div className="p-4 bg-muted/50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-display">Uso básico</span>
              <CopyButton text={`<Bot size={24} strokeWidth={2} />`} />
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`<Bot size={24} strokeWidth={2} />`}</code>
            </pre>
          </div>

          <div className="p-4 bg-muted/50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-display">Com Tailwind</span>
              <CopyButton
                text={`<Bot className="w-6 h-6 text-iara-verde-accent" />`}
              />
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`<Bot className="w-6 h-6 text-iara-verde-accent" />`}</code>
            </pre>
          </div>
        </div>
      </Section>

      {/* Guidelines */}
      <Section title="Diretrizes" description="Boas práticas de uso.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-500/10 dark:bg-green-500/20 rounded-xl border border-green-500/30">
            <h4 className="font-display font-semibold mb-4 text-green-700 dark:text-green-400">
              ✓ Faça
            </h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
              <li>• Use tamanhos consistentes (16, 20, 24px)</li>
              <li>• Mantenha strokeWidth em 2 para consistência</li>
              <li>• Use cores do design system</li>
              <li>• Adicione aria-label para acessibilidade</li>
              <li>• Combine com texto quando necessário</li>
            </ul>
          </div>
          <div className="p-6 bg-red-500/10 dark:bg-red-500/20 rounded-xl border border-red-500/30">
            <h4 className="font-display font-semibold mb-4 text-red-700 dark:text-red-400">
              ✗ Evite
            </h4>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li>• Misturar bibliotecas de ícones</li>
              <li>• Usar tamanhos muito pequenos (&lt;16px)</li>
              <li>• Ícones como único indicador de ação</li>
              <li>• Cores que não contrastem com o fundo</li>
              <li>• Ícones decorativos sem propósito</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
