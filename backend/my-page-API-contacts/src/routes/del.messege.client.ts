import  { FastifyInstance } from "fastify"
import { ITypeIdParams } from "../interfaces/interfaces";
import { UsecaseMessegeClient } from "../usecase/usecase.messege.client";

export async function delMessegeId (app: FastifyInstance) {

    app.delete("/deletemessege/id", async (request, reply)=>{

        const { id }:ITypeIdParams = request.query as ITypeIdParams;

        try {
            const usecase = new UsecaseMessegeClient();
            const resultUseCase = await usecase.delMessege(id);

            return reply.status(201).send({messege:resultUseCase});
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    })
}