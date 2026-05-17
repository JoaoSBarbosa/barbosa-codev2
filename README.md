# Barbosa Code

Portfólio profissional de João Barbosa, desenvolvido com Next.js, TypeScript e Tailwind CSS.

O projeto apresenta trajetória profissional, experiências, competências técnicas, projetos, formação e um canal de contato integrado a uma API Node para envio de email.

## Stack

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Lucide React
- Sonner

## Funcionalidades

- Home responsiva com apresentação profissional.
- Seções de sobre, experiências, projetos, tecnologias e formação.
- Páginas internas para trajetória e projetos.
- Alternância entre tema claro e escuro.
- Formulário de contato com envio para API Node.
- Toasts para feedback de ações, incluindo envio de email.
- Header com logo e favicon configurado no App Router.

## Requisitos

- Node.js 20 ou superior.
- npm.

## Como Rodar

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

Se a porta 3000 estiver ocupada, o Next.js pode iniciar em outra porta disponível.

## Scripts

```bash
npm run dev
```

Inicia o servidor local de desenvolvimento.

```bash
npm run build
```

Gera a build de produção e valida TypeScript.

```bash
npm run start
```

Executa a aplicação em modo produção após a build.

## Estrutura

```text
src/app
```

Rotas e layouts do App Router.

```text
src/sections
```

Seções principais do portfólio.

```text
src/shared
```

Componentes, layout e utilitários compartilhados.

```text
src/styles
```

Estilos globais, tema e Tailwind.

```text
public/assets
```

Imagens e arquivos públicos usados pela interface.

## Contato

- LinkedIn: https://www.linkedin.com/in/devjbarbosa/
- GitHub: https://github.com/JoaoSBarbosa

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE).
