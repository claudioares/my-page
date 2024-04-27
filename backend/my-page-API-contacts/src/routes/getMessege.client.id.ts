import  { FastifyInstance } from "fastify"
import { ITypeIdParams } from "../interfaces/interfaces";
import { UsecaseMessegeClient } from "../usecase/usecase.messege.client";

export async function getMessegeId (app: FastifyInstance) {

    app.get("/messegeclient/id", async (request, reply)=>{

        const { id }:ITypeIdParams = request.query as ITypeIdParams;

        try {
            const usecase = new UsecaseMessegeClient();
            const resultUseCase = await usecase.getMessegeId(id);

            return reply.status(201).send({data:{resultUseCase}});
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    })
}