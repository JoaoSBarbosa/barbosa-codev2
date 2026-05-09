"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster richColors position="top-right" closeButton />
    </ThemeProvider>
  );
}
