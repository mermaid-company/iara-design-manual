import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Download } from "lucide-react";

// Real available assets
const helperImages = [
  {
    name: "Favicon",
    description: "Favicon oficial para navegadores e bookmarks",
    src: "/assets/FAVICON.svg",
    category: "Ícone",
  },
];

// Hero/representational images
const heroImages = [
  {
    name: "Personagem IARA Hero",
    description: "Imagem principal da personagem IARA para seções hero",
    src: "/assets/PERSONAGEM IARA HERO.webp",
    aspectRatio: "landscape",
  },
  {
    name: "Personagem IARA Hero (v2)",
    description: "Versão alternativa da personagem IARA",
    src: "/assets/PERSONAGEM-IARA-HERO_A02.webp",
    aspectRatio: "landscape",
  },
  {
    name: "Personagem IARA Mobile",
    description: "Versão otimizada para mobile",
    src: "/assets/PERSONAGEM-IARA-HERO-mobile_A02.webp",
    aspectRatio: "portrait",
  },
  {
    name: "Mão com Celular",
    description: "Imagem de mão segurando celular com recorte",
    src: "/assets/mao celular recorte.webp",
    aspectRatio: "portrait",
  },
];

// Product context images
const contextImages = [
  {
    name: "IARA para E-commerce",
    description: "Imagem representando uso da IARA no contexto e-commerce",
    src: "/assets/img ecommerce - iara assistente virtual.webp",
  },
  {
    name: "IARA para SaaS",
    description: "Imagem representando uso da IARA no contexto SaaS",
    src: "/assets/img saas - iara assistente virtual.webp",
  },
];

// Bento grid images
const bentoImages = [
  {
    name: "Bento 01",
    src: "/assets/img01 - bento grid - iara assistente virtual.webp",
  },
  {
    name: "Bento 02",
    src: "/assets/img02 - bento grid - iara assistente virtual.webp",
  },
  {
    name: "Bento 03",
    src: "/assets/img03 - bento grid - iara assistente virtual.webp",
  },
  {
    name: "Bento 04",
    src: "/assets/img04 - bento grid - iara assistente virtual.webp",
  },
  {
    name: "Bento 05",
    src: "/assets/img05 - bento grid - iara assistente virtual.webp",
  },
];

// Floating icons used in landing page hero
const floatingIcons = [
  { name: "Ícone Flutuante 00", src: "/assets/icone flutuante 00.webp" },
  { name: "Ícone Flutuante 01", src: "/assets/icone flutuante 01.webp" },
  { name: "Ícone Flutuante 02", src: "/assets/icone flutuante 02.webp" },
  { name: "Ícone Flutuante 03", src: "/assets/icone flutuante 03.webp" },
  { name: "Ícone Flutuante 04", src: "/assets/icone flutuante 04.webp" },
  { name: "Ícone Flutuante 05", src: "/assets/icone flutuante 05.webp" },
  { name: "Ícone Flutuante 06", src: "/assets/icone flutuante 06.webp" },
  { name: "Ícone Flutuante 07", src: "/assets/icone flutuante 07.webp" },
  { name: "Ícone Flutuante 08", src: "/assets/icone flutuante 08.webp" },
  { name: "Ícone Flutuante 09", src: "/assets/icone flutuante 09.webp" },
];

// Avatars for chat assistants
const avatars = [
  { name: "Avatar 0", src: "/assets/avatars/assistant-0.png" },
  { name: "Avatar 1", src: "/assets/avatars/assistant-1.png" },
  { name: "Avatar 2", src: "/assets/avatars/assistant-2.png" },
  { name: "Avatar 3", src: "/assets/avatars/assistant-3.png" },
  { name: "Avatar 4", src: "/assets/avatars/assistant-4.png" },
  { name: "Avatar 5", src: "/assets/avatars/assistant-5.png" },
  { name: "Avatar 6", src: "/assets/avatars/assistant-6.png" },
  { name: "Avatar 7", src: "/assets/avatars/assistant-7.png" },
  { name: "Avatar 8", src: "/assets/avatars/assistant-8.png" },
  { name: "Avatar 9", src: "/assets/avatars/assistant-9.png" },
  { name: "Avatar 10", src: "/assets/avatars/assistant-10.png" },
  { name: "Avatar 11", src: "/assets/avatars/assistant-11.png" },
  { name: "Avatar 12", src: "/assets/avatars/assistant-12.png" },
  { name: "Avatar 13", src: "/assets/avatars/assistant-13.png" },
  { name: "Avatar 14", src: "/assets/avatars/assistant-14.png" },
  { name: "Avatar 15", src: "/assets/avatars/assistant-15.png" },
];

export default function HelperImagesPage() {
  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Helper Images"
        description="Imagens auxiliares, avatares e recursos visuais para uso em diferentes contextos da marca IARA."
      />

      {/* Imagens Hero/Personagem */}
      <Section
        title="Imagens Principais"
        description="Imagens da personagem IARA para uso em seções hero e destaque. Usadas na landing page e app de login."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {heroImages.map((image) => (
            <div
              key={image.name}
              className="group rounded-xl border border-foreground/10 overflow-hidden 
                         hover:border-iara-verde-accent transition-all"
            >
              <div
                className={`bg-iara-verde-base flex items-center justify-center p-4 relative ${
                  image.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-video"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-contain"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                               flex items-center justify-center transition-opacity"
                >
                  <a
                    href={image.src}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                             font-display text-sm font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold">{image.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Imagens de Contexto */}
      <Section
        title="Imagens de Contexto"
        description="Imagens que representam a IARA em diferentes contextos de uso."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {contextImages.map((image) => (
            <div
              key={image.name}
              className="group rounded-xl border border-foreground/10 overflow-hidden 
                         hover:border-iara-verde-accent transition-all"
            >
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                               flex items-center justify-center transition-opacity"
                >
                  <a
                    href={image.src}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                             font-display text-sm font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold">{image.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ícones Flutuantes */}
      <Section
        title="Ícones Flutuantes"
        description="Ícones decorativos usados na seção hero da landing page. Representam funcionalidades da IARA."
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
          {floatingIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.src}
              download
              className="group aspect-square bg-muted rounded-xl flex items-center justify-center p-2 
                       hover:bg-iara-verde-accent/20 transition-colors relative overflow-hidden"
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Clique em qualquer ícone para fazer download.
        </p>
      </Section>

      {/* Bento Grid Images */}
      <Section
        title="Imagens Bento Grid"
        description="Imagens para uso em layouts bento grid na landing page."
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {bentoImages.map((image) => (
            <a
              key={image.name}
              href={image.src}
              download
              className="group aspect-square bg-muted rounded-xl overflow-hidden relative"
            >
              <Image
                src={image.src}
                alt={image.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                            flex items-center justify-center transition-opacity"
              >
                <Download className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Avatars */}
      <Section
        title="Avatares de Assistente"
        description="Avatares para representar assistentes virtuais no chat. Use para diferentes personas ou variações."
      >
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {avatars.map((avatar) => (
            <a
              key={avatar.name}
              href={avatar.src}
              download
              className="group aspect-square bg-muted rounded-full overflow-hidden relative"
            >
              <Image
                src={avatar.src}
                alt={avatar.name}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                            flex items-center justify-center transition-opacity rounded-full"
              >
                <Download className="w-4 h-4 text-white" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Favicon e Ícones */}
      <Section
        title="Favicon & Ícones"
        description="Ícones para navegadores, apps e contextos diversos."
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
                  width={80}
                  height={80}
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

      {/* Background/Texturas */}
      <Section
        title="Backgrounds & Texturas"
        description="Imagens de fundo e texturas para uso em layouts."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/assets/BG-hero.webp"
            download
            className="group rounded-xl overflow-hidden relative aspect-video"
          >
            <Image
              src="/assets/BG-hero.webp"
              alt="Background Hero"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          flex items-center justify-center transition-opacity"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                           font-display text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                BG Hero
              </div>
            </div>
          </a>
          <a
            href="/assets/textura-bg.webp"
            download
            className="group rounded-xl overflow-hidden relative aspect-video"
          >
            <Image
              src="/assets/textura-bg.webp"
              alt="Textura Background"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          flex items-center justify-center transition-opacity"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                           font-display text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Textura
              </div>
            </div>
          </a>
        </div>
      </Section>

      {/* Meta Images */}
      <Section
        title="Meta Images"
        description="Imagens para compartilhamento em redes sociais (Open Graph, Twitter Cards)."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/assets/meta-img.png"
            download
            className="group rounded-xl overflow-hidden relative aspect-video border border-foreground/10"
          >
            <Image
              src="/assets/meta-img.png"
              alt="Meta Image PNG"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          flex items-center justify-center transition-opacity"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                           font-display text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                meta-img.png
              </div>
            </div>
          </a>
          <a
            href="/assets/meta-img.jpg"
            download
            className="group rounded-xl overflow-hidden relative aspect-video border border-foreground/10"
          >
            <Image
              src="/assets/meta-img.jpg"
              alt="Meta Image JPG"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          flex items-center justify-center transition-opacity"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 bg-iara-verde-accent text-iara-verde-base rounded-full 
                           font-display text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                meta-img.jpg
              </div>
            </div>
          </a>
        </div>
      </Section>
    </div>
  );
}
