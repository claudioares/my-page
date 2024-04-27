import { prisma } from "../db/prisma.config";
import { IMessegeClient, IMethodsOfMesseges } from "../interfaces/interfaces";

export class RepositorieMesseges implements IMethodsOfMesseges {
    async create(data: IMessegeClient): Promise<IMessegeClient> {

        const resultDataBase = await prisma.connectionClients.create({
            data:{
                name:data.name,
                email:data.email,
                messege:data.messege,
            }
        });
        
        return resultDataBase;
    };
    async getMesseges(): Promise<IMessegeClient | null> {

        const resultDataBase = await prisma.connectionClients.findMany();

        return resultDataBase as unknown as IMessegeClient;
        
    };
    async getMessegeId(_id: string): Promise<IMessegeClient | null> {

        const resultDataBase = await prisma.connectionClients.findUnique({
            where:{
                id:_id
            }
        });


        return resultDataBase;
    }
}