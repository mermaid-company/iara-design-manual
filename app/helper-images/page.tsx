import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import Image from "next/image";

const helperImages = [
  {
    name: "Avatar Principal",
    description: "Avatar padrão da IARA para uso em chatbots e interfaces",
    src: "/assets/AVATAR.webp",
    category: "Avatar",
  },
  {
    name: "Ícone Aplicativo",
    description: "Ícone quadrado para aplicativos móveis e desktop",
    src: "/assets/ICON.svg",
    category: "Ícone",
  },
  {
    name: "Favicon",
    description: "Favicon para navegadores e bookmarks",
    src: "/assets/FAVICON.svg",
    category: "Ícone",
  },
  {
    name: "Assistente Humano",
    description: "Representação visual quando um humano assume a conversa",
    src: "/assets/ICON-HUMAN-ATTENDANT.svg",
    category: "Ícone",
  },
];

const useCases = [
  {
    title: "Chat Widget",
    description: "Use o avatar em widgets de chat para representar a IARA",
    example: "Tamanho recomendado: 48x48px ou 64x64px",
  },
  {
    title: "Notificações Push",
    description: "Use o ícone em notificações push de aplicativos",
    example: "Tamanho recomendado: 192x192px",
  },
  {
    title: "App Store",
    description: "Use o ícone do aplicativo nas lojas de aplicativos",
    example: "Tamanho recomendado: 1024x1024px",
  },
  {
    title: "Redes Sociais",
    description: "Use o avatar para perfis em redes sociais",
    example: "Tamanho recomendado: 400x400px",
  },
];

export default function HelperImagesPage() {
  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Helper Images"
        description="Imagens auxiliares, avatares e recursos visuais para uso em diferentes contextos da marca IARA."
      />

      {/* Galeria de Imagens */}
      <Section
        title="Biblioteca de Imagens"
        description="Todas as imagens auxiliares disponíveis para uso."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {helperImages.map((image) => (
            <div
              key={image.name}
              className="group rounded-xl border border-foreground/10 overflow-hidden 
                         hover:border-iara-verde-accent transition-all"
            >
              <div className="aspect-square bg-muted flex items-center justify-center p-8 relative">
                <Image
                  src={image.src}
                  alt={image.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
                <div
                  className="absolute inset-0 bg-iara-verde-base/80 opacity-0 group-hover:opacity-100 
                               flex items-center justify-center transition-opacity"
                >
                  <a
                    href={image.src}
                    download
                    className="px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                             font-display text-sm font-semibold"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-iara-verde-accent font-semibold uppercase">
                  {image.category}
                </span>
                <h3 className="font-display font-semibold mt-1">
                  {image.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Avatar em Diferentes Tamanhos */}
      <Section
        title="Tamanhos do Avatar"
        description="O avatar deve ser usado em tamanhos apropriados para cada contexto."
      >
        <div className="flex flex-wrap items-end gap-8">
          {[128, 96, 64, 48, 32, 24].map((size) => (
            <div key={size} className="text-center">
              <div
                className="bg-muted rounded-full flex items-center justify-center overflow-hidden mx-auto"
                style={{ width: size, height: size }}
              >
                <Image
                  src="/assets/AVATAR.webp"
                  alt={`Avatar ${size}px`}
                  width={size}
                  height={size}
                  className="object-cover"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block">
                {size}px
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Casos de Uso */}
      <Section
        title="Casos de Uso"
        description="Diretrizes para aplicação das imagens auxiliares."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="p-6 rounded-xl border border-foreground/10"
            >
              <h3 className="font-display font-semibold text-lg mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {useCase.description}
              </p>
              <code className="text-xs bg-muted px-3 py-1 rounded-full">
                {useCase.example}
              </code>
            </div>
          ))}
        </div>
      </Section>

      {/* Imagens para Redes Sociais */}
      <Section
        title="Redes Sociais"
        description="Templates e imagens otimizadas para redes sociais."
      >
        <div className="bg-muted rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">📱</div>
          <h3 className="font-display text-xl font-semibold mb-2">Em Breve</h3>
          <p className="text-muted-foreground">
            Templates para posts, stories e capas de redes sociais serão
            disponibilizados aqui.
          </p>
        </div>
      </Section>

      {/* Downloads em Lote */}
      <Section
        title="Downloads"
        description="Baixe todas as imagens auxiliares de uma vez."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href="/assets/iara-helper-images.zip"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-iara-verde-base text-iara-branco 
                       rounded-full font-display font-semibold hover:bg-iara-verde-escuro transition-colors"
          >
            <span>📦</span>
            Baixar Todas (ZIP)
          </a>
          <a
            href="/assets"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 
                       rounded-full font-display font-semibold hover:border-iara-verde-accent transition-colors"
          >
            <span>📂</span>
            Ver Pasta de Assets
          </a>
        </div>
      </Section>
    </div>
  );
}
