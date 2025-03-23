import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export const LeaveMessage = async (app: FastifyInstance) => {
  app.post(
    "/leaveMessage",
    async (request: FastifyRequest, reply: FastifyReply) => {
      
      
      const createMessageBody = z.object({
        text: z.string(),
        created_at: z.date().default(() => new Date()),
      });

      const { text, created_at } = createMessageBody.parse(request.body);

      const message = await prisma.mensagem.create({
        data: {
          text,
          created_at,
        },
      });

      return reply.status(201).send({ messageId: message.id });
    }
  );
};
