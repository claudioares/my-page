import  { FastifyInstance } from "fastify"
import { IMessegeClient } from "../interfaces/interfaces";
import { UsecaseMessegeClient } from "../usecase/usecase.messege.client";
import { sendNodeMailer } from "../services/nodeMailer";

interface IResultCaseType {
    id: string,
    name: string,
    email: string,
    messege: string,
    createdAt: Date
}

export async function CreteEvents (app: FastifyInstance) {

    app.post("/messegeclient", async (request, reply)=>{

        const data:IMessegeClient = request.body as IMessegeClient;

        try {
            const usecase = new UsecaseMessegeClient();
            const resultUseCase = await usecase.create(data);

            const {
                email, name
            } = resultUseCase as IResultCaseType


            const sendResult = sendNodeMailer(email, name);

            return reply.status(201).send({data:{resultUseCase}, email:sendResult});
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    })
}