import { FastifyInstance } from "fastify"
import { IMessegeClient } from "../interfaces/interfaces";
import { UsecaseMessegeClient } from "../usecase/usecase.messege.client";

export async function CreteEvents(app: FastifyInstance) {

    app.post("/messegeclient", async (request, reply) => {

        const data: IMessegeClient = request.body as IMessegeClient;

        try {
            const usecase = new UsecaseMessegeClient();
            const resultUseCase = await usecase.create(data);

            return reply.status(201).send({ data: { resultUseCase }});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    })
}