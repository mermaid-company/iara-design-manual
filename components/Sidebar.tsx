"use client";

import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Toggle Button - Only show hamburger when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-iara-verde-base text-iara-branco shadow-lg hover:bg-iara-verde-escuro transition-colors"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-iara-verde-base text-iara-branco flex flex-col z-40
          transition-transform duration-300 ease-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Close Button - Inside sidebar */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Fechar menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

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
          {["Geral", "Identidade", "Design System", "Conteúdo"].map(
            (section) => {
              const items = navigation.filter(
                (item) => item.section === section
              );
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
            }
          )}
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
    </>
  );
}
