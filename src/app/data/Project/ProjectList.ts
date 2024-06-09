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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/02499bc2-439e-49cd-9dfa-44282de73b9f'
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/02499bc2-439e-49cd-9dfa-44282de73b9f'
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/75e6aa86-6b7d-423a-9c1a-58d7e179d791'
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/7d19d880-4a02-4a00-8c92-534fd82612e3'
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/0f60d855-59cf-44ba-912b-9250b580d403'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 4,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/7d19d880-4a02-4a00-8c92-534fd82612e3'
            }],
        url: 'https://bikcraft.joaosbarbosa.com.br/',
    }, {
        id: 6,
        title: 'Itaqua Alerta',
        coverImage: 'project12.png',
        techCategory: 3,
        projectCategory: 3,
        description: 'Itaqua Alerta é um sistema web para denúncias e acompanhamento de ocorrências em bairros. Desenvolvido em PHP, JavaScript e Bootstrap, permite cadastro de denúncias com detalhes como título, categoria, localização, data e foto. Após o registro, um e-mail de confirmação é enviado ao usuário. Conta com sistema de login, recuperação de conta e validações de idade mínima (16 anos) e e-mail. O projeto foi desenvolvido no contexto de trabalho de extensão acadêmica do curso de Análise e Desenvolvimento de Sistemas.',
        technologies: [
            {
                id: 1,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/0f60d855-59cf-44ba-912b-9250b580d403'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/4bf94fae-d28f-4a17-b843-de697c8aee65'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 4,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/7d19d880-4a02-4a00-8c92-534fd82612e3'
            }],
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/0f60d855-59cf-44ba-912b-9250b580d403'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/4bf94fae-d28f-4a17-b843-de697c8aee65'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 4,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/7d19d880-4a02-4a00-8c92-534fd82612e3'
            }],
        url: 'https://barbosapizzas.netlify.app/',
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
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/0f60d855-59cf-44ba-912b-9250b580d403'
            },
            {
                id: 2,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/4bf94fae-d28f-4a17-b843-de697c8aee65'
            },
            {
                id: 3,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317'
            },
            {
                id: 4,
                tech: 'https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/7d19d880-4a02-4a00-8c92-534fd82612e3'
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
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/8676872d-a56b-44b3-9b64-38567ca77825"
            },
            {
                id: 2,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/2c7599b5-9e3d-4f65-8ff9-d0693f366317"
            },
            {
                id: 3,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/70d924d5-0fe3-4b45-96c1-452517ed9541"
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
                tech: "https://private-user-images.githubusercontent.com/87210017/337975005-1e501191-662a-40e9-9abd-beefdc03b90b.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDMyMjUsIm5iZiI6MTcxNzk0MjkyNSwicGF0aCI6Ii84NzIxMDAxNy8zMzc5NzUwMDUtMWU1MDExOTEtNjYyYS00MGU5LTlhYmQtYmVlZmRjMDNiOTBiLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MjIwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyY2NhOTk5YTY0ODUzMDAyMTQ1N2M2YjdkMzE4OTIzOGU2YjlmOWFmNjVmMDk1NTYzY2Q1ZmM4OGM5YWQwZWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.n1CaWkEBm8IxsR--Mvab6BpqimqYYYv0d-0QJh6LDGI"
            },
            {
                id: 2,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/c299aea5-aa8d-4195-9443-c5edcfe66911"
            },
            {
                id: 3,
                tech: "https://private-user-images.githubusercontent.com/87210017/337821308-70d924d5-0fe3-4b45-96c1-452517ed9541.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDM0MDQsIm5iZiI6MTcxNzk0MzEwNCwicGF0aCI6Ii84NzIxMDAxNy8zMzc4MjEzMDgtNzBkOTI0ZDUtMGZlMy00YjQ1LTk2YzEtNDUyNTE3ZWQ5NTQxLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MjUwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViYWIzNGE4ZjhjNTExYzE5OWI0ZmMwZWZhODg1M2Q3MjQzZjMzYzcwYTM2YTc5YTk2YjVjMmZlN2NkZGExMDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4P1XVlT_G79dsr1xZkxQ4r7pf_T-A4BJ9cq1j6RHA60"
            },
            {
                id: 4,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/8b48a1fe-7a44-4e51-b1f6-7e0db4543875"
            },
            {
                id: 5,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/753fb2b1-19db-404c-bbdf-345abf63fd98"
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
                tech: "https://private-user-images.githubusercontent.com/87210017/337975005-1e501191-662a-40e9-9abd-beefdc03b90b.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDMyMjUsIm5iZiI6MTcxNzk0MjkyNSwicGF0aCI6Ii84NzIxMDAxNy8zMzc5NzUwMDUtMWU1MDExOTEtNjYyYS00MGU5LTlhYmQtYmVlZmRjMDNiOTBiLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MjIwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyY2NhOTk5YTY0ODUzMDAyMTQ1N2M2YjdkMzE4OTIzOGU2YjlmOWFmNjVmMDk1NTYzY2Q1ZmM4OGM5YWQwZWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.n1CaWkEBm8IxsR--Mvab6BpqimqYYYv0d-0QJh6LDGI"
            },
            {
                id: 2,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/c299aea5-aa8d-4195-9443-c5edcfe66911"
            },
            {
                id: 3,
                tech: "https://private-user-images.githubusercontent.com/87210017/337821308-70d924d5-0fe3-4b45-96c1-452517ed9541.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDM0MDQsIm5iZiI6MTcxNzk0MzEwNCwicGF0aCI6Ii84NzIxMDAxNy8zMzc4MjEzMDgtNzBkOTI0ZDUtMGZlMy00YjQ1LTk2YzEtNDUyNTE3ZWQ5NTQxLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MjUwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViYWIzNGE4ZjhjNTExYzE5OWI0ZmMwZWZhODg1M2Q3MjQzZjMzYzcwYTM2YTc5YTk2YjVjMmZlN2NkZGExMDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4P1XVlT_G79dsr1xZkxQ4r7pf_T-A4BJ9cq1j6RHA60"
            },
            {
                id: 4,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/8b48a1fe-7a44-4e51-b1f6-7e0db4543875"
            },
            {
                id: 5,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/753fb2b1-19db-404c-bbdf-345abf63fd98"
            }
            ],
        url: 'https://byfanstore.com/',
    },
    {
        id: 12,
        title: 'Catalogo React-Spring',
        coverImage: 'catalog/wolf-store-example1.png',
        techCategory: 3,
        projectCategory: 1,
        imagesExample: [
            {id: 1, imageUrl: "/catalog/wolf-store-example1.png"},
            {id: 2, imageUrl: "/catalog/wolf-store-example2.png"},
            {id: 2, imageUrl: "/catalog/wolf-store-example3.png"},
        ],
        description: 'Sistema de catálogo de produtos, onde é possível cadastrar, visualizar, atualizar e deletar produtos e categorias. Foi desenvolvido utilizando Java com Spring Boot.',
        technologies: [
            {
                id: 1,
                tech: "https://private-user-images.githubusercontent.com/87210017/337825793-93887f5a-2a39-4d1b-842c-4d2c2f7d4ab2.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDM0ODMsIm5iZiI6MTcxNzk0MzE4MywicGF0aCI6Ii84NzIxMDAxNy8zMzc4MjU3OTMtOTM4ODdmNWEtMmEzOS00ZDFiLTg0MmMtNGQyYzJmN2Q0YWIyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MjYyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkNDcyYjFjZTUwN2QxOWM1ZTNjOWJiMzBkOWUwNjQyN2UyMGRjMzE1NzUwOTc3MGNiZjYzOWRiZDYxNDhkZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.byqlCROTHTmmDjJqi4WwU3yDmRRW7Fm9gYnrjYi1VgY"
            },
            {
                id: 2,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/3911d2da-c923-4de1-a828-463a74ca60b9"
            },
            {
                id: 3,
                tech: "https://github.com/JoaoSBarbosa/barbosa-codev2/assets/87210017/8676872d-a56b-44b3-9b64-38567ca77825"
            },
            {
                id: 4,
                tech: "https://private-user-images.githubusercontent.com/87210017/337826138-4bf94fae-d28f-4a17-b843-de697c8aee65.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDM3MDUsIm5iZiI6MTcxNzk0MzQwNSwicGF0aCI6Ii84NzIxMDAxNy8zMzc4MjYxMzgtNGJmOTRmYWUtZDI4Zi00YTE3LWI4NDMtZGU2OTdjOGFlZTY1LnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA5VDE0MzAwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEyZmZkOWU1N2QwMGRjNzhjMGY3NDExMWRhZDNkNDRlYzhkZTdjMDZhMDk5OTU3ZmQ0ZTU2NTAwY2ZjMzRiY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.UKDqbDTqjOtj4bmpNAn0_CoOORxDEDkq6xNCUoT33Rk"
            }

            ],
        url: 'https://github.com/JoaoSBarbosa/catalog-javaspring',
    },
];