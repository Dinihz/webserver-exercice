# Gerenciamento de Usuários

Este projeto é uma API simples desenvolvida com Fastify e TypeScript para criar, listar, buscar, editar e excluir usuários. O objetivo é reforçar conceitos de backend e manipulação de dados via API REST.

## 📌 Tecnologias Utilizadas
- **Fastify** - Framework rápido para Node.js
- **TypeScript** - Tipagem estática para um código mais seguro
- **Insomnia** - Para testar as requisições HTTP
- **Node.js** - Ambiente de execução JavaScript

## 🚀 Como Rodar o Projeto
### 1. Clonar o repositório
```bash
 git clone  https://github.com/Dinihz/webserver-exercice.git
```

### 2. Instalar as dependências
```bash
 npm install
```

### 3. Estrutura do projeto
```
/
│── src/
│   ├── index.ts (arquivo principal do servidor)
│── package.json
│── tsconfig.json
```

### 4. Rodar o servidor
```bash
 npx ts-node src/index.ts
```
O servidor será iniciado em `http://localhost:3000`

## 📌 Rotas da API

### 1️⃣ Listar todos os usuários
```http
GET /users
```

### 2️⃣ Criar um novo usuário
```http
POST /users
```
**Body (JSON):**
```json
{
  "name": "Lucas",
  "email": "lucas@email.com"
}
```

### 3️⃣ Buscar usuário por ID
```http
GET /users/:id
```

### 4️⃣ Editar usuário por ID
```http
PUT /users/:id
```
**Body (JSON):**
```json
{
  "name": "Lucas Diniz",
  "email": "lucasdiniz@email.com"
}
```

### 5️⃣ Excluir usuário por ID
```http
DELETE /users/:id
```

---

## 🛠 Melhorias Futuras
- [ ] Persistência dos dados com um banco de dados
- [ ] Autenticação e segurança


