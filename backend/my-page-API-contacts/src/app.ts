import fastify, { FastifyInstance } from "fastify"
import { CreteEvents } from "./routes/create.messege.client";
import { GetMesseges } from "./routes/getMesseges.client";
import { getMessegeId } from "./routes/getMessege.client.id";
import cors from "@fastify/cors";
import { delMessegeId } from "./routes/del.messege.client";


export class App {
    private app: FastifyInstance;
    constructor() {
        this.app = fastify()
    }


    listen(){
        this.app.listen({
            host: '0.0.0.0',
            port: process.env.PORT ? Number(process.env.PORT) : 3333,
        }).then(()=>console.log("HTTP Server running..."));
    };

    register(){
        this.app.register(cors, {
            origin: "*",
            methods: ['POST', 'DELETE', 'GET']
        })
        this.app.register(CreteEvents);
        this.app.register(GetMesseges);
        this.app.register(getMessegeId);
        this.app.register(delMessegeId);
    }
}