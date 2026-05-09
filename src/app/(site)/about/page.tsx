import type { Metadata } from "next";
import { AboutPage } from "@/sections/about-page/about-page";

export const metadata: Metadata = {
  title: "Sobre | Portfolio de Joao Barbosa",
  description:
    "Conheca a trajetoria profissional, formacao e estudos de Joao Barbosa como desenvolvedor fullstack.",
};

export default function Page() {
  return <AboutPage />;
}
