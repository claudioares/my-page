import  { FastifyInstance } from "fastify"
import { UsecaseMessegeClient } from "../usecase/usecase.messege.client";


export async function GetMesseges (app: FastifyInstance) {

    app.get("/messegeclient", async (_, reply)=>{

        try {
            const usecase = new UsecaseMessegeClient();
            const resultUseCase = await usecase.getMesseges();

            return reply.status(201).send({data:resultUseCase});
            
        } catch (error) {
            console.error('Error during event:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    })
}