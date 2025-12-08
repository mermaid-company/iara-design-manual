"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  ExternalLink,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Zap,
  Heart,
  Users,
  Target,
} from "lucide-react";

const GOOGLE_DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/1QJgnt524aHTjm1dfcUzmOiqwus9TjOJu";

const voiceAttributes = [
  {
    icon: Heart,
    title: "Acolhedora",
    description:
      "A IARA é amigável e acessível. Usamos linguagem que faz o cliente se sentir confortável e bem-vindo.",
    examples: ["Olá! Como posso ajudar você hoje?", "Que bom ter você aqui!"],
  },
  {
    icon: Zap,
    title: "Eficiente",
    description:
      "Respostas diretas e úteis. Valorizamos o tempo do cliente e vamos direto ao ponto.",
    examples: [
      "Aqui está o que você precisa:",
      "Em poucos passos você resolve isso.",
    ],
  },
  {
    icon: Users,
    title: "Próxima",
    description:
      "Falamos de pessoa para pessoa. Usamos 'você' e mantemos um tom conversacional.",
    examples: ["Você pode contar comigo.", "Vou te mostrar como funciona."],
  },
  {
    icon: Target,
    title: "Competente",
    description:
      "Transmitimos confiança e conhecimento sem ser arrogante ou técnico demais.",
    examples: [
      "Baseado nos seus dados, recomendo...",
      "Essa é a melhor opção para você.",
    ],
  },
];

const toneExamples = [
  {
    context: "Primeira interação",
    good: "Oi! Sou a IARA, sua assistente virtual. Estou aqui para ajudar você a vender mais e melhor. Por onde quer começar?",
    bad: "Bem-vindo ao sistema IARA. Por favor, selecione uma opção do menu para prosseguir.",
  },
  {
    context: "Confirmação de ação",
    good: "Perfeito! Já salvei suas alterações. Quer que eu faça mais alguma coisa?",
    bad: "Operação realizada com sucesso. Código de confirmação: #28394.",
  },
  {
    context: "Erro ou problema",
    good: "Ops, algo deu errado aqui. Mas calma, já estou trabalhando para resolver. Tenta novamente em alguns segundos?",
    bad: "Erro 500: Falha no servidor. Contate o suporte técnico.",
  },
  {
    context: "Sugestão de vendas",
    good: "Esse cliente parece interessado! Que tal enviar uma proposta personalizada? Posso montar uma para você.",
    bad: "Lead qualificado detectado. Iniciar sequência de follow-up automático.",
  },
];

const languageGuidelines = [
  {
    category: "Termos Preferidos",
    items: [
      { use: "você", avoid: "o senhor/a senhora" },
      { use: "ajudar", avoid: "auxiliar" },
      { use: "rápido", avoid: "de forma célere" },
      { use: "fácil", avoid: "intuitivo" },
      { use: "problema", avoid: "inconveniente" },
    ],
  },
  {
    category: "Formatação",
    items: [
      { use: "Frases curtas e diretas", avoid: "Parágrafos longos e densos" },
      { use: "Listas quando apropriado", avoid: "Blocos de texto contínuo" },
      { use: "Emojis com moderação 👋", avoid: "Excesso de emojis 🎉🚀💯" },
      { use: "Linguagem ativa", avoid: "Voz passiva" },
    ],
  },
];

const platforms = [
  {
    name: "WhatsApp",
    tone: "Mais informal e direto. Mensagens curtas. Uso de emojis moderado.",
    example:
      "Oi! 👋 Tudo bem? Vi que você tem interesse no nosso plano. Quer que eu te explique os benefícios?",
  },
  {
    name: "Instagram",
    tone: "Visual e engajador. Stories e Reels com energia. Hashtags brasileiras.",
    example:
      "Sua equipe de vendas vai pirar quando descobrir isso 🤯 #VendasComIA #Iara",
  },
  {
    name: "LinkedIn",
    tone: "Profissional mas humano. Foco em resultados e cases. Sem jargões corporativos.",
    example:
      "Automatizamos o follow-up de 3.000 leads em uma semana. O resultado? 47% mais conversões.",
  },
  {
    name: "Email",
    tone: "Claro e escaneável. Assunto direto. CTA único e visível.",
    example: "Assunto: Seus leads estão esfriando ❄️ – Aqui está como resolver",
  },
];

export default function VoiceTonePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Voz & Tom"
        description="Diretrizes de comunicação da IARA. Como a assistente virtual deve falar, escrever e se relacionar com os clientes."
      />

      {/* Resources */}
      <Section
        title="Recursos"
        description="Materiais e planejamento de conteúdo."
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
          <strong>Social Media Manager:</strong> Pedro Martins
        </p>
      </Section>

      {/* Voice Attributes */}
      <Section
        title="Atributos da Voz"
        description="A personalidade da IARA em palavras."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {voiceAttributes.map((attr) => (
            <div
              key={attr.title}
              className="p-6 bg-muted/30 rounded-xl border border-muted"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-iara-verde-accent rounded-lg flex items-center justify-center">
                  <attr.icon className="w-5 h-5 text-iara-verde-base" />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {attr.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {attr.description}
              </p>
              <div className="space-y-2">
                {attr.examples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 text-iara-verde-accent mt-0.5 shrink-0" />
                    <span className="text-sm italic">&ldquo;{ex}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tone Examples */}
      <Section
        title="Exemplos de Tom"
        description="Compare o jeito certo e errado de comunicar."
      >
        <div className="space-y-6">
          {toneExamples.map((example, i) => (
            <div
              key={i}
              className="rounded-xl border border-muted overflow-hidden"
            >
              <div className="px-4 py-3 bg-muted/50 font-display font-semibold text-sm">
                {example.context}
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-muted">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3 text-green-600 dark:text-green-400">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">
                      Fazer
                    </span>
                  </div>
                  <p className="text-sm">&ldquo;{example.good}&rdquo;</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase">
                      Evitar
                    </span>
                  </div>
                  <p className="text-sm">&ldquo;{example.bad}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Language Guidelines */}
      <Section
        title="Guia de Linguagem"
        description="Escolhas de palavras e formatação."
      >
        <div className="space-y-8">
          {languageGuidelines.map((guide) => (
            <div key={guide.category}>
              <h4 className="font-display font-semibold mb-4">
                {guide.category}
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-muted">
                      <th className="text-left py-2 px-4 text-sm text-green-600 dark:text-green-400">
                        <ThumbsUp className="w-4 h-4 inline mr-2" />
                        Preferir
                      </th>
                      <th className="text-left py-2 px-4 text-sm text-red-600 dark:text-red-400">
                        <ThumbsDown className="w-4 h-4 inline mr-2" />
                        Evitar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guide.items.map((item, i) => (
                      <tr key={i} className="border-b border-muted/50">
                        <td className="py-3 px-4 text-sm">{item.use}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {item.avoid}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform Specifics */}
      <Section
        title="Por Plataforma"
        description="Adaptações de tom para cada canal."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="p-6 bg-muted/30 rounded-xl">
              <h4 className="font-display font-semibold text-lg mb-2">
                {platform.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {platform.tone}
              </p>
              <div className="p-4 bg-background rounded-lg border border-muted">
                <p className="text-sm italic">
                  &ldquo;{platform.example}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Brazilian Market Specifics */}
      <Section
        title="Mercado Brasileiro"
        description="Adaptações culturais importantes."
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">🇧🇷 Linguagem</h4>
            <p className="text-sm">
              Sempre português brasileiro. Nunca PT-PT ou espanhol.
            </p>
          </div>
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">
              🤝 Relacionamento
            </h4>
            <p className="text-sm">
              Construa rapport primeiro. Brasileiros compram de quem gostam.
            </p>
          </div>
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">⚡ Velocidade</h4>
            <p className="text-sm">
              Respostas rápidas são esperadas, especialmente no WhatsApp.
            </p>
          </div>
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">😊 Tom</h4>
            <p className="text-sm">
              Mais casual e caloroso que em outros mercados.
            </p>
          </div>
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">📱 WhatsApp</h4>
            <p className="text-sm">
              Canal #1 para negócios. Use áudio quando apropriado.
            </p>
          </div>
          <div className="p-4 bg-iara-verde-accent/10 rounded-xl border border-iara-verde-accent/30">
            <h4 className="font-display font-semibold mb-2">🎵 Trends</h4>
            <p className="text-sm">
              Use referências culturais e música brasileira nos Reels.
            </p>
          </div>
        </div>
      </Section>

      {/* Content Pillars */}
      <Section
        title="Pilares de Conteúdo"
        description="Distribuição recomendada."
      >
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-display font-bold text-iara-verde-accent mb-2">
              30%
            </div>
            <h4 className="font-display font-semibold mb-1">Educação</h4>
            <p className="text-xs text-muted-foreground">
              Dicas, tutoriais, hacks
            </p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-display font-bold text-iara-verde-accent mb-2">
              30%
            </div>
            <h4 className="font-display font-semibold mb-1">Entretenimento</h4>
            <p className="text-xs text-muted-foreground">
              Memes, trends, bastidores
            </p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-display font-bold text-iara-verde-accent mb-2">
              30%
            </div>
            <h4 className="font-display font-semibold mb-1">Inspiração</h4>
            <p className="text-xs text-muted-foreground">
              Cases, histórias de sucesso
            </p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <div className="text-4xl font-display font-bold text-iara-verde-accent mb-2">
              10%
            </div>
            <h4 className="font-display font-semibold mb-1">Promoção</h4>
            <p className="text-xs text-muted-foreground">
              CTAs, ofertas, demos
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
