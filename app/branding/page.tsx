import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { IaraLogo, IaraIcon, IaraFullLogo } from "@/components/IaraLogo";

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
          <div className="bg-gradient-to-br from-iara-verde-base to-iara-verde-escuro rounded-xl p-8 flex flex-col items-center justify-center">
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
        description="Baixe os arquivos do logotipo nos formatos disponíveis."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["SVG", "PNG", "PDF", "AI"].map((format) => (
            <a
              key={format}
              href={`/assets/logo-iara.${format.toLowerCase()}`}
              download
              className="block p-4 rounded-xl border border-foreground/10 hover:border-iara-verde-accent 
                         hover:bg-iara-verde-accent/10 transition-all text-center group"
            >
              <div className="font-display text-2xl font-bold text-iara-verde-base group-hover:text-iara-verde-accent">
                .{format}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Download</div>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
