import {Projects} from "@/sections/projects/types/projects.type";
import {ProjectsSectionInfo} from "@/shared/types/projects-section-info.type";

export const projects: Projects[] = [
    {
        id: 1,
        title: "Bikcraft",
        description:
            "E-commerce fictício de bicicletas elétricas personalizadas com foco em responsividade, acessibilidade e experiência do usuário.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-bikcraft-cover1.png",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
        id: 2,
        title: "DevStore",
        description:
            "E-commerce moderno para desenvolvedores com foco em performance, componentização, animações fluidas e gerenciamento global de estado.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-devStore-cover1.png",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Zustand",
            "Zod",
            "Framer Motion",
            "Axios",
        ],
        githubUrl: "https://github.com/JoaoSBarbosa/DevStore-ui/",
        demoUrl: "https://barbosadevstore.vercel.app/",
    },
    {
        id: 3,
        title: "PlayCineJB",
        description:
            "Clone da Netflix com consumo da API TMDB, interface responsiva e exibição de filmes, séries, trailers e avaliações.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-playcine-cover1.png",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/JoaoSBarbosa/playcinejb",
        demoUrl: "https://playcinejb.vercel.app/",
    },
    {
        id: 4,
        title: "Beerfanstore",
        description:
            "E-commerce desenvolvido para a Ambev com foco em experiência de compra, performance, segurança e gerenciamento de produtos oficiais.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-beerfan-cover1.png",
        technologies: [
            "WordPress",
            "PHP",
            "JavaScript",
            "MySQL",
            "Elementor",
            "WPForms",
        ],
        demoUrl: "https://beerfanstore.com.br/",
    },
    {
        id: 5,
        title: "ByFanstore ",
        description:
            "Site institucional desenvolvido para fortalecer a presença digital da Fanstore com foco em apresentação profissional, experiência do usuário e navegação eficiente.",

        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-byfanstore-cover3.png",
        technologies: [
            "WordPress",
            "PHP",
            "JavaScript",
            "CSS",
            "Elementor",
        ], demoUrl: "https://byfanstore.com/",
    },
    {
        id: 6,
        title: "JBCatalog",
        description:
            "API REST de catálogo de produtos desenvolvida com Java e Spring Boot, incluindo CRUD completo, paginação, gerenciamento de categorias e integração com PostgreSQL.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/refs/heads/main/assets/projects/projeto-jbcatalog-cover1.png",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "PostgreSQL",
            "REST API",
            "JUnit",
        ],
        githubUrl: "https://github.com/JoaoSBarbosa/catalog-javaspring",
    },

    {
        id: 7,
        title: "Microserviço - Crédito & Cartões",
        description:
            "Arquitetura de microserviços para gestão de clientes, análise de crédito e emissão de cartões utilizando mensageria, gateway e descoberta de serviços.",
        image:
            "https://raw.githubusercontent.com/JoaoSBarbosa/barbosa-codev2-assets/main/assets/projects/projeto-microservices-cover1.png",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Cloud",
            "Spring Gateway",
            "RabbitMQ",
            "Docker",
            "Keycloak",
            "Eureka",
            "JPA",
            "Maven",
        ],
    },
];


export const projectsSectionInfo: ProjectsSectionInfo = {
    title: "Projetos em Destaque",
    description:
        "Uma seleção dos meus trabalhos mais recentes com foco em produto, interface e resultados mensuráveis.",
};
