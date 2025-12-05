"use client";

import { Sun, Moon } from "lucide-react";

interface ThemeCompareProps {
  lightContent: React.ReactNode;
  darkContent: React.ReactNode;
  className?: string;
}

export function ThemeCompare({
  lightContent,
  darkContent,
  className = "",
}: ThemeCompareProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {/* Light Theme */}
      <div className="rounded-xl overflow-hidden border border-gray-200">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
          <Sun className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-display text-gray-700">Tema Claro</span>
        </div>
        <div className="p-4 bg-[#F4F5F0] text-[#003312]">{lightContent}</div>
      </div>

      {/* Dark Theme */}
      <div className="rounded-xl overflow-hidden border border-gray-700">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
          <Moon className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-display text-gray-200">
            Tema Escuro
          </span>
        </div>
        <div className="p-4 bg-[#003312] text-[#F4F5F0]">{darkContent}</div>
      </div>
    </div>
  );
}
