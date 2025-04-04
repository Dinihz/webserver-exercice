import fastify from "fastify";

const app = fastify()
const port = 3000;

type User = {
    id: number,
    name: string,
    email: string
}

const users: User[] = []

app.get('/users', async (request, reply) => {
   return users 
})

app.get('/createUser',  async (request, reply) => {
    return { message: 'Hello users' };
})

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