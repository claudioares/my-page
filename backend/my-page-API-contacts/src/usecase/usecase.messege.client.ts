import { IMessegeClient } from "../interfaces/interfaces";
import { RepositorieMesseges } from "../repositorie/repositorie";
import { z } from "zod";

export class UsecaseMessegeClient {
    private repositorie: RepositorieMesseges;
    constructor(){
        this.repositorie = new RepositorieMesseges()
    }


    async create(data:IMessegeClient){

        const dataMessegeSchema = z.object({
            input_name: z.string().min(4),
            input_email: z.string(),
            input_messege: z.string(),
        });

        const _data = dataMessegeSchema.parse(data);

        const _data_zod_refatory = {
            name: _data.input_name,
            email: _data.input_email,
            messege: _data.input_messege,
        };

        const resultRepositorie = await this.repositorie.create(_data_zod_refatory);


        return resultRepositorie;
    };

    async getMesseges () {
        const resultRepositorie = await this.repositorie.getMesseges();

        return resultRepositorie;
    }

    async getMessegeId (id:string) {

        if(!id){return "Incomplete parameters!"};


        const resultRepositorie = await this.repositorie.getMessegeId(id);

        return resultRepositorie;

    }
}