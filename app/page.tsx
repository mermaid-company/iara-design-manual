import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { IaraIcon } from "@/components/IaraLogo";

const sections = [
  {
    title: "Branding",
    description: "Logotipos, ícones e diretrizes de uso da marca",
    href: "/branding",
    icon: "🎨",
  },
  {
    title: "Helper Images",
    description: "Imagens auxiliares e recursos visuais",
    href: "/helper-images",
    icon: "🖼️",
  },
  {
    title: "Tipografia",
    description: "Fontes, tamanhos e hierarquia tipográfica",
    href: "/typography",
    icon: "Aa",
  },
  {
    title: "Cores",
    description: "Paleta de cores clara e escura com tokens",
    href: "/colors",
    icon: "🎯",
  },
  {
    title: "Elementos",
    description: "Botões, cards e componentes de interface",
    href: "/elements",
    icon: "⚡",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="IARA Brand Manual"
        description="Guia completo de design para designers e gestores de mídia social. Encontre aqui todos os recursos visuais, diretrizes e componentes do sistema de design IARA."
      />

      {/* Hero Section */}
      <div className="bg-iara-verde-base text-iara-branco rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <IaraIcon className="w-12 h-12 sm:w-16 sm:h-16" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                IARA
              </h2>
              <p className="text-iara-verde-accent font-display text-sm sm:text-base">
                Assistente Virtual Inteligente
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg opacity-90 max-w-xl">
            A IARA é uma assistente virtual inteligente que combina tecnologia
            de ponta com uma identidade visual moderna e acolhedora.
          </p>
        </div>
        <div className="absolute -right-20 -bottom-20 opacity-10 hidden sm:block">
          <IaraIcon className="w-80 h-80" />
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group block p-4 sm:p-6 rounded-xl border border-foreground/10 
                       hover:border-iara-verde-accent hover:shadow-lg
                       transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {section.icon}
            </div>
            <h3
              className="font-display text-lg sm:text-xl font-semibold mb-2 
                          group-hover:text-iara-verde-accent transition-colors"
            >
              {section.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="text-center p-4 sm:p-6 rounded-xl bg-muted">
          <div className="font-display text-2xl sm:text-3xl font-bold text-iara-verde-accent">
            2
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Famílias Tipográficas
          </div>
        </div>
        <div className="text-center p-4 sm:p-6 rounded-xl bg-muted">
          <div className="font-display text-2xl sm:text-3xl font-bold text-iara-verde-accent">
            5
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Cores Principais
          </div>
        </div>
        <div className="text-center p-4 sm:p-6 rounded-xl bg-muted">
          <div className="font-display text-2xl sm:text-3xl font-bold text-iara-verde-accent">
            2
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Temas (Claro/Escuro)
          </div>
        </div>
        <div className="text-center p-4 sm:p-6 rounded-xl bg-muted">
          <div className="font-display text-2xl sm:text-3xl font-bold text-iara-verde-accent">
            ∞
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Possibilidades
          </div>
        </div>
      </div>
    </div>
  );
}
