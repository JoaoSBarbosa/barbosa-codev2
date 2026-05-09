import type { Metadata } from "next";
import { ProjectsPage } from "@/sections/projects-page/projects-page";

export const metadata: Metadata = {
  title: "Projetos | Portfolio de Joao Barbosa",
  description:
    "Projetos, estudos e solucoes desenvolvidas por Joao Barbosa com frontend, backend e arquitetura de software.",
};

export default function Page() {
  return <ProjectsPage />;
}
