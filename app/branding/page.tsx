"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { IaraLogo, IaraIcon, IaraFullLogo } from "@/components/IaraLogo";

import { Download } from "lucide-react";
import Image from "next/image";

const brandingAssets = [
  { name: "Logo v1 Light", file: "iara-brand-v1-lightmode", darkBg: false },
  { name: "Logo v1 Dark", file: "iara-brand-v1-darkmode", darkBg: true },
  { name: "Logo v2 Light", file: "iara-brand-v2-lightmode", darkBg: false },
  { name: "Logo v2 Dark", file: "iara-brand-v2-darkmode", darkBg: true },
  { name: "Logo v3 Light", file: "iara-brand-v3-lightmode", darkBg: false },
  { name: "Logo v3 Dark", file: "iara-brand-v3-darkmode", darkBg: true },
  { name: "Logo v4 Light", file: "iara-brand-v4-lightmode", darkBg: false },
  { name: "Logo v4 Dark", file: "iara-brand-v4-darkmode", darkBg: true },
  { name: "Logo v5 Light", file: "iara-brand-v5-lightmode", darkBg: false },
  { name: "Logo v5 Dark", file: "iara-brand-v5-darkmode", darkBg: true },
  { name: "Logo v6 Light", file: "iara-brand-v6-lightmode", darkBg: false },
  { name: "Logo v6 Dark", file: "iara-brand-v6-darkmode", darkBg: true },
  { name: "Logo v7 Light", file: "iara-brand-v7-lightmode", darkBg: false },
  { name: "Logo v7 Dark", file: "iara-brand-v7-darkmode", darkBg: true },
  { name: "Logo v8 Light", file: "iara-brand-v8-lightmode", darkBg: false },
  { name: "Logo v8 Dark", file: "iara-brand-v8-darkmode", darkBg: true },
  { name: "Logo v9 Light", file: "iara-brand-v9-lightmode", darkBg: false },
  { name: "Logo v9 Dark", file: "iara-brand-v9-darkmode", darkBg: true },
];

export default function BrandingPage() {
  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Branding"
        description="Logotipos, ícones e diretrizes de uso da marca IARA. Todos os recursos visuais que você precisa para comunicar a identidade da marca."
      />

      {/* Logo Principal */}
      <Section
        title="Logotipo Principal"
        description="O logotipo IARA deve ser utilizado como elemento principal de identificação da marca."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Light Background */}
          <div className="bg-iara-branco rounded-xl p-12 flex items-center justify-center border border-foreground/10">
            <IaraFullLogo className="w-64 h-auto text-iara-verde-base" />
          </div>
          {/* Dark Background */}
          <div className="bg-iara-verde-base rounded-xl p-12 flex items-center justify-center">
            <IaraFullLogo className="w-64 h-auto text-iara-branco" />
          </div>
        </div>
      </Section>

      {/* Ícone */}
      <Section
        title="Ícone"
        description="O ícone pode ser usado isoladamente em contextos onde o espaço é limitado ou a marca já está estabelecida."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-iara-branco rounded-xl p-8 flex flex-col items-center justify-center border border-foreground/10">
            <IaraIcon className="w-16 h-16" />
            <span className="text-xs mt-4 text-muted-foreground">
              Fundo Claro
            </span>
          </div>
          <div className="bg-iara-verde-base rounded-xl p-8 flex flex-col items-center justify-center">
            <IaraIcon className="w-16 h-16 text-iara-branco" />
            <span className="text-xs mt-4 text-iara-branco/70">
              Fundo Escuro
            </span>
          </div>
          <div className="bg-iara-verde-accent rounded-xl p-8 flex flex-col items-center justify-center">
            <IaraIcon className="w-16 h-16 text-iara-verde-base" />
            <span className="text-xs mt-4 text-iara-verde-base/70">Accent</span>
          </div>
          <div className="bg-linear-to-br from-iara-verde-base to-iara-verde-escuro rounded-xl p-8 flex flex-col items-center justify-center">
            <IaraIcon className="w-16 h-16 text-iara-branco" />
            <span className="text-xs mt-4 text-iara-branco/70">Gradiente</span>
          </div>
        </div>
      </Section>

      {/* Wordmark */}
      <Section
        title="Wordmark"
        description="A versão somente texto do logotipo para usos específicos."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-iara-branco rounded-xl p-12 flex items-center justify-center border border-foreground/10">
            <IaraLogo className="w-48 h-auto text-iara-verde-base" />
          </div>
          <div className="bg-iara-verde-base rounded-xl p-12 flex items-center justify-center">
            <IaraLogo className="w-48 h-auto text-iara-branco" />
          </div>
        </div>
      </Section>

      {/* Área de Proteção */}
      <Section
        title="Área de Proteção"
        description="Mantenha sempre uma área de respiro ao redor do logotipo. A medida mínima é o equivalente à altura do 'I' do logotipo."
      >
        <div className="bg-muted rounded-xl p-8">
          <div className="border-2 border-dashed border-iara-verde-accent p-8 rounded-lg inline-block">
            <div className="bg-iara-verde-base rounded-lg p-8">
              <IaraFullLogo className="w-48 h-auto text-iara-branco" />
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            A área tracejada representa a zona de proteção mínima.
          </p>
        </div>
      </Section>

      {/* Uso Incorreto */}
      <Section
        title="Uso Incorreto"
        description="Evite estes erros comuns ao aplicar o logotipo."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-muted rounded-xl p-6 text-center">
            <div className="opacity-50 grayscale mb-4">
              <IaraIcon className="w-16 h-16 mx-auto text-red-500" />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              ❌ Não altere as cores
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6 text-center">
            <div className="scale-x-150 mb-4">
              <IaraIcon className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              ❌ Não distorça
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6 text-center">
            <div className="rotate-45 mb-4">
              <IaraIcon className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              ❌ Não rotacione
            </p>
          </div>
        </div>
      </Section>

      {/* Downloads */}
      <Section
        title="Downloads"
        description="Baixe os arquivos do logotipo nos formatos disponíveis (SVG e PNG)."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandingAssets.map((asset) => (
            <div
              key={asset.file}
              className={`rounded-xl p-4 border ${
                asset.darkBg
                  ? "bg-iara-verde-base border-iara-verde-base"
                  : "bg-white border-foreground/10"
              }`}
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <Image
                  src={`/assets/branding/${asset.file}.svg`}
                  alt={asset.name}
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p
                className={`text-sm font-display mb-3 ${
                  asset.darkBg ? "text-white" : "text-foreground"
                }`}
              >
                {asset.name}
              </p>
              <div className="flex gap-2">
                <a
                  href={`/assets/branding/${asset.file}.svg`}
                  download
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg 
                             bg-iara-verde-accent text-iara-verde-base text-xs font-semibold
                             hover:bg-iara-verde-accent/80 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  SVG
                </a>
                <a
                  href={`/assets/branding/${asset.file}.png`}
                  download
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg 
                             bg-muted text-foreground text-xs font-semibold
                             hover:bg-muted/80 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  PNG
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
