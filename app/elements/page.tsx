"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Elementos"
        description="Componentes de interface, botões, cards e outros elementos do sistema de design IARA."
      />

      {/* Botões */}
      <Section
        title="Botões"
        description="Estilos de botões para diferentes contextos e ações."
      >
        <div className="space-y-8">
          {/* Primary Buttons */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
              Primário
            </h4>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 bg-iara-verde-base text-iara-branco rounded-full font-display font-semibold 
                               hover:bg-iara-verde-escuro transition-colors duration-300"
              >
                Botão Primário
              </button>
              <button
                className="px-8 py-4 bg-iara-verde-accent text-iara-verde-base rounded-full font-display font-semibold 
                               hover:bg-iara-verde-accent-escuro transition-colors duration-300"
              >
                Botão Accent
              </button>
              <button
                className="px-8 py-4 bg-iara-verde-base text-iara-branco rounded-full font-display font-semibold 
                               opacity-50 cursor-not-allowed"
              >
                Desabilitado
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
              Secundário
            </h4>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 border-2 border-iara-verde-base text-iara-verde-base rounded-full font-display font-semibold 
                               hover:bg-iara-verde-base hover:text-iara-branco transition-colors duration-300"
              >
                Outline
              </button>
              <button
                className="px-8 py-4 border-2 border-iara-verde-accent text-iara-verde-accent rounded-full font-display font-semibold 
                               hover:bg-iara-verde-accent hover:text-iara-verde-base transition-colors duration-300"
              >
                Outline Accent
              </button>
              <button
                className="px-8 py-4 text-iara-verde-base rounded-full font-display font-semibold 
                               hover:bg-foreground/5 transition-colors duration-300"
              >
                Ghost
              </button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
              Tamanhos
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-4 py-2 bg-iara-verde-base text-iara-branco rounded-full font-display text-sm font-semibold">
                Small
              </button>
              <button className="px-6 py-3 bg-iara-verde-base text-iara-branco rounded-full font-display font-semibold">
                Medium
              </button>
              <button className="px-8 py-4 bg-iara-verde-base text-iara-branco rounded-full font-display text-lg font-semibold">
                Large
              </button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
              Com Ícones
            </h4>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-iara-verde-base text-iara-branco rounded-full font-display font-semibold">
                <span>→</span>
                Continuar
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-iara-verde-accent text-iara-verde-base rounded-full font-display font-semibold">
                <span>💬</span>
                Iniciar Chat
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 rounded-full font-display font-semibold">
                Download
                <span>↓</span>
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section
        title="Cards"
        description="Containers para agrupar informações relacionadas."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Card */}
          <div className="p-6 rounded-xl border border-foreground/10 hover:border-iara-verde-accent transition-colors">
            <h4 className="font-display font-semibold text-lg mb-2">
              Card Básico
            </h4>
            <p className="text-muted-foreground text-sm">
              Um card simples com borda sutil e efeito hover.
            </p>
          </div>

          {/* Elevated Card */}
          <div className="p-6 rounded-xl bg-muted shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-2">
              Card Elevado
            </h4>
            <p className="text-muted-foreground text-sm">
              Card com sombra para criar hierarquia visual.
            </p>
          </div>

          {/* Accent Card */}
          <div className="p-6 rounded-xl bg-iara-verde-base text-iara-branco">
            <h4 className="font-display font-semibold text-lg mb-2">
              Card Accent
            </h4>
            <p className="text-iara-branco/80 text-sm">
              Card com fundo colorido para destaque.
            </p>
          </div>

          {/* Interactive Card */}
          <div
            className="p-6 rounded-xl border border-foreground/10 cursor-pointer 
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-display font-semibold text-lg mb-2">
              Card Interativo
            </h4>
            <p className="text-muted-foreground text-sm">
              Card clicável com efeito de elevação no hover.
            </p>
          </div>

          {/* Feature Card */}
          <div className="p-6 rounded-xl border border-iara-verde-accent bg-iara-verde-accent/10">
            <span className="text-xs text-iara-verde-accent font-semibold uppercase tracking-wider">
              Destaque
            </span>
            <h4 className="font-display font-semibold text-lg mt-2 mb-2">
              Card Feature
            </h4>
            <p className="text-muted-foreground text-sm">
              Card com borda accent para destacar features.
            </p>
          </div>

          {/* Glass Card */}
          <div className="p-6 rounded-xl bg-foreground/5 backdrop-blur-sm border border-foreground/10">
            <h4 className="font-display font-semibold text-lg mb-2">
              Card Glass
            </h4>
            <p className="text-muted-foreground text-sm">
              Efeito de vidro com backdrop blur.
            </p>
          </div>
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Inputs" description="Campos de entrada e formulários.">
        <div className="max-w-md space-y-6">
          {/* Text Input */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Label do Campo
            </label>
            <input
              type="text"
              placeholder="Digite algo..."
              className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background
                       focus:border-iara-verde-accent focus:outline-none focus:ring-2 focus:ring-iara-verde-accent/20
                       transition-all"
            />
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-sm font-semibold mb-2">Busca</label>
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full px-4 py-3 pl-12 rounded-full border border-foreground/20 bg-background
                         focus:border-iara-verde-accent focus:outline-none focus:ring-2 focus:ring-iara-verde-accent/20
                         transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                🔍
              </span>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-semibold mb-2">Mensagem</label>
            <textarea
              placeholder="Escreva sua mensagem..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background
                       focus:border-iara-verde-accent focus:outline-none focus:ring-2 focus:ring-iara-verde-accent/20
                       transition-all resize-none"
            />
          </div>
        </div>
      </Section>

      {/* Badges & Tags */}
      <Section
        title="Badges & Tags"
        description="Elementos para categorização e status."
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-iara-verde-base text-iara-branco rounded-full text-sm font-semibold">
              Default
            </span>
            <span className="px-3 py-1 bg-iara-verde-accent text-iara-verde-base rounded-full text-sm font-semibold">
              Accent
            </span>
            <span className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-semibold">
              Muted
            </span>
            <span className="px-3 py-1 border border-foreground/20 rounded-full text-sm font-semibold">
              Outline
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm font-semibold">
              ✓ Sucesso
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 rounded-full text-sm font-semibold">
              ⚠ Aviso
            </span>
            <span className="px-3 py-1 bg-red-500/20 text-red-600 rounded-full text-sm font-semibold">
              ✗ Erro
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-sm font-semibold">
              ℹ Info
            </span>
          </div>
        </div>
      </Section>

      {/* Tabs */}
      <Section title="Tabs" description="Navegação entre seções de conteúdo.">
        <div>
          <div className="flex border-b border-foreground/10">
            {["Visão Geral", "Recursos", "Preços"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 font-display font-semibold text-sm transition-colors relative
                          ${
                            activeTab === index
                              ? "text-iara-verde-accent"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
              >
                {tab}
                {activeTab === index && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-iara-verde-accent" />
                )}
              </button>
            ))}
          </div>
          <div className="p-6 bg-muted rounded-b-xl">
            <p className="text-muted-foreground">
              Conteúdo da tab:{" "}
              <strong>
                {["Visão Geral", "Recursos", "Preços"][activeTab]}
              </strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Alerts */}
      <Section
        title="Alerts"
        description="Mensagens de feedback e notificações."
      >
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <div>
              <h4 className="font-semibold text-green-600">Sucesso</h4>
              <p className="text-sm text-green-600/80">
                Operação realizada com sucesso!
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
            <span className="text-blue-500">ℹ</span>
            <div>
              <h4 className="font-semibold text-blue-600">Informação</h4>
              <p className="text-sm text-blue-600/80">
                Uma informação importante para você.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3">
            <span className="text-yellow-500">⚠</span>
            <div>
              <h4 className="font-semibold text-yellow-600">Atenção</h4>
              <p className="text-sm text-yellow-600/80">
                Atenção! Verifique as informações.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
            <span className="text-red-500">✗</span>
            <div>
              <h4 className="font-semibold text-red-600">Erro</h4>
              <p className="text-sm text-red-600/80">
                Ocorreu um erro. Tente novamente.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Spacing & Radius */}
      <Section
        title="Espaçamentos & Bordas"
        description="Tokens de espaçamento e raio de borda."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Border Radius */}
          <div>
            <h4 className="font-display font-semibold mb-4">Border Radius</h4>
            <div className="space-y-3">
              {[
                { name: "Button", value: "100px", example: "rounded-full" },
                { name: "Card", value: "16px", example: "rounded-xl" },
                { name: "Large", value: "24px", example: "rounded-2xl" },
                { name: "Input", value: "12px", example: "rounded-xl" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 bg-iara-verde-base"
                    style={{ borderRadius: item.value }}
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <code className="text-xs text-muted-foreground">
                      {item.value}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              Espaçamentos Fluidos
            </h4>
            <div className="bg-muted rounded-xl p-4 font-mono text-sm">
              <pre>{`--pad-body: clamp(1rem, -1.125rem + 6.8vw, 3.125rem);
--pad-hero: clamp(1.875rem, -1.25rem + 10vw, 5rem);

/* Tailwind defaults também disponíveis */
p-4  = 1rem (16px)
p-6  = 1.5rem (24px)
p-8  = 2rem (32px)
p-12 = 3rem (48px)`}</pre>
            </div>
          </div>
        </div>
      </Section>

      {/* Transitions */}
      <Section
        title="Transições"
        description="Animações e efeitos de transição."
      >
        <div className="bg-muted rounded-xl p-6 font-mono text-sm">
          <pre>{`/* Variáveis de Transição */
--tr-time: 550ms;
--bezier: cubic-bezier(0.32, 0, 0.03, 0.99);

/* Classes Tailwind Recomendadas */
transition-colors duration-300
transition-all duration-300
transition-transform duration-300 ease-out`}</pre>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            className="px-6 py-3 bg-iara-verde-base text-iara-branco rounded-full font-semibold
                           transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Hover Scale
          </button>
          <button
            className="px-6 py-3 bg-iara-verde-accent text-iara-verde-base rounded-full font-semibold
                           transition-all duration-500 hover:bg-iara-verde-accent-escuro"
          >
            Color Transition
          </button>
          <button
            className="px-6 py-3 border-2 border-foreground/20 rounded-full font-semibold
                           transition-all duration-300 hover:translate-x-2"
          >
            Translate X →
          </button>
        </div>
      </Section>
    </div>
  );
}
