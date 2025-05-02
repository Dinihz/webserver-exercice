import fastify, { FastifyRequest } from "fastify";

const app = fastify();
const port = 3000;

// Tipo de usuário
type User = {
  id: number;
  name: string;
  email: string;
}

// Lista de usuários
let users: User[] = [];

// GET /users - Listar todos os usuários
app.get('/users', async () => {
  return users;
});

// Interface para criação de usuário
interface CreateUserBody {
  name: string;
  email: string;
}

// POST /createUser - Criar novo usuário
app.post('/createUser', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
  const { name, email } = request.body;

  const newUser: User = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  reply.code(201);
  return newUser;
});

// GET /users/:id - Buscar usuário por ID
app.get('/users/:id', async (request, reply) => {
  const id = Number((request.params as { id: string }).id);
  const user = users.find(u => u.id === id);

  if (!user) {
    reply.code(404).send({ message: "Usuário não encontrado" });
    return;
  }

  return user;
});

// DELETE /users/:id - Deletar usuário por ID
app.delete('/users/:id', async (request, reply) => {
  const id = Number((request.params as { id: string }).id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    reply.code(404).send({ message: "Usuário não encontrado" });
    return;
  }

  const deletedUser = users.splice(index, 1)[0];
  return { message: "Usuário deletado", user: deletedUser };
});

// Iniciar o servidor
const start = async () => {
  try {
    await app.listen({ port });
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
