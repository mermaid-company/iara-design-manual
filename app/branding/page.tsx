"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Download } from "lucide-react";
import Image from "next/image";

// The main logo variations (v1 is the primary)
const mainLogos = [
  {
    name: "Logo Principal (Fundo Claro)",
    file: "iara-brand-v1-lightmode",
    darkBg: false,
    description: "Use em fundos claros/brancos",
  },
  {
    name: "Logo Principal (Fundo Escuro)",
    file: "iara-brand-v1-darkmode",
    darkBg: true,
    description: "Use em fundos escuros/verde IARA",
  },
];

// All logo variations for downloads
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
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Branding"
        description="Logotipos, ícones e diretrizes de uso da marca IARA. Todos os recursos visuais que você precisa para comunicar a identidade da marca."
      />

      {/* Logo Principal */}
      <Section
        title="Logotipo Principal"
        description="O logotipo IARA (v1) é a versão principal e deve ser utilizado como elemento principal de identificação da marca. Inclui o ícone com as ondas características e o nome IARA."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {mainLogos.map((logo) => (
            <div
              key={logo.file}
              className={`rounded-xl p-6 sm:p-12 flex flex-col items-center justify-center ${
                logo.darkBg
                  ? "bg-iara-verde-base"
                  : "bg-white border border-foreground/10"
              }`}
            >
              <Image
                src={`/assets/branding/${logo.file}.svg`}
                alt={logo.name}
                width={280}
                height={80}
                className="object-contain w-full max-w-[280px]"
              />
              <p
                className={`text-sm mt-6 ${
                  logo.darkBg ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {logo.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ícone / App Icon */}
      <Section
        title="Ícone do Aplicativo"
        description="O ícone com as ondas pode ser usado isoladamente em contextos onde o espaço é limitado ou a marca já está estabelecida (favicon, app icon, avatar)."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Fundo Claro - uses the original FAVICON with dark background */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center border border-foreground/10">
            <Image
              src="/assets/FAVICON.svg"
              alt="Ícone IARA"
              width={64}
              height={64}
              className="object-contain rounded-xl"
            />
            <span className="text-xs mt-4 text-muted-foreground">
              Fundo Claro
            </span>
          </div>
          {/* Fundo Escuro - white waves on dark background */}
          <div className="bg-iara-verde-base rounded-xl p-8 flex flex-col items-center justify-center">
            <Image
              src="/assets/FAVICON-light.svg"
              alt="Ícone IARA"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="text-xs mt-4 text-white/70">Fundo Escuro</span>
          </div>
          {/* Accent - uses the original FAVICON with dark background */}
          <div className="bg-iara-verde-accent rounded-xl p-8 flex flex-col items-center justify-center">
            <Image
              src="/assets/FAVICON.svg"
              alt="Ícone IARA"
              width={64}
              height={64}
              className="object-contain rounded-xl"
            />
            <span className="text-xs mt-4 text-iara-verde-base/70">Accent</span>
          </div>
          {/* Gradiente - white waves on gradient background */}
          <div className="bg-linear-to-br from-iara-verde-base to-iara-verde-escuro rounded-xl p-8 flex flex-col items-center justify-center">
            <Image
              src="/assets/FAVICON-light.svg"
              alt="Ícone IARA"
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="text-xs mt-4 text-white/70">Gradiente</span>
          </div>
        </div>
      </Section>

      {/* Área de Proteção */}
      <Section
        title="Área de Proteção"
        description="Mantenha sempre uma área de respiro ao redor do logotipo. A medida mínima é o equivalente à altura do ícone."
      >
        <div className="bg-muted rounded-xl p-8">
          <div className="border-2 border-dashed border-iara-verde-accent p-8 rounded-lg inline-block">
            <div className="bg-iara-verde-base rounded-lg p-8">
              <Image
                src="/assets/branding/iara-brand-v1-darkmode.svg"
                alt="Logo IARA"
                width={200}
                height={60}
                className="object-contain"
              />
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
            <div className="h-16 flex items-center justify-center mb-4 grayscale opacity-50">
              <Image
                src="/assets/branding/iara-brand-v1-lightmode.svg"
                alt="Não altere as cores"
                width={100}
                height={40}
                className="object-contain hue-rotate-180"
                style={{ filter: "hue-rotate(180deg) saturate(2)" }}
              />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              ❌ Não altere as cores
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6 text-center">
            <div className="h-16 flex items-center justify-center mb-4 scale-x-150">
              <Image
                src="/assets/branding/iara-brand-v1-lightmode.svg"
                alt="Não distorça"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              ❌ Não distorça
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6 text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/assets/branding/iara-brand-v1-lightmode.svg"
                alt="Não rotacione"
                width={100}
                height={40}
                className="object-contain rotate-45"
              />
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
        description="Baixe os arquivos do logotipo nos formatos disponíveis (SVG e PNG). A versão v1 é a principal."
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
