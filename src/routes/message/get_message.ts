import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../lib/prisma";


export const GetMessage = async(app: FastifyInstance) =>{
    app.get('/dashboard', async (request: FastifyRequest, reply: FastifyReply) => {
        const message = await prisma.mensagem.findMany();

        return reply.status(200).send(message);
    })
}