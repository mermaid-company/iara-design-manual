"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { IaraLogo } from "./IaraLogo";

const navigation = [
  { name: "Início", href: "/", section: "Geral" },
  { name: "Branding", href: "/branding", section: "Identidade" },
  { name: "Helper Images", href: "/helper-images", section: "Identidade" },
  { name: "Tipografia", href: "/typography", section: "Design System" },
  { name: "Cores", href: "/colors", section: "Design System" },
  { name: "Ícones", href: "/icons", section: "Design System" },
  { name: "Espaçamento", href: "/spacing", section: "Design System" },
  { name: "Elementos", href: "/elements", section: "Design System" },
  { name: "Social Media", href: "/social-media", section: "Conteúdo" },
  { name: "Voz & Tom", href: "/voice-tone", section: "Conteúdo" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-iara-verde-base text-iara-branco flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="block">
          <IaraLogo className="w-32 h-auto" />
        </Link>
        <p className="text-xs mt-2 opacity-70 font-body">Brand Manual</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {/* Group navigation by section */}
        {["Geral", "Identidade", "Design System", "Conteúdo"].map((section) => {
          const items = navigation.filter((item) => item.section === section);
          return (
            <div key={section} className="mb-4">
              <h3 className="px-4 py-2 text-[10px] uppercase tracking-widest opacity-50 font-display">
                {section}
              </h3>
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`
                          block px-4 py-2 rounded-lg font-display text-sm uppercase tracking-wider
                          transition-all duration-300 ease-out
                          ${
                            isActive
                              ? "bg-iara-verde-accent text-iara-verde-base font-semibold"
                              : "hover:bg-white/10 hover:translate-x-1"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={toggleTheme}
          className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 
                     transition-colors duration-300 flex items-center justify-between
                     text-sm font-display uppercase tracking-wider"
        >
          <span>Tema</span>
          <span className="text-iara-verde-accent">
            {theme === "light" ? "☀️ Claro" : "🌙 Escuro"}
          </span>
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs opacity-50 text-center">
        <p>© 2024 IARA</p>
        <p>Mermaid Company</p>
        <p className="mt-2 font-mono text-[10px]">v1.0.0</p>
      </div>
    </aside>
  );
}
