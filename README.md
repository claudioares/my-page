# Meu Portfólio Pessoal de Desenvolvedor

Este é o repositório do meu portfólio pessoal de desenvolvedor, que também faz parte do Challenge do Portfólio - Formação Front-End ONE. Meu portfólio inclui uma página inicial e uma página de jogos.

## Página Inicial

Na página inicial, os visitantes podem encontrar informações sobre mim e meus projetos. Há também um botão "Saiba Mais" que leva os usuários a uma página sobre mim, onde conto um pouco da minha história, mostro alguns projetos, minha formação e disponibilizo um formulário de contato.

## Página de Jogos

A página de jogos apresenta alguns projetos de jogos que desenvolvi durante minha formação ao longo dos últimos 2 anos. Por enquanto, esses jogos ainda não possuem responsividade.

### Tecnologias Utilizadas

- React/Next.js
- TypeScript
- Tailwind CSS
- Material UI
- Notion API (para mostrar informações dinâmicas)
- Radix (para aprimorar componentes UI)
- Lucide React (para ícones)
- Zod

## Como Contribuir

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Como Rodar Localmente

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o projeto localmente usando `npm run dev`.

## Contato

Se quiser entrar em contato comigo, você pode preencher o formulário do meu portfólio. Você pode clicar no botão verde "Entre em contato", logo na parte de cima do site, ele o leva-ra para o formulário.

---

# my-page-API-contacts - API de Contatos

Esta é a API de Contatos que criei para armazenar mensagens de usuários da minha página pessoal. A API utiliza tecnologias como Prisma, MongoDB, Node.js, TypeScript, Fastify, Zod e Nodemailer.

## Funcionalidades

A API permite que os usuários enviem mensagens através de um formulário de contato na minha página pessoal. As mensagens são armazenadas em um banco de dados MongoDB para posterior visualização e resposta.

## Tecnologias Utilizadas

- Prisma: ORM para comunicação com o banco de dados MongoDB.
- MongoDB: Banco de dados NoSQL utilizado para armazenar as mensagens dos usuários.
- Node.js: Ambiente de execução JavaScript do lado do servidor.
- TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- Fastify: Framework web leve e eficiente para Node.js.
- Zod: Biblioteca de validação de esquemas para TypeScript.
- Nodemailer: Módulo Node.js para envio de e-mails.

## Como Rodar Localmente

1. Clone este repositório.
2. Instale as dependências utilizando `npm install`.
3. Configure as variáveis de ambiente necessárias, como as credenciais do banco de dados e do serviço de e-mail.
4. Execute o servidor localmente utilizando `npm start` ou `npm run dev` (se estiver utilizando um ambiente de desenvolvimento).

## Rotas da API

### POST /api/messageclient

Rota utilizada para criar uma nova mensagem de cliente. Esta rota espera um corpo JSON contendo os detalhes da mensagem.

Exemplo de corpo da requisição:
```json
{
  "name": "Nome do Cliente",
  "email": "cliente@example.com",
  "message": "Mensagem do cliente"
}
```
#### GET /api/messageclient
````Rota utilizada para obter todas as mensagens de clientes armazenadas no banco de dados.````

#### GET /api/messageclient/:id
````Rota utilizada para obter uma mensagem específica de cliente com base no ID fornecido.````

### Contribuindo
Se você deseja contribuir com melhorias ou correções para esta API, sinta-se à vontade para abrir uma issue ou enviar um pull request.
##### Nota: Esta API foi desenvolvida para uso pessoal na minha página e pode ser adaptada para outros projetos.




**Nota:** Este projeto foi desenvolvido como parte do Challenge do Portfólio - Formação Front-End ONE.
