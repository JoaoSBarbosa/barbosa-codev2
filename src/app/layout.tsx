import type {Metadata} from "next";
import type {ReactNode} from "react";
import {Providers} from "../shared/components/Providers";
import "../styles/index.css";

export const metadata: Metadata = {
    title: "Portfólio de João Barbosa",
    description:
        "Portfólio moderno e responsivo de João Barbosa. Desenvolvido com Next.js, TypeScript e Tailwind CSS.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body
            className="min-h-screen bg-background text-foreground antialiased"
            suppressHydrationWarning
        >
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
