"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-full bg-foreground/10 flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-11 h-11 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 flex items-center justify-center transition-colors relative overflow-hidden"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
