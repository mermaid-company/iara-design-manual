"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme storage utilities
const THEME_KEY = "iara-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return (localStorage.getItem(THEME_KEY) as Theme) || "light";
}

function setStoredTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

// Custom hook using useSyncExternalStore for SSR-safe theme management
let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot(): Theme {
  return getStoredTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Apply theme class on mount and changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = getStoredTheme() === "light" ? "dark" : "light";
    setStoredTheme(newTheme);
    emitChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
