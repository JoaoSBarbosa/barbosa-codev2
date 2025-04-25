import {ProjectType} from "@/app/types/Project/ProjectCardType";

export const ProjectList: ProjectType[] = [
    {
        id: 1,
        title: 'Portfólio versão 1',
        coverImage: 'project1.png',
        techCategory: 1,
        projectCategory: 1,
        description: 'Primeiro portfolio desenvolvido através.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            }],
        url: 'https://joaosbarbosa.github.io/portfolio-barbosa/',
    },
    {
        id: 2,
        title: 'Medic Land',
        coverImage: 'project2.png',
        techCategory: 1,
        projectCategory: 1,
        description: 'Projeto de um site de um hospital ficticio contendo páginas, feito com HTML, CSS e JavaScript. O intuioto do projeto é estudar o bom uso de flex box, eventos js, variaveis css, e responsividade .',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            }],
        url: 'https://medicland.netlify.app/',
    },
    {
        id: 3,
        title: 'Galeria de imagens',
        coverImage: 'project3.png',
        techCategory: 1,
        projectCategory: 1,
        description: 'Projeto de uma página de galerias de imagens feito com HTML, Sass. O intuioto do projeto é entender a funcionalidade e uso do Sass como Mixins, Nesting, Heranças entre outros, aplicando todos o seus conceitos para desenvolvver um layout responsivo e bonito.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },  {
                id: 3,
                tech: "/assets/icons/sass.svg"
            },
        ],
        url: 'https://galerias.netlify.app/',
    },
    {
        id: 4,
        title: 'Cyberdyne System',
        coverImage: 'project4.png',
        techCategory: 1,
        projectCategory: 1,
        description: ' Projete um site fictício totalmente responsivo. O intuioto do projeto é aprimorar as habilidade em desenvolver sites aplicando bons uso de variaveis, responsividade, reutilização de códigos e posicionamento de elementos. O site foi desenvolvido com HTML, CSSe JavaScript.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            }],
        url: 'https://cyberdynesystemv2.netlify.app/',
    },
    {
        id: 5,
        title: 'Bikcraft',
        coverImage: 'project10.png',
        techCategory: 1,
        projectCategory: 1,
        description: 'Bikcraft é um projeto de e-commerce fictício que oferece a venda de bicicletas elétricas personalizadas de alta qualidade, bem como opções de seguros para os compradores. O site foi desenvolvido com foco em proporcionar uma experiência responsiva e acessível em diferentes dispositivos. O objetivo principal foi aprimorar habilidades em design responsivo, organização de projetos, modularização de código e integração com serviços externos. A construção do site envolveu a utilização de tecnologias como HTML, PHP, CSS e JavaScript, garantindo uma estrutura sólida e interatividade aprimorada para os usuários.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/php.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            },

            {
                id: 3,
                tech: "/assets/icons/html.svg"
            }
        ],
        url: 'https://bikcraft.joaosbarbosa.com.br/',
    },
    {
        id: 6,
        title: 'Itaqua Alerta',
        coverImage: 'project12.png',
        techCategory: 3,
        projectCategory: 3,
        description: 'Itaqua Alerta é um sistema web para denúncias e acompanhamento de ocorrências em bairros. Desenvolvido em PHP, JavaScript e Bootstrap, permite cadastro de denúncias com detalhes como título, categoria, localização, data e foto. Após o registro, um e-mail de confirmação é enviado ao usuário. Conta com sistema de login, recuperação de conta e validações de idade mínima (16 anos) e e-mail. O projeto foi desenvolvido no contexto de trabalho de extensão acadêmica do curso de Análise e Desenvolvimento de Sistemas.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/php.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/bootstrap.svg"
            },
            {
                id: 5,
                tech: "/assets/icons/html.svg"
            }
        ],
        url: 'https://github.com/JoaoSBarbosa/itaquaalerta',
    },


    {
        id: 7,
        title: 'Sistema de pizzaria - Layout',
        coverImage: '/pizza/pizza-example2.png',
        techCategory: 1,
        projectCategory: 1,
        imagesExample: [
            {id: 1, imageUrl: "/pizza/pizza-example1.png"},
            {id: 2, imageUrl: "/pizza/pizza-example2.png"},
        ],
        description: 'Projeto front-end de um sistema de compra de pizzas desenvolvido com JavaScript, HTML e CSS, incluindo funcionalidades como adicionar pizzas ao carrinho, alterar a quantidade de pizzas antes e depois de adicionar ao carrinho, remover pizzas do carrinho, aplicar descontos e exibir valores total e parcial.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/css.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/html.svg"
            }
        ],        url: 'https://barbosapizzas.netlify.app/',
    },

    {
        id: 8,
        title: 'Sistema conversor de medidas',
        coverImage: '/converter/conversor-example1.png',
        techCategory: 1,
        projectCategory: 1,
        imagesExample: [
            {id: 1, imageUrl: "/converter/conversor-example1.png"},
            {id: 2, imageUrl: "/pizza/conversor-example2.png"},
        ],
        description: 'Projeto simples de um conversor de unidades de medidas desenvolvido com HTML, CSS e JavaScript. Ele permite que o usuário converta valores de uma medida para outra, selecionando as unidades de origem e destino.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/javascript.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/css.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/html.svg"
            }
        ],
        url: 'https://joaosbarbosa.github.io/unit-converter',
    },

    {
        id: 9,
        title: 'Playcinejb',
        coverImage: 'project11.png',
        techCategory: 1,
        projectCategory: 1,
        description: 'PlayCineJB é um clone do sistema de streaming Netflix, desenvolvido com React, HTML, CSS e JavaScript. O projeto consome a API do TMDB para exibir informações sobre filmes e séries. Totalmente responsivo, permite aos usuários explorar o catálogo de títulos, visualizar detalhes, trailers e avaliações. É uma aplicação web que simula a experiência de um serviço de streaming, visando aprimorar habilidades em consumo de APIs, componentização com React e desenvolvimento de interfaces responsivas.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/react.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/css.svg"
            },  {
                id: 3,
                tech: "/assets/icons/tailwindcss.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/javascript.svg"
            }],
        url: 'https://playcinejb-fg65ejzx6-joaosbarbosa.vercel.app/',
    },
    {
        id: 10,
        title: 'E-commerce Beerfanstore',
        coverImage: '/beerfan/job.jpg',
        techCategory: 3,
        projectCategory: 2,
        imagesExample: [
            {id: 1, imageUrl: "/converter/conversor-example1.png"},
            {id: 2, imageUrl: "/pizza/conversor-example2.png"},
        ],
        description: 'Projeto desenvolvido para o sofisticado sistema de e-commerce, Beerfanstore, especializado em produtos oficiais da Ambev. Implementamos um layout intuitivo e funcionalidades avançadas, utilizando tecnologias como PHP, JavaScript, MySQL, Wordpress, Elementor e WPForms. O projeto oferece uma experiência de compra online otimizada e segura para os clientes.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/wordpress.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/php.svg"
            },
            {
                id: 5,
                tech: "/assets/icons/mysql.svg"
            }
        ],
        url: 'https://beerfanstore.com.br/',
    },
    {
        id: 11,
        title: 'Byfanstore',
        coverImage: '/byfanstore/job2.jpg',
        techCategory: 3,
        projectCategory: 2,
        description: 'Projeto desenvolvido para o site institucional da empresa Fanstore, conhecido como Byfanstore, com o objetivo de aprimorar a experiência inicial dos clientes ao interagir com a empresa. Utilizamos uma combinação estratégica de tecnologias, bibliotecas e um sistema de gerenciamento de conteúdo (CMS), garantindo uma apresentação profissional e funcionalidades eficientes.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/wordpress.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/html.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/css.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/php.svg"
            },
            {
                id: 5,
                tech: "/assets/icons/mysql.svg"
            }
        ],
        url: 'https://byfanstore.com/',
    },
    {
        id: 12,
        title: 'Catalogo React-Spring',
        coverImage: 'catalog/wolf-store-example1.png',
        techCategory: 2,
        projectCategory: 1,
        imagesExample: [
            {id: 1, imageUrl: "/catalog/wolf-store-example1.png"},
            {id: 2, imageUrl: "/catalog/wolf-store-example2.png"},
            {id: 3, imageUrl: "/catalog/wolf-store-example3.png"},
        ],
        description: 'Sistema de catálogo de produtos, onde é possível cadastrar, visualizar, atualizar e deletar produtos e categorias. Foi desenvolvido utilizando Java com Spring Boot.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/java.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/spring.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/react.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/bootstrap.svg"
            }

        ],
        url: 'https://github.com/JoaoSBarbosa/catalog-javaspring',
    },
    {
        id: 13,
        title: 'Microserviço -Emissão de Cartão de Cŕedito',
        coverImage: '/ms/diagrama.png',
        techCategory: 2,
        projectCategory: 1,
        imagesExample: [
            {id: 1, imageUrl: "/ms/mensageria.png"},
        ],
        description: 'Projeto de uma aplicação baseado em microserviços projetada para ldiar com várias aspectos d egestão de clientes e serviços de créditro, incluimdo registros de clienets, emissão de cartões de credito, analsie de credito e gestão de credito. Desenvolvio com Spring CLoud,Spring Gateway, Docker, RabbMQ,KeyCloeak, Eureka Server e CLient, Spring Boot.',
        technologies: [
            {
                id: 1,
                tech: "/assets/icons/java.svg"
            },
            {
                id: 2,
                tech: "/assets/icons/spring.svg"
            },
            {
                id: 3,
                tech: "/assets/icons/spring-cloud.svg"
            },
            {
                id: 4,
                tech: "/assets/icons/rabbitmq.svg"
            },
            {
                id: 5,
                tech: "/assets/icons/maven.svg"
            },
            {
                id: 6,
                tech: "/assets/icons/keycloak.svg"
            },
            {
                id: 7,
                tech: "/assets/icons/docker.svg"
            }

        ],
        url: 'https://github.com/JoaoSBarbosa/spring-microservices-credit',
    },
];