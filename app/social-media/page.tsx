"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SearchBar } from "@/components/SearchBar";
import { Download, ExternalLink, Instagram, Smartphone } from "lucide-react";

const socialTemplates = [
  {
    id: "ad-01",
    name: "Story Principal",
    file: "/assets/social-templates/ad-01-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-02",
    name: "Story Variação 2",
    file: "/assets/social-templates/ad-02-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-03",
    name: "Story Variação 3",
    file: "/assets/social-templates/ad-03-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-04",
    name: "Story Variação 4",
    file: "/assets/social-templates/ad-04-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-05",
    name: "Story Variação 5",
    file: "/assets/social-templates/ad-05-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-06",
    name: "Story Variação 6",
    file: "/assets/social-templates/ad-06-story-9x16.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-07",
    name: "Story Hero",
    file: "/assets/social-templates/ad-07-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-08",
    name: "Story Minimal",
    file: "/assets/social-templates/ad-08-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-09",
    name: "Story CTA",
    file: "/assets/social-templates/ad-09-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-10",
    name: "Story Benefícios",
    file: "/assets/social-templates/ad-10-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-11",
    name: "Story Features",
    file: "/assets/social-templates/ad-11-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-12",
    name: "Story Final",
    file: "/assets/social-templates/ad-12-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
  {
    id: "ad-13",
    name: "Story Testimonial",
    file: "/assets/social-templates/ad-13-story.png",
    format: "Story 9:16",
    category: "Instagram Stories",
    dimensions: "1080x1920",
  },
];

const platformFormats = [
  {
    platform: "Instagram Story",
    dimensions: "1080 x 1920px",
    ratio: "9:16",
    icon: Smartphone,
  },
  {
    platform: "Instagram Feed",
    dimensions: "1080 x 1080px",
    ratio: "1:1",
    icon: Instagram,
  },
  {
    platform: "Instagram Reels",
    dimensions: "1080 x 1920px",
    ratio: "9:16",
    icon: Smartphone,
  },
  {
    platform: "Facebook Feed",
    dimensions: "1200 x 630px",
    ratio: "1.91:1",
    icon: Instagram,
  },
  {
    platform: "LinkedIn Post",
    dimensions: "1200 x 627px",
    ratio: "1.91:1",
    icon: Instagram,
  },
  {
    platform: "TikTok",
    dimensions: "1080 x 1920px",
    ratio: "9:16",
    icon: Smartphone,
  },
];

const GOOGLE_DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/1QJgnt524aHTjm1dfcUzmOiqwus9TjOJu";

export default function SocialMediaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(socialTemplates.map((t) => t.category))];

  const filteredTemplates = socialTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Social Media"
        description="Templates e recursos para redes sociais. Modelos prontos para Instagram, TikTok, LinkedIn e outras plataformas."
      />

      {/* Quick Links */}
      <Section
        title="Recursos Externos"
        description="Acesse os materiais no Google Drive."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={GOOGLE_DRIVE_FOLDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-iara-verde-base text-iara-branco 
                       rounded-lg hover:bg-iara-verde-escuro transition-colors font-display"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Posts & Social Proof (Google Drive)</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Responsável:</strong> Pedro Martins (Social Media Manager)
        </p>
      </Section>

      {/* Format Reference */}
      <Section
        title="Formatos por Plataforma"
        description="Dimensões recomendadas para cada rede social."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {platformFormats.map((format) => (
            <div
              key={format.platform}
              className="p-4 bg-muted/30 rounded-xl border border-muted flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-iara-verde-base/10 rounded-lg flex items-center justify-center">
                <format.icon className="w-6 h-6 text-iara-verde-base" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm">
                  {format.platform}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {format.dimensions}
                </p>
                <p className="text-xs text-iara-verde-accent">{format.ratio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Templates Gallery */}
      <Section
        title="Templates Disponíveis"
        description="Clique para fazer download."
      >
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar
            placeholder="Buscar templates..."
            onSearch={setSearchQuery}
            className="flex-1"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-display transition-colors
                ${
                  !selectedCategory
                    ? "bg-iara-verde-base text-iara-branco"
                    : "bg-muted hover:bg-muted-foreground/20"
                }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-display transition-colors
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

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTemplates.map((template) => (
            <a
              key={template.id}
              href={template.file}
              download
              className="group relative aspect-9/16 bg-muted rounded-xl overflow-hidden 
                         border-2 border-transparent hover:border-iara-verde-accent transition-all"
            >
              <Image
                src={template.file}
                alt={template.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold truncate">
                    {template.name}
                  </p>
                  <p className="text-white/70 text-xs">{template.dimensions}</p>
                  <div className="flex items-center gap-1 mt-2 text-iara-verde-accent">
                    <Download className="w-3 h-3" />
                    <span className="text-xs">Download</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum template encontrado para &ldquo;{searchQuery}&rdquo;</p>
          </div>
        )}
      </Section>

      {/* Safe Area Guide */}
      <Section
        title="Áreas Seguras"
        description="Mantenha conteúdo importante dentro das zonas seguras."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-muted/30 rounded-xl">
            <h4 className="font-display font-semibold mb-4">
              Instagram Stories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Topo:</strong> 250px de margem (área do nome de
                usuário)
              </li>
              <li>
                • <strong>Base:</strong> 200px de margem (área de resposta)
              </li>
              <li>
                • <strong>Laterais:</strong> 40px de margem mínima
              </li>
            </ul>
          </div>
          <div className="p-6 bg-muted/30 rounded-xl">
            <h4 className="font-display font-semibold mb-4">TikTok/Reels</h4>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Direita:</strong> 100px de margem (ícones de
                interação)
              </li>
              <li>
                • <strong>Base:</strong> 150px de margem (descrição e áudio)
              </li>
              <li>
                • <strong>Centro:</strong> Área ideal para conteúdo principal
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
