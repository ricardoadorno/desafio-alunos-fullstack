# Desafio Gestão de Aluno Fullstack

## Descrição

Uma Api Restful para gerenciar alunos, com um front-end para visualização e interação com dos dados.

### Funcionalidade

1. Manter Alunos: Nome, Email, CPF

2. Manter Alunos: Filtrar alunos por nome, email ou cpf, retornando todos os alunos caso não seja informado nenhum filtro

3. Listar Alunos

4. Filtrar Alunos

5. Deletar Alunos

6. Editar Alunos

## Tecnologias Utilizadas

- Typescript
- Nest.js
- Prisma.js
- PostgreSQL
- Vue 3
- Tailwind + DaisyUI
- Cypress
- Storybook

## Como rodar o projeto (docker-compose)

1. Tenha o docker e docker-compose instalados na sua máquina.

2. Abra o terminal raiz do projeto, onde se encontra o arquivo `docker-compose.yml`

3. Então execute o comando:

   ```bash
   docker-compose run server \
      npx prisma migrate dev
      docker-compose up -d
   ```

4. Acesse o front-end em `http://localhost:5432/`

## Como rodar o projeto sem docker-compose

1. Tenha Node 20 e PostgreSQL 13 instalados na sua máquina.

2. Insira as variáveis de ambiente referentes ao banco no arquivo `.env` na pasta `server`, Exemplo:

   ```env
   DATABASE_URL="postgresql://<SEU_USUARIO>:<SUA_SENHA>@<HOST_POSTGRES>:5432/student_api_db"
   ```

3. Abra o terminal na pasta `server` e execute o comando:

   ```bash
   npm install
   ```

4. Então execute os seguintes comandos para sincronizar o banco de dados com o prisma:

   ```bash
    npx prisma generate

    npx prisma migrate dev
   ```

5. Agora você pode rodar o servidor com o comando:

   ```bash
    npm run start:dev
   ```

**O servidor estará rodando em `http://localhost:3000`**

6. Volte a raiz do projeto abra um terminal na pasta `client` e execute o comando:

   ```bash
    npm install
   ```

7. Então preecha o arquivo `.env` da pasta `client` com a url do servidor, Exemplo:

   ```env
   VITE_API_URL="http://localhost:3000/api"
   ```

**Obs: O prefixo `/api` é necessário para o front-end fazer as requisições para o servidor.**

-

8. Agora você pode rodar o front-end com o comando:

   ```bash
    npm run dev
   ```

9. Acesse o front-end em `http://localhost:5173`

## Como rodar os testes

Abra o terminal na pasta `client` e execute o comando:

```bash
 npm run test:e2e
```

**Obs1: O servidor deve estar rodando para os testes e2e funcionarem.**

**Obs2: Os testes e2e são feitos com o cypress, se você estiver rodando o projeto com docker-compose ou em ambiente linux será necessário instalar pacotes adicionais. Veja quais são no link a seguir: https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites **
