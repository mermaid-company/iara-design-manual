import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

const displayWeights = [
  { name: "Light", weight: 300, className: "font-light" },
  { name: "Regular", weight: 400, className: "font-normal" },
  { name: "Medium", weight: 500, className: "font-medium" },
  { name: "SemiBold", weight: 600, className: "font-semibold" },
  { name: "Bold", weight: 700, className: "font-bold" },
  { name: "ExtraBold", weight: 800, className: "font-extrabold" },
];

const textSizes = [
  {
    name: "H1",
    size: "text-5xl md:text-7xl",
    example: "Título Principal",
    font: "display",
  },
  {
    name: "H2",
    size: "text-4xl md:text-5xl",
    example: "Subtítulo Grande",
    font: "display",
  },
  {
    name: "H3",
    size: "text-2xl md:text-3xl",
    example: "Título de Seção",
    font: "display",
  },
  {
    name: "H4",
    size: "text-xl md:text-2xl",
    example: "Subtítulo de Seção",
    font: "display",
  },
  {
    name: "Body Large",
    size: "text-lg",
    example: "Texto de corpo grande para destaques e introduções.",
    font: "body",
  },
  {
    name: "Body",
    size: "text-base",
    example:
      "Texto de corpo padrão para parágrafos e conteúdo geral da interface.",
    font: "body",
  },
  {
    name: "Small",
    size: "text-sm",
    example: "Texto pequeno para legendas e informações secundárias.",
    font: "body",
  },
  {
    name: "Caption",
    size: "text-xs",
    example: "TEXTO MUITO PEQUENO PARA LABELS E METADADOS",
    font: "body",
  },
];

export default function TypographyPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Tipografia"
        description="Sistema tipográfico da IARA usando as famílias Funnel Display para títulos e Nunito Sans para corpo de texto."
      />

      {/* Famílias Tipográficas */}
      <Section
        title="Famílias Tipográficas"
        description="Duas famílias complementares formam o sistema tipográfico."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Funnel Display */}
          <div className="p-4 sm:p-8 rounded-xl border border-foreground/10">
            <span className="text-xs text-iara-verde-accent font-semibold uppercase tracking-wider">
              Display
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-4">
              Funnel Display
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Utilizada para títulos, cabeçalhos e elementos de destaque.
              Transmite modernidade e sofisticação.
            </p>
            <div className="font-display text-lg sm:text-2xl tracking-wide break-all">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </div>
          </div>

          {/* Nunito Sans */}
          <div className="p-4 sm:p-8 rounded-xl border border-foreground/10">
            <span className="text-xs text-iara-verde-accent font-semibold uppercase tracking-wider">
              Body
            </span>
            <h3 className="font-body text-2xl sm:text-4xl font-bold mt-2 mb-4">
              Nunito Sans
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Utilizada para corpo de texto, parágrafos e elementos de
              interface. Oferece excelente legibilidade.
            </p>
            <div className="font-body text-lg sm:text-2xl break-all">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </div>
          </div>
        </div>
      </Section>

      {/* Pesos - Funnel Display */}
      <Section
        title="Pesos - Funnel Display"
        description="Variações de peso disponíveis para a fonte de display."
      >
        <div className="space-y-4">
          {displayWeights.map((weight) => (
            <div
              key={weight.name}
              className="flex items-center justify-between p-4 rounded-lg border border-foreground/10"
            >
              <span className={`font-display text-3xl ${weight.className}`}>
                Funnel Display {weight.name}
              </span>
              <code className="text-sm bg-muted px-3 py-1 rounded-full">
                font-weight: {weight.weight}
              </code>
            </div>
          ))}
        </div>
      </Section>

      {/* Hierarquia de Texto */}
      <Section
        title="Hierarquia de Texto"
        description="Escalas de tamanho para criar hierarquia visual clara."
      >
        <div className="space-y-8">
          {textSizes.map((item) => (
            <div
              key={item.name}
              className="pb-8 border-b border-foreground/10 last:border-0"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-semibold text-iara-verde-accent uppercase">
                  {item.name}
                </span>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {item.size}
                </code>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  font-{item.font}
                </code>
              </div>
              <p
                className={`${item.size} ${
                  item.font === "display"
                    ? "font-display font-semibold"
                    : "font-body"
                }`}
              >
                {item.example}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tokens CSS */}
      <Section
        title="Tokens CSS"
        description="Variáveis CSS para uso no código."
      >
        <div className="bg-muted rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">{`/* Fontes */
--font-display: "Funnel Display", system-ui, sans-serif;
--font-body: "Nunito Sans", system-ui, sans-serif;

/* Tamanhos Fluidos */
--f-h1: clamp(2.5rem, 0.5rem + 6.4vw, 7.5rem);
--f-span-hero: clamp(1.25rem, 1rem + 0.8vw, 1.875rem);
--f-pag: clamp(1rem, 0.805rem + 0.625vw, 1.313rem);
--f-titulo-plano: clamp(3.125rem, 2.841rem + 0.909vw, 3.75rem);
--f-btn01: clamp(1rem, 0.688rem + 1vw, 1.313rem);

/* Tailwind Classes */
.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }`}</pre>
        </div>
      </Section>

      {/* Boas Práticas */}
      <Section
        title="Boas Práticas"
        description="Diretrizes para uso correto da tipografia."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
            <h4 className="font-display font-semibold text-green-600 mb-4">
              ✓ Faça
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Use Funnel Display para títulos e CTAs</li>
              <li>• Use Nunito Sans para corpo de texto</li>
              <li>• Mantenha contraste adequado (4.5:1 mínimo)</li>
              <li>• Use hierarquia visual clara</li>
              <li>• Prefira tamanhos fluidos (clamp)</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
            <h4 className="font-display font-semibold text-red-600 mb-4">
              ✗ Evite
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Misturar muitos pesos diferentes</li>
              <li>• Usar texto menor que 12px</li>
              <li>• Longos blocos de texto em display</li>
              <li>• Texto todo em maiúsculas (exceto labels)</li>
              <li>• Espaçamento de linha muito apertado</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Downloads */}
      <Section title="Downloads" description="Baixe os arquivos das fontes.">
        <div className="flex flex-wrap gap-4">
          <a
            href="/fonts/FunnelDisplay.zip"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-iara-verde-base text-iara-branco 
                       rounded-full font-display font-semibold hover:bg-iara-verde-escuro transition-colors"
          >
            Funnel Display (.ttf)
          </a>
          <a
            href="/fonts/NunitoSans.zip"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 
                       rounded-full font-display font-semibold hover:border-iara-verde-accent transition-colors"
          >
            Nunito Sans (.ttf)
          </a>
        </div>
      </Section>
    </div>
  );
}
