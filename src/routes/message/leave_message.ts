import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const LeaveMessage = async (app: FastifyInstance) =>{
    app.get('/leaveMessage', (request: FastifyRequest, reply: FastifyReply) =>{
        return reply.status(202).send({
            id: 81293,
            text: "Primeira mensagem"
        })
    })
}